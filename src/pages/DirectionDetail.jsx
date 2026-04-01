import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { directionsData } from "../data/directionsData"
import { FiArrowLeft, FiClock, FiUsers, FiBookOpen, FiAward } from "react-icons/fi"

export default function DirectionDetail() {
  const { id } = useParams()
  const direction = directionsData.find(d => d.id === id)

  if (!direction) {
    return <div className="pt-32 text-center">Yo'nalish topilmadi</div>
  }

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Link to="/directions" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
          <FiArrowLeft /> Barcha yo'nalishlar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <img src={direction.image} alt={direction.title} className="rounded-2xl shadow-xl w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${direction.bgGradient} mb-4`}>
              <direction.icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{direction.title}</h1>
            <div className="flex gap-6 mb-6">
              <span className="flex items-center gap-2 text-gray-600"><FiClock /> {direction.duration}</span>
              <span className="flex items-center gap-2 text-gray-600"><FiUsers /> {direction.students}+ talaba</span>
            </div>
            <p className="text-gray-600 text-lg mb-6">{direction.description}</p>
            
            <div className="bg-white rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><FiBookOpen /> O'quv dasturi</h3>
              <div className="grid grid-cols-2 gap-3">
                {direction.topics.map((topic, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">{topic}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><FiAward /> Talablar</h3>
              <p className="text-gray-600">{direction.requirements || "Kompyuter savodxonligi va mantiqiy fikrlash"}</p>
            </div>

            <Link to="/admission" className="inline-block w-full text-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Arizani topshirish
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}