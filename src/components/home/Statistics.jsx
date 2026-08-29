import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { FiCpu, FiLayers, FiUsers, FiAward } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return undefined
    let frame = 0
    const totalFrames = 36
    const timer = window.setInterval(() => {
      frame += 1
      setCount(Math.round((value * frame) / totalFrames))
      if (frame >= totalFrames) window.clearInterval(timer)
    }, 25)
    return () => window.clearInterval(timer)
  }, [inView, reduceMotion, value])

  return (
    <strong ref={ref} className="font-display block text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
      {reduceMotion && inView ? value : count}{suffix}
    </strong>
  )
}

export default function Statistics() {
  const { t } = useLanguage()

  const stats = [
    { icon: FiUsers, value: 500, label: t("stats.students"), suffix: "+", badge: "500+" },
    { icon: FiLayers, value: 6, label: t("stats.courses"), suffix: "", badge: "6 Tracks" },
    { icon: FiCpu, value: 100, label: t("stats.free"), suffix: "%", badge: "100% Free" },
    { icon: FiAward, value: 92, label: t("stats.employment"), suffix: "%", badge: "92%" }
  ]

  return (
    <section id="statistics" aria-label="Markaz statistikasi" className="relative z-10 -mt-10 pb-10 sm:-mt-14">
      <div className="site-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-line/90 bg-white/95 p-6 shadow-[0_15px_40px_rgba(7,21,15,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(12,166,108,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-100 to-emerald-50 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                    {stat.badge}
                  </span>
                </div>

                <div className="mt-5">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-xs font-bold text-muted sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
