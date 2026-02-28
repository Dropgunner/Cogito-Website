import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "../test/test-utils";
import UseCases from "./UseCases";

describe("UseCases Page", () => {
  it("renders the page title", () => {
    render(<UseCases />);
    expect(screen.getByText("Use Cases")).toBeInTheDocument();
  });

  it("renders the Real-World Applications label", () => {
    render(<UseCases />);
    expect(screen.getByText("Real-World Applications")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<UseCases />);
    expect(screen.getByText(/Detailed walkthroughs of human-AI collaboration/i)).toBeInTheDocument();
  });

  it("renders the All Domains filter button", () => {
    render(<UseCases />);
    expect(screen.getByText("All Domains")).toBeInTheDocument();
  });

  it("renders all domain filter buttons", () => {
    render(<UseCases />);
    expect(screen.getAllByText("Software Development").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Creative Work").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Scientific Research").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Education").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Healthcare").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Legal Practice").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all 6 use case cards by default", () => {
    render(<UseCases />);
    expect(screen.getByText("AI-Paired Programming: Beyond Autocomplete")).toBeInTheDocument();
    expect(screen.getByText("Collaborative Narrative Design")).toBeInTheDocument();
    expect(screen.getByText("AI-Accelerated Drug Discovery")).toBeInTheDocument();
    expect(screen.getByText("Adaptive Learning Environments")).toBeInTheDocument();
    expect(screen.getByText("AI-Augmented Clinical Decision Support")).toBeInTheDocument();
    expect(screen.getByText("AI-Enhanced Legal Research and Analysis")).toBeInTheDocument();
  });

  it("renders collaboration model labels", () => {
    render(<UseCases />);
    expect(screen.getByText("Model: Co-Creation + Delegation")).toBeInTheDocument();
    expect(screen.getByText("Model: Co-Creation")).toBeInTheDocument();
  });

  it("renders Collaboration Workflow headers", () => {
    render(<UseCases />);
    const headers = screen.getAllByText("Collaboration Workflow");
    expect(headers.length).toBe(6);
  });

  it("renders Human Contribution sections", () => {
    render(<UseCases />);
    const sections = screen.getAllByText("Human Contribution");
    expect(sections.length).toBe(6);
  });

  it("renders AI Contribution sections", () => {
    render(<UseCases />);
    const sections = screen.getAllByText("AI Contribution");
    expect(sections.length).toBe(6);
  });

  it("renders Measured Outcome sections", () => {
    render(<UseCases />);
    const sections = screen.getAllByText("Measured Outcome");
    expect(sections.length).toBe(6);
  });

  it("filters to Software Development only", () => {
    render(<UseCases />);
    const btn = screen.getByRole("button", { name: "Software Development" });
    fireEvent.click(btn);
    expect(screen.getByText("AI-Paired Programming: Beyond Autocomplete")).toBeInTheDocument();
    expect(screen.queryByText("Collaborative Narrative Design")).not.toBeInTheDocument();
  });

  it("filters to Healthcare only", () => {
    render(<UseCases />);
    const btn = screen.getByRole("button", { name: "Healthcare" });
    fireEvent.click(btn);
    expect(screen.getByText("AI-Augmented Clinical Decision Support")).toBeInTheDocument();
    expect(screen.queryByText("AI-Paired Programming: Beyond Autocomplete")).not.toBeInTheDocument();
  });

  it("returns to All Domains when clicking active filter", () => {
    render(<UseCases />);
    const btn = screen.getByRole("button", { name: "Healthcare" });
    fireEvent.click(btn);
    expect(screen.queryByText("AI-Paired Programming: Beyond Autocomplete")).not.toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.getByText("AI-Paired Programming: Beyond Autocomplete")).toBeInTheDocument();
  });

  it("renders citations for use cases", () => {
    render(<UseCases />);
    expect(screen.getByText(/Vaithilingam et al., 2022/i)).toBeInTheDocument();
  });

  it("renders workflow steps with numbered format", () => {
    render(<UseCases />);
    expect(screen.getAllByText("01").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("02").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the CTA section", () => {
    render(<UseCases />);
    expect(screen.getByText(/Explore the evidence behind these outcomes/i)).toBeInTheDocument();
  });

  it("renders the Research Foundation CTA button", () => {
    render(<UseCases />);
    expect(screen.getByText("Research Foundation")).toBeInTheDocument();
  });

  it("renders scenario descriptions", () => {
    render(<UseCases />);
    expect(screen.getByText(/senior developer is building a distributed event-sourcing system/i)).toBeInTheDocument();
  });

  it("renders outcome metrics", () => {
    render(<UseCases />);
    expect(screen.getByText(/Development time reduced by 60%/i)).toBeInTheDocument();
  });
});
