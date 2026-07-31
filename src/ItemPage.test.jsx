import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import ItemPage from "./ItemPage";

// Mock the nested Shop component to keep the test isolated
vi.mock("./Shop", () => ({
  default: () => <div>Shop Component</div>,
}));

// Mock data provided via useOutletContext
const mockItems = [
  {
    name: "keyboard",
    title: "Mechanical Keyboard",
    price: 99,
    imgSrc: "/keyboard.jpg",
    description: "A great tactile mechanical keyboard.",
  },
];

describe("ItemPage component", () => {
  it("renders item details when itemName is provided in the URL", () => {
    render(
      <MemoryRouter initialEntries={["/shop/keyboard"]}>
        <Routes>
          {/* Parent Route passes mockItems through Outlet context */}
          <Route element={<Outlet context={mockItems} />}>
            <Route path="/shop/:itemName" element={<ItemPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    // Verify Title & Info
    expect(
      screen.getByRole("heading", { level: 2, name: /mechanical keyboard/i }),
    ).toBeDefined();
    expect(screen.getByText(/\$ 99/i)).toBeDefined();
    expect(
      screen.getByText(/a great tactile mechanical keyboard/i),
    ).toBeDefined();

    // Verify Image attributes
    const image = screen.getByRole("img", { name: /mechanical keyboard/i });
    expect(image.getAttribute("src")).toBe("/keyboard.jpg");

    // Verify Controls
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeDefined();

    const backLink = screen.getByRole("link", { name: /go back/i });
    expect(backLink.getAttribute("href")).toBe("/shop");
  });

  it("renders the Shop component when itemName is omitted from the URL", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route element={<Outlet context={mockItems} />}>
            <Route path="/shop" element={<ItemPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    // Verify that mocked Shop component is shown
    expect(screen.getByText("Shop Component")).toBeDefined();

    // Verify that ItemInfo elements are not present
    expect(screen.queryByRole("button", { name: /add to cart/i })).toBeNull();
  });
});
