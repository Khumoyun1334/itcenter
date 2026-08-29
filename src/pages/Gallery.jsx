import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const photos = [
  { id: 1, src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", alt: "coding", category: "Laboratoriya" },
  { id: 2, src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg", alt: "classroom", category: "Darslar" },
  { id: 3, src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", alt: "teamwork", category: "Markazimiz" },
  { id: 4, src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg", alt: "computer lab", category: "Laboratoriya" },
  { id: 5, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", alt: "presentation", category: "Tadbirlar" },
  { id: 6, src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", alt: "workshop", category: "Darslar" },
  { id: 7, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg", alt: "event", category: "Tadbirlar" },
  { id: 8, src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg", alt: "lab", category: "Laboratoriya" },
  { id: 9, src: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg", alt: "robotics", category: "Laboratoriya" },
  { id: 10, src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", alt: "design", category: "Darslar" },
  { id: 11, src: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg", alt: "hackathon", category: "Tadbirlar" },
  { id: 12, src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "meeting", category: "Markazimiz" }
]

export default function Gallery() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = ["Barchasi", "Markazimiz", "Darslar", "Tadbirlar", "Laboratoriya"]

  const filteredPhotos = selectedCategory === "Barchasi" 
    ? photos 
    : photos.filter(p => p.category === selectedCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const showPrev = useCallback(() => {
    setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredPhotos.length - 1))
  }, [filteredPhotos.length])

  const showNext = useCallback(() => {
    setLightboxIndex(prev => (prev < filteredPhotos.length - 1 ? prev + 1 : 0))
  }, [filteredPhotos.length])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, showPrev, showNext])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Galereya | IT Park Rishton</title>
      </Helmet>
      
      <PageHero
        title={t('gallery.title') || "Galereya"}
        description={t('gallery.subtitle') || "Markazimiz hayotidan yorqin lahzalar."}
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

          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            layout
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div 
                key={photo.id}
                layoutId={`gallery-img-${photo.id}`}
                className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-sm bg-emerald-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
              onClick={closeLightbox}
            >
              <FiX className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
              onClick={showPrev}
            >
              <FiChevronLeft className="w-10 h-10" />
            </button>

            <div className="relative w-full max-w-5xl max-h-[85vh] px-16 flex items-center justify-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="absolute bottom-[-2rem] text-white/60 text-sm">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </p>
            </div>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
              onClick={showNext}
            >
              <FiChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}
