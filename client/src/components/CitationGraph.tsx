/**
 * CitationGraph — Interactive D3.js Force-Directed Citation Network
 * Neural Cartography Design: nodes as "thought nodes", edges as "synaptic connections"
 *
 * Colors:
 *   neural-cyan: oklch(0.75 0.15 195) → #00d4aa approx → used for Software Dev, Healthcare
 *   neural-amber: oklch(0.78 0.15 75) → #d4a020 approx → used for Scientific Research, Education
 *   neural-violet: oklch(0.65 0.18 290) → #9b59b6 approx → used for Theoretical Foundation, Creative Work, Legal
 */
import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";

/* ───────────── Types ───────────── */

interface Citation {
  id: string;
  authors: string;
  year: number;
  title: string;
  venue: string;
  category: string;
  keyFinding: string;
  relevance: string;
  doi?: string;
}

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  category: string;
  year: number;
  authors: string;
  venue: string;
  keyFinding: string;
  relevance: string;
  doi?: string;
  radius: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  type: "same-category" | "cross-reference" | "theoretical";
  strength: number;
}

/* ───────────── Color Map ───────────── */

const CATEGORY_COLORS: Record<string, string> = {
  "Software Development": "#00d4aa",
  "Scientific Research": "#d4a020",
  Healthcare: "#00d4aa",
  Education: "#d4a020",
  "Creative Work": "#a855f7",
  "Legal Practice": "#a855f7",
  "Theoretical Foundation": "#a855f7",
};

const CATEGORY_GLOW: Record<string, string> = {
  "Software Development": "rgba(0,212,170,0.3)",
  "Scientific Research": "rgba(212,160,32,0.3)",
  Healthcare: "rgba(0,212,170,0.25)",
  Education: "rgba(212,160,32,0.25)",
  "Creative Work": "rgba(168,85,247,0.3)",
  "Legal Practice": "rgba(168,85,247,0.25)",
  "Theoretical Foundation": "rgba(168,85,247,0.35)",
};

/* ───────────── Build Graph Data ───────────── */

function buildGraph(citations: Citation[]): { nodes: GraphNode[]; links: GraphLink[] } {
  const nodes: GraphNode[] = citations.map((c) => ({
    id: c.id,
    label: c.title.length > 40 ? c.title.slice(0, 37) + "…" : c.title,
    category: c.category,
    year: c.year,
    authors: c.authors,
    venue: c.venue,
    keyFinding: c.keyFinding,
    relevance: c.relevance,
    doi: c.doi,
    radius: c.category === "Theoretical Foundation" ? 18 : 14,
  }));

  const links: GraphLink[] = [];

  // Same-category links
  const byCategory = new Map<string, string[]>();
  citations.forEach((c) => {
    const arr = byCategory.get(c.category) || [];
    arr.push(c.id);
    byCategory.set(c.category, arr);
  });
  byCategory.forEach((ids) => {
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        links.push({ source: ids[i], target: ids[j], type: "same-category", strength: 0.6 });
      }
    }
  });

  // Cross-reference links (thematic connections) — only add if both nodes exist
  const nodeIds = new Set(citations.map((c) => c.id));
  const crossRefs: [string, string, number][] = [
    ["c1", "c2", 0.8],   // Both Copilot/code-gen studies
    ["c5", "c6", 0.7],   // Both Topol healthcare AI
    ["c9", "c12", 0.9],  // Hutchins ↔ Clark & Chalmers (distributed/extended cognition)
    ["c3", "c4", 0.5],   // Both scientific discovery AI
    ["c9", "c10", 0.6],  // Hutchins ↔ Shneiderman (human-centered theory)
    ["c1", "c8", 0.4],   // Code gen ↔ narrative gen (co-creation)
    ["c5", "c10", 0.5],  // Topol ↔ Shneiderman (human-centered)
    ["c7", "c9", 0.4],   // ITS ↔ distributed cognition
    ["c12", "c10", 0.5], // Extended mind ↔ Human-centered AI
    ["c3", "c9", 0.3],   // AlphaFold ↔ distributed cognition
    ["c6", "c11", 0.3],  // Healthcare AI ↔ Legal AI (oversight themes)
    ["c2", "c7", 0.3],   // Productivity ↔ Education effectiveness
  ];
  crossRefs.forEach(([s, t, str]) => {
    if (nodeIds.has(s) && nodeIds.has(t)) {
      links.push({ source: s, target: t, type: "cross-reference", strength: str });
    }
  });

  // Theoretical foundation links to all — only if the theoretical node exists
  ["c9", "c10", "c12"].filter((id) => nodeIds.has(id)).forEach((theoId) => {
    citations.forEach((c) => {
      if (c.id !== theoId && c.category !== "Theoretical Foundation") {
        if (!links.some((l) => {
          const ls = typeof l.source === "string" ? l.source : l.source.id;
          const lt = typeof l.target === "string" ? l.target : l.target.id;
          return (ls === theoId && lt === c.id) || (ls === c.id && lt === theoId);
        })) {
          links.push({ source: theoId, target: c.id, type: "theoretical", strength: 0.15 });
        }
      }
    });
  });

  return { nodes, links };
}

