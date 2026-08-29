import { useState } from "react"
import { Link } from "react-router-dom"
import { FiArrowUpRight, FiX, FiCalendar, FiClock, FiShare2, FiCheck } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { newsData } from "../../data/newsData"
import { useLanguage } from "../../context/LanguageContext"
import NewsCard from "../common/NewsCard"
import SectionHeader from "../common/SectionHeader"

const formatDate = (value, lang) => {
  const localeMap = { uz: "uz-UZ", oz: "uz-Cyrl", ru: "ru-RU", en: "en-US" }
  return new Intl.DateTimeFormat(localeMap[lang] || "uz-UZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value))
}

export default function News() {
  const [featured, ...otherNews] = newsData
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [copied, setCopied] = useState(false)
  const { t, language } = useLanguage()

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="news" className="section-space bg-canvas">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t("news.eyebrow")}
            title={t("news.title")}
            description={t("news.description")}
          />
          <Link to="/news" className="button-dark shrink-0 self-start lg:self-auto group">
            <span>{t("news.allNews")}</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <NewsCard item={featured} featured onSelect={setSelectedArticle} />
          <div className="grid gap-6">
            {otherNews.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index + 1} onSelect={setSelectedArticle} />
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#05110c]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#071912] shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black"
                  aria-label={t("news.close")}
                >
                  <FiX className="text-lg" />
                </button>
                <span className="absolute bottom-4 left-6 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  {selectedArticle.category}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-primary" /> {formatDate(selectedArticle.date, language)}
                  </span>
                  {selectedArticle.readTime && (
                    <span className="flex items-center gap-1.5">
                      <FiClock className="text-primary" /> {selectedArticle.readTime}
                    </span>
                  )}
                  {selectedArticle.author && (
                    <span className="text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      {selectedArticle.author}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {selectedArticle.title}
                </h2>

                <div className="text-sm leading-relaxed text-muted space-y-3 pt-2 whitespace-pre-line border-t border-line/60">
                  {selectedArticle.content || selectedArticle.excerpt}
                </div>

                {/* Tags */}
                {selectedArticle.tags && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-line/60">
                    {selectedArticle.tags.map((tag) => (
                      <span key={tag} className="rounded-xl bg-[#edf7f1] px-3 py-1 text-xs font-bold text-emerald-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-line/80 bg-canvas px-6 py-4 shrink-0">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 text-xs font-bold text-muted transition hover:text-primary"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-500" /> {t("news.copied")}
                    </>
                  ) : (
                    <>
                      <FiShare2 /> {t("news.share")}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="button-primary !min-h-9 !py-1.5 !px-4 !text-xs"
                >
                  {t("news.close")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

