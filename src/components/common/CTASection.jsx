import { Link } from "react-router-dom"
import { FiArrowUpRight, FiMessageCircle, FiCheckCircle } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "./SectionHeader"

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section id="admission" className="section-space bg-white">
      <div className="site-container">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#05140e] via-[#09261b] to-[#0c3927] px-7 py-16 text-white shadow-[0_32px_100px_rgba(8,48,33,0.3)] sm:px-12 lg:px-18 lg:py-20">
          {/* Background Ambient Lights */}
          <div className="grid-surface absolute inset-0 -z-10 opacity-50" />
          <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-emerald-500/25 blur-[120px]" />
          <div className="absolute -left-24 -bottom-28 -z-10 h-80 w-80 rounded-full bg-teal-500/20 blur-[100px]" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md mb-6">
                <HiSparkles />
                {t("cta.tag")}
              </div>

              <SectionHeader
                eyebrow={t("cta.eyebrow")}
                title={t("cta.title")}
                description={t("cta.description")}
                inverted
              />

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-bold text-white/70">
                <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400" /> {t("cta.perk1")}</span>
                <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400" /> {t("cta.perk2")}</span>
                <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400" /> {t("cta.perk3")}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col shrink-0">
              <Link to="/admission" className="button-primary whitespace-nowrap shadow-xl group">
                <HiSparkles className="text-emerald-200" />
                <span>{t("cta.applyBtn")}</span>
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact" className="button-secondary whitespace-nowrap">
                <span>{t("cta.contactBtn")}</span> <FiMessageCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

