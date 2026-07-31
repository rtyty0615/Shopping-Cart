import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

describe("Home component", () => {
  it("renders heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /hello from home page!/i }),
    ).toBeDefined();
  });

  it("renders the shop link with correct destination", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /shop now/i });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/shop");
  });
});
