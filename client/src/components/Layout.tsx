/**
 * Layout Component — Neural Cartography Design System
 * Persistent navigation + footer wrapping all pages
 * Design: Bauhaus precision meets neuroscience visualization
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Philosophy" },
  { href: "/models", label: "Collaboration Models" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/research", label: "Research" },
  { href: "/technical", label: "Technical" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/faq", label: "FAQ" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neural-charcoal/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-neural-cyan/10 border border-neural-cyan/30 flex items-center justify-center group-hover:bg-neural-cyan/20 transition-colors">
              <Brain className="w-4 h-4 text-neural-cyan" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Cogito
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-display font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-neural-cyan bg-neural-cyan/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-neural-charcoal/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-display font-medium rounded-md transition-colors ${
                      location === link.href
                        ? "text-neural-cyan bg-neural-cyan/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-neural-charcoal/50">
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-neural-cyan/10 border border-neural-cyan/30 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-neural-cyan" />
                </div>
                <span className="font-display font-bold text-lg">Cogito</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Exploring the frontier of human-AI cognitive partnership. 
                "Cogito, ergo codifico" — I think, therefore I code.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Navigation</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-neural-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/Dropgunner/Cogito-Website" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-neural-cyan transition-colors inline-flex items-center gap-1.5">
                  GitHub Repository <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://arxiv.org/search/?query=human+AI+collaboration" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-neural-cyan transition-colors inline-flex items-center gap-1.5">
                  Research Papers <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Cogito — AI Collaboration Hub. Built with cognitive synergy.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              v2.0 — Neural Cartography
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
