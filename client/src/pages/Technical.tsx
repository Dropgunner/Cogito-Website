/**
 * Technical Architecture Page — Neural Cartography Design
 * System design patterns, API paradigms, and infrastructure
 */
import { motion } from "framer-motion";
import { Server, Database, Shield, Workflow, Layers, Cpu, ArrowRight, Code } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const architectureLayers = [
  {
    icon: Layers,
    title: "Interaction Layer",
    color: "text-neural-cyan",
    borderColor: "border-neural-cyan/20",
    bgColor: "bg-neural-cyan/5",
    description: "The interface between human cognition and AI processing. This layer handles natural language understanding, context management, and multimodal input/output.",
    components: [
      { name: "Context Window Manager", desc: "Maintains conversation history and relevant context across interactions" },
      { name: "Intent Classifier", desc: "Determines whether user input requires augmentation, delegation, or co-creation" },
      { name: "Multimodal Router", desc: "Handles text, code, images, and structured data inputs" },
      { name: "Response Synthesizer", desc: "Combines AI outputs into coherent, contextually appropriate responses" },
    ],
    patterns: ["Streaming responses for real-time feedback", "Progressive disclosure of complex outputs", "Confidence-scored suggestions with explanation"],
  },
  {
    icon: Cpu,
    title: "Cognitive Engine",
    color: "text-neural-amber",
    borderColor: "border-neural-amber/20",
    bgColor: "bg-neural-amber/5",
    description: "The core AI processing pipeline that implements the five collaboration models. Each model has distinct orchestration patterns and resource allocation strategies.",
    components: [
      { name: "Model Router", desc: "Selects appropriate LLM/model based on task complexity and collaboration mode" },
      { name: "Task Decomposer", desc: "Breaks complex requests into subtasks for the Delegation model" },
      { name: "Co-Creation Engine", desc: "Manages iterative human-AI creative loops with version tracking" },
      { name: "Integration Adapter", desc: "Embeds AI capabilities into existing tool workflows seamlessly" },
    ],
    patterns: ["Chain-of-thought reasoning for complex tasks", "Multi-agent orchestration for delegation", "Retrieval-augmented generation for research tasks"],
  },
  {
    icon: Database,
    title: "Knowledge Layer",
    color: "text-neural-violet",
    borderColor: "border-neural-violet/20",
    bgColor: "bg-neural-violet/5",
    description: "Persistent storage and retrieval of knowledge, context, and learned patterns. This layer enables the system to build understanding over time.",
    components: [
      { name: "Vector Store", desc: "Semantic search over documents, code, and conversation history" },
      { name: "Knowledge Graph", desc: "Structured relationships between concepts, citations, and entities" },
      { name: "User Model", desc: "Adaptive profile of user preferences, expertise level, and interaction patterns" },
      { name: "Citation Index", desc: "Verified academic sources with relevance scoring and cross-references" },
    ],
    patterns: ["Hybrid search (semantic + keyword)", "Incremental knowledge graph updates", "Privacy-preserving user modeling"],
  },
  {
    icon: Shield,
    title: "Safety & Alignment Layer",
    color: "text-neural-cyan",
    borderColor: "border-neural-cyan/20",
    bgColor: "bg-neural-cyan/5",
    description: "Ensures AI behavior remains aligned with human values, organizational policies, and ethical guidelines across all collaboration models.",
    components: [
      { name: "Output Validator", desc: "Checks AI outputs against safety policies and factual accuracy" },
      { name: "Bias Monitor", desc: "Detects and mitigates systematic biases in AI suggestions" },
      { name: "Audit Logger", desc: "Records all AI decisions for accountability and review" },
      { name: "Human Override", desc: "Ensures humans can always override or correct AI behavior" },
    ],
    patterns: ["Constitutional AI principles", "Red-team testing pipelines", "Explainable AI for high-stakes decisions"],
  },
  {
    icon: Server,
    title: "Infrastructure Layer",
    color: "text-neural-amber",
    borderColor: "border-neural-amber/20",
    bgColor: "bg-neural-amber/5",
    description: "The compute, networking, and deployment infrastructure that makes the system reliable, scalable, and performant.",
    components: [
      { name: "Model Serving", desc: "GPU-optimized inference with auto-scaling and model versioning" },
      { name: "Edge Compute", desc: "Local processing for latency-sensitive interactions" },
      { name: "API Gateway", desc: "Rate limiting, authentication, and request routing" },
      { name: "Observability", desc: "Metrics, logging, and tracing across the full stack" },
    ],
    patterns: ["Blue-green deployments for zero-downtime updates", "Circuit breakers for graceful degradation", "Cost-optimized model routing (small → large)"],
  },
];

