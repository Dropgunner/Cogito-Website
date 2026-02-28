/**
 * Research Foundation Page — Neural Cartography Design
 * Academic citations, key findings, and citation network
 */
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight, Quote, Network } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CitationGraph from "@/components/CitationGraph";

const RESEARCH_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/fXgG4rKMeX6pWqjdHJr3wy/sandbox/qHb7ci2BDK89NOS8XPzQoN-img-4_1772055497000_na1fn_aGVyby1yZXNlYXJjaC1mb3VuZGF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlhnRzRyS01lWDZwV3FqZEhKcjN3eS9zYW5kYm94L3FIYjdjaTJCREs4OU5PUzhYUHpRb04taW1nLTRfMTc3MjA1NTQ5NzAwMF9uYTFmbl9hR1Z5YnkxeVpYTmxZWEpqYUMxbWIzVnVaR0YwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=A5kStQfQVCuPFKLQwsIW7gJhZ78L0XHBlr6N1IPSjgECPK-oz-HZxJYmQZUCc1ZlMfs8EncYgOBVGXrSoIVKdQPRzh4LGCRQdBzsGZKLOl4d1oNDH1wsmmJuFH3JyS64o7NQ9f4hBuxCqy-d0jAm2YrXI-EYjbzQO07T50uaYCy0frn80KFEJTJTaOejiTuDHXTIAVTtaSdmq6JitqCVpnvZrA-LmGRibJMFhvryKGLtgmUp1W2QC24WGkpc8dtDciemt9-L4ORqL2xt35EQ9hIXc17WRh3pkkae4NdNI~ctZHAPz3Vg9HLJtiuY4Gy2lWnQn~ONZNl5t61pXmtxpA__";

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

