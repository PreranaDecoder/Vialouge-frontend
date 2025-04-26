// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Dashboard } from "@/pages/dashboard";
import { Login } from "@/pages/login";
import { SenderIds } from "@/pages/senderIds";
import { ContentTemplates } from "@/pages/contenttemplates";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />, // Layout will use Outlet to render nested routes
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/sender-ids",
        element: <SenderIds />,
      },
      {
        path: "/content-templates",
        element: <ContentTemplates />,
      },
    ],
  },
]);
