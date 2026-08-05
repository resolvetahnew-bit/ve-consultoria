/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * Contact: Layout editorial assimétrico, form com Web3Forms para envio de e-mail.
 * Destinatário: estrategia@veconsultoria.com.br
 * Telefone: (12) 98828-1265
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "estrategia@veconsultoria.com.br" },
  { icon: Phone, label: "Telefone", value: "(12) 98828-1265" },
  { icon: MapPin, label: "Atendimento", value: "Remoto (todo o Brasil)" },
  { icon: Clock, label: "Horário", value: "Seg-Sex, 9h às 18h" },
];

// Web3Forms access key — user needs to register at web3forms.com
// and replace with their own key for their email
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const { theme } = useTheme();
  const isLight = theme === "light";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Enviando sua mensagem...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Novo contato — Visão Empreendedora");
    formData.append("from_name", "Visão Empreendedora — Site");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <section id="contato" className={`py-24 lg:py-32 relative overflow-hidden ${isLight ? "bg-white" : "bg-background"}`}>
      {/* Cartographic grid pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(oklch(0.67 0.17 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.67 0.17 60) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Info with cartographic annotations */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Cartographic marker */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-600" />
              <div className="flex-1 h-px bg-amber-600/20" />
            </div>

            <p className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Contato
            </p>
            <div className="w-20 h-1 bg-amber-600 mb-8" />

            <h2 className={`font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 ${isLight ? "text-stone-900" : "text-foreground"}`}>
              Vamos conversar sobre o futuro do seu negócio
            </h2>

            <p className={`text-lg leading-relaxed mb-10 ${isLight ? "text-stone-600" : "text-muted-foreground"}`}>
              Agende uma conversa gratuita de 30 minutos para entender seus
              desafios e como posso ajudar.
            </p>

            {/* Contact info — editorial list with amber line */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isLight
                      ? "bg-amber-50 group-hover:bg-amber-100"
                      : "bg-amber-600/10 group-hover:bg-amber-600/15"
                  }`}>
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className={`text-xs font-mono tracking-wider uppercase mb-0.5 ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>{item.label}</p>
                    <p className={`font-medium text-base ${isLight ? "text-stone-800" : "text-foreground"}`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form with editorial styling */}
          <motion.div
            className="lg:col-span-7 lg:pl-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={`rounded-2xl p-8 lg:p-10 border relative ${
              isLight
                ? "bg-stone-50 border-stone-100"
                : "bg-card border-border"
            }`}>
              {/* Cartographic corner marker */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-600/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-600/30 rounded-bl-lg" />

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                      Nome completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className={`w-full px-4 py-3.5 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all ${
                        isLight
                          ? "bg-white border-stone-200 text-stone-800"
                          : "bg-background border-border text-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className={`w-full px-4 py-3.5 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all ${
                        isLight
                          ? "bg-white border-stone-200 text-stone-800"
                          : "bg-background border-border text-foreground"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                    Empresa / Ramo de atuação
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da empresa e segmento"
                    className={`w-full px-4 py-3.5 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all ${
                      isLight
                        ? "bg-white border-stone-200 text-stone-800"
                        : "bg-background border-border text-foreground"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isLight ? "text-stone-400" : "text-muted-foreground"}`}>
                    Como posso ajudar?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Descreva brevemente seu desafio financeiro ou o que busca..."
                    className={`w-full px-4 py-3.5 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all resize-none ${
                      isLight
                        ? "bg-white border-stone-200 text-stone-800"
                        : "bg-background border-border text-foreground"
                    }`}
                  />
                </div>

                {/* Honeypot for spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Status message */}
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm ${
                      status === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : status === "error"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {status === "success" && <CheckCircle2 className="w-4 h-4" />}
                    {status === "error" && <AlertCircle className="w-4 h-4" />}
                    {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/20 active:scale-[0.97]"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
