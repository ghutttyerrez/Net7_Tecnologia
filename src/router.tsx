import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import RouteError from "@components/RouteError";

const Home = lazy(() => import("@pages/Home"));
const Planos = lazy(() => import("@pages/Planos"));
const Suporte = lazy(() => import("@pages/Suporte"));
const AppMinhaNet7 = lazy(() => import("@pages/AppMinhaNet7"));
const IndiqueGanhe = lazy(() => import("@pages/IndiqueGanhe"));
const FAQ = lazy(() => import("@pages/FAQ"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: "planos", element: <Planos /> },
      { path: "suporte", element: <Suporte /> },
      { path: "minha-link", element: <AppMinhaNet7 /> },
      { path: "indique-ganhe", element: <IndiqueGanhe /> },
      { path: "faq", element: <FAQ /> },
    ],
  },
]);
