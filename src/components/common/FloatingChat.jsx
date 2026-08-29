import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTelegram, FaTimes } from "react-icons/fa"
import { FiMessageSquare, FiArrowUpRight, FiPhoneCall } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <aside aria-label="Tezkor aloqa vidjeti" className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-[320px] sm:w-[350px] overflow-hidden rounded-3xl border border-white/20 bg-[#07150f]/95 p-5 text-white shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-lg">
                  <FaTelegram className="text-xl" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#07150f] bg-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">{t("chat.title")}</h4>
                  <p className="text-[11px] text-emerald-400 font-semibold">{t("chat.onlineStatus")}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Yopish"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Content */}
            <div className="py-4 text-xs text-white/80 space-y-2.5">
              <div className="rounded-2xl bg-white/5 p-3 leading-relaxed border border-white/5">
                {t("chat.greeting")}
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="https://t.me/itparkrishton_uz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 p-3 text-xs font-bold text-white shadow-md transition hover:from-emerald-500 hover:to-teal-500"
                >
                  <span className="flex items-center gap-2">
                    <FaTelegram className="text-base" /> {t("chat.writeTg")}
                  </span>
                  <FiArrowUpRight className="text-sm" />
                </a>

                <a
                  href="tel:+998558127000"
                  className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <FiPhoneCall className="text-emerald-400" /> {t("chat.callUs")}
                  </span>
                  <span className="text-emerald-400">+998 55 812 70 00</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 text-center text-[10px] text-white/50">
              {t("chat.fastAnswer")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-[0_12px_35px_rgba(12,166,108,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_45px_rgba(12,166,108,0.6)] focus:outline-none"
        aria-label="Tezkor aloqa oynasini ochish"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white" />
        </span>
        {isOpen ? <FaTimes className="text-xl" /> : <FiMessageSquare className="text-2xl transition-transform group-hover:scale-110" />}
      </button>
    </aside>
  )
}
