import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  FiArrowLeft, FiArrowUpRight, FiBookOpen, FiCheck, FiClock, FiUsers, 
  FiCheckCircle, FiLayers, FiAward, FiCpu, FiTool 
} from "react-icons/fi"
import { directionsData } from "../data/directionsData"
import { useLanguage } from "../context/LanguageContext"
import CTASection from "../components/common/CTASection"

export default function DirectionDetail() {
  const { id } = useParams()
  const { t } = useLanguage()
  const direction = directionsData.find((item) => item.id === id)

  if (!direction) {
    return (
      <main className="page-hero min-h-[70vh] flex items-center">
        <div className="site-container text-center">
          <p className="section-kicker !text-emerald-300">404</p>
          <h1 className="font-display mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">{t("faq.notFound")}</h1>
          <Link to="/directions" className="button-primary mt-8 inline-flex"><FiArrowLeft /> {t("nav.courses")}</Link>
        </div>
      </main>
    )
  }

  const Icon = direction.icon

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#05110c] pb-20 pt-36 text-white sm:pt-44">
        <div className="grid-surface absolute inset-0 -z-20 opacity-70" />
        <div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />

        <div className="site-container">
          <Link
            to="/directions"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400 transition hover:text-white mb-8"
          >
            <FiArrowLeft className="text-sm" /> {t("nav.courses")}
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-emerald-300 backdrop-blur-md shadow-xl">
                <Icon className="h-8 w-8" />
              </span>

              <h1 className="font-display mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
                {direction.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                {direction.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold text-white/90">
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  <FiClock className="text-emerald-400 text-sm" /> {t("courses.duration")}: <strong>{direction.duration}</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  <FiUsers className="text-emerald-400 text-sm" /> {t("courses.students")}: <strong>{direction.students}+</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  <FiAward className="text-emerald-400 text-sm" /> 100% {t("courses.freeBadge")}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/5 p-2.5 shadow-2xl backdrop-blur-md"
            >
              <img
                src={direction.image}
                alt={direction.title + " yo'nalishi"}
                width="900"
                height="600"
                className="aspect-[4/3] w-full rounded-[1.8rem] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Details & Syllabus */}
      <section className="section-space bg-canvas">
        <div className="site-container grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left Column: Modules & Topics */}
          <div className="space-y-8">
            {/* Step-by-Step Modules */}
            {direction.modules && (
              <article className="premium-card p-6 sm:p-9 shadow-[0_20px_60px_rgba(7,21,15,0.06)]">
                <div className="flex items-center gap-3 pb-6 border-b border-line">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary">
                    <FiLayers className="text-xl" />
                  </span>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">O'quv dasturi</span>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">4 ta asosiy modul</h2>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {direction.modules.map((mod) => (
                    <div key={mod.step} className="flex gap-4 p-4 rounded-2xl border border-line bg-canvas transition hover:border-emerald-300">
                      <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-sm">
                        {mod.step}
                      </span>
                      <div>
                        <h4 className="font-display text-base font-bold text-ink">{mod.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* Core Topics Checklist */}
            <article className="premium-card p-6 sm:p-9 shadow-[0_20px_60px_rgba(7,21,15,0.06)]">
              <div className="flex items-center gap-3 pb-6 border-b border-line">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary">
                  <FiBookOpen className="text-xl" />
                </span>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">Amaliy Ko'nikmalar</span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Kursda nimalar o'rganiladi?</h2>
                </div>
              </div>

              <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {direction.topics.map((topic, index) => (
                  <div key={topic} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-xs font-bold text-ink shadow-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Technologies & Tools */}
            {direction.tools && (
              <article className="premium-card p-6 sm:p-9">
                <div className="flex items-center gap-3 pb-6 border-b border-line">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary">
                    <FiCpu className="text-xl" />
                  </span>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">Texnologiyalar</span>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Ishlatiladigan dasturiy vositalar</h2>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {direction.tools.map((tool) => (
                    <span key={tool} className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-900 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            )}
          </div>

          {/* Right Column: Sticky Requirements & CTA */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            {/* Requirements Card */}
            <div className="premium-card p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary">
                <FiCheck className="text-xl" />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold text-ink">Talablar &amp; Boshlang'ich bilim</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">{direction.requirements}</p>
            </div>

            {/* Registration Call */}
            <div className="rounded-[2.2rem] bg-gradient-to-br from-[#061811] via-[#09261b] to-[#0c3927] p-7 text-white shadow-[0_26px_70px_rgba(7,21,15,0.3)] sm:p-8">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">Qabul ochiq</p>
              <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">
                Ushbu yo'nalishda o'qishga tayyormisiz?
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                O'z o'rningizni band qilish uchun hoziroq bepul onlayn ariza topshiring. Guruhlar soni cheklangan.
              </p>
              <Link to="/admission" className="button-primary mt-7 w-full shadow-lg justify-center">
                Ariza topshirish <FiArrowUpRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

