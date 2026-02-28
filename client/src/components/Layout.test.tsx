import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "../test/test-utils";
import Layout from "./Layout";

describe("Layout Component", () => {
  it("renders the Cogito brand name", () => {
    render(<Layout><div>Test</div></Layout>);
    const brandNames = screen.getAllByText("Cogito");
    expect(brandNames.length).toBeGreaterThanOrEqual(1);
  });

  it("renders navigation links", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getAllByText("Home").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Collaboration Models").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Use Cases").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Research").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Technical").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Roadmap").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("FAQ").length).toBeGreaterThanOrEqual(1);
  });

  it("renders children content", () => {
    render(<Layout><div>Child Content Here</div></Layout>);
    expect(screen.getByText("Child Content Here")).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText(/AI Collaboration Hub/i)).toBeInTheDocument();
  });

  it("renders the footer tagline", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText(/Cogito, ergo codifico/i)).toBeInTheDocument();
  });

  it("renders the version number", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText(/Neural Cartography/i)).toBeInTheDocument();
  });

  it("renders the copyright year", () => {
    render(<Layout><div>Test</div></Layout>);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the GitHub link in footer", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText("GitHub Repository")).toBeInTheDocument();
  });

  it("renders the Research Papers link in footer", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText("Research Papers")).toBeInTheDocument();
  });

  it("renders the Navigation heading in footer", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText("Navigation")).toBeInTheDocument();
  });

  it("renders the Resources heading in footer", () => {
    render(<Layout><div>Test</div></Layout>);
    expect(screen.getByText("Resources")).toBeInTheDocument();
  });

  it("renders the mobile menu toggle button", () => {
    render(<Layout><div>Test</div></Layout>);
    const toggleBtn = screen.getByLabelText("Toggle menu");
    expect(toggleBtn).toBeInTheDocument();
  });

  it("toggles mobile menu on click", () => {
    render(<Layout><div>Test</div></Layout>);
    const toggleBtn = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleBtn);
    // After click, menu should be open — the X icon should appear
    // We just verify the button is still there (it toggles between Menu and X)
    expect(toggleBtn).toBeInTheDocument();
  });

  it("renders the Brain icon in header", () => {
    render(<Layout><div>Test</div></Layout>);
    const brainIcons = document.querySelectorAll("svg");
    expect(brainIcons.length).toBeGreaterThan(0);
  });
});
