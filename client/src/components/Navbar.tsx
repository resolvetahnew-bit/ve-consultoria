/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Navbar: Fixa no topo, minimalista, transparente sobre o hero, sólida ao rolar.
 * Toggle de tema claro/escuro integrado.
 */
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = theme === "light";
  const textColor = scrolled
    ? (isLight ? "text-stone-700" : "text-stone-200")
    : "text-white/90 hover:text-white";
  const bgColor = scrolled
    ? (isLight ? "bg-white/95 border-stone-200" : "bg-stone-950/95 border-stone-800")
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor} ${
        scrolled ? "backdrop-blur-xl shadow-sm border-b" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Visão Empreendedora"
            className="h-9 w-9"
          />
          <span
            className={`font-display text-lg font-bold transition-colors duration-300 ${
              scrolled
                ? (isLight ? "text-stone-900" : "text-stone-100")
                : "text-white"
            }`}
          >
            Visão Empreendedora
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-amber-500 ${textColor}`}
            >
              {link.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 hover:bg-stone-500/10 ${textColor}`}
            aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contato"
            className="ml-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-600/20"
          >
            Fale Comigo
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${textColor}`}
            aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 transition-colors ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden backdrop-blur-xl border-b overflow-hidden ${
              isLight
                ? "bg-white/98 border-stone-200"
                : "bg-stone-950/98 border-stone-800"
            }`}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-2 font-medium hover:text-amber-500 transition-colors ${
                    isLight ? "text-stone-700" : "text-stone-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg text-center transition-all"
              >
                Fale Comigo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
