import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ListShop, { Item } from "./ListShop.jsx";

describe("Item Component", () => {
  const mockProps = {
    name: "classic-tee",
    title: "Classic T-Shirt",
    price: 25,
    imgSrc: "/tee.jpg",
  };

  it("renders product info and builds the correct shop Link URL", () => {
    render(
      <MemoryRouter>
        <Item {...mockProps} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Classic T-Shirt" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "$ 25" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Classic T-Shirt" }),
    ).toHaveAttribute("src", "/tee.jpg");

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/shop/classic-tee",
    );
  });
});

describe("ListShop Component", () => {
  it("renders the empty state when no items are provided", () => {
    render(
      <MemoryRouter>
        <ListShop />
      </MemoryRouter>,
    );

    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });

  it("renders an empty state when an empty array is passed", () => {
    render(
      <MemoryRouter>
        <ListShop listItem={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });

  it("renders a list of products when data is supplied", () => {
    const mockItems = [
      { name: "shirt", title: "Shirt", price: 20 },
      { name: "pants", title: "Pants", price: 40 },
    ];

    render(
      <MemoryRouter>
        <ListShop listItem={mockItems} />
      </MemoryRouter>,
    );

    const items = screen.getAllByRole("heading", { level: 2 });
    expect(items).toHaveLength(2);
    expect(
      screen.getByRole("heading", { level: 2, name: "Shirt" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Pants" }),
    ).toBeInTheDocument();
  });
});
