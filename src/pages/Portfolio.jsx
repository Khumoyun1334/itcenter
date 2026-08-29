import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import PortfolioCard from '../components/common/PortfolioCard'
import { portfolioData } from '../data/portfolioData'
import { FiSearch } from 'react-icons/fi'

export default function Portfolio() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [search, setSearch] = useState("")

  const categories = ["Barchasi", "Web", "Mobile", "Dizayn", "IoT"]

  const portfolio = portfolioData || []
  const filteredPortfolio = portfolio.filter(item => {
    const matchesCategory = selectedCategory === "Barchasi" || item.category === selectedCategory
    const matchesSearch = item.title?.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Portfolio | IT Park Rishton</title>
      </Helmet>
      
      <PageHero
        title={t('portfolio.title') || "Portfolio"}
        description={t('portfolio.subtitle') || "O'quvchilarimizning eng yaxshi loyihalari."}
      />

      <section className="section-space bg-canvas min-h-[70vh]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md shadow-emerald-500/20"
                      : "bg-white border border-line text-muted hover:border-primary/40 hover:text-ink"
                  }`}
                >
                  {t(cat.toLowerCase()) || cat}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder={t('search') || "Qidirish..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="field-control !pl-11 !min-h-11 text-xs w-full"
              />
            </div>
          </div>

          {filteredPortfolio.length > 0 ? (
            <motion.div 
              className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {filteredPortfolio.map((item, idx) => (
                <motion.div key={item.id || idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <PortfolioCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-line p-8">
              <p className="text-lg font-bold text-ink">Natija topilmadi</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </motion.main>
  )
}
