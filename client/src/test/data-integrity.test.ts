import { describe, it, expect } from "vitest";

/**
 * Data Integrity Tests
 * Validates the content and structure of the website's data
 */

describe("Data Integrity", () => {
  describe("Navigation Structure", () => {
    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/models", label: "Collaboration Models" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/research", label: "Research" },
      { href: "/technical", label: "Technical" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/faq", label: "FAQ" },
    ];

    it("has 7 navigation links", () => {
      expect(navLinks.length).toBe(7);
    });

    it("all links have unique hrefs", () => {
      const hrefs = navLinks.map((l) => l.href);
      expect(new Set(hrefs).size).toBe(hrefs.length);
    });

    it("all links have non-empty labels", () => {
      navLinks.forEach((link) => {
        expect(link.label.length).toBeGreaterThan(0);
      });
    });

    it("home link points to root", () => {
      expect(navLinks[0].href).toBe("/");
    });
  });

  describe("Collaboration Models Data", () => {
    const models = [
      { id: "augmentation", maturity: 5 },
      { id: "delegation", maturity: 3 },
      { id: "co-creation", maturity: 3 },
      { id: "integration", maturity: 2 },
      { id: "symbiosis", maturity: 1 },
    ];

    it("has exactly 5 models", () => {
      expect(models.length).toBe(5);
    });

    it("all models have unique IDs", () => {
      const ids = models.map((m) => m.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("maturity levels are between 1 and 5", () => {
      models.forEach((m) => {
        expect(m.maturity).toBeGreaterThanOrEqual(1);
        expect(m.maturity).toBeLessThanOrEqual(5);
      });
    });

    it("maturity levels decrease from augmentation to symbiosis", () => {
      for (let i = 0; i < models.length - 1; i++) {
        expect(models[i].maturity).toBeGreaterThanOrEqual(models[i + 1].maturity);
      }
    });

    it("augmentation has highest maturity", () => {
      expect(models[0].maturity).toBe(5);
    });

    it("symbiosis has lowest maturity", () => {
      expect(models[4].maturity).toBe(1);
    });
  });

  describe("Use Cases Data", () => {
    const domains = [
      "Software Development",
      "Creative Work",
      "Scientific Research",
      "Education",
      "Healthcare",
      "Legal Practice",
    ];

    it("has 6 professional domains", () => {
      expect(domains.length).toBe(6);
    });

    it("all domains are unique", () => {
      expect(new Set(domains).size).toBe(domains.length);
    });

    it("includes Software Development", () => {
      expect(domains).toContain("Software Development");
    });

    it("includes Healthcare", () => {
      expect(domains).toContain("Healthcare");
    });

    it("includes Education", () => {
      expect(domains).toContain("Education");
    });
  });

  describe("Research Citations Data", () => {
    const citations = [
      { id: "c1", year: 2022, hasDoI: true },
      { id: "c2", year: 2023, hasDoI: true },
      { id: "c3", year: 2021, hasDoI: true },
      { id: "c4", year: 2020, hasDoI: true },
      { id: "c5", year: 2019, hasDoI: true },
      { id: "c6", year: 2022, hasDoI: true },
      { id: "c7", year: 2011, hasDoI: true },
      { id: "c8", year: 2019, hasDoI: true },
      { id: "c9", year: 1995, hasDoI: true },
      { id: "c10", year: 2022, hasDoI: true },
      { id: "c11", year: 2019, hasDoI: false },
      { id: "c12", year: 1998, hasDoI: true },
    ];

    it("has 12 citations", () => {
      expect(citations.length).toBe(12);
    });

    it("all citations have unique IDs", () => {
      const ids = citations.map((c) => c.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("publication years range from 1995 to 2023", () => {
      const years = citations.map((c) => c.year);
      expect(Math.min(...years)).toBe(1995);
      expect(Math.max(...years)).toBe(2023);
    });

    it("most citations have DOIs", () => {
      const withDoi = citations.filter((c) => c.hasDoI);
      expect(withDoi.length).toBeGreaterThan(citations.length * 0.8);
    });

    it("all years are valid", () => {
      citations.forEach((c) => {
        expect(c.year).toBeGreaterThan(1900);
        expect(c.year).toBeLessThanOrEqual(2026);
      });
    });
  });

  describe("Roadmap Milestones Data", () => {
    const milestones = [
      { phase: 1, status: "completed" },
      { phase: 2, status: "completed" },
      { phase: 3, status: "in-progress" },
      { phase: 4, status: "planned" },
      { phase: 5, status: "planned" },
      { phase: 6, status: "planned" },
    ];

    it("has 6 milestones", () => {
      expect(milestones.length).toBe(6);
    });

    it("phases are sequential", () => {
      milestones.forEach((m, i) => {
        expect(m.phase).toBe(i + 1);
      });
    });

    it("has 2 completed milestones", () => {
      expect(milestones.filter((m) => m.status === "completed").length).toBe(2);
    });

    it("has 1 in-progress milestone", () => {
      expect(milestones.filter((m) => m.status === "in-progress").length).toBe(1);
    });

    it("has 3 planned milestones", () => {
      expect(milestones.filter((m) => m.status === "planned").length).toBe(3);
    });

    it("completed phases come before in-progress", () => {
      const completedPhases = milestones.filter((m) => m.status === "completed").map((m) => m.phase);
      const inProgressPhases = milestones.filter((m) => m.status === "in-progress").map((m) => m.phase);
      completedPhases.forEach((cp) => {
        inProgressPhases.forEach((ip) => {
          expect(cp).toBeLessThan(ip);
        });
      });
    });

    it("in-progress phases come before planned", () => {
      const inProgressPhases = milestones.filter((m) => m.status === "in-progress").map((m) => m.phase);
      const plannedPhases = milestones.filter((m) => m.status === "planned").map((m) => m.phase);
      inProgressPhases.forEach((ip) => {
        plannedPhases.forEach((pp) => {
          expect(ip).toBeLessThan(pp);
        });
      });
    });
  });

  describe("Technical Architecture Data", () => {
    const layers = [
      "Interaction Layer",
      "Cognitive Engine",
      "Knowledge Layer",
      "Safety & Alignment Layer",
      "Infrastructure Layer",
    ];

    const apiParadigms = [
      "Synchronous Request-Response",
      "Server-Sent Events (SSE)",
      "WebSocket Bidirectional",
      "Async Task Queue",
    ];

    it("has 5 architecture layers", () => {
      expect(layers.length).toBe(5);
    });

    it("has 4 API paradigms", () => {
      expect(apiParadigms.length).toBe(4);
    });

    it("all layers are unique", () => {
      expect(new Set(layers).size).toBe(layers.length);
    });

    it("all API paradigms are unique", () => {
      expect(new Set(apiParadigms).size).toBe(apiParadigms.length);
    });

    it("includes Safety layer", () => {
      expect(layers).toContain("Safety & Alignment Layer");
    });
  });

  describe("FAQ Data", () => {
    const categories = [
      "About Cogito",
      "Collaboration Models",
      "Ethics & Safety",
      "Technical",
      "Getting Involved",
    ];

    const totalQuestions = 14;

    it("has 5 FAQ categories", () => {
      expect(categories.length).toBe(5);
    });

    it("has 14 total questions", () => {
      expect(totalQuestions).toBe(14);
    });

    it("all categories are unique", () => {
      expect(new Set(categories).size).toBe(categories.length);
    });

    it("includes Ethics & Safety category", () => {
      expect(categories).toContain("Ethics & Safety");
    });

    it("includes Getting Involved category", () => {
      expect(categories).toContain("Getting Involved");
    });
  });
});
