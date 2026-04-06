import { useState } from "react"
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="gradient-text  text-3xl md:text-4xl font-bold text-white mb-4">
            Talabalarimizning fikrlari
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bizning bitiruvchilarimiz muvaffaqiyatga erishmoqda
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <FaQuoteLeft className="text-4xl text-black mb-4" />
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/20 hover:bg-white/30 text-black p-3 rounded-full transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/20 hover:bg-white/30 text-black p-3 rounded-full transition-all"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}