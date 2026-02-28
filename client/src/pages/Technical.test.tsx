import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import Technical from "./Technical";

describe("Technical Page", () => {
  it("renders the page title", () => {
    render(<Technical />);
    expect(screen.getByText("Technical Architecture")).toBeInTheDocument();
  });

  it("renders the System Design label", () => {
    render(<Technical />);
    expect(screen.getByText("System Design")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<Technical />);
    expect(screen.getByText(/system design patterns, API paradigms/i)).toBeInTheDocument();
  });

  it("renders Architecture Layers heading", () => {
    render(<Technical />);
    expect(screen.getByText("Architecture Layers")).toBeInTheDocument();
  });

  it("renders all 5 architecture layers", () => {
    render(<Technical />);
    expect(screen.getByText("Interaction Layer")).toBeInTheDocument();
    expect(screen.getByText("Cognitive Engine")).toBeInTheDocument();
    expect(screen.getByText("Knowledge Layer")).toBeInTheDocument();
    expect(screen.getByText("Safety & Alignment Layer")).toBeInTheDocument();
    expect(screen.getByText("Infrastructure Layer")).toBeInTheDocument();
  });

  it("renders layer numbering", () => {
    render(<Technical />);
    expect(screen.getByText("Layer 1 of 5")).toBeInTheDocument();
    expect(screen.getByText("Layer 2 of 5")).toBeInTheDocument();
    expect(screen.getByText("Layer 3 of 5")).toBeInTheDocument();
    expect(screen.getByText("Layer 4 of 5")).toBeInTheDocument();
    expect(screen.getByText("Layer 5 of 5")).toBeInTheDocument();
  });

  it("renders Interaction Layer components", () => {
    render(<Technical />);
    expect(screen.getByText("Context Window Manager")).toBeInTheDocument();
    expect(screen.getByText("Intent Classifier")).toBeInTheDocument();
    expect(screen.getByText("Multimodal Router")).toBeInTheDocument();
    expect(screen.getByText("Response Synthesizer")).toBeInTheDocument();
  });

  it("renders Cognitive Engine components", () => {
    render(<Technical />);
    expect(screen.getByText("Model Router")).toBeInTheDocument();
    expect(screen.getByText("Task Decomposer")).toBeInTheDocument();
    expect(screen.getByText("Co-Creation Engine")).toBeInTheDocument();
    expect(screen.getByText("Integration Adapter")).toBeInTheDocument();
  });

  it("renders Knowledge Layer components", () => {
    render(<Technical />);
    expect(screen.getByText("Vector Store")).toBeInTheDocument();
    expect(screen.getByText("Knowledge Graph")).toBeInTheDocument();
    expect(screen.getByText("User Model")).toBeInTheDocument();
    expect(screen.getByText("Citation Index")).toBeInTheDocument();
  });

  it("renders Safety Layer components", () => {
    render(<Technical />);
    expect(screen.getByText("Output Validator")).toBeInTheDocument();
    expect(screen.getByText("Bias Monitor")).toBeInTheDocument();
    expect(screen.getByText("Audit Logger")).toBeInTheDocument();
    expect(screen.getByText("Human Override")).toBeInTheDocument();
  });

  it("renders Infrastructure Layer components", () => {
    render(<Technical />);
    expect(screen.getByText("Model Serving")).toBeInTheDocument();
    expect(screen.getByText("Edge Compute")).toBeInTheDocument();
    expect(screen.getByText("API Gateway")).toBeInTheDocument();
    expect(screen.getByText("Observability")).toBeInTheDocument();
  });

  it("renders Design Patterns labels", () => {
    render(<Technical />);
    const labels = screen.getAllByText("Design Patterns");
    expect(labels.length).toBe(5);
  });

  it("renders API Paradigms section", () => {
    render(<Technical />);
    expect(screen.getByText("API Paradigms")).toBeInTheDocument();
  });

  it("renders all 4 API paradigms", () => {
    render(<Technical />);
    expect(screen.getByText("Synchronous Request-Response")).toBeInTheDocument();
    expect(screen.getByText("Server-Sent Events (SSE)")).toBeInTheDocument();
    expect(screen.getByText("WebSocket Bidirectional")).toBeInTheDocument();
    expect(screen.getByText("Async Task Queue")).toBeInTheDocument();
  });

  it("renders API use cases", () => {
    render(<Technical />);
    expect(screen.getByText("Simple augmentation queries")).toBeInTheDocument();
    expect(screen.getByText("Streaming AI responses")).toBeInTheDocument();
    expect(screen.getByText("Co-creation sessions")).toBeInTheDocument();
    expect(screen.getByText("Delegation model tasks")).toBeInTheDocument();
  });

  it("renders API code examples", () => {
    render(<Technical />);
    expect(screen.getByText(/POST \/api\/v1\/augment/)).toBeInTheDocument();
    expect(screen.getByText(/GET \/api\/v1\/stream/)).toBeInTheDocument();
  });

  it("renders Pros and Cons for API paradigms", () => {
    render(<Technical />);
    const pros = screen.getAllByText("Pros");
    const cons = screen.getAllByText("Cons");
    expect(pros.length).toBe(4);
    expect(cons.length).toBe(4);
  });

  it("renders the CTA section", () => {
    render(<Technical />);
    expect(screen.getByText(/See where this technology is heading/i)).toBeInTheDocument();
  });

  it("renders the View Roadmap button", () => {
    render(<Technical />);
    expect(screen.getByText("View Roadmap")).toBeInTheDocument();
  });
});
