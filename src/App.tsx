import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("@pages/Home"));
const Planos = lazy(() => import("@pages/Planos"));
const Suporte = lazy(() => import("@pages/Suporte"));
const AppMinhaNet7 = lazy(() => import("@pages/AppMinhaNet7"));
const IndiqueGanhe = lazy(() => import("@pages/IndiqueGanhe"));
const FAQ = lazy(() => import("@pages/FAQ"));
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Suspense
            fallback={<div className="container py-10">Carregando…</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/suporte" element={<Suporte />} />
              <Route path="/minha-link" element={<AppMinhaNet7 />} />
              <Route path="/indique-ganhe" element={<IndiqueGanhe />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
