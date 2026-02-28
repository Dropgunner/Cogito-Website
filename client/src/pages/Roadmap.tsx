/**
 * Roadmap Page — Neural Cartography Design
 * Timeline of milestones from current capabilities to future cognitive partnership
 */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ROADMAP_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/fXgG4rKMeX6pWqjdHJr3wy/sandbox/qHb7ci2BDK89NOS8XPzQoN-img-5_1772055488000_na1fn_aGVyby1yb2FkbWFw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlhnRzRyS01lWDZwV3FqZEhKcjN3eS9zYW5kYm94L3FIYjdjaTJCREs4OU5PUzhYUHpRb04taW1nLTVfMTc3MjA1NTQ4ODAwMF9uYTFmbl9hR1Z5YnkxeWIyRmtiV0Z3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WT9ykN-KzA5MdJoRVx5jHGoWInqVu991OgEQfpdIDbjDhS75f2zGlTp8x8sSzAVygXA7QFO62fwNEti3EPKgBzll1P5oijjzhAuhiviWjiuflFKjm4By6xz~bafMI2UM1Kr~zhIMkjSkIt7MUMMVAwJo8T9oe3qI7EFqynq4xUkcq35SU3rhCvniWgHV7NeqhtZoJ3me60CIBhohWjtJ2y7XlQ3MCEyeriVEgS1XGbX5qaUV05N2RSG0JSD4qU-XXw9Jsz6rKBjzWDOLSF2TagEBGh3Ro8ELLD4LIalt5ZL4MXk6h93dS79ZxnOK0VGSnn9ms3dHTawVoDfWFt1X-g__";

type MilestoneStatus = "completed" | "in-progress" | "planned";

interface Milestone {
  id: string;
  phase: string;
  title: string;
  period: string;
  status: MilestoneStatus;
  description: string;
  deliverables: string[];
  color: string;
  borderColor: string;
  bgColor: string;
}

const milestones: Milestone[] = [
  {
    id: "m1", phase: "Phase 1", title: "Foundation", period: "Q3 2024 – Q4 2024", status: "completed",
    description: "Establish the theoretical framework and taxonomy of human-AI collaboration models. Conduct literature review and define the five paradigms.",
    deliverables: ["Collaboration model taxonomy (5 paradigms defined)", "Literature review of 40+ papers", "Initial website with research documentation", "Citation graph with cross-references"],
    color: "text-neural-cyan", borderColor: "border-neural-cyan/20", bgColor: "bg-neural-cyan/5",
  },
  {
    id: "m2", phase: "Phase 2", title: "Use Case Documentation", period: "Q1 2025 – Q2 2025", status: "completed",
    description: "Document real-world applications across six professional domains. Gather empirical evidence and develop detailed workflow walkthroughs.",
    deliverables: ["12+ detailed use case walkthroughs", "Domain-specific collaboration patterns", "Measured outcomes with citations", "Interactive use case explorer"],
    color: "text-neural-amber", borderColor: "border-neural-amber/20", bgColor: "bg-neural-amber/5",
  },
  {
    id: "m3", phase: "Phase 3", title: "Technical Architecture", period: "Q2 2025 – Q3 2025", status: "in-progress",
    description: "Design and document the system architecture for implementing collaboration models at production scale. Define API paradigms and infrastructure patterns.",
    deliverables: ["5-layer architecture specification", "API paradigm documentation", "Reference implementation guidelines", "Security and alignment framework"],
    color: "text-neural-violet", borderColor: "border-neural-violet/20", bgColor: "bg-neural-violet/5",
  },
  {
    id: "m4", phase: "Phase 4", title: "Open-Source Toolkit", period: "Q4 2025 – Q1 2026", status: "planned",
    description: "Release an open-source toolkit that enables developers to implement the collaboration models in their own applications. Includes SDKs, templates, and evaluation tools.",
    deliverables: ["Python/TypeScript SDK for collaboration patterns", "Template implementations for each model", "Evaluation framework for measuring collaboration quality", "Community contribution guidelines"],
    color: "text-neural-cyan", borderColor: "border-neural-cyan/20", bgColor: "bg-neural-cyan/5",
  },
  {
    id: "m5", phase: "Phase 5", title: "Empirical Validation", period: "Q1 2026 – Q3 2026", status: "planned",
    description: "Conduct controlled studies to validate the effectiveness of each collaboration model across different domains. Publish findings in peer-reviewed venues.",
    deliverables: ["Controlled study with 100+ participants", "Quantitative comparison of collaboration models", "Peer-reviewed publication", "Updated framework based on empirical findings"],
    color: "text-neural-amber", borderColor: "border-neural-amber/20", bgColor: "bg-neural-amber/5",
  },
  {
    id: "m6", phase: "Phase 6", title: "Cognitive Partnership Platform", period: "Q3 2026 – Q4 2026", status: "planned",
    description: "Build a reference platform that demonstrates all five collaboration models in an integrated environment, serving as both a research tool and practical application.",
    deliverables: ["Integrated platform with all 5 models", "Adaptive model selection based on task type", "User study infrastructure", "Public demo environment"],
    color: "text-neural-violet", borderColor: "border-neural-violet/20", bgColor: "bg-neural-violet/5",
  },
];

function StatusIcon({ status }: { status: MilestoneStatus }) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-green-400" />;
    case "in-progress":
      return <Clock className="w-5 h-5 text-neural-amber" />;
    case "planned":
      return <Circle className="w-5 h-5 text-muted-foreground" />;
  }
}

function StatusBadge({ status }: { status: MilestoneStatus }) {
  const styles = {
    completed: "bg-green-400/10 text-green-400 border-green-400/20",
    "in-progress": "bg-neural-amber/10 text-neural-amber border-neural-amber/20",
    planned: "bg-muted text-muted-foreground border-border",
  };
  return (
    <span className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${styles[status]}`}>
      {status === "in-progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function Roadmap() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={ROADMAP_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-amber mb-3 tracking-wider uppercase">
              Project Timeline
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Roadmap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The trajectory from theoretical framework to practical platform. Six phases 
              spanning from foundational research to a fully integrated cognitive partnership environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-neural-cyan z-10 mt-8" />

                  {/* Content card */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className={`p-8 rounded-2xl border ${milestone.borderColor} ${milestone.bgColor}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <StatusIcon status={milestone.status} />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-mono text-xs text-muted-foreground">{milestone.phase}</span>
                            <StatusBadge status={milestone.status} />
                          </div>
                          <h3 className="text-xl font-display font-bold mt-1">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground mb-3">{milestone.period}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{milestone.description}</p>
                      <div>
                        <p className="text-xs font-display font-semibold text-muted-foreground mb-2">Deliverables</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {milestone.deliverables.map((d) => (
                            <div key={d} className="flex gap-2 p-2 rounded-lg bg-background/50 border border-border">
                              <span className={`text-xs mt-0.5 shrink-0 ${milestone.color}`}>&#x2022;</span>
                              <span className="text-xs text-muted-foreground">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">Have questions about the project?</p>
          <Link href="/faq">
            <Button className="bg-neural-violet text-white hover:bg-neural-violet/90 font-display font-semibold gap-2">
              Read FAQ <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
