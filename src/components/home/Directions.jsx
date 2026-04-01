import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { directionsData } from "../../data/directionsData"
import { FiArrowRight } from "react-icons/fi"

export default function Directions() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase">Ta'lim yo'nalishlari</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Qaysi sohani o'rganasiz?</h2>
          <p className="text-gray-600 mt-4">Zamonaviy IT sohalari bo'yicha mutaxassislardan bepul ta'lim oling</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directionsData.map((direction, index) => (
            <motion.div
              key={direction.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={direction.image} alt={direction.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${direction.bgGradient} flex items-center justify-center`}>
                  <direction.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{direction.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{direction.duration} • {direction.students}+ talaba</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{direction.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {direction.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{topic}</span>
                  ))}
                </div>
                <Link to={`/directions/${direction.id}`} className="inline-flex items-center text-primary font-semibold group/link">
                  Batafsil <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}