/**
 * Home Page — Neural Cartography Design
 * Hero section with neural network background, problem statement,
 * and overview of the AI Collaboration Hub concept
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Zap, Users, BookOpen, GitBranch, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/fXgG4rKMeX6pWqjdHJr3wy/sandbox/qHb7ci2BDK89NOS8XPzQoN-img-1_1772055486000_na1fn_aGVyby1uZXVyYWwtbmV0d29yaw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlhnRzRyS01lWDZwV3FqZEhKcjN3eS9zYW5kYm94L3FIYjdjaTJCREs4OU5PUzhYUHpRb04taW1nLTFfMTc3MjA1NTQ4NjAwMF9uYTFmbl9hR1Z5YnkxdVpYVnlZV3d0Ym1WMGQyOXlhdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G8cT6dsb9okwF4fSS3Mqf0J4reaKhYz0wp2iWs2O1tzpfP6SAlYsAxIrYMIDjeRWE2SUytOKqu80WTQItXprYEadWpyqSoaJrZ96WqEOUlPYozabMbAyiVJN2ffpTIQwBZxORH9gHTRbPhNTjj~WFIITBwy6FxRAIsoJWlgKSvaxDj0I9Pvf60aVPpe4sj2XHin-PrCcqozI1Tdu241khBZhe7-q0olmJIIaGgiGp8WSMj9U9svCnZEJrN6oewDvJdBUcdSK68QVjKqp2Pfat6-qhVbV6~xViu8OF2UoCEVAWF66n5xRK7NtYmv-ejbfp3UYfSYEaM6UmSlWn3-XoQ__";

const PARTNERSHIP_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/fXgG4rKMeX6pWqjdHJr3wy/sandbox/qHb7ci2BDK89NOS8XPzQoN-img-2_1772055497000_na1fn_aGVyby1jb2duaXRpdmUtcGFydG5lcnNoaXA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlhnRzRyS01lWDZwV3FqZEhKcjN3eS9zYW5kYm94L3FIYjdjaTJCREs4OU5PUzhYUHpRb04taW1nLTJfMTc3MjA1NTQ5NzAwMF9uYTFmbl9hR1Z5YnkxamIyZHVhWFJwZG1VdGNHRnlkRzVsY25Ob2FYQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D-RcTe3vwnBSxhe4iuEw6aC8cPnoUdiaTp2-nYoh02vQPlue9SGtTMNF3pFLZgZXlekYmU3eE8TGnCcULFVlNd5KVaPToYYi6mBzsaz2-8rBHjCdFsgcRiDpr-ZAGAa7xXp53pS~Erx5KFFYmDw203D229pKxKL6Z4z4CH2vTuzaVsPlEIN-vxv7o02bOO3mo3z5er4dXRPVS~b2dBZeHBg9snGeYGADnkC3o8DUv--jikh0n04VNhfSxBmVCnE3gpW70phlgdyXu-oJ-vy9jwpJQ93jfAsqYJgECrW7UgaEBlxfa-4rPRlH-D~Cyprv6sRm-TbGJYTDn-QUyEk~JA__";

const stagger = {
  container: { transition: { staggerChildren: 0.1 } },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

const features = [
  {
    icon: Brain,
    title: "Collaboration Models",
    description: "Five distinct paradigms for human-AI partnership, from augmentation to full cognitive symbiosis.",
    href: "/models",
    color: "text-neural-cyan",
    bg: "bg-neural-cyan/10",
    border: "border-neural-cyan/20",
  },
  {
    icon: Zap,
    title: "Use Cases",
    description: "Real-world applications across software development, creative work, scientific research, and education.",
    href: "/use-cases",
    color: "text-neural-amber",
    bg: "bg-neural-amber/10",
    border: "border-neural-amber/20",
  },
  {
    icon: BookOpen,
    title: "Research Foundation",
    description: "Peer-reviewed studies and empirical evidence underpinning each collaboration model.",
    href: "/research",
    color: "text-neural-violet",
    bg: "bg-neural-violet/10",
    border: "border-neural-violet/20",
  },
  {
    icon: GitBranch,
    title: "Technical Architecture",
    description: "System design patterns, API paradigms, and infrastructure for building collaborative AI systems.",
    href: "/technical",
    color: "text-neural-cyan",
    bg: "bg-neural-cyan/10",
    border: "border-neural-cyan/20",
  },
  {
    icon: Users,
    title: "Roadmap",
    description: "The trajectory from current capabilities to future cognitive partnership milestones.",
    href: "/roadmap",
    color: "text-neural-amber",
    bg: "bg-neural-amber/10",
    border: "border-neural-amber/20",
  },
  {
    icon: MessageSquare,
    title: "FAQ",
    description: "Common questions about AI collaboration, ethics, implementation, and the Cogito project.",
    href: "/faq",
    color: "text-neural-violet",
    bg: "bg-neural-violet/10",
    border: "border-neural-violet/20",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Neural network visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neural-charcoal/95 via-neural-charcoal/70 to-neural-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-neural-charcoal via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger.container}
            >
              <motion.p
                variants={stagger.item}
                className="font-mono text-sm text-neural-cyan mb-4 tracking-wider uppercase"
              >
                Codex cogitat, ergo sum?
              </motion.p>
              <motion.h1
                variants={stagger.item}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Cogito, ergo{" "}
                <span className="text-neural-cyan">codifico</span>
              </motion.h1>
              <motion.p
                variants={stagger.item}
                className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-4 max-w-xl"
              >
                I think, therefore I code. Exploring the frontier where human cognition 
                and artificial intelligence converge to create something greater than 
                either could achieve alone.
              </motion.p>
              <motion.p
                variants={stagger.item}
                className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl italic"
              >
                If code appears to think, what does that imply about the human thinker?
                A philosophical challenge, not a proof.
              </motion.p>
              <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2">
                    The Philosophy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/models">
                  <Button size="lg" variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-white/5 font-display font-semibold gap-2">
                    Explore Models <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 lg:py-28 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs text-neural-amber mb-3 tracking-wider uppercase">
                The Problem
              </p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 leading-tight">
                We treat AI as a tool.{" "}
                <span className="text-neural-amber">It should be a partner.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The dominant paradigm of human-AI interaction remains fundamentally transactional: 
                  we prompt, the machine responds. This input-output model severely underestimates 
                  the potential of cognitive partnership.
                </p>
                <p>
                  Research in cognitive science, distributed cognition, and human-computer interaction 
                  reveals that the most productive collaborations emerge when both parties contribute 
                  complementary cognitive strengths — human intuition, creativity, and contextual 
                  understanding paired with AI's pattern recognition, scalability, and tireless consistency.
                </p>
                <p>
                  The Cogito project maps this territory: identifying collaboration models, documenting 
                  use cases, and building the theoretical and technical foundations for a future where 
                  human and artificial intelligence work as genuine cognitive partners.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden border border-border neural-glow">
                <img
                  src={PARTNERSHIP_IMG}
                  alt="Human-AI cognitive partnership visualization"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neural-cyan/20 rounded-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-neural-amber/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Synapse divider */}
      <div className="container">
        <div className="synapse-line w-full" />
      </div>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-neural-violet mb-3 tracking-wider uppercase">
              Explore the Hub
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Mapping the Cognitive Landscape
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six interconnected domains that together form a comprehensive framework 
              for understanding and implementing human-AI collaboration.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger.container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.href} variants={stagger.item}>
                <Link href={feature.href}>
                  <div className={`group p-6 rounded-xl border ${feature.border} ${feature.bg} hover:border-opacity-50 transition-all duration-300 h-full`}>
                    <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-neural-cyan transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-display font-medium text-neural-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "5", label: "Collaboration Models", color: "text-neural-cyan" },
              { value: "12+", label: "Use Cases Documented", color: "text-neural-amber" },
              { value: "40+", label: "Research Citations", color: "text-neural-violet" },
              { value: "2026", label: "Roadmap Horizon", color: "text-neural-cyan" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`text-3xl lg:text-4xl font-display font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-display">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Ready to explore cognitive partnership?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Start with the collaboration models to understand the spectrum of human-AI 
              interaction, or dive into the research foundation for the empirical evidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/models">
                <Button size="lg" className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2">
                  Start with Models <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-white/5 font-display font-semibold">
                  Read FAQ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
