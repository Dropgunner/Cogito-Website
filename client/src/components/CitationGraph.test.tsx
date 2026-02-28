import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../test/test-utils";
import CitationGraph from "./CitationGraph";

// Mock citation data matching the Research page
const mockCitations = [
  { id: "c1", authors: "Vaithilingam, P., Zhang, T., & Glassman, E. L.", year: 2022, title: "Expectation vs. Experience: Evaluating the Usability of Code Generation Tools", venue: "CHI '22 Extended Abstracts", category: "Software Development", keyFinding: "Developers found AI code generation most useful for boilerplate tasks.", relevance: "Supports the Augmentation model.", doi: "10.1145/3491101.3519665" },
  { id: "c2", authors: "Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M.", year: 2023, title: "The Impact of AI on Developer Productivity", venue: "arXiv preprint", category: "Software Development", keyFinding: "Developers using Copilot completed tasks 55.8% faster.", relevance: "Quantifies the productivity impact of Augmentation.", doi: "10.48550/arXiv.2302.06590" },
  { id: "c3", authors: "Jumper, J., Evans, R., Pritzel, A., et al.", year: 2021, title: "Highly accurate protein structure prediction with AlphaFold", venue: "Nature, 596(7873)", category: "Scientific Research", keyFinding: "AlphaFold predicted protein structures with high accuracy.", relevance: "Demonstrates the Delegation model.", doi: "10.1038/s41586-021-03819-2" },
  { id: "c4", authors: "Stokes, J. M., Yang, K., et al.", year: 2020, title: "A Deep Learning Approach to Antibiotic Discovery", venue: "Cell, 180(4)", category: "Scientific Research", keyFinding: "AI identified a structurally novel antibiotic.", relevance: "Illustrates the Integration model.", doi: "10.1016/j.cell.2020.01.021" },
  { id: "c5", authors: "Topol, E. J.", year: 2019, title: "High-performance medicine", venue: "Nature Medicine, 25(1)", category: "Healthcare", keyFinding: "AI augmentation works best when enhancing clinical judgment.", relevance: "Foundational for the Augmentation model in healthcare.", doi: "10.1038/s41591-018-0300-7" },
  { id: "c6", authors: "Rajpurkar, P., Chen, E., et al.", year: 2022, title: "AI in health and medicine", venue: "Nature Medicine, 28(1)", category: "Healthcare", keyFinding: "Clinical AI systems perform best with human-AI collaboration.", relevance: "Empirical support for collaborative AI.", doi: "10.1038/s41591-021-01614-0" },
  { id: "c7", authors: "VanLehn, K.", year: 2011, title: "The Relative Effectiveness of Human Tutoring", venue: "Educational Psychologist, 46(4)", category: "Education", keyFinding: "ITS achieved effect sizes approaching human tutoring.", relevance: "Demonstrates Integration model effectiveness.", doi: "10.1080/00461520.2011.611369" },
  { id: "c8", authors: "Kreminski, M. & Wardrip-Fruin, N.", year: 2019, title: "Generative Methods for Textual Content in Games", venue: "Proceedings of FDG '19", category: "Creative Work", keyFinding: "Most effective systems combine AI generation with human curation.", relevance: "Direct evidence for the Co-Creation model.", doi: "10.1145/3337722.3341861" },
  { id: "c9", authors: "Hutchins, E.", year: 1995, title: "Cognition in the Wild", venue: "MIT Press", category: "Theoretical Foundation", keyFinding: "Cognition is distributed across individuals, artifacts, and environments.", relevance: "Theoretical foundation for Integration and Symbiosis models.", doi: "10.7551/mitpress/1881.001.0001" },
  { id: "c10", authors: "Shneiderman, B.", year: 2022, title: "Human-Centered AI", venue: "Oxford University Press", category: "Theoretical Foundation", keyFinding: "Effective AI should amplify human abilities.", relevance: "Philosophical framework supporting Augmentation.", doi: "10.1093/oso/9780192845290.001.0001" },
  { id: "c11", authors: "Surden, H.", year: 2019, title: "Artificial Intelligence and Law: An Overview", venue: "Georgia State University Law Review, 35(4)", category: "Legal Practice", keyFinding: "AI in legal practice is most effective for document review.", relevance: "Supports Delegation + Augmentation hybrid.", doi: "" },
  { id: "c12", authors: "Clark, A. & Chalmers, D.", year: 1998, title: "The Extended Mind", venue: "Analysis, 58(1)", category: "Theoretical Foundation", keyFinding: "Cognitive processes extend beyond the brain.", relevance: "Philosophical foundation for the Symbiosis model.", doi: "10.1093/analys/58.1.7" },
];

// Mock ResizeObserver and requestAnimationFrame for D3
beforeEach(() => {
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(900);
});

