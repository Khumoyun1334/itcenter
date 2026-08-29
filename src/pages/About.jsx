import { motion } from "framer-motion"
import { FiAward, FiCpu, FiTarget, FiUsers, FiCheckCircle, FiShield, FiHeart, FiTrendingUp } from "react-icons/fi"
import { useLanguage } from "../context/LanguageContext"
import PageHero from "../components/common/PageHero"
import SectionHeader from "../components/common/SectionHeader"
import CTASection from "../components/common/CTASection"
import centerImage from "../assets/itpark.jpg"
import rishtanImage from "../assets/rishtan.jpg"

export default function About() {
  const { t } = useLanguage()

  const numbers = [
    { value: "500+", label: t("stats.students"), icon: FiUsers, desc: t("stats.studentsDesc") },
    { value: "6 ta", label: t("stats.directions"), icon: FiCpu, desc: t("stats.directionsDesc") },
    { value: "100%", label: t("stats.free"), icon: FiAward, desc: t("stats.freeDesc") },
    { value: "12+", label: t("stats.teachers"), icon: FiTarget, desc: t("stats.teachersDesc") }
  ]

  const values = [
    { icon: FiTarget, title: t("features.f1_title"), desc: t("features.f1_desc") },
    { icon: FiTrendingUp, title: t("features.f6_title"), desc: t("features.f6_desc") },
    { icon: FiHeart, title: t("features.f5_title"), desc: t("features.f5_desc") },
    { icon: FiShield, title: t("features.f3_title"), desc: t("features.f3_desc") }
  ]

  return (
    <main>
      <PageHero
        eyebrow={t("nav.about")}
        title={t("about.title")}
        description={t("about.heroDesc")}
      />

      {/* Story & Vision */}
      <section className="section-space bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.2rem] bg-[#05110c] p-2 shadow-[0_28px_80px_rgba(7,21,15,0.2)]">
              <img
                src={centerImage}
                alt="IT Park Rishtan markazi binosi"
                width="1200"
                height="800"
                className="aspect-[4/3.2] w-full rounded-[1.8rem] object-cover"
              />
            </div>
            <img
              src={rishtanImage}
              alt="Rishton ramzi"
              width="320"
              height="420"
              loading="lazy"
              className="absolute -bottom-8 right-4 hidden h-52 w-44 rounded-3xl border-4 border-white object-cover shadow-2xl sm:block"
            />
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="Bizning Maqsadimiz"
              title="START local &amp; GO global shiori ostida."
              description="Rishton tumani hokimligi va IT Park tashabbusi bilan barpo etilgan markazimiz zamonaviy kompyuterlar, yuqori tezlikdagi internet va robototexnika laboratoriyasi bilan to'liq jihozlangan."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-6 border-emerald-200/80 bg-emerald-50/50">
                <FiTarget className="h-6 w-6 text-primary" />
                <h3 className="font-display mt-4 text-lg font-bold text-ink">Asosiy Missiyamiz</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Har bir iqtidorli yoshga bepul ta'lim orqali zamonaviy IT mutaxassisi bo'lish imkonini yaratish.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[#153b2c] bg-gradient-to-br from-[#061811] via-[#09261b] to-[#0c3324] p-6 text-white shadow-xl">
                <FiAward className="h-6 w-6 text-emerald-300" />
                <h3 className="font-display mt-4 text-lg font-bold">Katta Maqsad</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  1000+ dan ortiq mahalliy yoshlarni xalqaro darajadagi IT xizmatlar eksportiga tayyorlash.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-space bg-[#eaf3ed]/60">
        <div className="site-container">
          <SectionHeader
            eyebrow="Bizning Qadriyatlarimiz"
            title="Sifatli ta'lim va ishonchli kelajak poydevori."
            description="Biz qanday qoidalar va tamoyillar asosida yoshlarga ta'lim beramiz?"
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.8rem] border border-line/90 bg-white p-7 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary shadow-sm">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-display mt-5 text-base font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Numbers */}
      <section className="section-space bg-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="Natijalarimiz Raqamlarda"
            title="Markazimiz salohiyatini ifodalovchi asosiy ko'rsatkichlar."
            description="Har bir raqam ortida yoshlarning mehnati, o'rganish ishtiyoqi va yangi yaratilgan loyihalar turadi."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="premium-card p-7 text-center transition-all hover:border-emerald-500/40 hover:shadow-lg"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary shadow-sm">
                    <Icon className="text-2xl" />
                  </span>
                  <strong className="font-display mt-5 block text-4xl font-bold tracking-tight text-ink">{item.value}</strong>
                  <span className="mt-1 block text-xs font-extrabold uppercase tracking-wider text-primary">{item.label}</span>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">{item.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

