import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch, FiCalendar, FiClock, FiX, FiShare2, FiCheck } from "react-icons/fi"
import { newsData } from "../data/newsData"
import { useLanguage } from "../context/LanguageContext"
import NewsCard from "../components/common/NewsCard"
import PageHero from "../components/common/PageHero"
import CTASection from "../components/common/CTASection"

const formatDate = (value) => new Intl.DateTimeFormat("uz-UZ", {
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date(value))

export default function News() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [copied, setCopied] = useState(false)

  const categories = [
    { id: "all", label: "Barchasi" },
    { id: "Yutuqlar", label: "Yutuqlar" },
    { id: "Musobaqa", label: "Musobaqalar" },
    { id: "Ta'lim", label: "Ta'lim" },
    { id: "Tadbir", label: "Tadbirlar" }
  ]

  const filteredNews = newsData.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          (item.excerpt && item.excerpt.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const [featured, ...rest] = filteredNews

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <main>
      <PageHero
        eyebrow="Yangiliklar &amp; Matbuot"
        title="Markaz hayotidagi eng so'nggi yangilik va voqealar."
        description="Rishton IT Park erishgan yutuqlar, o'quvchilar loyihalari, musobaqalar va maxsus e'lonlar bilan tanishing."
      />

      <section className="section-space bg-canvas min-h-[70vh]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-md shadow-emerald-500/20"
                      : "bg-white border border-line text-muted hover:border-primary/40 hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Yangiliklarni qidirish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="field-control !pl-11 !min-h-11 text-xs"
              />
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid gap-6">
              {featured && (
                <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
                  <NewsCard item={featured} featured onSelect={setSelectedArticle} />
                  <div className="grid gap-6">
                    {rest.slice(0, 2).map((item, idx) => (
                      <NewsCard key={item.id} item={item} index={idx + 1} onSelect={setSelectedArticle} />
                    ))}
                  </div>
                </div>
              )}

              {rest.length > 2 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  {rest.slice(2).map((item, idx) => (
                    <NewsCard key={item.id} item={item} index={idx + 3} onSelect={setSelectedArticle} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-line p-8">
              <p className="text-lg font-bold text-ink">Yangiliklar topilmadi</p>
              <p className="text-sm text-muted mt-1">Qidiruv yoki filtr parametrlarini o'zgartirib ko'ring.</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory("all"); setSearch("") }}
                className="button-primary mt-4 !min-h-10 !text-xs"
              >
                Barchasini ko'rsatish
              </button>
            </div>
          )}
        </div>
      </section>

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
                  aria-label={t("news.close") || "Yopish"}
                >
                  <FiX className="text-lg" />
                </button>
                <span className="absolute bottom-4 left-6 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  {selectedArticle.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-primary" /> {formatDate(selectedArticle.date)}
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

              <div className="flex items-center justify-between border-t border-line/80 bg-canvas px-6 py-4 shrink-0">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 text-xs font-bold text-muted transition hover:text-primary"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-500" /> Havola nusxalandi!
                    </>
                  ) : (
                    <>
                      <FiShare2 /> Yangilikni ulashish
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="button-primary !min-h-9 !py-1.5 !px-4 !text-xs"
                >
                  {t("news.close") || "Yopish"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <CTASection />
    </main>
  )
}