describe("CitationGraph Component", () => {
  describe("Rendering", () => {
    it("renders the graph container", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByTestId("citation-graph")).toBeInTheDocument();
    });

    it("renders the SVG element", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByTestId("citation-graph-svg")).toBeInTheDocument();
    });

    it("renders the SVG with correct dimensions", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      expect(svg.getAttribute("width")).toBe("900");
    });

    it("renders the interaction hint text", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText(/Drag nodes · Scroll to zoom · Click for details/)).toBeInTheDocument();
    });
  });

  describe("Legend", () => {
    it("renders the Software Dev / Healthcare legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Software Dev / Healthcare")).toBeInTheDocument();
    });

    it("renders the Scientific Research / Education legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Scientific Research / Education")).toBeInTheDocument();
    });

    it("renders the Theory / Creative / Legal legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Theory / Creative / Legal")).toBeInTheDocument();
    });

    it("renders the Same category legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Same category")).toBeInTheDocument();
    });

    it("renders the Cross-reference legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Cross-reference")).toBeInTheDocument();
    });

    it("renders the Theoretical link legend item", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.getByText("Theoretical link")).toBeInTheDocument();
    });

    it("renders 6 legend items total", () => {
      render(<CitationGraph citations={mockCitations} />);
      const legendItems = screen.getByTestId("citation-graph").querySelectorAll(".font-mono");
      // 6 legend labels
      expect(legendItems.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe("D3 Graph Elements", () => {
    it("creates SVG nodes group", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const nodesGroup = svg.querySelector(".nodes");
      expect(nodesGroup).toBeTruthy();
    });

    it("creates SVG links group", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const linksGroup = svg.querySelector(".links");
      expect(linksGroup).toBeTruthy();
    });

    it("creates 12 node groups (one per citation)", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const nodeGroups = svg.querySelectorAll(".nodes > g");
      expect(nodeGroups.length).toBe(12);
    });

    it("creates link lines between nodes", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const links = svg.querySelectorAll(".links > line");
      expect(links.length).toBeGreaterThan(0);
    });

    it("creates glow filter in defs", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const glowFilter = svg.querySelector("#glow");
      expect(glowFilter).toBeTruthy();
    });

    it("creates hover-glow filter in defs", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const hoverGlow = svg.querySelector("#hover-glow");
      expect(hoverGlow).toBeTruthy();
    });

    it("creates grid pattern in defs", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const grid = svg.querySelector("#grid");
      expect(grid).toBeTruthy();
    });

    it("each node has a circle element", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const circles = svg.querySelectorAll(".nodes > g > circle.node-circle");
      expect(circles.length).toBe(12);
    });

    it("each node has a glow ring", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const glowRings = svg.querySelectorAll(".nodes > g > circle.glow-ring");
      expect(glowRings.length).toBe(12);
    });

    it("each node has year text labels", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const texts = svg.querySelectorAll(".nodes > g > text");
      // Each node has 2 text elements: year + title
      expect(texts.length).toBe(24);
    });

    it("theoretical foundation nodes have larger radius (18)", () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const nodeCircles = svg.querySelectorAll(".nodes > g > circle.node-circle");
      const radii = Array.from(nodeCircles).map((c) => parseInt(c.getAttribute("r") || "0"));
      // 3 theoretical nodes with r=18, 9 others with r=14
      expect(radii.filter((r) => r === 18).length).toBe(3);
      expect(radii.filter((r) => r === 14).length).toBe(9);
    });
  });

  describe("Detail Panel", () => {
    it("does not show detail panel by default", () => {
      render(<CitationGraph citations={mockCitations} />);
      expect(screen.queryByTestId("citation-detail-panel")).not.toBeInTheDocument();
    });

    it("shows detail panel when a node is clicked", async () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const firstNode = svg.querySelector(".nodes > g");
      if (firstNode) {
        fireEvent.click(firstNode);
      }
      await waitFor(() => {
        expect(screen.getByTestId("citation-detail-panel")).toBeInTheDocument();
      });
    });

    it("detail panel shows Key Finding section", async () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const firstNode = svg.querySelector(".nodes > g");
      if (firstNode) fireEvent.click(firstNode);
      await waitFor(() => {
        const keyFindings = screen.getAllByText("Key Finding");
        expect(keyFindings.length).toBeGreaterThanOrEqual(1);
      });
    });

    it("detail panel shows Relevance to Cogito section", async () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const firstNode = svg.querySelector(".nodes > g");
      if (firstNode) fireEvent.click(firstNode);
      await waitFor(() => {
        const relevance = screen.getAllByText("Relevance to Cogito");
        expect(relevance.length).toBeGreaterThanOrEqual(1);
      });
    });

    it("detail panel has close button", async () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const firstNode = svg.querySelector(".nodes > g");
      if (firstNode) fireEvent.click(firstNode);
      await waitFor(() => {
        expect(screen.getByLabelText("Close detail panel")).toBeInTheDocument();
      });
    });

    it("closes detail panel when close button is clicked", async () => {
      render(<CitationGraph citations={mockCitations} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const firstNode = svg.querySelector(".nodes > g");
      if (firstNode) fireEvent.click(firstNode);
      await waitFor(() => {
        expect(screen.getByTestId("citation-detail-panel")).toBeInTheDocument();
      });
      fireEvent.click(screen.getByLabelText("Close detail panel"));
      await waitFor(() => {
        expect(screen.queryByTestId("citation-detail-panel")).not.toBeInTheDocument();
      });
    });
  });

  describe("Edge Cases", () => {
    it("renders with empty citations array", () => {
      render(<CitationGraph citations={[]} />);
      expect(screen.getByTestId("citation-graph")).toBeInTheDocument();
      expect(screen.getByTestId("citation-graph-svg")).toBeInTheDocument();
    });

    it("renders with single citation", () => {
      render(<CitationGraph citations={[mockCitations[0]]} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const nodeGroups = svg.querySelectorAll(".nodes > g");
      expect(nodeGroups.length).toBe(1);
    });

    it("renders with two citations from same category", () => {
      render(<CitationGraph citations={[mockCitations[0], mockCitations[1]]} />);
      const svg = screen.getByTestId("citation-graph-svg");
      const nodeGroups = svg.querySelectorAll(".nodes > g");
      expect(nodeGroups.length).toBe(2);
      // Should have at least one link (same category)
      const links = svg.querySelectorAll(".links > line");
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });
});
