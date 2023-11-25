import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: "customer",
        element: <div>cusromers</div>,
      },
      {
        path: "products",
        element: <div>products</div>,
      },
    ],
  },
]);
