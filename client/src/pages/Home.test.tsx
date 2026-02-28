import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import Home from "./Home";

describe("Home Page", () => {
  it("renders the hero section with tagline", () => {
    render(<Home />);
    expect(screen.getByText(/Cogito, ergo/i)).toBeInTheDocument();
    expect(screen.getByText("codifico")).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<Home />);
    expect(screen.getByText(/I think, therefore I code/i)).toBeInTheDocument();
  });

  it("renders the Codex cogitat label", () => {
    render(<Home />);
    expect(screen.getByText(/Codex cogitat, ergo sum/i)).toBeInTheDocument();
  });

  it("renders the Explore Models CTA button", () => {
    render(<Home />);
    const buttons = screen.getAllByText(/Explore Models/i);
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders the philosophical subtitle", () => {
    render(<Home />);
    expect(screen.getByText(/code appears to think/i)).toBeInTheDocument();
  });

  it("renders The Philosophy button", () => {
    render(<Home />);
    expect(screen.getByText("The Philosophy")).toBeInTheDocument();
  });

  it("renders the problem statement section", () => {
    render(<Home />);
    expect(screen.getByText(/We treat AI as a tool/i)).toBeInTheDocument();
    expect(screen.getByText(/It should be a partner/i)).toBeInTheDocument();
  });

  it("renders problem statement body text", () => {
    render(<Home />);
    expect(screen.getByText(/dominant paradigm of human-AI interaction/i)).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    render(<Home />);
    const heroImg = screen.getByAltText("Neural network visualization");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg.tagName).toBe("IMG");
  });

  it("renders the partnership image", () => {
    render(<Home />);
    const partnerImg = screen.getByAltText("Human-AI cognitive partnership visualization");
    expect(partnerImg).toBeInTheDocument();
  });

  it("renders the features grid section", () => {
    render(<Home />);
    expect(screen.getByText("Mapping the Cognitive Landscape")).toBeInTheDocument();
  });

  it("renders all 6 feature cards", () => {
    render(<Home />);
    expect(screen.getAllByText("Collaboration Models").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Use Cases").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Research Foundation").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Technical Architecture").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Roadmap").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("FAQ").length).toBeGreaterThanOrEqual(1);
  });

  it("renders feature descriptions", () => {
    render(<Home />);
    expect(screen.getByText(/Five distinct paradigms/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-world applications/i)).toBeInTheDocument();
    expect(screen.getByText(/Peer-reviewed studies/i)).toBeInTheDocument();
  });

  it("renders the stats section", () => {
    render(<Home />);
    expect(screen.getAllByText("5").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Collaboration Models").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("12+")).toBeInTheDocument();
    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getAllByText("2026").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the CTA section", () => {
    render(<Home />);
    expect(screen.getByText(/Ready to explore cognitive partnership/i)).toBeInTheDocument();
  });

  it("renders Start with Models button in CTA", () => {
    render(<Home />);
    expect(screen.getByText("Start with Models")).toBeInTheDocument();
  });

  it("renders Read FAQ button in CTA", () => {
    render(<Home />);
    expect(screen.getByText("Read FAQ")).toBeInTheDocument();
  });

  it("renders the synapse divider", () => {
    render(<Home />);
    const divider = document.querySelector(".synapse-line");
    expect(divider).toBeInTheDocument();
  });

  it("renders the Explore the Hub subtitle", () => {
    render(<Home />);
    expect(screen.getByText("Explore the Hub")).toBeInTheDocument();
  });

  it("renders stat labels correctly", () => {
    render(<Home />);
    expect(screen.getByText("Use Cases Documented")).toBeInTheDocument();
    expect(screen.getByText("Research Citations")).toBeInTheDocument();
    expect(screen.getByText("Roadmap Horizon")).toBeInTheDocument();
  });
});
