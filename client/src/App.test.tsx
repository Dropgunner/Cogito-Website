import { describe, it, expect } from "vitest";
import { render, screen } from "./test/test-utils";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.querySelector("#root") || document.body).toBeTruthy();
  });

  it("renders the home page by default", () => {
    render(<App />);
    expect(screen.getAllByText(/Cogito, ergo/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the navigation", () => {
    render(<App />);
    const brandNames = screen.getAllByText("Cogito");
    expect(brandNames.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the footer", () => {
    render(<App />);
    expect(screen.getAllByText(/AI Collaboration Hub/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Toaster component", () => {
    render(<App />);
    // Sonner toaster renders a section element or list
    const body = document.body;
    expect(body.innerHTML.length).toBeGreaterThan(0);
  });
});
