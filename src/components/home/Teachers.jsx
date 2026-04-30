import { motion } from "framer-motion"
import { teachersData } from "../../data/teachersData"
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Teachers() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase">Ustozlar</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Tajribali mutaxassislar</h2>
          <p className="text-gray-600 mt-4">O'z sohasining yetuk mutaxassislaridan ta'lim oling</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersData.map((teacher, index) => (
            <motion.div key={teacher.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{teacher.position}</p>
                <p className="text-gray-500 text-sm mb-3">{teacher.experience} tajriba</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{teacher.bio}</p>
                <div className="flex gap-3 pt-4 border-t">
                  <a href={teacher.social} className="text-gray-500 hover:text-blue-500"><FaTelegram size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900"><FaGithub size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-blue-700"><FaLinkedin size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}