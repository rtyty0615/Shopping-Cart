# Shopping Cart

A responsive, single-page e-commerce application built with React. Users can browse a selection of winter sale items, view individual product details, add items to their cart, adjust quantities, and view their calculated subtotal.

Product data is dynamically fetched from the [Fake Store API](https://fakestoreapi.com/).

## Learning Milestones

This project was a major stepping stone for me, marking my first time working with three powerful tools in the React ecosystem:

- React Router: Utilized the modern `createBrowserRouter` for robust routing. I learned how to set up a `RootLayout` with an `<Outlet />`, handle dynamic URL parameters (`useParams` for individual item pages), establish an `ErrorPage` for bad routes, and globally share state across routes using `useOutletContext`.

- Styled Components: Transitioned to CSS-in-JS! It was incredibly satisfying to scope styles directly to components, clean up my file structure by removing global CSS files, and build custom, reusable UI containers like `CartContainer` and `Nav`.

- Vitest & React Testing Library: Wrote my first suite of tests. I learned how to render components inside a `<MemoryRouter>`, mock layout contexts using `vi.fn()`, and simulate user interactions (clicking, typing, blurring) using `@testing-library/user-event` to ensure my cart logic works flawlessly.

## Features

- Dynamic Routing: Seamless navigation between Home, Shop, Product Details, and Cart.
- API Integration: Fetches real-world product data (titles, prices, descriptions, and images) using asynchronous calls to the Fake Store API.
- Loading & Error States: Provides visual feedback to the user while data is fetching or if the network request fails.
- Advanced Cart Logic:
  - Add products to the cart from the item page.
  - Increment/decrement quantities via buttons or direct input.
  - Input validation (prevents negative numbers and defaults invalid inputs to 1).
  - Cart badge in the navigation bar dynamically updates to show the total number of items.
  - Automatic subtotal calculation.
- Unit Tested: Comprehensive test coverage for the `ItemPage` checking rendering, routing fallbacks, and user interaction logic.

## Tech Stack

- Frontend: React (v18+)
- Routing: React Router
- Styling: Styled Components
- Testing: Vitest, React Testing Library, User-Event
- Build Tool: Vite (implied via Vitest)

## Project Structure highlights

- `main.jsx`: Application entry point and router configuration.
- `RootLayout.jsx`: The foundational layout component that fetches API data and passes the global `listItem` state down via `Outlet`.
- `Nav.jsx`: Contains the navigation links and a dynamic cart item badge.
- `Shop.jsx` & `ItemPage.jsx`: Renders the product grid and detailed individual product views.
- `Cart.jsx` & `ListCart.jsx`: Handles the cart rendering, item removal, quantity updates, and subtotal math.
- `ItemPage.test.jsx`: Vitest test suite ensuring UI reliability.

## Getting Started

To run this project locally, clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

### Running Tests

To run the Vitest test suite and verify the component logic:

```bash
npm run test
```
