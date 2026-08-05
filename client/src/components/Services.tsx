/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Services: Layout editorial assimétrico, sem grid uniforme de cards.
 * Motivo cartográfico: linhas âmbar direcionais, numeracao editorial, pull-stat.
 * Dark mode suportado via useTheme.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  PiggyBank,
  FileText,
  TrendingUp,
  Calculator,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const services = [
  {
    icon: BarChart3,
    number: "01",
    title: "Diagnóstico Financeiro",
    description:
      "Análise completa da saúde financeira do seu negócio, identificando gargalos, oportunidades e pontos de melhoria com relatório detalhado.",
    outcome: "Visão clara em 15 dias",
  },
  {
    icon: PiggyBank,
    number: "02",
    title: "Fluxo de Caixa",
    description:
      "Implementação de controles de entrada e saída, projeções realistas e alertas para garantir que seu negócio nunca fique sem capital.",
    outcome: "Zero surpresas financeiras",
  },
  {
    icon: FileText,
    number: "03",
    title: "Planejamento Estratégico",
    description:
      "Elaboração de planos financeiros de curto, médio e longo prazo alinhados aos objetivos de crescimento da sua empresa.",
    outcome: "Rota de crescimento definida",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Análise de Rentabilidade",
    description:
      "Identificação dos produtos e serviços mais lucrativos, precificação inteligente e otimização de margens para maximizar resultados.",
    outcome: "Margens otimizadas",
  },
  {
    icon: Calculator,
    number: "05",
    title: "Gestão de Custos",
    description:
      "Redução estruturada de despesas, negociação com fornecedores e controle eficiente de custos fixos e variáveis.",
    outcome: "Redução de até 30% em custos",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Consultoria Mensal",
    description:
      "Acompanhamento contínuo com reuniões periódicas, ajustes em tempo real e suporte para decisões financeiras do dia a dia.",
    outcome: "Parceiro estratégico contínuo",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section id="servicos" className={`py-24 lg:py-32 relative overflow-hidden ${isLight ? "bg-stone-50" : "bg-background"}`}>
      {/* Subtle cartographic grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(oklch(0.67 0.17 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.67 0.17 60) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative container" ref={ref}>
        {/* Header — asymmetric */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              >
                Serviços
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-20 h-1 bg-amber-600 mb-6 origin-left"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`font-display text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 ${isLight ? "text-stone-900" : "text-foreground"}`}
              >
                Soluções financeiras sob medida
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-lg leading-relaxed max-w-lg ${isLight ? "text-stone-600" : "text-muted-foreground"}`}
              >
                Cada serviço é desenhado para a realidade da sua empresa — sem
                pacotes genéricos, sem fórmulas prontas.
              </motion.p>
            </div>

            {/* Decorative cartographic element — right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden xl:flex flex-col items-end gap-2"
            >
              <div className={`flex items-center gap-3 text-xs font-mono tracking-wider ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                <div className="w-8 h-px bg-amber-600/40" />
                <span>MÉTODOS</span>
              </div>
              <div className={`flex items-center gap-3 text-xs font-mono tracking-wider ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                <div className="w-16 h-px bg-amber-600/20" />
                <span>ESTRATÉGIAS</span>
              </div>
              <div className={`flex items-center gap-3 text-xs font-mono tracking-wider ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                <div className="w-12 h-px bg-amber-600/10" />
                <span>RESULTADOS</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services list — editorial asymmetric, not uniform cards */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.08,
              }}
              className="group"
            >
              {/* Amber divider between items */}
              {i > 0 && (
                <div className="flex items-center gap-4 py-0">
                  <div className={`h-px flex-1 ${isLight ? "bg-stone-200" : "bg-border"}`} />
                </div>
              )}

              <div className={`grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-start`}>
                {/* Number + Icon — left */}
                <div className="lg:col-span-2 flex items-start gap-4">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-amber-600/30 group-hover:text-amber-600/60 transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                {/* Content — center-left, wider */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="w-5 h-5 text-amber-500" />
                    <h3 className={`font-display text-xl lg:text-2xl font-semibold transition-colors duration-300 group-hover:text-amber-500 ${isLight ? "text-stone-900" : "text-foreground"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`leading-relaxed max-w-lg ${isLight ? "text-stone-600" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                </div>

                {/* Outcome — right, editorial */}
                <div className="lg:col-span-4 flex items-start justify-start lg:justify-end pt-1">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isLight
                      ? "bg-amber-50 border border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200"
                      : "bg-amber-600/10 border border-amber-600/20 group-hover:bg-amber-600/15 group-hover:border-amber-600/30"
                  }`}>
                    <ArrowUpRight className="w-4 h-4 text-amber-600" />
                    <span className={`text-sm font-medium whitespace-nowrap ${
                      isLight ? "text-amber-700" : "text-amber-400"
                    }`}>
                      {service.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom cartographic marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`mt-16 flex items-center gap-3 text-xs font-mono ${isLight ? "text-stone-400" : "text-muted-foreground"}`}
        >
          <div className="w-2 h-2 rounded-full bg-amber-600" />
          <span>6 serviços especializados em gestão financeira</span>
          <div className={`w-24 h-px ${isLight ? "bg-stone-300" : "bg-border"}`} />
        </motion.div>
      </div>
    </section>
  );
}
