import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import About from "./About";

describe("About / Philosophy Page", () => {
  it("renders the hero section with title", () => {
    render(<About />);
    const titles = screen.getAllByText(/Codex cogitat,/i);
    expect(titles.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Philosophical Foundation label", () => {
    render(<About />);
    expect(screen.getByText("Philosophical Foundation")).toBeInTheDocument();
  });

  it("renders the hero description", () => {
    render(<About />);
    const descriptions = screen.getAllByText(/If code thinks, what does that imply about me/i);
    expect(descriptions.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Begin the Journey button", () => {
    render(<About />);
    expect(screen.getByText("Begin the Journey")).toBeInTheDocument();
  });

  it("renders the Explore Models button", () => {
    render(<About />);
    const buttons = screen.getAllByText(/Explore Models/i);
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders Section 1: I think, therefore I am", () => {
    render(<About />);
    const titles = screen.getAllByText("I think, therefore I am");
    expect(titles.length).toBeGreaterThanOrEqual(1);
    const labels = screen.getAllByText("The Origin");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Descartes content about radical doubt", () => {
    render(<About />);
    expect(screen.getByText(/Thinking guarantees the existence of the thinker/i)).toBeInTheDocument();
  });

  it("renders the Descartes quote", () => {
    render(<About />);
    expect(screen.getByText(/Dubito, ergo cogito, ergo sum/i)).toBeInTheDocument();
  });

  it("renders Section 2: The Cogito Resists Doubt", () => {
    render(<About />);
    const titles = screen.getAllByText("The Cogito Resists Doubt");
    expect(titles.length).toBeGreaterThanOrEqual(1);
    const labels = screen.getAllByText("The Proof");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders content about radical doubt resistance", () => {
    render(<About />);
    expect(screen.getByText(/only belief that survives radical doubt/i)).toBeInTheDocument();
  });

  it("renders Section 3: AI and Thinking", () => {
    render(<About />);
    const titles = screen.getAllByText(/AI and "Thinking"/i);
    expect(titles.length).toBeGreaterThanOrEqual(1);
    const labels = screen.getAllByText("The Challenge");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders content about AI cognitive processes", () => {
    render(<About />);
    expect(screen.getByText(/Modern AI systems increasingly resemble cognitive processes/i)).toBeInTheDocument();
  });

  it("renders the Turing quote", () => {
    render(<About />);
    expect(screen.getByText(/question is not whether machines can think/i)).toBeInTheDocument();
  });

  it("renders Section 4: The Inversion", () => {
    render(<About />);
    const inversions = screen.getAllByText(/Codex cogitat, ergo sum\?/i);
    expect(inversions.length).toBeGreaterThanOrEqual(2);
    const labels = screen.getAllByText("The Inversion");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders content about the philosophical inversion", () => {
    render(<About />);
    expect(screen.getByText(/philosophical heart of the Cogito project/i)).toBeInTheDocument();
  });

  it("renders Section 5: Conceptual Shift", () => {
    render(<About />);
    const titles = screen.getAllByText("Conceptual Shift");
    expect(titles.length).toBeGreaterThanOrEqual(1);
    const labels = screen.getAllByText("The Shift");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders content about the conceptual shift", () => {
    render(<About />);
    expect(screen.getByText(/original formulation establishes a direct path/i)).toBeInTheDocument();
  });

  it("renders Section 6: A Philosophical Lens", () => {
    render(<About />);
    const titles = screen.getAllByText("A Philosophical Lens");
    expect(titles.length).toBeGreaterThanOrEqual(1);
    const labels = screen.getAllByText("The Takeaway");
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the takeaway content", () => {
    render(<About />);
    const elements = screen.getAllByText(/not a proof/i);
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Socrates quote", () => {
    render(<About />);
    expect(screen.getByText(/unexamined life is not worth living/i)).toBeInTheDocument();
  });

  it("renders the journey summary section", () => {
    render(<About />);
    expect(screen.getByText("From Doubt to Discovery")).toBeInTheDocument();
    expect(screen.getByText("The Complete Arc")).toBeInTheDocument();
  });

  it("renders the Descartes vs Cogito Project comparison", () => {
    render(<About />);
    expect(screen.getByText("Descartes")).toBeInTheDocument();
    expect(screen.getByText("Cogito Project")).toBeInTheDocument();
  });

  it("renders the Explore Collaboration Models button in summary", () => {
    render(<About />);
    expect(screen.getByText("Explore Collaboration Models")).toBeInTheDocument();
  });

  it("renders the Back to Home button", () => {
    render(<About />);
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });

  it("renders all 6 section step numbers", () => {
    render(<About />);
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  it("renders synapse dividers between sections", () => {
    render(<About />);
    const dividers = document.querySelectorAll(".synapse-line");
    expect(dividers.length).toBeGreaterThanOrEqual(1);
  });
});
