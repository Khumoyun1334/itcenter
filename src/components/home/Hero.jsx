import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowRight, FiPlay } from "react-icons/fi"

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Rasmiy ochilish</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Rishton IT Center <span className="gradient-text">2024</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Rishton tumani hokimi boshchiligida ochilayotgan zamonaviy IT markaz. 
              Barcha yoshlar uchun bepul ta'lim!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Ariza topshirish <FiArrowRight />
              </Link>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                <FiPlay /> Video taqdimot
              </button>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="IT Center" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">1</p>
                <p className="text-sm text-gray-500">Sentabr</p>
                <p className="text-xs text-gray-400">2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}   