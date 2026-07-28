import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./RootLayout";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Backpack from "./card/Backpack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        children: [
          { index: true, element: <Shop /> },
          {
            path: "backpack",
            element: <Backpack />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
