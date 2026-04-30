import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowRight, FiPlay } from "react-icons/fi"

import MyImage from "../../assets/husanboy.jpg"

const texts = [
  { title: "Rishton IT Park", subtitle: "Zamonaviy texnologiyalar markazi", desc: "2026-yil 1-apreldan boshlab faoliyat yuritadi" },
  { title: "Sifatli ta'lim", subtitle: "Barcha yoshlar uchun", desc: "Rishton tumanida yashovchi har bir yosh IT sohasini o'rganishi mumkin" },
  { title: "Zamonaviy jihozlar", subtitle: "Eng yangi kompyuterlar va uskunalar", desc: "50 dan ortiq kompyuterlar, robototexnika laboratoriyasi" },
  // { title: "Sun'iy Intellekt", subtitle: "Kelajak kasbi", desc: "AI va Machine Learning yo'nalishlari" }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={MyImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Aylanuvchi matnlar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <motion.h2 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              {texts[currentIndex].title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl mb-3"
            >
              {texts[currentIndex].subtitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg md:text-xl mb-8"
            >
              {texts[currentIndex].desc}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link 
                to="/admission" 
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:border-[#10B981] transition-all flex items-center gap-2 hover:text-[#10B981]"
              >
                Ariza topshirish <FiArrowRight />
              </Link>
               <Link
                to="/video-presentation"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold  hover:border-[#10B981] hover:text-[#10B981] transition-all flex items-center gap-2"
              >
                <FiPlay /> Video taqdimot
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {texts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? "w-8 h-2 bg-primary" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  )
}