/**
 * Collaboration Models Page — Neural Cartography Design
 * Five distinct paradigms for human-AI partnership
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Lightbulb, Cpu, Users, Layers, Orbit, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const MODELS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/fXgG4rKMeX6pWqjdHJr3wy/sandbox/qHb7ci2BDK89NOS8XPzQoN-img-3_1772055503000_na1fn_aGVyby1jb2xsYWJvcmF0aW9uLW1vZGVscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlhnRzRyS01lWDZwV3FqZEhKcjN3eS9zYW5kYm94L3FIYjdjaTJCREs4OU5PUzhYUHpRb04taW1nLTNfMTc3MjA1NTUwMzAwMF9uYTFmbl9hR1Z5YnkxamIyeHNZV0p2Y21GMGFXOXVMVzF2WkdWc2N3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IfqTXVFan8qlo~lnYD~XBWUk~UZvn3GBJi27qaSP9sUUi-ObrlMZ6yxdWsRmQmncinDIZdjg4ATgfJIhS9yGlp-auFpWguS8woTathcPBtRddweh9VMW75PZowqZrMsxbBRJyUjJ86wbYoYHW8~qWfaM98FwGflbg2J8uTBX~~pDUC54TFvQAuE0B7xFOG~DiJUiFmMlAgZUtcFG-QWTvCCDK~xcpfd2wULWKgZd~FWP9UTkXCkX8YHO0pqTqHlNFWh9SEOEorYgH8CpcltB2qXwY5AMQind5nUlAGcOAMFpYvnI50JtRCDbX163bqSO1WZWifCdrf49RJ~L6cuxJA__";

interface Model {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  humanRole: string;
  aiRole: string;
  examples: string[];
  strengths: string[];
  limitations: string[];
  maturityLevel: number;
}

const models: Model[] = [
  {
    id: "augmentation",
    icon: Lightbulb,
    title: "Augmentation",
    subtitle: "AI enhances human capabilities",
    color: "text-neural-cyan",
    borderColor: "border-neural-cyan/30",
    bgColor: "bg-neural-cyan/5",
    description: "The augmentation model positions AI as a cognitive amplifier. The human retains full agency and decision-making authority while AI provides enhanced perception, faster information processing, and expanded working memory. This is the most mature and widely deployed model today.",
    humanRole: "Primary decision-maker, creative director, strategic thinker. The human sets goals, evaluates outputs, and maintains contextual awareness.",
    aiRole: "Information retriever, pattern detector, draft generator. AI handles repetitive cognitive tasks, surfaces relevant data, and produces initial outputs for human refinement.",
    examples: ["GitHub Copilot for code completion", "Grammarly for writing enhancement", "AI-powered diagnostic imaging in radiology", "Smart search and recommendation systems"],
    strengths: ["Low risk — human maintains full control", "Immediately deployable with current technology", "Clear accountability chain", "Enhances existing workflows without disruption"],
    limitations: ["Bottlenecked by human processing speed", "AI contributions limited to reactive suggestions", "Underutilizes AI's generative potential", "Can create over-reliance on AI suggestions"],
    maturityLevel: 5,
  },
  {
    id: "delegation",
    icon: Cpu,
    title: "Delegation",
    subtitle: "AI executes autonomous subtasks",
    color: "text-neural-amber",
    borderColor: "border-neural-amber/30",
    bgColor: "bg-neural-amber/5",
    description: "In the delegation model, the human defines objectives and constraints, then hands off entire subtasks to AI for autonomous execution. The human reviews outcomes rather than guiding each step. This model requires higher trust in AI capabilities and robust error-handling mechanisms.",
    humanRole: "Task architect, quality auditor, exception handler. The human decomposes problems, sets acceptance criteria, and intervenes only when AI encounters edge cases.",
    aiRole: "Autonomous executor, self-monitor, progress reporter. AI plans and executes multi-step tasks, monitors its own performance, and escalates uncertainties.",
    examples: ["Agentic AI systems (Manus, Devin)", "Automated CI/CD pipelines with AI code review", "AI-driven data pipeline construction", "Autonomous research literature surveys"],
    strengths: ["Scales human capacity significantly", "Frees humans for higher-order thinking", "Enables 24/7 task execution", "Reduces cognitive load on routine work"],
    limitations: ["Requires well-defined task boundaries", "Error propagation risk in multi-step tasks", "Accountability gaps in autonomous decisions", "Current AI struggles with novel edge cases"],
    maturityLevel: 3,
  },
  {
    id: "co-creation",
    icon: Users,
    title: "Co-Creation",
    subtitle: "Human and AI create together iteratively",
    color: "text-neural-violet",
    borderColor: "border-neural-violet/30",
    bgColor: "bg-neural-violet/5",
    description: "Co-creation represents a true partnership where human and AI contribute alternately to a shared creative process. Neither party's contribution is merely reactive — both actively shape the direction and substance of the work. This model is most powerful in creative and design domains.",
    humanRole: "Creative partner, aesthetic judge, meaning-maker. The human provides vision, emotional intelligence, and cultural context that grounds AI's generative capabilities.",
    aiRole: "Creative partner, variation generator, pattern synthesizer. AI offers unexpected combinations, explores vast possibility spaces, and maintains consistency across iterations.",
    examples: ["AI-assisted music composition (AIVA, Suno)", "Collaborative writing with LLMs", "AI-human architectural design", "Interactive game narrative development"],
    strengths: ["Produces genuinely novel outputs", "Combines human creativity with AI's breadth", "Iterative refinement improves quality", "Both parties learn from the interaction"],
    limitations: ["Difficult to attribute credit/ownership", "Requires sophisticated interaction design", "Quality depends heavily on prompt engineering", "Risk of homogenized aesthetic"],
    maturityLevel: 3,
  },
  {
    id: "integration",
    icon: Layers,
    title: "Integration",
    subtitle: "AI embedded in cognitive workflows",
    color: "text-neural-cyan",
    borderColor: "border-neural-cyan/30",
    bgColor: "bg-neural-cyan/5",
    description: "The integration model weaves AI capabilities directly into human cognitive workflows so seamlessly that the boundary between human and AI contribution becomes blurred. AI is not a separate tool but an extension of the human's cognitive apparatus, similar to how we've integrated calculators into mathematical thinking.",
    humanRole: "Cognitive orchestrator, meta-thinker, ethical guardian. The human operates at a higher level of abstraction, directing the combined human-AI cognitive system.",
    aiRole: "Cognitive extension, ambient intelligence, contextual adapter. AI anticipates needs, pre-processes information, and provides just-in-time cognitive support.",
    examples: ["IDE environments with deep AI integration", "AI-enhanced scientific laboratory workflows", "Smart operating rooms with real-time AI guidance", "AI-integrated project management systems"],
    strengths: ["Minimal context-switching overhead", "Natural feeling interaction", "Continuous learning from user behavior", "Multiplicative rather than additive benefit"],
    limitations: ["High implementation complexity", "Privacy concerns from deep behavioral monitoring", "Difficult to audit AI's influence on decisions", "Dependency risk if system fails"],
    maturityLevel: 2,
  },
  {
    id: "symbiosis",
    icon: Orbit,
    title: "Symbiosis",
    subtitle: "Emergent cognitive partnership",
    color: "text-neural-amber",
    borderColor: "border-neural-amber/30",
    bgColor: "bg-neural-amber/5",
    description: "Symbiosis represents the theoretical frontier: a cognitive partnership where human and AI form a unified cognitive system with emergent capabilities that neither possesses independently. This goes beyond integration to create a new form of intelligence — not human, not artificial, but hybrid.",
    humanRole: "Co-evolving partner, consciousness anchor, value alignment source. The human provides subjective experience, ethical reasoning, and the grounding that prevents AI drift.",
    aiRole: "Co-evolving partner, capability expander, knowledge synthesizer. AI continuously adapts to the human's cognitive patterns while expanding the partnership's collective intelligence.",
    examples: ["Brain-computer interfaces (Neuralink research)", "Hypothetical cognitive co-processors", "Advanced human-AI team cognition", "Future adaptive learning systems"],
    strengths: ["Theoretically unlimited cognitive expansion", "True emergence of novel capabilities", "Continuous mutual adaptation", "Potential to address previously intractable problems"],
    limitations: ["Largely theoretical at present", "Profound ethical and identity questions", "Technical barriers in neural interfaces", "Risk of cognitive dependency"],
    maturityLevel: 1,
  },
];

export default function CollaborationModels() {
  const [activeModel, setActiveModel] = useState<string>(models[0].id);
  const active = models.find((m) => m.id === activeModel)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={MODELS_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-cyan mb-3 tracking-wider uppercase">
              Five Paradigms
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Collaboration Models
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A taxonomy of human-AI partnership paradigms, ranging from simple augmentation 
              to theoretical cognitive symbiosis. Each model represents a distinct philosophy 
              of interaction with unique strengths and constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Model Selector + Detail */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Selector sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-2">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      activeModel === model.id
                        ? `${model.borderColor} ${model.bgColor}`
                        : "border-border hover:border-muted-foreground/20 hover:bg-secondary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <model.icon className={`w-5 h-5 ${activeModel === model.id ? model.color : "text-muted-foreground"}`} />
                      <div className="flex-1">
                        <p className={`font-display font-semibold text-sm ${activeModel === model.id ? "text-foreground" : "text-muted-foreground"}`}>
                          {model.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{model.subtitle}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeModel === model.id ? `${model.color} rotate-90` : "text-muted-foreground"}`} />
                    </div>
                    {/* Maturity bar */}
                    <div className="mt-3 flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full ${
                            level <= model.maturityLevel
                              ? activeModel === model.id
                                ? "bg-current " + model.color
                                : "bg-muted-foreground/40"
                              : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 font-mono">
                      Maturity: {model.maturityLevel}/5
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`p-8 rounded-2xl border ${active.borderColor} ${active.bgColor}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${active.bgColor} border ${active.borderColor} flex items-center justify-center`}>
                        <active.icon className={`w-6 h-6 ${active.color}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold">{active.title}</h2>
                        <p className="text-sm text-muted-foreground">{active.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {active.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="p-4 rounded-xl bg-background/50 border border-border">
                        <p className="font-display font-semibold text-sm text-neural-amber mb-2">Human Role</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{active.humanRole}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50 border border-border">
                        <p className="font-display font-semibold text-sm text-neural-cyan mb-2">AI Role</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{active.aiRole}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="font-display font-semibold text-sm mb-3">Real-World Examples</p>
                      <div className="flex flex-wrap gap-2">
                        {active.examples.map((ex) => (
                          <span key={ex} className="px-3 py-1.5 text-xs font-mono bg-background/50 border border-border rounded-lg text-muted-foreground">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-display font-semibold text-sm text-green-400 mb-3">Strengths</p>
                        <ul className="space-y-2">
                          {active.strengths.map((s) => (
                            <li key={s} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-green-400 mt-1 shrink-0">+</span> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm text-neural-amber mb-3">Limitations</p>
                        <ul className="space-y-2">
                          {active.limitations.map((l) => (
                            <li key={l} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-neural-amber mt-1 shrink-0">-</span> {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">See these models in action</p>
          <Link href="/use-cases">
            <Button className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2">
              Explore Use Cases <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
