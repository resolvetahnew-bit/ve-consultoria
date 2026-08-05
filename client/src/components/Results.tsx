/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Results: Layout editorial, pull-stats grandes, depoimentos com hierarquia visual.
 * Motivo cartográfico: linhas âmbare direcionais, números como artefatos editoriais.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    business: "Padaria Pão Dourado",
    text: "Antes da consultoria, eu não sabia para onde o dinheiro ia. Hoje tenho controle total do fluxo de caixa e consegui abrir uma segunda unidade.",
    metric: "+2ª unidade",
  },
  {
    name: "Ana Paula Santos",
    business: "Estúdio Criativo APS",
    text: "O diagnóstico financeiro foi um divisor de águas. Descobrimos que estávamos perdendo 30% com custos desnecessários. Em 3 meses, recuperamos esse valor.",
    metric: "30% recuperado",
  },
  {
    name: "Roberto Lima",
    business: "TechSolutions ME",
    text: "Profissional excepcional. Transformou números confusos em um plano de ação claro. Nossa margem de lucro cresceu 40% em um ano.",
    metric: "+40% margem",
  },
];

const pullStats = [
  { value: "+150", label: "Empresas transformadas" },
  { value: "92%", label: "Taxa de satisfação" },
  { value: "8+", label: "Anos de experiência" },
  { value: "30%", label: "Redução média de custos" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/testimonials-bg.jpg"
          alt="Small business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      <div className="relative container" ref={ref}>
        {/* Header — asymmetric left-aligned */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Resultados Reais
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-amber-500 mb-6 origin-left"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-2xl mb-4"
          >
            Histórias de transformação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-stone-300 text-lg leading-relaxed max-w-lg"
          >
            Pequenas empresas que transformaram sua gestão financeira e
            conquistaram resultados extraordinários.
          </motion.p>
        </div>

        {/* Pull Stats — editorial big numbers, asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 mb-20 border-t border-b border-white/10 py-10"
        >
          {pullStats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i < 3 ? 'lg:border-r lg:border-white/10' : ''} ${i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
            >
              <p className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-stone-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials — editorial layout with metric badges */}
        <div className="space-y-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.15,
              }}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 border-b border-white/10 ${
                i === testimonials.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {/* Quote icon + number */}
              <div className="lg:col-span-1 flex items-start">
                <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              </div>

              {/* Testimonial content */}
              <div className="lg:col-span-8">
                <p className="text-stone-200 text-lg lg:text-xl leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-white font-semibold">
                    {testimonial.name}
                  </p>
                  <span className="text-stone-500 text-sm">—</span>
                  <p className="text-stone-400 text-sm">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              {/* Metric badge — right side */}
              <div className="lg:col-span-3 flex items-start justify-start lg:justify-end">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-white text-sm font-semibold whitespace-nowrap">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
