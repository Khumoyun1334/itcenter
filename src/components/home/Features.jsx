import { motion, useReducedMotion } from "framer-motion"
import { FiAward, FiBriefcase, FiClock, FiCpu, FiGlobe, FiUserCheck } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"

export default function Features() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const features = [
    { icon: FiUserCheck, title: t("features.f1_title"), description: t("features.f1_desc") },
    { icon: FiCpu, title: t("features.f2_title"), description: t("features.f2_desc") },
    { icon: FiBriefcase, title: t("features.f3_title"), description: t("features.f3_desc") },
    { icon: FiAward, title: t("features.f4_title"), description: t("features.f4_desc") },
    { icon: FiClock, title: t("features.f5_title"), description: t("features.f5_desc") },
    { icon: FiGlobe, title: t("features.f6_title"), description: t("features.f6_desc") }
  ]

  return (
    <section id="features" className="section-space relative overflow-hidden bg-[#eaf3ed]/60">
      <div className="dot-surface absolute -right-20 top-0 h-96 w-96 opacity-40" />
      <div className="site-container relative">
        <SectionHeader
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          description={t("features.description")}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isFirst = index === 0
            return (
              <motion.article
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.07 }}
                whileHover={{ y: -6 }}
                className={[
                  "relative overflow-hidden rounded-[1.8rem] border p-7 transition-all duration-300",
                  isFirst
                    ? "border-[#072418] bg-gradient-to-br from-[#061811] via-[#09261b] to-[#0c3324] text-white shadow-[0_22px_60px_rgba(7,21,15,0.3)]"
                    : "border-line/90 bg-white/95 text-ink shadow-[0_12px_36px_rgba(7,21,15,0.05)] hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(12,166,108,0.12)]"
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div className={["flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm", isFirst ? "bg-emerald-400 text-[#05110c]" : "bg-[#e9f8f0] text-primary"].join(" ")}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className={["font-display text-lg font-bold", isFirst ? "text-emerald-300/60" : "text-emerald-900/30"].join(" ")}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-xl font-bold tracking-tight">
                  {feature.title}
                </h3>

                <p className={["mt-2.5 text-sm leading-relaxed", isFirst ? "text-white/70" : "text-muted"].join(" ")}>
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

