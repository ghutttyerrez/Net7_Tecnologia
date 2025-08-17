import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive
        ? "text-neutral-900 dark:text-white"
        : "text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive
        ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-brand-600/20"
        : "text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10"
    }`;

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    scrollTop();
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={scrollTop}>
            <div className="h-8 w-8 rounded-lg border border-white/10 overflow-hidden">
              <img
                src={logo}
                alt="Net7 Tecnologia"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-neutral-900 dark:text-white/80 hover:text-neutral-700 dark:hover:text-white transition-colors">
              Net7 Tecnologia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkClass} end onClick={scrollTop}>
              Início
            </NavLink>
            <NavLink to="/planos" className={linkClass} onClick={scrollTop}>
              Planos
            </NavLink>
            <NavLink to="/suporte" className={linkClass}>
              Suporte
            </NavLink>
            <NavLink to="/minha-link" className={linkClass}>
              Minha Net7
            </NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Indique e Ganhe Button */}
            <Link
              to="/indique-ganhe"
              className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-base font-medium hover:bg-green-600"
              onClick={scrollTop}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Indique e ganhe
            </Link>

            {/* Contratar Button */}
            <a
              href="#contato"
              className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-base font-medium hover:bg-green-600"
            >
              Contratar
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur transition-colors duration-300">
          <nav className="container py-4 space-y-2">
            <NavLink
              to="/"
              className={mobileLinkClass}
              end
              onClick={handleMobileNavClick}
            >
              Início
            </NavLink>
            <NavLink
              to="/planos"
              className={mobileLinkClass}
              onClick={handleMobileNavClick}
            >
              Planos
            </NavLink>
            <NavLink
              to="/suporte"
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Suporte
            </NavLink>
            <NavLink
              to="/minha-link"
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Minha Net7
            </NavLink>
            <NavLink
              to="/indique-ganhe"
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Indique e ganhe
              </div>
            </NavLink>

            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
              <a
                href="#contato"
                className="block w-full text-center rounded-md bg-green-500 px-4 py-3 text-base font-medium text-white hover:bg-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contratar
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
