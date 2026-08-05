/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Footer: Elegante, com tipografia serifada, tom escuro — adaptável ao tema.
 */
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer className={`${isLight ? "bg-stone-950 text-stone-300" : "bg-stone-900 text-stone-300"} py-16`}>
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Visão Empreendedora"
                className="h-8 w-8"
              />
              <span className="font-display text-lg font-bold text-white">
                Visão Empreendedora
              </span>
            </div>
            <p className={`leading-relaxed max-w-md text-sm ${isLight ? "text-stone-400" : "text-stone-400"}`}>
              Consultoria financeira estratégica para pequenas empresas.
              Transformando números em decisões inteligentes e crescimento
              sustentável.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#inicio"
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-stone-400 text-sm">
                  Diagnóstico Financeiro
                </span>
              </li>
              <li>
                <span className="text-stone-400 text-sm">Fluxo de Caixa</span>
              </li>
              <li>
                <span className="text-stone-400 text-sm">
                  Planejamento Estratégico
                </span>
              </li>
              <li>
                <span className="text-stone-400 text-sm">
                  Consultoria Mensal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 ${isLight ? "border-stone-800" : "border-stone-700"}`}>
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Visão Empreendedora. Todos os
            direitos reservados.
          </p>
          <p className="text-stone-600 text-xs">
            Consultoria Financeira para Pequenas Empresas
          </p>
        </div>
      </div>
    </footer>
  );
}
