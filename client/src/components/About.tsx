/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * About: Layout editorial com imagem deslocada, stats como pull-quote editorial,
 * tipografia sobreposta, motivo cartográfico âmbar. Dark mode suportado.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, BarChart3, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const stats = [
  { icon: BarChart3, value: "+150", label: "Empresas atendidas" },
  { icon: TrendingUp, value: "92%", label: "Taxa de satisfação" },
  { icon: Users, value: "8+", label: "Anos de experiência" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section id="sobre" className={`py-24 lg:py-32 relative ${isLight ? "bg-white" : "bg-background"}`}>
      <div className="container" ref={ref}>
        {/* Cartographic annotation — top right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex absolute top-8 right-8 flex-col items-end gap-1.5"
        >
          <div className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase ${isLight ? "text-stone-300" : "text-stone-600"}`}>
            <span>TRAJETÓRIA</span>
            <div className="w-16 h-px bg-amber-600/30" />
          </div>
          <div className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase ${isLight ? "text-stone-300" : "text-stone-600"}`}>
            <span>EXPERTISE</span>
            <div className="w-24 h-px bg-amber-600/20" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Image — offset left, overlapping feel */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10">
                <img
                  src="/images/about-photo.png"
                  alt="Consultor financeiro"
                  className="w-full h-[420px] lg:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 to-transparent" />
              </div>
              {/* Amber accent frame — cartographic */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-amber-600/20 rounded-2xl -z-10" />
              {/* Cartographic marker */}
              <div className="absolute -top-6 -left-6 w-3 h-3 bg-amber-600 rounded-full" />
              <div className="absolute -top-6 -left-6 w-16 h-px bg-amber-600/40" style={{ left: '-24px' }} />
            </div>

            {/* Pull-quote overlay on image bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950/80 to-transparent">
              <p className="font-display text-xl lg:text-2xl text-white font-semibold leading-snug italic">
                "Finanças claras, decisões melhores."
              </p>
            </div>
          </motion.div>

          {/* Content — offset right, editorial spacing */}
          <div className="lg:col-span-7 lg:pl-8 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Sobre
              </p>
              <div className="w-20 h-1 bg-amber-600 mb-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8 ${isLight ? "text-stone-900" : "text-foreground"}`}
            >
              Visão estratégica para quem constrói o futuro
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-lg leading-relaxed mb-6 ${isLight ? "text-stone-600" : "text-muted-foreground"}`}
            >
              A Visão Empreendedora nasceu da convicção de que pequenas empresas
              merecem acesso à mesma inteligência financeira que grandes
              corporações utilizam. Sem burocracia, sem jargões desnecessários —
              apenas clareza e direção.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`text-lg leading-relaxed mb-12 ${isLight ? "text-stone-600" : "text-muted-foreground"}`}
            >
              Como consultor autônomo, ofereço um atendimento personalizado e
              próximo, entendendo a realidade de cada negócio e criando soluções
              sob medida para o seu momento.
            </motion.p>

            {/* Stats — editorial big numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`grid grid-cols-3 gap-6 border-t pt-8 ${isLight ? "border-stone-200" : "border-border"}`}
            >
              {stats.map((stat, i) => (
                <div key={i} className="relative">
                  {i < 2 && (
                    <div className={`absolute right-0 top-0 bottom-0 w-px hidden lg:block ${isLight ? "bg-stone-200" : "bg-border"}`} />
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className={`font-display text-4xl lg:text-5xl font-bold ${isLight ? "text-stone-900" : "text-foreground"}`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${isLight ? "text-stone-500" : "text-muted-foreground"}`}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA link — editorial */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm tracking-wide hover:text-amber-400 transition-colors group"
              >
                Conheça os serviços
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
