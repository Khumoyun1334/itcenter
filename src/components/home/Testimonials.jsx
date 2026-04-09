import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "Shahzod Alimov",
    role: "Frontend dasturchi",
    text: "IT Center da o'qib, 3 oy ichida React.js ni mukammal o'rgandim. Hozirda IT kompaniyada ishlayman. Barcha ustozlarga rahmat!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Nilufar Abdullayeva",
    role: "Backend dasturchi",
    text: "Bepul ta'lim olish imkoniyati men uchun katta omad bo'ldi. Node.js va Python ni o'rgandim. Endi o'z loyiham ustida ishlayapman.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Javohir Tursunov",
    role: "Robototexnika muhandisi",
    text: "Robototexnika yo'nalishi juda qiziqarli. Arduino va IoT bo'yicha bilimlarimni oshirdim. Respublika olimpiadasida qatnashdim.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Madina Rasulova",
    role: "AI mutaxassisi",
    text: "Sun'iy intellekt yo'nalishi kelajak kasbi. Machine Learning va Deep Learning ni o'rgandim. Hozirda startapda ishlayman.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Swipe handler functions
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left -> next
      next()
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right -> prev
      prev()
    }
    // Reset values
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section className="py-12 md:py-20 px-4 md:px-4 bg-linear-to-r from-primary to-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="gradient-text text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Talabalarimizning fikrlari
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
            Bizning bitiruvchilarimiz muvaffaqiyatga erishmoqda
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-2xl mx-2 md:mx-0"
            >
              <FaQuoteLeft className="text-3xl md:text-4xl text-black mb-3 md:mb-4" />
              <p className="text-gray-700 text-sm md:text-lg mb-4 md:mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-0.5 md:gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs md:text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop: ko'rinadigan strelkalar, Mobile: yashirin */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/20 hover:bg-white/30 text-black p-3 rounded-full transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/20 hover:bg-white/30 text-black p-3 rounded-full transition-all"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots indicator - mobile va desktop uchun */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? "w-6 md:w-8 h-1.5 md:h-2 bg-white" 
                  : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Mobile swipe hint - ixtiyoriy */}
        <p className="text-center text-white/60 text-xs mt-4 md:hidden">
          ← O‘tish uchun suring →
        </p>
      </div>
    </section>
  )
}