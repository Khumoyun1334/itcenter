import { useLanguage } from "../../context/LanguageContext"
import CountdownTimer from "../common/CountdownTimer"
import { Link } from "react-router-dom"

export default function Countdown() {
  const { t } = useLanguage()
  const targetDate = '2026-09-15T09:00:00'

  return (
    <section id="countdown" className="py-24 sm:py-32 bg-gradient-to-br from-emerald-800 to-emerald-950 relative overflow-hidden text-white">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-emerald-500/20 text-6xl font-mono">{"{"}</div>
      <div className="absolute bottom-10 right-10 text-emerald-500/20 text-6xl font-mono">{"}"}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

      <div className="site-container relative z-10 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("countdown.title")}</h2>
        <p className="text-emerald-200 mb-8 max-w-xl">{t("countdown.subtitle")}</p>
        
        <div className="bg-[#05110c]/40 backdrop-blur-md p-8 rounded-[1.8rem] border border-white/10 mb-8 inline-block shadow-xl">
          <CountdownTimer targetDate={targetDate} />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="px-6 py-3 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 font-semibold animate-pulse">
            {t("countdown.seatsLeft") || "8 ta joy qoldi"}
          </div>
          
          <Link to="/admission" className="button-primary bg-emerald-500 hover:bg-emerald-400 text-[#05110c] px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] transition">
            {t("countdown.applyNow") || "Ro'yxatdan o'tish"}
          </Link>
        </div>
      </div>
    </section>
  )
}
