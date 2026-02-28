/**
 * FAQ Page — Neural Cartography Design
 * Common questions about AI collaboration, ethics, and the Cogito project
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "About Cogito",
    question: "What is the Cogito project?",
    answer: "Cogito (from Descartes' 'Cogito, ergo sum' — I think, therefore I am) is a research and documentation project that maps the landscape of human-AI collaboration. We identify, categorize, and analyze different models of partnership between human intelligence and artificial intelligence, grounded in peer-reviewed research and real-world applications. The project's tagline, 'Cogito, ergo codifico' (I think, therefore I code), reflects our focus on the intersection of cognitive science and software development.",
  },
  {
    category: "About Cogito",
    question: "Who is behind this project?",
    answer: "Cogito is an open-source initiative created by Prayer, a psychotherapist-in-training and open-source evangelist based in Berlin. The project sits at the intersection of psychoanalysis, cognitive science, and technology — reflecting the creator's unique perspective on how humans think, learn, and collaborate with artificial systems. The project is part of a broader effort to fund open-source development through innovative approaches.",
  },
  {
    category: "About Cogito",
    question: "Is this an academic project or a product?",
    answer: "Cogito is primarily a knowledge resource and research documentation project. It is not a commercial product. The website serves as a comprehensive reference for researchers, developers, and practitioners interested in human-AI collaboration. However, the roadmap includes plans for an open-source toolkit and reference platform that could be used in production environments.",
  },
  {
    category: "Collaboration Models",
    question: "What are the five collaboration models?",
    answer: "The five models are: (1) Augmentation — AI enhances human capabilities while humans retain full control; (2) Delegation — humans define objectives and AI executes subtasks autonomously; (3) Co-Creation — human and AI create together iteratively as equal partners; (4) Integration — AI is embedded seamlessly into cognitive workflows; (5) Symbiosis — the theoretical frontier of emergent cognitive partnership. Each model has distinct characteristics, strengths, and appropriate use cases.",
  },
  {
    category: "Collaboration Models",
    question: "Which collaboration model is 'best'?",
    answer: "There is no universally 'best' model — the optimal choice depends on the task, domain, risk tolerance, and desired level of human involvement. Augmentation is safest for high-stakes domains like healthcare. Delegation excels for well-defined, repetitive tasks. Co-Creation shines in creative work. Integration works best when AI can be deeply embedded in existing workflows. The key insight is that most real-world applications use hybrid approaches, combining elements of multiple models.",
  },
  {
    category: "Collaboration Models",
    question: "How do these models relate to existing frameworks?",
    answer: "Our taxonomy builds on several established frameworks: Shneiderman's Human-Centered AI (2022), Hutchins' Distributed Cognition (1995), Clark & Chalmers' Extended Mind thesis (1998), and Parasuraman's levels of automation (2000). The Cogito framework synthesizes these perspectives into a practical taxonomy specifically designed for the current era of large language models and agentic AI systems.",
  },
  {
    category: "Ethics & Safety",
    question: "What are the ethical implications of deeper AI collaboration?",
    answer: "Deeper collaboration models raise several ethical concerns: accountability (who is responsible when AI contributes to decisions?), autonomy (does AI collaboration reduce human agency?), bias (do AI systems amplify existing biases?), dependency (does reliance on AI erode human skills?), and privacy (does deep integration require invasive data collection?). The Cogito framework addresses these through the Safety & Alignment Layer in the technical architecture, which includes output validation, bias monitoring, and human override mechanisms.",
  },
  {
    category: "Ethics & Safety",
    question: "Does AI collaboration threaten human jobs?",
    answer: "The evidence suggests that AI collaboration transforms rather than eliminates jobs. The Augmentation model explicitly preserves human roles while enhancing productivity. Historical parallels (spreadsheets didn't eliminate accountants, CAD didn't eliminate architects) suggest that AI tools create new roles and shift existing ones toward higher-value activities. However, the transition requires intentional investment in reskilling and thoughtful policy design.",
  },
  {
    category: "Ethics & Safety",
    question: "How do you ensure AI alignment in collaborative systems?",
    answer: "The technical architecture includes a dedicated Safety & Alignment Layer with four components: an Output Validator that checks AI outputs against safety policies, a Bias Monitor that detects systematic biases, an Audit Logger for accountability, and a Human Override mechanism that ensures humans can always correct AI behavior. We advocate for Constitutional AI principles and regular red-team testing.",
  },
  {
    category: "Technical",
    question: "What technology stack does Cogito recommend?",
    answer: "The Cogito framework is technology-agnostic — the collaboration models can be implemented with any AI provider or tech stack. However, the reference architecture assumes modern LLM APIs (OpenAI, Anthropic, open-source models), vector databases for semantic search, and event-driven architectures for real-time collaboration. The upcoming open-source toolkit will provide implementations in Python and TypeScript.",
  },
  {
    category: "Technical",
    question: "Can I implement these models in my own application?",
    answer: "Yes. The Technical Architecture page provides detailed system design patterns for each collaboration model. Phase 4 of the roadmap includes an open-source toolkit with SDKs and template implementations. In the meantime, the architecture documentation provides sufficient detail for experienced developers to implement the patterns independently.",
  },
  {
    category: "Technical",
    question: "How does the Citation Graph work?",
    answer: "The Citation Graph is a knowledge graph that maps relationships between research papers, collaboration models, use cases, and key findings. Each citation is tagged with its relevance to specific models and domains, enabling cross-referencing and discovery of related research. The graph is implemented as a structured dataset with semantic search capabilities.",
  },
  {
    category: "Getting Involved",
    question: "How can I contribute to the Cogito project?",
    answer: "Cogito is open-source and welcomes contributions. You can: (1) submit new use cases or research citations via GitHub pull requests; (2) report issues or suggest improvements; (3) contribute to the upcoming open-source toolkit; (4) share the project with researchers and practitioners who might benefit. Visit our GitHub repository at github.com/Dropgunner/Cogito-Website to get started.",
  },
  {
    category: "Getting Involved",
    question: "Can I use Cogito's content in my own research?",
    answer: "Yes. All content on the Cogito website is available under an open license. We encourage citation and reuse. If you use the Cogito framework in academic work, please cite the project. All original research citations on the site include DOI links for easy reference.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-xs text-neural-violet mb-3 tracking-wider uppercase">
              Common Questions
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Answers to common questions about the Cogito project, collaboration models, 
              ethics, technical implementation, and how to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 lg:pb-28">
        <div className="container max-w-3xl mx-auto">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-display font-bold mb-4 text-neural-cyan">
                {category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
                      className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30"
                    >
                      <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-neural-cyan py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">Ready to explore the full framework?</p>
          <Link href="/">
            <Button className="bg-neural-cyan text-neural-charcoal hover:bg-neural-cyan/90 font-display font-semibold gap-2">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
