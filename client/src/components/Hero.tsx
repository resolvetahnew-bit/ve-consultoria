/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Hero: Tipografia massiva, layout assimétrico, imagem cinematográfica
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Consultoria financeira"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="accent-line mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Consultoria Financeira
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Seu negócio merece{" "}
            <span className="text-amber-400">mais do que</span> planilhas soltas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-xl text-stone-300 leading-relaxed max-w-xl mb-10"
          >
            Gestão financeira estratégica para pequenas empresas que querem
            transformar números em decisões inteligentes e crescimento
            sustentável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/25"
            >
              Agende uma conversa
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              Conheça os serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
