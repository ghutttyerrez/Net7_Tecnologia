import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Planos from "@pages/Planos";
import Suporte from "@pages/Suporte";
import AppMinhaLink from "@pages/AppMinhaLink";
import IndiqueGanhe from "@pages/IndiqueGanhe";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/minha-link" element={<AppMinhaLink />} />
            <Route path="/indique-ganhe" element={<IndiqueGanhe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
