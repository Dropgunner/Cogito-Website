import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import FAQ from "./FAQ";

describe("FAQ Page", () => {
  it("renders the page title", () => {
    render(<FAQ />);
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });

  it("renders the Common Questions label", () => {
    render(<FAQ />);
    expect(screen.getByText("Common Questions")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<FAQ />);
    expect(screen.getByText(/Answers to common questions/i)).toBeInTheDocument();
  });

  it("renders About Cogito category", () => {
    render(<FAQ />);
    expect(screen.getByText("About Cogito")).toBeInTheDocument();
  });

  it("renders Collaboration Models category", () => {
    render(<FAQ />);
    expect(screen.getByText("Collaboration Models")).toBeInTheDocument();
  });

  it("renders Ethics & Safety category", () => {
    render(<FAQ />);
    expect(screen.getByText("Ethics & Safety")).toBeInTheDocument();
  });

  it("renders Technical category", () => {
    render(<FAQ />);
    expect(screen.getByText("Technical")).toBeInTheDocument();
  });

  it("renders Getting Involved category", () => {
    render(<FAQ />);
    expect(screen.getByText("Getting Involved")).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FAQ />);
    expect(screen.getByText("What is the Cogito project?")).toBeInTheDocument();
    expect(screen.getByText("Who is behind this project?")).toBeInTheDocument();
    expect(screen.getByText("Is this an academic project or a product?")).toBeInTheDocument();
    expect(screen.getByText("What are the five collaboration models?")).toBeInTheDocument();
    expect(screen.getByText(/Which collaboration model is/i)).toBeInTheDocument();
    expect(screen.getByText(/How do these models relate/i)).toBeInTheDocument();
    expect(screen.getByText(/What are the ethical implications/i)).toBeInTheDocument();
    expect(screen.getByText(/Does AI collaboration threaten/i)).toBeInTheDocument();
    expect(screen.getByText(/How do you ensure AI alignment/i)).toBeInTheDocument();
    expect(screen.getByText(/What technology stack/i)).toBeInTheDocument();
    expect(screen.getByText(/Can I implement these models/i)).toBeInTheDocument();
    expect(screen.getByText(/How does the Citation Graph work/i)).toBeInTheDocument();
    expect(screen.getByText(/How can I contribute/i)).toBeInTheDocument();
    expect(screen.getByText(/Can I use Cogito's content/i)).toBeInTheDocument();
  });

  it("renders 14 FAQ items total", () => {
    render(<FAQ />);
    const triggers = document.querySelectorAll("[data-state]");
    expect(triggers.length).toBeGreaterThanOrEqual(14);
  });

  it("renders the CTA section", () => {
    render(<FAQ />);
    expect(screen.getByText(/Ready to explore the full framework/i)).toBeInTheDocument();
  });

  it("renders the Back to Home button", () => {
    render(<FAQ />);
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });
});
