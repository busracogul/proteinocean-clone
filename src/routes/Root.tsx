import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductListPage from "@/pages/ProductListPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Router } from "@remix-run/router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:productName",
        element: <ProductDetailPage />,
      },
      {
        path: "/protein",
        element: <ProductListPage />,
      },
    ],
  },
];

export const router: Router = createBrowserRouter(routes);
