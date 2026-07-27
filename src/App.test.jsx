import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders all navigation buttons", () => {
    render(<App />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent(/homepage/i);
    expect(buttons[1]).toHaveTextContent(/shop/i);
    expect(buttons[2]).toHaveTextContent(/cart/i);
  });
});
