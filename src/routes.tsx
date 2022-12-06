import { Layout } from "@features/UI/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductSearch } from "./pages/ProductSearch";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/product-search/",
        element: <ProductSearch />,
      },
      {
        path: "/cart/",
        element: <Cart />,
      },
      {
        path: "/checkout/",
        element: <Checkout />,
      },
    ]
  }
])
