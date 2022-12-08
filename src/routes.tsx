import { Layout } from "@features/UI/Layout";
import { RequireAuth } from 'react-auth-kit';
import { createBrowserRouter } from "react-router-dom";
import { LoginLayout } from "./features/UI/LoginLayout";
import { Account } from "./pages/Account";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductSearch } from "./pages/ProductSearch";
import { Register } from "./pages/Register";
import { RegisterOk } from "./pages/RegisterOk";

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
      {
        path: "/account/",
        element: (
          <RequireAuth loginPath="/login">
            <Account />
          </RequireAuth>
        ),
      },
    ]
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register-ok",
        element: <RegisterOk />,
      },
    ]
  },
])
