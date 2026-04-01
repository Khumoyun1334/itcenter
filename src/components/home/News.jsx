import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { newsData } from "../../data/newsData"
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi"

export default function News() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase">Yangiliklar</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">So'nggi yangiliklar</h2>
          <p className="text-gray-600 mt-4">IT Centerdagi eng so'nggi yangiliklar va e'lonlar</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.div key={news.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">{news.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar /> {news.date}</span>
                  <span className="flex items-center gap-1"><FiUser /> Admin</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link to={`/news/${news.id}`} className="inline-flex items-center text-primary font-semibold group">
                  Batafsil <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}