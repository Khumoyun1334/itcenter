import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaUsers, FaLaptopCode, FaRobot, FaBrain } from "react-icons/fa"

const stats = [
  { id: 1, icon: FaUsers, value: 500, label: "Talabalar", suffix: "+", color: "from-blue-500 to-cyan-500" },
  { id: 2, icon: FaLaptopCode, value: 6, label: "Yo'nalishlar", suffix: "", color: "from-green-500 to-emerald-500" },
  { id: 3, icon: FaRobot, value: 50, label: "Jihozlar", suffix: "+", color: "from-red-500 to-orange-500" },
  { id: 4, icon: FaBrain, value: 12, label: "Mutaxassislar", suffix: "", color: "from-purple-500 to-pink-500" }
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${value}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [value])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const increment = Math.ceil(value / 40)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 30)
      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <motion.span 
      id={`counter-${value}`} 
      className="text-4xl md:text-5xl font-bold text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      {count}{suffix}
    </motion.span>
  )
}

export default function Statistics() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Raqamlar bilan
          </h2>
          <p className="text-blue-100">Bizning natijalarimiz</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Counter */}
              <Counter value={stat.value} suffix={stat.suffix} />
              
              {/* Label */}
              <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}