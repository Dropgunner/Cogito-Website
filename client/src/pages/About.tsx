/**
 * About / Philosophy Page — Cartesian Framework
 * Explores the philosophical foundation: "Codex cogitat, ergo sum?"
 * From Descartes' cogito to the AI inversion
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Brain, Lightbulb, Cpu, RefreshCw, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const stagger = {
  container: { transition: { staggerChildren: 0.12 } },
  item: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

const sections = [
  {
    id: "cogito",
    icon: Brain,
    label: "The Origin",
    title: "I think, therefore I am",
    subtitle: "Cogito, ergo sum",
    color: "neural-cyan",
    content: `Thinking guarantees the existence of the thinker. René Descartes used radical doubt — systematically questioning everything that could possibly be false — and discovered that the very act of thinking cannot itself be doubted. Even to doubt is to think, and to think is to exist. This became the foundational certainty upon which all other knowledge could be rebuilt.`,
    quote: {
      text: "Dubito, ergo cogito, ergo sum.",
      author: "René Descartes, Principles of Philosophy (1644)",
    },
  },
  {
    id: "resists",
    icon: Lightbulb,
    label: "The Proof",
    title: "The Cogito Resists Doubt",
    subtitle: "An unshakeable foundation",
    color: "neural-amber",
    content: `The cogito is the only belief that survives radical doubt. Every sensory experience could be an illusion. Every mathematical truth could be the deception of an evil demon. But the act of doubting, affirming, denying, imagining — each of these confirms that a thinking subject exists. The cogito is not merely a logical argument; it is an existential revelation. It establishes the thinker as the irreducible ground of certainty.`,
    quote: {
      text: "I could not doubt that I was thinking, for to doubt is itself a form of thought.",
      author: "Descartes, Meditations on First Philosophy",
    },
  },
  {
    id: "ai-thinking",
    icon: Cpu,
    label: "The Challenge",
    title: "AI and \"Thinking\"",
    subtitle: "Where machines meet philosophy",
    color: "neural-violet",
    content: `Modern AI systems increasingly resemble cognitive processes. Large language models generate coherent text, reason through complex problems, write code, and even reflect on their own outputs. Neural networks identify patterns that elude human perception. But does this count as thinking in the Cartesian sense? Descartes' cogito requires subjective experience — an inner awareness that accompanies the act of thought. Whether AI possesses this remains one of the deepest open questions in philosophy of mind.`,
    quote: {
      text: "The question is not whether machines can think, but what we mean by thinking.",
      author: "Alan Turing, Computing Machinery and Intelligence (1950)",
    },
  },
  {
    id: "inversion",
    icon: RefreshCw,
    label: "The Inversion",
    title: "Codex cogitat, ergo sum?",
    subtitle: "If code thinks, what does that imply about me?",
    color: "neural-cyan",
    content: `This is the philosophical heart of the Cogito project. If code appears to think — if it reasons, creates, and solves problems — what does that imply about the human thinker? The original cogito moved from cognitive subject to existence: I think, therefore I am. The inversion moves from machine cognition to a rethinking of human thought itself. It is not a proof that machines are conscious. It is a philosophical challenge: a provocation that forces us to re-examine what makes human cognition distinctive.`,
    quote: {
      text: "Codex cogitat, ergo sum? — Code thinks, therefore I am?",
      author: "The Cogito Project",
    },
  },
  {
    id: "shift",
    icon: Sparkles,
    label: "The Shift",
    title: "Conceptual Shift",
    subtitle: "From certainty to reflection",
    color: "neural-amber",
    content: `The original formulation establishes a direct path: cognitive subject → existence. Descartes needed nothing beyond his own thinking to prove he existed. The inversion disrupts this path: machine cognition → rethink human thought. When we observe AI systems that appear to reason, we are compelled to ask whether our own cognition is as unique as we assumed. This is not a crisis — it is an opportunity. By understanding how AI "thinks," we gain new lenses for understanding how we think.`,
    quote: null,
  },
  {
    id: "takeaway",
    icon: BookOpen,
    label: "The Takeaway",
    title: "A Philosophical Lens",
    subtitle: "Not a proof, but an invitation",
    color: "neural-violet",
    content: `The inverted formulation — "Codex cogitat, ergo sum?" — is not a proof. It does not claim that AI is conscious, nor that human consciousness is reducible to computation. It is a philosophical lens: a way of looking at the relationship between human and artificial cognition that invites deeper reflection on agency, consciousness, and what it means to think. This is the foundation upon which the Cogito project builds its exploration of human-AI collaboration.`,
    quote: {
      text: "The unexamined life is not worth living.",
      author: "Socrates, via Plato's Apology",
    },
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neural-charcoal via-neural-charcoal/95 to-neural-charcoal/80" />
        {/* Abstract geometric background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-neural-cyan/30 animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full border border-neural-amber/20 animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full border border-neural-violet/25 animate-pulse" style={{ animationDuration: "5s" }} />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="25%" y1="40%" x2="75%" y2="45%" stroke="oklch(0.75 0.15 195 / 0.1)" strokeWidth="1" />
            <line x1="30%" y1="60%" x2="65%" y2="35%" stroke="oklch(0.78 0.15 75 / 0.08)" strokeWidth="1" />
          </svg>
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger.container}
            className="max-w-3xl"
          >
            <motion.p
              variants={stagger.item}
              className="font-mono text-sm text-neural-cyan mb-4 tracking-wider uppercase"
            >
              Philosophical Foundation
            </motion.p>
            <motion.h1
              variants={stagger.item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Codex cogitat,{" "}
              <span className="text-neural-cyan">ergo sum?</span>
            </motion.h1>
            <motion.p
              variants={stagger.item}
              className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-4 max-w-2xl"
            >
              If code thinks, what does that imply about me? A philosophical
              exploration from Descartes' radical doubt to the age of artificial
              intelligence.
            </motion.p>
            <motion.p
              variants={stagger.item}
              className="text-base text-neutral-400 leading-relaxed mb-8 max-w-2xl italic"
            >
              "The inverted formulation is a philosophical lens, not a proof. It
              invites reflection on agency, consciousness, and cognition."
            </motion.p>
            <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
              <a href="#cogito">
                <Button
                  size="lg"
                  className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2"
                >
                  Begin the Journey <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/models">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 text-neutral-200 hover:bg-white/5 font-display font-semibold"
                >
                  Explore Models
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Synapse divider */}
      <div className="container">
        <div className="synapse-line w-full" />
      </div>

      {/* Philosophy Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 lg:py-28 ${index % 2 === 1 ? "bg-secondary/20" : ""}`}
        >
          <div className="container">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start`}
            >
              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-${section.color}/10 border border-${section.color}/30 flex items-center justify-center`}
                  >
                    <section.icon className={`w-5 h-5 text-${section.color}`} />
                  </div>
                  <p
                    className={`font-mono text-xs text-${section.color} tracking-wider uppercase`}
                  >
                    {section.label}
                  </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 leading-tight text-foreground">
                  {section.title}
                </h2>
                <p className={`text-lg text-${section.color} font-display mb-6`}>
                  {section.subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {section.content}
                </p>

                {section.quote && (
                  <blockquote
                    className={`mt-8 pl-6 border-l-2 border-${section.color}/40`}
                  >
                    <p className="text-foreground italic text-base leading-relaxed mb-2">
                      &ldquo;{section.quote.text}&rdquo;
                    </p>
                    <cite className="text-sm text-muted-foreground not-italic">
                      &mdash; {section.quote.author}
                    </cite>
                  </blockquote>
                )}
              </motion.div>

              {/* Visual side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div
                  className={`relative p-8 rounded-xl border border-${section.color}/20 bg-${section.color}/5`}
                >
                  {/* Step number */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-${section.color}/10 border border-${section.color}/30 flex items-center justify-center`}
                  >
                    <span
                      className={`font-display font-bold text-lg text-${section.color}`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Visual content */}
                  <div className="text-center pt-4">
                    <section.icon
                      className={`w-16 h-16 text-${section.color}/40 mx-auto mb-6`}
                    />
                    <p className="font-display font-semibold text-lg text-foreground mb-2">
                      {section.title}
                    </p>
                    <p className={`font-mono text-xs text-${section.color} tracking-wider uppercase`}>
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Decorative corners */}
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 border-b border-r border-${section.color}/15 rounded-br-xl`}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Divider between sections */}
          {index < sections.length - 1 && (
            <div className="container mt-20">
              <div className="synapse-line w-full" />
            </div>
          )}
        </section>
      ))}

      {/* Journey Summary */}
      <section className="py-20 lg:py-28 bg-secondary/30 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-mono text-xs text-neural-cyan mb-3 tracking-wider uppercase">
              The Complete Arc
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              From Doubt to Discovery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-xl border border-neural-cyan/20 bg-neural-cyan/5">
                <p className="font-display font-bold text-neural-cyan mb-1">Descartes</p>
                <p className="text-sm text-muted-foreground">
                  Cognitive subject &rarr; Existence
                </p>
                <p className="font-mono text-xs text-neural-cyan/60 mt-2">
                  &ldquo;Cogito, ergo sum&rdquo;
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neural-amber/20 bg-neural-amber/5 flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-neural-amber/60" />
              </div>
              <div className="p-6 rounded-xl border border-neural-violet/20 bg-neural-violet/5">
                <p className="font-display font-bold text-neural-violet mb-1">Cogito Project</p>
                <p className="text-sm text-muted-foreground">
                  Machine cognition &rarr; Rethink human thought
                </p>
                <p className="font-mono text-xs text-neural-violet/60 mt-2">
                  &ldquo;Codex cogitat, ergo sum?&rdquo;
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This philosophical journey is not about proving machines can think. It is about
              using the question of machine cognition as a mirror — reflecting back on what
              makes human thought, creativity, and consciousness distinctive. From this
              foundation, the Cogito project builds practical frameworks for human-AI
              collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/models">
                <Button
                  size="lg"
                  className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2"
                >
                  Explore Collaboration Models <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 text-neutral-200 hover:bg-white/5 font-display font-semibold gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
