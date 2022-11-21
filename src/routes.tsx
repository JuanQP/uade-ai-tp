import { Layout } from "@features/UI/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  }
])
