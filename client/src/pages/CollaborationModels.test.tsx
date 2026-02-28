import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "../test/test-utils";
import CollaborationModels from "./CollaborationModels";

describe("CollaborationModels Page", () => {
  it("renders the page title", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Collaboration Models")).toBeInTheDocument();
  });

  it("renders the Five Paradigms label", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Five Paradigms")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<CollaborationModels />);
    expect(screen.getByText(/taxonomy of human-AI partnership/i)).toBeInTheDocument();
  });

  it("renders all five model titles in the sidebar", () => {
    render(<CollaborationModels />);
    expect(screen.getAllByText("Augmentation").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Delegation").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Co-Creation").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Integration").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Symbiosis").length).toBeGreaterThanOrEqual(1);
  });

  it("renders model subtitles", () => {
    render(<CollaborationModels />);
    expect(screen.getAllByText("AI enhances human capabilities").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("AI executes autonomous subtasks").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Human and AI create together iteratively").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("AI embedded in cognitive workflows").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Emergent cognitive partnership").length).toBeGreaterThanOrEqual(1);
  });

  it("shows Augmentation model detail by default", () => {
    render(<CollaborationModels />);
    expect(screen.getByText(/augmentation model positions AI as a cognitive amplifier/i)).toBeInTheDocument();
  });

  it("shows maturity levels", () => {
    render(<CollaborationModels />);
    const maturityLabels = screen.getAllByText(/Maturity:/);
    expect(maturityLabels.length).toBe(5);
  });

  it("renders Human Role section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Human Role")).toBeInTheDocument();
  });

  it("renders AI Role section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("AI Role")).toBeInTheDocument();
  });

  it("renders Real-World Examples section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Real-World Examples")).toBeInTheDocument();
  });

  it("renders Strengths section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Strengths")).toBeInTheDocument();
  });

  it("renders Limitations section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Limitations")).toBeInTheDocument();
  });

  it("shows Augmentation examples by default", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("GitHub Copilot for code completion")).toBeInTheDocument();
  });

  it("switches to Delegation model on click", async () => {
    render(<CollaborationModels />);
    const buttons = screen.getAllByText("Delegation");
    const sidebarBtn = buttons[0].closest("button");
    if (sidebarBtn) fireEvent.click(sidebarBtn);
    await waitFor(() => {
      expect(screen.getByText(/In the delegation model/i)).toBeInTheDocument();
    });
  });

  it("switches to Co-Creation model on click", async () => {
    render(<CollaborationModels />);
    const buttons = screen.getAllByText("Co-Creation");
    const sidebarBtn = buttons[0].closest("button");
    if (sidebarBtn) fireEvent.click(sidebarBtn);
    await waitFor(() => {
      expect(screen.getByText(/Co-creation represents a true partnership/i)).toBeInTheDocument();
    });
  });

  it("switches to Integration model on click", async () => {
    render(<CollaborationModels />);
    const buttons = screen.getAllByText("Integration");
    const sidebarBtn = buttons[0].closest("button");
    if (sidebarBtn) fireEvent.click(sidebarBtn);
    await waitFor(() => {
      expect(screen.getByText(/integration model weaves AI capabilities/i)).toBeInTheDocument();
    });
  });

  it("switches to Symbiosis model on click", async () => {
    render(<CollaborationModels />);
    const buttons = screen.getAllByText("Symbiosis");
    const sidebarBtn = buttons[0].closest("button");
    if (sidebarBtn) fireEvent.click(sidebarBtn);
    await waitFor(() => {
      expect(screen.getByText(/Symbiosis represents the theoretical frontier/i)).toBeInTheDocument();
    });
  });

  it("renders the CTA section", () => {
    render(<CollaborationModels />);
    expect(screen.getByText(/See these models in action/i)).toBeInTheDocument();
  });

  it("renders the Explore Use Cases button", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Explore Use Cases")).toBeInTheDocument();
  });

  it("shows Delegation examples after switching", async () => {
    render(<CollaborationModels />);
    const buttons = screen.getAllByText("Delegation");
    const sidebarBtn = buttons[0].closest("button");
    if (sidebarBtn) fireEvent.click(sidebarBtn);
    await waitFor(() => {
      expect(screen.getByText(/Agentic AI systems/i)).toBeInTheDocument();
    });
  });

  it("shows correct maturity for Augmentation (5/5)", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Maturity: 5/5")).toBeInTheDocument();
  });

  it("shows correct maturity for Symbiosis (1/5)", () => {
    render(<CollaborationModels />);
    expect(screen.getByText("Maturity: 1/5")).toBeInTheDocument();
  });
});