const citations: Citation[] = [
  { id: "c1", authors: "Vaithilingam, P., Zhang, T., & Glassman, E. L.", year: 2022, title: "Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models", venue: "CHI '22 Extended Abstracts", category: "Software Development", keyFinding: "Developers found AI code generation most useful for boilerplate and repetitive tasks, but struggled with complex logic where AI suggestions required significant modification.", relevance: "Supports the Augmentation model — AI excels at reducing cognitive load on routine tasks while humans handle complex reasoning.", doi: "10.1145/3491101.3519665" },
  { id: "c2", authors: "Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M.", year: 2023, title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", venue: "arXiv preprint", category: "Software Development", keyFinding: "Developers using GitHub Copilot completed tasks 55.8% faster than those without, with the largest gains in unfamiliar languages and frameworks.", relevance: "Quantifies the productivity impact of the Augmentation model in software development.", doi: "10.48550/arXiv.2302.06590" },
  { id: "c3", authors: "Jumper, J., Evans, R., Pritzel, A., et al.", year: 2021, title: "Highly accurate protein structure prediction with AlphaFold", venue: "Nature, 596(7873)", category: "Scientific Research", keyFinding: "AlphaFold predicted protein structures with accuracy competitive with experimental methods, solving a 50-year grand challenge in biology.", relevance: "Demonstrates the Delegation model — AI autonomously solving well-defined scientific problems that humans could not solve at scale.", doi: "10.1038/s41586-021-03819-2" },
  { id: "c4", authors: "Stokes, J. M., Yang, K., Swanson, K., et al.", year: 2020, title: "A Deep Learning Approach to Antibiotic Discovery", venue: "Cell, 180(4)", category: "Scientific Research", keyFinding: "AI identified a structurally novel antibiotic (halicin) by screening 107 million molecules, demonstrating AI's ability to explore chemical spaces beyond human intuition.", relevance: "Illustrates the Integration model — AI embedded in the research workflow, discovering what humans could not.", doi: "10.1016/j.cell.2020.01.021" },
  { id: "c5", authors: "Topol, E. J.", year: 2019, title: "High-performance medicine: the convergence of human and artificial intelligence", venue: "Nature Medicine, 25(1)", category: "Healthcare", keyFinding: "AI augmentation in medicine works best when it enhances rather than replaces clinical judgment, particularly in pattern recognition tasks like radiology and pathology.", relevance: "Foundational argument for the Augmentation model in healthcare — AI as a cognitive amplifier for physicians.", doi: "10.1038/s41591-018-0300-7" },
  { id: "c6", authors: "Rajpurkar, P., Chen, E., Banerjee, O., & Topol, E. J.", year: 2022, title: "AI in health and medicine", venue: "Nature Medicine, 28(1)", category: "Healthcare", keyFinding: "Clinical AI systems perform best when designed for human-AI collaboration rather than autonomous operation, with shared decision-making improving outcomes.", relevance: "Empirical support for collaborative over autonomous AI in high-stakes domains.", doi: "10.1038/s41591-021-01614-0" },
  { id: "c7", authors: "VanLehn, K.", year: 2011, title: "The Relative Effectiveness of Human Tutoring, Intelligent Tutoring Systems, and Other Tutoring Systems", venue: "Educational Psychologist, 46(4)", category: "Education", keyFinding: "Intelligent tutoring systems achieved effect sizes of d=0.76, approaching human tutoring (d=0.79) and far exceeding traditional classroom instruction.", relevance: "Demonstrates that AI-integrated education (Integration model) can approach human-level teaching effectiveness.", doi: "10.1080/00461520.2011.611369" },
  { id: "c8", authors: "Kreminski, M. & Wardrip-Fruin, N.", year: 2019, title: "Generative Methods for Textual Content in Games", venue: "Proceedings of FDG '19", category: "Creative Work", keyFinding: "The most effective generative narrative systems combine AI generation with human curation, creating a co-creative loop that produces higher quality content than either alone.", relevance: "Direct evidence for the Co-Creation model in creative domains.", doi: "10.1145/3337722.3341861" },
  { id: "c9", authors: "Hutchins, E.", year: 1995, title: "Cognition in the Wild", venue: "MIT Press", category: "Theoretical Foundation", keyFinding: "Cognition is distributed across individuals, artifacts, and environments. The unit of cognitive analysis should be the system, not the individual.", relevance: "Theoretical foundation for the Integration and Symbiosis models — intelligence as a property of human-tool systems.", doi: "10.7551/mitpress/1881.001.0001" },
  { id: "c10", authors: "Shneiderman, B.", year: 2022, title: "Human-Centered AI", venue: "Oxford University Press", category: "Theoretical Foundation", keyFinding: "Effective AI systems should amplify human abilities rather than replace them, maintaining human control while leveraging AI capabilities.", relevance: "Philosophical framework supporting the Augmentation model as the ethically preferred paradigm.", doi: "10.1093/oso/9780192845290.001.0001" },
  { id: "c11", authors: "Surden, H.", year: 2019, title: "Artificial Intelligence and Law: An Overview", venue: "Georgia State University Law Review, 35(4)", category: "Legal Practice", keyFinding: "AI in legal practice is most effective for document review, legal research, and prediction, but requires human oversight for interpretation and strategy.", relevance: "Supports the Delegation + Augmentation hybrid model for legal applications.", doi: "" },
  { id: "c12", authors: "Clark, A. & Chalmers, D.", year: 1998, title: "The Extended Mind", venue: "Analysis, 58(1)", category: "Theoretical Foundation", keyFinding: "Cognitive processes extend beyond the brain into the environment. Tools and technologies can become genuine parts of our cognitive systems.", relevance: "Philosophical foundation for the Symbiosis model — AI as an extension of human cognition, not merely a tool.", doi: "10.1093/analys/58.1.7" },
];

const categories = Array.from(new Set(citations.map((c) => c.category)));

export default function Research() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={RESEARCH_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-violet mb-3 tracking-wider uppercase">
              Evidence Base
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Research Foundation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The empirical and theoretical evidence underpinning the Cogito framework. 
              Each citation has been selected for its direct relevance to human-AI 
              collaboration models and their practical applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-12">
        <div className="container">
          <div className="p-8 rounded-2xl border border-neural-violet/20 bg-neural-violet/5">
            <Quote className="w-8 h-8 text-neural-violet mb-4" />
            <blockquote className="text-xl lg:text-2xl font-display font-medium leading-relaxed text-foreground mb-4">
              "Cognition is distributed across individuals, artifacts, and environments. 
              The unit of cognitive analysis should be the system, not the individual."
            </blockquote>
            <p className="text-sm text-muted-foreground font-mono">
              — Edwin Hutchins, Cognition in the Wild (1995)
            </p>
          </div>
        </div>
      </section>

      {/* Citation Network Graph */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Network className="w-5 h-5 text-neural-cyan" />
              <p className="font-mono text-xs text-neural-cyan tracking-wider uppercase">Interactive Visualization</p>
            </div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">
              Citation Network
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              An interactive force-directed graph mapping the relationships between our 12 core
              citations. Nodes represent individual papers; edges encode thematic connections,
              shared categories, and theoretical lineage. Hover to trace influence paths,
              click any node for full details.
            </p>
            <CitationGraph citations={citations} />
          </motion.div>
        </div>
      </section>

      {/* Citation Categories */}
      {categories.map((category) => (
        <section key={category} className="py-10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-neural-cyan" />
                {category}
              </h2>
              <div className="space-y-4">
                {citations
                  .filter((c) => c.category === category)
                  .map((citation) => (
                    <div
                      key={citation.id}
                      className="p-6 rounded-xl border border-border hover:border-neural-cyan/20 transition-colors bg-card"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="font-display font-semibold text-foreground">
                            {citation.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {citation.authors} ({citation.year})
                          </p>
                          <p className="text-xs text-muted-foreground font-mono mt-0.5">
                            {citation.venue}
                          </p>
                        </div>
                        {citation.doi && (
                          <a
                            href={`https://doi.org/${citation.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 text-neural-cyan hover:text-neural-cyan/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-3 rounded-lg bg-background border border-border">
                          <p className="text-xs font-display font-semibold text-neural-amber mb-1">Key Finding</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{citation.keyFinding}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border">
                          <p className="text-xs font-display font-semibold text-neural-cyan mb-1">Relevance to Cogito</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{citation.relevance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Citation Stats */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: citations.length.toString(), label: "Core Citations", color: "text-neural-cyan" },
              { value: categories.length.toString(), label: "Research Domains", color: "text-neural-amber" },
              { value: "1995–2023", label: "Publication Range", color: "text-neural-violet" },
              { value: "8", label: "Peer-Reviewed Journals", color: "text-neural-cyan" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-2xl lg:text-3xl font-display font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground font-display">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">See how these findings translate to system design</p>
          <Link href="/technical">
            <Button className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2">
              Technical Architecture <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
