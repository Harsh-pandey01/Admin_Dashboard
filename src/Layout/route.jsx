import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import OrdersPage from "../pages/OrdersPage";
import SettingsPage from "../pages/Setting";
import ProfilePage from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
