import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowDown, FiArrowUpRight, FiCheckCircle, FiPlay } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi"
import { SiReact, SiPython, SiArduino } from "react-icons/si"
import { FaShieldAlt } from "react-icons/fa"
import { useLanguage } from "../../context/LanguageContext"
import mainImage from "../../assets/itparkimage2.jpg"
import detailImage from "../../assets/itimage.jpg"

const floatingBadges = [
  { icon: SiReact, label: "React.js", color: "text-cyan-400 bg-cyan-950/80 border-cyan-500/40", pos: "top-6 -left-6 sm:-left-10", delay: 0 },
  { icon: SiPython, label: "Python & AI", color: "text-amber-400 bg-amber-950/80 border-amber-500/40", pos: "top-1/3 -right-6 sm:-right-8", delay: 1.2 },
  { icon: FaShieldAlt, label: "Cyber Security", color: "text-purple-400 bg-purple-950/80 border-purple-500/40", pos: "-bottom-4 right-8 sm:right-16", delay: 2 },
  { icon: SiArduino, label: "Robototexnika", color: "text-rose-400 bg-rose-950/80 border-rose-500/40", pos: "bottom-1/4 -left-6 sm:-left-8", delay: 0.8 },
]

const professions = [
  "Frontend dasturchi",
  "Backend dasturchi",
  "UI/UX dizayner",
  "Kiberxavfsizlik mutaxassisi",
  "Robototexnik"
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    let timer
    const currentProfession = professions[currentProfessionIndex]
    
    if (isDeleting) {
      setDisplayText(prev => prev.slice(0, -1))
      timer = setTimeout(() => {
        if (displayText === "") {
          setIsDeleting(false)
          setCurrentProfessionIndex((prev) => (prev + 1) % professions.length)
        }
      }, 50)
    } else {
      setDisplayText(currentProfession.slice(0, displayText.length + 1))
      timer = setTimeout(() => {
        if (displayText === currentProfession) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentProfessionIndex])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const message = `Yangi ariza (Tezkor):\nIsm: ${formData.name}\nTelefon: ${formData.phone}`
      const url = `https://api.telegram.org/bot7915462105:AAHzSqEkXR6ByCOLiMsIzTWQmjIrVdAxfKQ/sendMessage?chat_id=7042727662&text=${encodeURIComponent(message)}`
      
      await fetch(url, { method: "GET" })
      setSubmitSuccess(true)
      setFormData({ name: "", phone: "" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="hero" className="relative isolate min-h-[780px] overflow-hidden bg-[#05110c] pb-24 pt-36 text-white sm:pt-44 lg:flex lg:min-h-[920px] lg:items-center lg:py-40">
      {/* Background Glows & Mesh */}
      <div className="grid-surface absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -left-32 top-10 -z-10 h-[36rem] w-[36rem] rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-teal-500/12 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        {/* Left Column: Hero Copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span>{t("hero.seasonBadge")}</span>
          </div>

          <h1 className="display-title mt-7">
            {t("hero.titleStart")}{" "}
            <span className="gradient-text-emerald">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titleEnd")}
          </h1>

          <div className="mt-4 h-10 text-2xl font-bold sm:text-3xl lg:text-4xl">
            <span className="gradient-text-emerald">{displayText}</span>
            <span className="animate-pulse text-emerald-400">|</span>
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            {t("hero.description")}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link to="/admission" className="button-primary group shadow-[0_12px_35px_rgba(12,166,108,0.4)]">
              <HiSparkles className="text-emerald-200" />
              <span>{t("hero.applyBtn")}</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/video-presentation" className="button-secondary group flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-emerald-300 transition group-hover:scale-110">
                <FiPlay className="ml-0.5 text-xs fill-current" />
              </span>
              <span>{t("hero.videoBtn")}</span>
            </Link>
          </div>

          {/* Quick Apply Form */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                placeholder={t('hero.namePlaceholder') || "Ismingiz"}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm text-white"
              />
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                placeholder="90 123 45 67"
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm text-white"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitSuccess ? <FiCheckCircle className="text-lg" /> : t('hero.quickApply') || "Yuborish"}
              </button>
            </form>
            <p className="mt-2 text-xs text-white/50">{t('hero.formNote') || "Tezkor aloqa uchun raqamingizni qoldiring"}</p>
          </div>

          {/* Value Props Checklist */}
          <div className="mt-11 flex flex-wrap gap-x-8 gap-y-3.5 border-t border-white/10 pt-7 text-xs font-extrabold text-white/75">
            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400 text-sm" /> {t("hero.freeBadge")}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400 text-sm" /> {t("hero.equipBadge")}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400 text-sm" /> {t("hero.certBadge")}
            </span>
          </div>
        </motion.div>

        {/* Right Column: Interactive Visuals with Floating Badges */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          {/* Main Visual Box */}
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <img
              src={mainImage}
              alt="IT Park Rishtan markazidagi ta'lim muhiti"
              width="1280"
              height="960"
              fetchPriority="high"
              className="aspect-[4/3.8] w-full rounded-[1.8rem] object-cover sm:aspect-[4/3.5]"
            />
            <div className="absolute inset-x-2.5 bottom-2.5 rounded-b-[1.8rem] bg-gradient-to-t from-[#05110c]/95 via-[#05110c]/50 to-transparent px-7 pb-6 pt-24">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-400">START LOCAL</p>
              <p className="font-display mt-0.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">GO GLOBAL</p>
            </div>
          </div>

          {/* Secondary Floating Image */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 w-[54%] overflow-hidden rounded-2xl border border-white/20 bg-[#071d15]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-left-8"
          >
            <img src={detailImage} alt="Amaliy darslar jarayoni" width="1280" height="960" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover" />
          </motion.div>

          {/* Floating Technology Badges */}
          {floatingBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                animate={reduceMotion ? undefined : {
                  y: [0, i % 2 === 0 ? -12 : 10, 0],
                  rotate: [0, i % 2 === 0 ? 2 : -2, 0]
                }}
                transition={{
                  duration: 4.5 + i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay
                }}
                className={`absolute z-20 flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-xs font-extrabold shadow-xl backdrop-blur-xl ${badge.pos} ${badge.color}`}
              >
                <Icon className="text-base" />
                <span className="whitespace-nowrap text-white">{badge.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#statistics"
        aria-label="Statistika bo'limiga o'tish"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/45 transition hover:text-emerald-300 md:flex"
      >
        <span>Pastga</span>
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}

