import { Link } from "react-router-dom"
import { FiArrowUpRight, FiCheckCircle, FiCompass, FiUsers } from "react-icons/fi"
import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"
import image from "../../assets/itpark.jpg"

export default function AboutPreview() {
  const { t } = useLanguage()

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4")
  ]

  return (
    <section id="about" className="section-space overflow-hidden bg-canvas">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[.94fr_1.06fr] lg:gap-20">
        {/* Left Visual Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="dot-surface absolute -left-8 -top-8 h-44 w-44 rounded-full opacity-60" />
          <div className="relative overflow-hidden rounded-[2.2rem] bg-[#071912] p-2.5 shadow-[0_30px_90px_rgba(7,21,15,0.22)]">
            <img
              src={image}
              alt="IT Park Rishtan markazi"
              width="1200"
              height="800"
              loading="lazy"
              className="aspect-[4/3.4] w-full rounded-[1.8rem] object-cover"
            />
          </div>

          {/* Floating Metric Card */}
          <div className="absolute -bottom-6 right-2 rounded-2xl border border-white/20 bg-[#071912]/95 px-6 py-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:right-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                <FiCompass className="text-xl" />
              </span>
              <div>
                <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-emerald-300">
                  START LOCAL
                </span>
                <strong className="font-display mt-0.5 block text-lg font-bold">GO GLOBAL</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
            description={t("about.description")}
          />

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white/90 px-4 py-3.5 text-xs font-bold text-[#2a3e34] shadow-sm transition-colors hover:border-emerald-500/40"
              >
                <FiCheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/about" className="button-dark group">
              <span>{t("about.moreBtn")}</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href="#teachers" className="text-xs font-extrabold text-primary hover:text-primary-dark transition flex items-center gap-1.5 px-3 py-2">
              <FiUsers className="text-sm" /> {t("about.meetMentors")} →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


