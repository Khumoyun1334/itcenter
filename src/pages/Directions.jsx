import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { directionsData } from "../data/directionsData"
import { FiArrowRight } from "react-icons/fi"

export default function Directions() {
  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Ta'lim yo'nalishlari</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Sizga eng mos keladigan yo'nalishni tanlang va IT sohasida karerangizni boshlang</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directionsData.map((direction, index) => (
            <motion.div key={direction.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img src={direction.image} alt={direction.title} className="w-full h-full object-cover" />
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${direction.bgGradient} flex items-center justify-center`}>
                  <direction.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{direction.title}</h2>
                <div className="flex gap-4 mb-4">
                  <span className="text-primary font-semibold">{direction.duration}</span>
                  <span className="text-gray-500">{direction.students}+ talaba</span>
                </div>
                <p className="text-gray-600 mb-4">{direction.description}</p>
                <h3 className="font-semibold mb-2">O'quv dasturi:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {direction.topics.map((topic, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{topic}</span>
                  ))}
                </div>
                <Link to={`/directions/${direction.id}`} className="inline-flex items-center text-primary font-semibold text-lg group">
                  Batafsil <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}