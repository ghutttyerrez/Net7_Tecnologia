import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
