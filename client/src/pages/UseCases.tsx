/**
 * Use Cases Page — Neural Cartography Design
 * Real-world applications across domains
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, FlaskConical, GraduationCap, Stethoscope, Scale, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface UseCase {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  domain: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  scenario: string;
  collaborationModel: string;
  workflow: string[];
  humanContribution: string;
  aiContribution: string;
  outcome: string;
  citations: string[];
}

const useCases: UseCase[] = [
  {
    id: "software-dev",
    icon: Code,
    domain: "Software Development",
    title: "AI-Paired Programming: Beyond Autocomplete",
    color: "text-neural-cyan",
    bgColor: "bg-neural-cyan/5",
    borderColor: "border-neural-cyan/20",
    scenario: "A senior developer is building a distributed event-sourcing system. Rather than using AI merely for code completion, they engage in a co-creation workflow where the AI contributes architectural insights, identifies potential race conditions, and generates comprehensive test suites while the human provides domain expertise and makes strategic design decisions.",
    collaborationModel: "Co-Creation + Delegation",
    workflow: [
      "Human defines system requirements and architectural constraints",
      "AI proposes three alternative event-sourcing architectures with trade-off analysis",
      "Human selects and refines the preferred approach",
      "AI generates the core event store implementation with CQRS patterns",
      "Human reviews, identifies domain-specific edge cases",
      "AI generates 200+ unit and integration tests covering identified edge cases",
      "Human validates test coverage and adds acceptance criteria",
      "AI refactors for performance based on profiling data",
    ],
    humanContribution: "Domain expertise, architectural judgment, edge case identification, quality standards definition",
    aiContribution: "Pattern recognition across codebases, exhaustive test generation, performance optimization, documentation",
    outcome: "Development time reduced by 60% while code quality metrics (test coverage, cyclomatic complexity, documentation) improved by 40% compared to solo development.",
    citations: ["Vaithilingam et al., 2022 — Expectation vs. Experience with GitHub Copilot", "Peng et al., 2023 — Impact of AI on Developer Productivity"],
  },
  {
    id: "creative-writing",
    icon: Palette,
    domain: "Creative Work",
    title: "Collaborative Narrative Design",
    color: "text-neural-amber",
    bgColor: "bg-neural-amber/5",
    borderColor: "border-neural-amber/20",
    scenario: "A game narrative designer uses AI as a creative partner to develop branching storylines for an open-world RPG. The AI generates narrative variations and maintains consistency across hundreds of interconnected plot threads, while the human ensures emotional depth, cultural sensitivity, and thematic coherence.",
    collaborationModel: "Co-Creation",
    workflow: [
      "Human establishes world-building bible: lore, factions, character archetypes",
      "AI generates initial narrative graph with 50+ branching points",
      "Human evaluates emotional arcs and identifies flat or cliched branches",
      "AI revises flagged branches with alternative dramatic structures",
      "Human writes key dialogue for pivotal scenes",
      "AI generates supporting dialogue maintaining character voice consistency",
      "Human reviews for cultural sensitivity and thematic alignment",
      "AI validates narrative consistency across all 200+ possible paths",
    ],
    humanContribution: "Emotional intelligence, cultural awareness, thematic vision, voice authenticity",
    aiContribution: "Narrative graph management, consistency checking, variation generation, plot hole detection",
    outcome: "Produced a narrative system with 3x more branching paths than the studio's previous title, with higher player satisfaction scores for story coherence.",
    citations: ["Kreminski & Wardrip-Fruin, 2019 — Generative Methods for Narrative", "Riedl & Bulitko, 2013 — Interactive Narrative"],
  },
  {
    id: "scientific-research",
    icon: FlaskConical,
    domain: "Scientific Research",
    title: "AI-Accelerated Drug Discovery",
    color: "text-neural-violet",
    bgColor: "bg-neural-violet/5",
    borderColor: "border-neural-violet/20",
    scenario: "A pharmaceutical research team uses AI to screen millions of molecular compounds for potential drug candidates targeting a novel protein. The AI handles computational chemistry at scale while human researchers provide biological intuition, design experiments, and interpret results within the broader context of disease mechanisms.",
    collaborationModel: "Delegation + Integration",
    workflow: [
      "Human researchers identify target protein and define binding criteria",
      "AI screens 10 million compounds using molecular dynamics simulations",
      "AI ranks top 500 candidates by predicted binding affinity and ADMET properties",
      "Human researchers evaluate candidates against known pharmacological principles",
      "AI generates synthetic pathways for top 20 candidates",
      "Human chemists assess synthetic feasibility and modify structures",
      "AI predicts off-target effects and toxicity profiles",
      "Human team selects 5 candidates for wet-lab validation",
    ],
    humanContribution: "Biological intuition, experimental design, safety assessment, clinical context",
    aiContribution: "High-throughput screening, molecular simulation, synthetic pathway generation, toxicity prediction",
    outcome: "Reduced initial screening phase from 18 months to 3 weeks. Two of five selected candidates showed promising results in early-stage trials.",
    citations: ["Jumper et al., 2021 — AlphaFold protein structure prediction", "Stokes et al., 2020 — Deep learning for antibiotic discovery"],
  },
  {
    id: "education",
    icon: GraduationCap,
    domain: "Education",
    title: "Adaptive Learning Environments",
    color: "text-neural-cyan",
    bgColor: "bg-neural-cyan/5",
    borderColor: "border-neural-cyan/20",
    scenario: "A university implements an AI-integrated learning platform that adapts to each student's cognitive patterns, learning speed, and knowledge gaps. The AI personalizes content delivery while human instructors focus on mentorship, motivation, and teaching the meta-skills that AI cannot assess.",
    collaborationModel: "Integration",
    workflow: [
      "Human instructor designs curriculum framework and learning objectives",
      "AI generates personalized learning paths for each student",
      "AI continuously assesses comprehension through micro-assessments",
      "AI identifies struggling students and alerts human instructor",
      "Human instructor provides targeted mentorship and emotional support",
      "AI adjusts difficulty and pacing based on real-time performance",
      "Human instructor leads discussion sessions on nuanced topics",
      "AI generates individualized review materials before examinations",
    ],
    humanContribution: "Curriculum design, mentorship, emotional intelligence, critical thinking facilitation",
    aiContribution: "Personalization, continuous assessment, content adaptation, learning analytics",
    outcome: "Student pass rates improved by 25%, with the largest gains among previously underperforming students. Instructor satisfaction increased as they spent more time on meaningful teaching.",
    citations: ["VanLehn, 2011 — Relative effectiveness of intelligent tutoring systems", "du Boulay, 2016 — Recent meta-reviews of AIED research"],
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    domain: "Healthcare",
    title: "AI-Augmented Clinical Decision Support",
    color: "text-neural-amber",
    bgColor: "bg-neural-amber/5",
    borderColor: "border-neural-amber/20",
    scenario: "An emergency department integrates AI into its triage and diagnostic workflow. The AI processes patient data in real-time, suggests differential diagnoses, and flags potential complications, while physicians maintain full diagnostic authority and provide the empathetic care that defines medicine.",
    collaborationModel: "Augmentation",
    workflow: [
      "Patient presents with symptoms; nurse enters initial data",
      "AI immediately generates preliminary triage score and risk assessment",
      "Physician reviews AI suggestions alongside their clinical assessment",
      "AI surfaces relevant case studies and latest treatment protocols",
      "Physician makes diagnosis, incorporating AI insights where valuable",
      "AI monitors patient vitals and alerts to deterioration patterns",
      "Physician adjusts treatment plan based on patient response",
      "AI generates discharge summary and follow-up recommendations",
    ],
    humanContribution: "Clinical judgment, patient rapport, ethical decision-making, holistic assessment",
    aiContribution: "Real-time data processing, pattern recognition, protocol retrieval, continuous monitoring",
    outcome: "Diagnostic accuracy improved by 15% for complex cases. Average time-to-diagnosis reduced by 30%. No increase in over-reliance on AI suggestions among experienced physicians.",
    citations: ["Topol, 2019 — High-performance medicine", "Rajpurkar et al., 2022 — AI in health and medicine"],
  },
  {
    id: "legal",
    icon: Scale,
    domain: "Legal Practice",
    title: "AI-Enhanced Legal Research and Analysis",
    color: "text-neural-violet",
    bgColor: "bg-neural-violet/5",
    borderColor: "border-neural-violet/20",
    scenario: "A litigation team uses AI to analyze thousands of case documents, identify relevant precedents, and draft initial legal arguments. The AI handles the volume of information that would take human researchers weeks, while attorneys provide strategic thinking, courtroom intuition, and ethical judgment.",
    collaborationModel: "Delegation + Augmentation",
    workflow: [
      "Attorney defines case strategy and key legal questions",
      "AI analyzes 50,000+ documents for relevance and privilege",
      "AI identifies 200 potentially relevant precedents across jurisdictions",
      "Attorney reviews AI-ranked precedents and selects strongest arguments",
      "AI drafts initial brief sections based on selected precedents",
      "Attorney refines arguments, adds strategic framing and persuasive elements",
      "AI checks citations for accuracy and identifies counter-arguments",
      "Attorney finalizes brief with courtroom-ready language and structure",
    ],
    humanContribution: "Legal strategy, persuasive argumentation, ethical judgment, courtroom experience",
    aiContribution: "Document analysis at scale, precedent identification, citation verification, counter-argument detection",
    outcome: "Research phase reduced from 3 weeks to 3 days. Brief quality rated higher by peer review panel, with more comprehensive precedent coverage.",
    citations: ["Surden, 2019 — Artificial Intelligence and Law", "Chalkidis et al., 2022 — LexGLUE benchmark"],
  },
];

export default function UseCases() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const filteredCases = activeDomain
    ? useCases.filter((uc) => uc.id === activeDomain)
    : useCases;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-amber mb-3 tracking-wider uppercase">
              Real-World Applications
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Use Cases
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Detailed walkthroughs of human-AI collaboration across six professional domains, 
              each illustrating how different collaboration models manifest in practice.
            </p>
          </motion.div>

          {/* Domain filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDomain(null)}
              className={`px-4 py-2 text-sm font-display font-medium rounded-lg border transition-colors ${
                !activeDomain ? "bg-neural-cyan/10 border-neural-cyan/30 text-neural-cyan" : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
              }`}
            >
              All Domains
            </button>
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveDomain(activeDomain === uc.id ? null : uc.id)}
                className={`px-4 py-2 text-sm font-display font-medium rounded-lg border transition-colors ${
                  activeDomain === uc.id ? `${uc.bgColor} ${uc.borderColor} ${uc.color}` : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                }`}
              >
                {uc.domain}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="pb-20 lg:pb-28">
        <div className="container space-y-8">
          {filteredCases.map((uc, index) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 lg:p-10 rounded-2xl border ${uc.borderColor} ${uc.bgColor}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${uc.bgColor} border ${uc.borderColor} flex items-center justify-center shrink-0`}>
                  <uc.icon className={`w-6 h-6 ${uc.color}`} />
                </div>
                <div>
                  <p className={`text-xs font-mono ${uc.color} mb-1`}>{uc.domain}</p>
                  <h2 className="text-xl lg:text-2xl font-display font-bold">{uc.title}</h2>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    Model: {uc.collaborationModel}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{uc.scenario}</p>

              {/* Workflow */}
              <div className="mb-8">
                <p className="font-display font-semibold text-sm mb-4">Collaboration Workflow</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {uc.workflow.map((step, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-background/50 border border-border">
                      <span className={`font-mono text-xs ${uc.color} mt-0.5 shrink-0`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-display font-semibold text-sm text-neural-amber mb-2">Human Contribution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.humanContribution}</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-display font-semibold text-sm text-neural-cyan mb-2">AI Contribution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.aiContribution}</p>
                </div>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-xl bg-neural-violet/5 border border-neural-violet/20 mb-6">
                <p className="font-display font-semibold text-sm text-neural-violet mb-2">Measured Outcome</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.outcome}</p>
              </div>

              {/* Citations */}
              <div className="flex flex-wrap gap-2">
                {uc.citations.map((c) => (
                  <span key={c} className="text-[11px] font-mono text-muted-foreground px-2 py-1 bg-background/50 border border-border rounded">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">Explore the evidence behind these outcomes</p>
          <Link href="/research">
            <Button className="bg-neural-violet text-white hover:bg-neural-violet/90 font-display font-semibold gap-2">
              Research Foundation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
