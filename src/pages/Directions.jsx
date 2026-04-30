import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { allDirections } from "../data/directionsData"
import { FiArrowRight } from "react-icons/fi"

export default function Directions() {
  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Barcha yo'nalishlar
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rishton IT Centerda 6 ta zamonaviy yo'nalish bo'yicha bepul ta'lim oling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDirections.map((direction, index) => (
            <motion.div
              key={direction.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={direction.image}
                  alt={direction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${direction.bgGradient} flex items-center justify-center`}>
                  <direction.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{direction.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{direction.duration} • {direction.students}+ talaba</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{direction.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {direction.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                  {direction.topics.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      +{direction.topics.length - 3}
                    </span>
                  )}
                </div>
                
                <Link
                  to={`/directions/${direction.id}`}
                  className="inline-flex items-center text-primary font-semibold group/link"
                >
                  <span>Batafsil</span>
                  <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}