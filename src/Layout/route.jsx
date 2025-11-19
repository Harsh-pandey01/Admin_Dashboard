import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "./Layout";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const OrdersPage = lazy(() => import("../pages/OrdersPage"));
const SettingsPage = lazy(() => import("../pages/Setting"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

// Fallback Loader Component
const Loader = () => (
  <div className="p-10 text-center text-lg font-medium">Loading...</div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <OrdersPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<Loader />}>
            <SettingsPage />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
]);
