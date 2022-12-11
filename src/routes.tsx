import { Layout } from "@features/UI/Layout";
import { RequireAuth } from 'react-auth-kit';
import { createBrowserRouter } from "react-router-dom";
import { RequireAdminAuth } from "./features/Admin/RequireAdminAuth";
import { LoginLayout } from "./features/UI/LoginLayout";
import { Account } from "./pages/Account";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MyOrders } from "./pages/MyOrders";
import { OrderDetail } from "./pages/OrderDetail";
import { Orders } from "./pages/Orders";
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
      {
        path: "/my-orders/",
        element: (
          <RequireAuth loginPath="/login">
            <MyOrders />
          </RequireAuth>
        ),
      },
      {
        path: "/order/:id",
        element: (
          <RequireAuth loginPath="/login">
            <OrderDetail />
          </RequireAuth>
        ),
      },
      {
        path: "/orders",
        element: (
          <RequireAdminAuth loginPath="/">
            <Orders />
          </RequireAdminAuth>
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