/* ───────────── Component ───────────── */

interface CitationGraphProps {
  citations: Citation[];
}

export default function CitationGraph({ citations }: CitationGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });

  // Responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setDimensions({ width: w, height: Math.max(500, Math.min(700, w * 0.65)) });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDeselect = useCallback(() => setSelected(null), []);

  // D3 force simulation
  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height } = dimensions;
    const { nodes, links } = buildGraph(citations);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Defs: filters, gradients
    const defs = svg.append("defs");

    // Glow filter
    const glowFilter = defs.append("filter").attr("id", "glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
    glowFilter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    glowFilter.append("feMerge").selectAll("feMergeNode").data(["blur", "SourceGraphic"]).join("feMergeNode").attr("in", (d) => d);

    // Hover glow filter
    const hoverGlow = defs.append("filter").attr("id", "hover-glow").attr("x", "-80%").attr("y", "-80%").attr("width", "260%").attr("height", "260%");
    hoverGlow.append("feGaussianBlur").attr("stdDeviation", "8").attr("result", "blur");
    hoverGlow.append("feMerge").selectAll("feMergeNode").data(["blur", "SourceGraphic"]).join("feMergeNode").attr("in", (d) => d);

    // Background grid pattern
    const gridSize = 40;
    const gridPattern = defs.append("pattern").attr("id", "grid").attr("width", gridSize).attr("height", gridSize).attr("patternUnits", "userSpaceOnUse");
    gridPattern.append("circle").attr("cx", gridSize / 2).attr("cy", gridSize / 2).attr("r", 0.5).attr("fill", "rgba(0,212,170,0.08)");

    // Background
    svg.append("rect").attr("width", width).attr("height", height).attr("fill", "url(#grid)").attr("rx", 16);

    // Container group for zoom
    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => g.attr("transform", event.transform));
    svg.call(zoom);

    // Force simulation
    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force("link", d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(120).strength((d) => d.strength * 0.3))
      .force("charge", d3.forceManyBody().strength(-350))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide<GraphNode>().radius((d) => d.radius + 15))
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05));

    // Links
    const linkGroup = g.append("g").attr("class", "links");
    const link = linkGroup.selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d) => {
        if (d.type === "same-category") return "rgba(0,212,170,0.15)";
        if (d.type === "theoretical") return "rgba(168,85,247,0.1)";
        return "rgba(212,160,32,0.12)";
      })
      .attr("stroke-width", (d) => Math.max(0.5, d.strength * 2))
      .attr("stroke-dasharray", (d) => d.type === "theoretical" ? "4,4" : "none");

    // Node groups
    const nodeGroup = g.append("g").attr("class", "nodes");
    const node = nodeGroup.selectAll<SVGGElement, GraphNode>("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(
        d3.drag<SVGGElement, GraphNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Outer glow ring
    node.append("circle")
      .attr("r", (d) => d.radius + 4)
      .attr("fill", "none")
      .attr("stroke", (d) => CATEGORY_GLOW[d.category] || "rgba(100,100,100,0.2)")
      .attr("stroke-width", 2)
      .attr("filter", "url(#glow)")
      .attr("class", "glow-ring");

    // Node circle
    node.append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => {
        const color = CATEGORY_COLORS[d.category] || "#666";
        return color + "22";
      })
      .attr("stroke", (d) => CATEGORY_COLORS[d.category] || "#666")
      .attr("stroke-width", 2)
      .attr("class", "node-circle");

    // Year label inside node
    node.append("text")
      .text((d) => d.year.toString().slice(-2))
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "10px")
      .attr("font-family", "'JetBrains Mono', monospace")
      .attr("fill", (d) => CATEGORY_COLORS[d.category] || "#aaa")
      .attr("pointer-events", "none");

    // Truncated title label below node
    node.append("text")
      .text((d) => {
        const short = d.label.split(":")[0].trim();
        return short.length > 20 ? short.slice(0, 18) + "…" : short;
      })
      .attr("text-anchor", "middle")
      .attr("dy", (d) => d.radius + 14)
      .attr("font-size", "9px")
      .attr("font-family", "'Space Grotesk', sans-serif")
      .attr("fill", "rgba(255,255,255,0.5)")
      .attr("pointer-events", "none");

    // Hover & click interactions
    node
      .on("mouseover", function (_, d) {
        d3.select(this).select(".node-circle")
          .transition().duration(200)
          .attr("r", d.radius + 3)
          .attr("stroke-width", 3)
          .attr("filter", "url(#hover-glow)");

        d3.select(this).select(".glow-ring")
          .transition().duration(200)
          .attr("r", d.radius + 8)
          .attr("stroke-width", 3);

        // Highlight connected links
        link.transition().duration(200)
          .attr("stroke-opacity", (l) => {
            const ls = typeof l.source === "string" ? l.source : (l.source as GraphNode).id;
            const lt = typeof l.target === "string" ? l.target : (l.target as GraphNode).id;
            return ls === d.id || lt === d.id ? 1 : 0.15;
          })
          .attr("stroke-width", (l) => {
            const ls = typeof l.source === "string" ? l.source : (l.source as GraphNode).id;
            const lt = typeof l.target === "string" ? l.target : (l.target as GraphNode).id;
            return ls === d.id || lt === d.id ? Math.max(1.5, l.strength * 4) : Math.max(0.5, l.strength * 2);
          })
          .attr("stroke", (l) => {
            const ls = typeof l.source === "string" ? l.source : (l.source as GraphNode).id;
            const lt = typeof l.target === "string" ? l.target : (l.target as GraphNode).id;
            if (ls === d.id || lt === d.id) {
              if (l.type === "same-category") return "rgba(0,212,170,0.6)";
              if (l.type === "theoretical") return "rgba(168,85,247,0.5)";
              return "rgba(212,160,32,0.5)";
            }
            if (l.type === "same-category") return "rgba(0,212,170,0.08)";
            if (l.type === "theoretical") return "rgba(168,85,247,0.05)";
            return "rgba(212,160,32,0.06)";
          });

        // Dim non-connected nodes
        nodeGroup.selectAll<SVGGElement, GraphNode>("g")
          .transition().duration(200)
          .attr("opacity", (n) => {
            if (n.id === d.id) return 1;
            const connected = links.some((l) => {
              const ls = typeof l.source === "string" ? l.source : (l.source as GraphNode).id;
              const lt = typeof l.target === "string" ? l.target : (l.target as GraphNode).id;
              return (ls === d.id && lt === n.id) || (lt === d.id && ls === n.id);
            });
            return connected ? 1 : 0.2;
          });
      })
      .on("mouseout", function () {
        d3.select(this).select(".node-circle")
          .transition().duration(300)
          .attr("r", (d: any) => d.radius)
          .attr("stroke-width", 2)
          .attr("filter", "none");

        d3.select(this).select(".glow-ring")
          .transition().duration(300)
          .attr("r", (d: any) => d.radius + 4)
          .attr("stroke-width", 2);

        link.transition().duration(300)
          .attr("stroke-opacity", 1)
          .attr("stroke-width", (d) => Math.max(0.5, d.strength * 2))
          .attr("stroke", (d) => {
            if (d.type === "same-category") return "rgba(0,212,170,0.15)";
            if (d.type === "theoretical") return "rgba(168,85,247,0.1)";
            return "rgba(212,160,32,0.12)";
          });

        nodeGroup.selectAll("g").transition().duration(300).attr("opacity", 1);
      })
      .on("click", (_, d) => {
        setSelected(d);
      });

    // Tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as GraphNode).x!)
        .attr("y1", (d) => (d.source as GraphNode).y!)
        .attr("x2", (d) => (d.target as GraphNode).x!)
        .attr("y2", (d) => (d.target as GraphNode).y!);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    // Gentle pulse animation on glow rings
    function pulse() {
      nodeGroup.selectAll(".glow-ring")
        .transition()
        .duration(2000)
        .attr("stroke-opacity", 0.3)
        .transition()
        .duration(2000)
        .attr("stroke-opacity", 0.8)
        .on("end", pulse);
    }
    pulse();

    return () => {
      simulation.stop();
    };
  }, [citations, dimensions]);

  return (
    <div ref={containerRef} className="relative" data-testid="citation-graph">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 px-2">
        {[
          { color: "#00d4aa", label: "Software Dev / Healthcare", shape: "solid" },
          { color: "#d4a020", label: "Scientific Research / Education", shape: "solid" },
          { color: "#a855f7", label: "Theory / Creative / Legal", shape: "solid" },
          { color: "rgba(0,212,170,0.4)", label: "Same category", shape: "line" },
          { color: "rgba(212,160,32,0.4)", label: "Cross-reference", shape: "dashed" },
          { color: "rgba(168,85,247,0.3)", label: "Theoretical link", shape: "dotted" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
            {item.shape === "solid" ? (
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            ) : (
              <span
                className="w-6 h-0"
                style={{
                  borderTop: `2px ${item.shape === "dashed" ? "dashed" : item.shape === "dotted" ? "dotted" : "solid"} ${item.color}`,
                  display: "inline-block",
                }}
              />
            )}
            <span className="font-mono">{item.label}</span>
          </div>
        ))}
      </div>

      {/* SVG Canvas */}
      <div className="rounded-2xl border border-border overflow-hidden bg-neural-charcoal/50 relative">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="w-full h-auto"
          data-testid="citation-graph-svg"
        />

        {/* Interaction hint */}
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-muted-foreground/40 select-none">
          Drag nodes · Scroll to zoom · Click for details
        </div>
      </div>

      {/* Detail Panel */}
      {selected && (
        <div
          className="mt-4 p-6 rounded-xl border border-border bg-card animate-in fade-in slide-in-from-bottom-2 duration-300"
          data-testid="citation-detail-panel"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[selected.category] }}
                />
                <span className="text-xs font-mono text-muted-foreground">{selected.category}</span>
                <span className="text-xs font-mono text-muted-foreground">· {selected.year}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                {citations.find((c) => c.id === selected.id)?.title || selected.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{selected.authors}</p>
              <p className="text-xs font-mono text-muted-foreground">{selected.venue}</p>
            </div>
            <button
              onClick={handleDeselect}
              className="text-muted-foreground hover:text-foreground transition-colors text-lg leading-none"
              aria-label="Close detail panel"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-lg bg-background border border-border">
              <p className="text-xs font-display font-semibold text-neural-amber mb-1">Key Finding</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.keyFinding}</p>
            </div>
            <div className="p-3 rounded-lg bg-background border border-border">
              <p className="text-xs font-display font-semibold text-neural-cyan mb-1">Relevance to Cogito</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.relevance}</p>
            </div>
          </div>

          {selected.doi && (
            <div className="mt-3">
              <a
                href={`https://doi.org/${selected.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-neural-cyan hover:underline"
              >
                DOI: {selected.doi} ↗
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
