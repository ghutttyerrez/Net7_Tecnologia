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
            <NavLink to="/faq" className={linkClass}>
              FAQ
            </NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/net7tecnologia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center text-neutral-600 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-1.7C8.7.5 8.3.5 7 0 5.7.1 4.9.2 4.2.5c-.8.3-1.5.6-2.1 1.2C1.5 2.3 1.2 3 1 3.8c-.3.7-.4 1.5-.5 2.8C0 7.9 0 8.3 0 12s0 4.1.5 5.4c.1 1.3.2 2.1.5 2.8.3.8.6 1.5 1.2 2.1.6.6 1.3.9 2.1 1.2.7.3 1.5.4 2.8.5C8.3 24 8.7 24 12 24s3.7 0 5-.5c1.3-.1 2.1-.2 2.8-.5.8-.3 1.5-.6 2.1-1.2.6-.6.9-1.3 1.2-2.1.3-.7.4-1.5.5-2.8.5-1.3.5-1.7.5-5.4s0-4.1-.5-5.4c-.1-1.3-.2-2.1-.5-2.8-.3-.8-.6-1.5-1.2-2.1-.6-.6-1.3-.9-2.1-1.2-.7-.3-1.5-.4-2.8-.5C15.7.5 15.3.5 12 .5Z" />
                <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.3A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1Z" />
                <circle cx="18.4" cy="5.6" r="1.3" />
              </svg>
            </a>
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
            {/* Instagram */}
            <a
              href="https://instagram.com/SEU_PERFIL"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center text-neutral-600 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-1.7C8.7.5 8.3.5 7 0 5.7.1 4.9.2 4.2.5c-.8.3-1.5.6-2.1 1.2C1.5 2.3 1.2 3 1 3.8c-.3.7-.4 1.5-.5 2.8C0 7.9 0 8.3 0 12s0 4.1.5 5.4c.1 1.3.2 2.1.5 2.8.3.8.6 1.5 1.2 2.1.6.6 1.3.9 2.1 1.2.7.3 1.5.4 2.8.5C8.3 24 8.7 24 12 24s3.7 0 5-.5c1.3-.1 2.1-.2 2.8-.5.8-.3 1.5-.6 2.1-1.2.6-.6.9-1.3 1.2-2.1.3-.7.4-1.5.5-2.8.5-1.3.5-1.7.5-5.4s0-4.1-.5-5.4c-.1-1.3-.2-2.1-.5-2.8-.3-.8-.6-1.5-1.2-2.1-.6-.6-1.3-.9-2.1-1.2-.7-.3-1.5-.4-2.8-.5C15.7.5 15.3.5 12 .5Z" />
                <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.3A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1Z" />
                <circle cx="18.4" cy="5.6" r="1.3" />
              </svg>
            </a>
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
              to="/faq"
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
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
