import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import EventCard from '../components/common/EventCard'
import { eventsData } from '../data/eventsData'

export default function Events() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")

  const categories = ["Barchasi", "Ochiq darslar", "Hackathonlar", "Masterklasslar", "Uchrashuvlar"]

  const now = new Date()
  
  const events = eventsData || []

  const filteredEvents = events.filter(item => {
    return selectedCategory === "Barchasi" || item.category === selectedCategory
  })

  const upcomingEvents = filteredEvents.filter(e => new Date(e.date) >= now)
  const pastEvents = filteredEvents.filter(e => new Date(e.date) < now)
  
  const featuredEvent = upcomingEvents.find(e => e.isFeatured)
  const remainingUpcoming = upcomingEvents.filter(e => e.id !== featuredEvent?.id)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Tadbirlar | IT Park Rishton</title>
      </Helmet>
      
      <PageHero
        title={t('events.title') || "Tadbirlar"}
        description={t('events.subtitle') || "Markazimizda bo'lib o'tadigan tadbirlar va ochiq darslar."}
      />

      <section className="section-space bg-canvas min-h-[70vh]">
        <div className="site-container">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
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
                {cat}
              </button>
            ))}
          </div>

          {events.length > 0 ? (
            <>
              {featuredEvent && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-ink mb-6">Asosiy Tadbir</h3>
                  <EventCard item={featuredEvent} featured />
                </div>
              )}

              {remainingUpcoming.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-xl font-bold text-ink mb-6">Kelgusi Tadbirlar</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {remainingUpcoming.map(item => (
                      <EventCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {pastEvents.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-ink mb-6 opacity-60">O'tib ketgan tadbirlar</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {pastEvents.map(item => (
                      <EventCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
             <div className="text-center py-16 bg-white rounded-3xl border border-line p-8">
              <p className="text-lg font-bold text-ink">Tadbirlar topilmadi</p>
            </div>
          )}
        </div>
      </section>
      
      <CTASection />
    </motion.main>
  )
}
