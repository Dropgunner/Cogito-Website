import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import Research from "./Research";

describe("Research Page", () => {
  it("renders the page title", () => {
    render(<Research />);
    expect(screen.getByText("Research Foundation")).toBeInTheDocument();
  });

  it("renders the Evidence Base label", () => {
    render(<Research />);
    expect(screen.getByText("Evidence Base")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<Research />);
    expect(screen.getByText(/empirical and theoretical evidence/i)).toBeInTheDocument();
  });

  it("renders the Hutchins blockquote", () => {
    render(<Research />);
    expect(screen.getAllByText(/Cognition is distributed across individuals/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Hutchins attribution", () => {
    render(<Research />);
    expect(screen.getByText(/Edwin Hutchins, Cognition in the Wild/i)).toBeInTheDocument();
  });

  it("renders Software Development category", () => {
    render(<Research />);
    expect(screen.getByText(/Expectation vs. Experience/i)).toBeInTheDocument();
  });

  it("renders Scientific Research category", () => {
    render(<Research />);
    expect(screen.getByText(/Highly accurate protein structure prediction/i)).toBeInTheDocument();
  });

  it("renders Healthcare category", () => {
    render(<Research />);
    expect(screen.getByText(/High-performance medicine/i)).toBeInTheDocument();
  });

  it("renders Education category", () => {
    render(<Research />);
    expect(screen.getByText(/Relative Effectiveness of Human Tutoring/i)).toBeInTheDocument();
  });

  it("renders Theoretical Foundation category", () => {
    render(<Research />);
    expect(screen.getAllByText("Cognition in the Wild").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("The Extended Mind").length).toBeGreaterThanOrEqual(1);
  });

  it("renders key findings for citations", () => {
    render(<Research />);
    const keyFindings = screen.getAllByText("Key Finding");
    expect(keyFindings.length).toBeGreaterThanOrEqual(5);
  });

  it("renders relevance sections for citations", () => {
    render(<Research />);
    const relevanceSections = screen.getAllByText("Relevance to Cogito");
    expect(relevanceSections.length).toBeGreaterThanOrEqual(5);
  });

  it("renders author names", () => {
    render(<Research />);
    expect(screen.getByText(/Vaithilingam, P., Zhang, T/i)).toBeInTheDocument();
    expect(screen.getByText(/Jumper, J., Evans, R/i)).toBeInTheDocument();
  });

  it("renders publication years", () => {
    render(<Research />);
    expect(screen.getAllByText(/\(2022\)/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/\(2021\)/)).toBeInTheDocument();
    expect(screen.getAllByText(/\(1995\)/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders venue information", () => {
    render(<Research />);
    expect(screen.getByText("CHI '22 Extended Abstracts")).toBeInTheDocument();
    expect(screen.getByText(/Nature, 596/)).toBeInTheDocument();
  });

  it("renders citation stats section", () => {
    render(<Research />);
    expect(screen.getByText("Core Citations")).toBeInTheDocument();
    expect(screen.getByText("Research Domains")).toBeInTheDocument();
    expect(screen.getByText("Publication Range")).toBeInTheDocument();
    expect(screen.getByText("Peer-Reviewed Journals")).toBeInTheDocument();
  });

  it("renders DOI links for citations with DOIs", () => {
    render(<Research />);
    const externalLinks = document.querySelectorAll('a[href*="doi.org"]');
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it("renders the CTA section", () => {
    render(<Research />);
    expect(screen.getByText(/See how these findings translate/i)).toBeInTheDocument();
  });

  it("renders the Technical Architecture CTA button", () => {
    render(<Research />);
    expect(screen.getByText("Technical Architecture")).toBeInTheDocument();
  });

  it("renders the research hero image", () => {
    render(<Research />);
    const images = document.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders the correct number of citations (12)", () => {
    render(<Research />);
    expect(screen.getByText("12")).toBeInTheDocument();
  });
});
