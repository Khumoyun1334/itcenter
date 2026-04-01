import { motion } from "framer-motion"
import { teachersData } from "../data/teachersData"
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Teachers() {
  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Ustozlar jamoasi</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">O'z sohasining yetuk mutaxassislaridan ta'lim oling</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersData.map((teacher, index) => (
            <motion.div key={teacher.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">{teacher.name}</h3>
                  <p className="text-white/80 text-sm">{teacher.position}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-3">{teacher.experience} tajriba</p>
                <p className="text-gray-600 text-sm mb-4">{teacher.bio}</p>
                <div className="flex gap-3 pt-4 border-t">
                  <a href="#" className="text-gray-500 hover:text-blue-500"><FaTelegram size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900"><FaGithub size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}