const apiParadigms = [
  {
    name: "Synchronous Request-Response",
    useCase: "Simple augmentation queries",
    example: "POST /api/v1/augment { prompt, context, model }",
    pros: "Simple, predictable, easy to debug",
    cons: "Blocking, poor for long-running tasks",
  },
  {
    name: "Server-Sent Events (SSE)",
    useCase: "Streaming AI responses",
    example: "GET /api/v1/stream?session_id=abc",
    pros: "Real-time feedback, good UX for generation",
    cons: "One-directional, reconnection complexity",
  },
  {
    name: "WebSocket Bidirectional",
    useCase: "Co-creation sessions",
    example: "ws://api/v1/collaborate",
    pros: "Full duplex, real-time collaboration",
    cons: "State management complexity, scaling challenges",
  },
  {
    name: "Async Task Queue",
    useCase: "Delegation model tasks",
    example: "POST /api/v1/delegate → { task_id } → GET /api/v1/tasks/{id}",
    pros: "Non-blocking, scalable, retry-friendly",
    cons: "Polling overhead, delayed feedback",
  },
];

export default function Technical() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-cyan mb-3 tracking-wider uppercase">
              System Design
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Technical Architecture
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The system design patterns, API paradigms, and infrastructure required to build 
              collaborative AI systems that implement the five partnership models at production scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="pb-20">
        <div className="container">
          <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Workflow className="w-5 h-5 text-neural-cyan" />
            Architecture Layers
          </h2>
          <div className="space-y-6">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${layer.borderColor} ${layer.bgColor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${layer.bgColor} border ${layer.borderColor} flex items-center justify-center`}>
                    <layer.icon className={`w-5 h-5 ${layer.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{layer.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">Layer {index + 1} of {architectureLayers.length}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{layer.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {layer.components.map((comp) => (
                    <div key={comp.name} className="p-3 rounded-lg bg-background/50 border border-border">
                      <p className="font-display font-semibold text-sm text-foreground">{comp.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{comp.desc}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-display font-semibold text-muted-foreground mb-2">Design Patterns</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.patterns.map((p) => (
                      <span key={p} className="px-3 py-1 text-xs font-mono bg-background/50 border border-border rounded-lg text-muted-foreground">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Paradigms */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Code className="w-5 h-5 text-neural-amber" />
            API Paradigms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiParadigms.map((api) => (
              <div key={api.name} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display font-semibold text-foreground mb-1">{api.name}</h3>
                <p className="text-xs text-neural-cyan font-mono mb-3">{api.useCase}</p>
                <div className="p-3 rounded-lg bg-background border border-border mb-4">
                  <code className="text-xs text-neural-amber font-mono">{api.example}</code>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-display font-semibold text-green-400 mb-1">Pros</p>
                    <p className="text-xs text-muted-foreground">{api.pros}</p>
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold text-neural-amber mb-1">Cons</p>
                    <p className="text-xs text-muted-foreground">{api.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">See where this technology is heading</p>
          <Link href="/roadmap">
            <Button className="bg-neural-amber text-neural-charcoal hover:bg-neural-amber/90 font-display font-semibold gap-2">
              View Roadmap <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
