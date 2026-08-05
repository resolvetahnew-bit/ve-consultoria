/*
 * Design: "Cartografia do Crescimento" — Editorial de negócios premium
 * WhatsApp Button: Botão flutuante fixo no canto inferior direito
 * Telefone: (12) 98828-1265
 */
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const WHATSAPP_NUMBER = "5512988281265";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de agendar uma conversa sobre consultoria financeira."
);

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`shadow-lg rounded-lg px-4 py-2.5 max-w-[220px] border ${
              isLight
                ? "bg-white border-stone-200"
                : "bg-card border-border"
            }`}
          >
            <p className={`text-sm font-medium ${isLight ? "text-stone-700" : "text-foreground"}`}>
              Precisa de ajuda financeira?
            </p>
            <p className={`text-xs mt-0.5 ${isLight ? "text-stone-500" : "text-muted-foreground"}`}>
              Fale conosco pelo WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contato via WhatsApp"
      >
        {hovered ? (
          <X className="w-6 h-6 text-white transition-transform" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </a>
    </div>
  );
}
