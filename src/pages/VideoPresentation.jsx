import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowUpRight, FiPlay, FiCpu, FiAward, FiUsers, FiX, FiCheckCircle } from "react-icons/fi"
import { FaYoutube } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"
import PageHero from "../components/common/PageHero"
import CTASection from "../components/common/CTASection"
import itimage from "../assets/itimage.jpg"
import teacherbobur from "../assets/boburaka.jpg"
import teacherhumoyun from "../assets/humoyun.jpg"

const showcases = [
  {
    id: 1,
    title: "IT Park Rishtan — Rasmiy Ochilish va Taqdimot",
    duration: "04:15",
    category: "Taqdimot",
    youtubeId: "Wn_i_c01C2c",
    image: itimage,
    desc: "Markaz binosi, o'quv xonalari, zamonaviy kompyuterlar va talabalar uchun yaratilgan qulay sharoitlar bilan tanishing."
  },
  {
    id: 2,
    title: "Dasturlash va Robototexnika Amaliyoti",
    duration: "03:40",
    category: "Dars jarayoni",
    youtubeId: "fJWR73zpJko",
    image: teacherbobur,
    desc: "Robototexnika laboratoriyasida o'quvchilar tomonidan loyihalashtirilgan aqlli qurilmalar va robotlar namoyishi."
  },
  {
    id: 3,
    title: "Frontend va Web Dasturchilar Jamoasi",
    duration: "05:10",
    category: "Loyiha himoyasi",
    youtubeId: "UB1O30fR-EE",
    image: teacherhumoyun,
    desc: "Bitiruvchi o'quvchilarning real mijozlar uchun yaratgan veb-saytlari va startap loyihalari taqdimoti."
  }
]

export default function VideoPresentation() {
  const [activeVideo, setActiveVideo] = useState(null)
  const { t } = useLanguage()

  return (
    <main>
      <PageHero
        eyebrow="Media &amp; Taqdimotlar"
        title={t("about.title")}
        description={t("about.description")}
      />

      <section className="section-space bg-canvas">
        <div className="site-container">
          {/* Main Hero Video Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#05110c] border border-white/20 shadow-[0_32px_100px_rgba(7,21,15,0.3)] group"
          >
            <img
              src={itimage}
              alt="IT Park Rishtan ta'lim muhiti"
              width="1280"
              height="960"
              className="aspect-video w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05110c] via-[#05110c]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                onClick={() => setActiveVideo(showcases[0])}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-500 active:scale-95"
                aria-label="Taqdimot videosini tomosha qilish"
              >
                <FiPlay className="ml-1 text-3xl" />
              </button>

              <div className="mt-8 max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-4 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-md">
                  <FaYoutube className="text-red-500" /> Rasmiy Video Taqdimot
                </span>
                <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Markaz Faoliyati va Imkoniyatlari
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
                  Rishton tumani yoshlari uchun yaratilgan eng zamonaviy IT majmuasi haqidagi to'liq video rolik.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="section-kicker">Media To'plam</p>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-ink">Barcha Video Lavhalar</h3>
              </div>
              <p className="text-xs font-bold text-muted">Jami 3 ta taqdimot</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {showcases.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setActiveVideo(item)}
                  className="group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-sm cursor-pointer transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[#061811]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-115">
                        <FiPlay className="ml-0.5 text-lg" />
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 rounded-lg bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2 py-0.5 text-[11px] font-bold text-white backdrop-blur-md">
                      {item.duration}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-base font-bold text-ink group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-bold text-primary">
                      <span>Videoni tomosha qilish</span>
                      <FiPlay className="text-xs" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Playback Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-[#05110c]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#05110c] shadow-2xl text-white my-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/5">
                <h3 className="font-display text-base font-bold text-white">
                  {activeVideo.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Yopish"
                >
                  <FiX />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="p-6 bg-white/5">
                <p className="text-xs leading-relaxed text-white/70">{activeVideo.desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTASection />
    </main>
  )
}

