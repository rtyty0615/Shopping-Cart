import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ItemPage from "./ItemPage";
import { describe, it, expect } from "vitest";

const mockList = [
  {
    name: "coffee-mug",
    title: "Coffee Mug",
    price: 15,
    description: "A sturdy ceramic mug.",
    imgSrc: "/images/mug.jpg",
    cartSum: 0,
  },
];

const mockSetListItem = vi.fn();

function MockParentLayout() {
  return <Outlet context={[mockList, mockSetListItem]} />;
}

function renderItemPage(initialUrl = "/shop/coffee-mug") {
  return render(
    <MemoryRouter initialEntries={[initialUrl]}>
      <Routes>
        <Route path="/shop" element={<MockParentLayout />}>
          <Route path=":itemName" element={<ItemPage />} />
          <Route index element={<ItemPage />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("ItemPage - Initial Data Display", () => {
  it("renders the correct product details based on the URL parameter", () => {
    renderItemPage("/shop/coffee-mug");

    const title = screen.getByRole("heading", {
      level: 2,
      name: "Coffee Mug",
    });
    expect(title).toBeInTheDocument();

    const price = screen.getByRole("heading", {
      level: 3,
      name: "$ 15",
    });
    expect(price).toBeInTheDocument();

    const description = screen.getByText("A sturdy ceramic mug.");
    expect(description).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "Coffee Mug" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/mug.jpg");

    const defaultValue = screen.getByRole("spinbutton");
    expect(defaultValue).toBeInTheDocument();

    expect(defaultValue).toHaveValue(1);
  });

  it("renders Shop when product not found", () => {
    renderItemPage("/shop");
    expect(screen.queryByText(/$ 15/i)).not.toBeInTheDocument();
  });
});

describe("Quantity Controller Logic (User Interactions)", () => {
  it("add one after add button click", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const addButton = screen.getByRole("button", { name: "+" });
    await user.click(addButton);
    expect(screen.getByRole("spinbutton")).toHaveValue(2);
  });

  it("minus one after minus button click", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const minusButton = screen.getByRole("button", { name: "-" });
    await user.click(minusButton);
    expect(screen.getByRole("spinbutton")).toHaveValue(0);
  });

  it("will not be less than 0", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const minusButton = screen.getByRole("button", { name: "-" });
    await user.click(minusButton);
    await user.click(minusButton);
    await user.click(minusButton);
    expect(screen.getByRole("spinbutton")).toHaveValue(0);
  });

  it("shows what number user types in input", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "20");
    expect(input).toHaveValue(20);
  });

  it("leave the input empty", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.tab();
    expect(input).toHaveValue(1);
  });

  it("type a negative number", async () => {
    const user = userEvent.setup();

    renderItemPage("/shop/coffee-mug");
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "-10");
    await user.tab();
    expect(input).toHaveValue(0);
    expect(mockSetListItem).not.toHaveBeenCalled();
  });
});

describe("Add to Cart Action", () => {
  it("Add quantity in input to cart after click Cart button", async () => {
    const user = userEvent.setup();
    renderItemPage("/shop/coffee-mug");
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "20");

    const cartButton = screen.getByRole("button", { name: "ADD TO CART" });
    await user.click(cartButton);

    expect(mockSetListItem).toHaveBeenCalled();
  });
});
