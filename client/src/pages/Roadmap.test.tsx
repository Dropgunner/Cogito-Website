import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import Roadmap from "./Roadmap";

describe("Roadmap Page", () => {
  it("renders the page title", () => {
    render(<Roadmap />);
    expect(screen.getByText("Roadmap")).toBeInTheDocument();
  });

  it("renders the Project Timeline label", () => {
    render(<Roadmap />);
    expect(screen.getByText("Project Timeline")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<Roadmap />);
    expect(screen.getByText(/trajectory from theoretical framework/i)).toBeInTheDocument();
  });

  it("renders all 6 phase titles", () => {
    render(<Roadmap />);
    expect(screen.getByText("Foundation")).toBeInTheDocument();
    expect(screen.getByText("Use Case Documentation")).toBeInTheDocument();
    expect(screen.getByText("Technical Architecture")).toBeInTheDocument();
    expect(screen.getByText("Open-Source Toolkit")).toBeInTheDocument();
    expect(screen.getByText("Empirical Validation")).toBeInTheDocument();
    expect(screen.getByText("Cognitive Partnership Platform")).toBeInTheDocument();
  });

  it("renders phase labels", () => {
    render(<Roadmap />);
    expect(screen.getByText("Phase 1")).toBeInTheDocument();
    expect(screen.getByText("Phase 2")).toBeInTheDocument();
    expect(screen.getByText("Phase 3")).toBeInTheDocument();
    expect(screen.getByText("Phase 4")).toBeInTheDocument();
    expect(screen.getByText("Phase 5")).toBeInTheDocument();
    expect(screen.getByText("Phase 6")).toBeInTheDocument();
  });

  it("renders time periods", () => {
    render(<Roadmap />);
    expect(screen.getByText("Q3 2024 – Q4 2024")).toBeInTheDocument();
    expect(screen.getByText("Q1 2025 – Q2 2025")).toBeInTheDocument();
  });

  it("renders completed status badges", () => {
    render(<Roadmap />);
    const completedBadges = screen.getAllByText("Completed");
    expect(completedBadges.length).toBe(2);
  });

  it("renders in-progress status badge", () => {
    render(<Roadmap />);
    expect(screen.getByText("In Progress")).toBeInTheDocument();
  });

  it("renders planned status badges", () => {
    render(<Roadmap />);
    const plannedBadges = screen.getAllByText("Planned");
    expect(plannedBadges.length).toBe(3);
  });

  it("renders deliverables sections", () => {
    render(<Roadmap />);
    const deliverableHeaders = screen.getAllByText("Deliverables");
    expect(deliverableHeaders.length).toBe(6);
  });

  it("renders Foundation phase deliverables", () => {
    render(<Roadmap />);
    expect(screen.getByText(/Collaboration model taxonomy/i)).toBeInTheDocument();
    expect(screen.getByText(/Literature review of 40/i)).toBeInTheDocument();
  });

  it("renders Open-Source Toolkit deliverables", () => {
    render(<Roadmap />);
    expect(screen.getByText(/Python\/TypeScript SDK/i)).toBeInTheDocument();
    expect(screen.getByText(/Community contribution guidelines/i)).toBeInTheDocument();
  });

  it("renders milestone descriptions", () => {
    render(<Roadmap />);
    expect(screen.getByText(/Establish the theoretical framework/i)).toBeInTheDocument();
    expect(screen.getByText(/Document real-world applications/i)).toBeInTheDocument();
  });

  it("renders the roadmap hero image", () => {
    render(<Roadmap />);
    const images = document.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders the CTA section", () => {
    render(<Roadmap />);
    expect(screen.getByText(/Have questions about the project/i)).toBeInTheDocument();
  });

  it("renders the Read FAQ button", () => {
    render(<Roadmap />);
    expect(screen.getByText("Read FAQ")).toBeInTheDocument();
  });
});
