import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi"

const blogPosts = [
  {
    id: 1,
    title: "Frontend dasturlashni qanday boshlash mumkin?",
    excerpt: "Frontend dasturlashni o'rganish uchun qadamma-qadam yo'riqnoma...",
    date: "2024-03-15",
    author: "Shavkat Akramov",
    image: "https://picsum.photos/id/0/400/250",
    category: "Dasturlash"
  },
  {
    id: 2,
    title: "Sun'iy intellekt kelajagi",
    excerpt: "AI texnologiyalari qanday rivojlanmoqda va qanday imkoniyatlar bermoqda...",
    date: "2024-03-10",
    author: "Gulnora Xasanova",
    image: "https://picsum.photos/id/1/400/250",
    category: "AI"
  },
  {
    id: 3,
    title: "Robototexnika olimpiadasiga tayyorgarlik",
    excerpt: "Robototexnika olimpiadasida qatnashish bo'yicha maslahatlar...",
    date: "2024-03-05",
    author: "Alisher To'xtayev",
    image: "https://picsum.photos/id/2/400/250",
    category: "Robototexnika"
  }
]

export default function Blog() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Foydali maqolalar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            IT sohasidagi eng so'nggi yangiliklar va foydali maslahatlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiUser /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-primary font-semibold group"
                >
                  O'qish <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/blog" 
            className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-[#10B981] transition-all"
          >
            Barcha maqolalar
          </Link>
        </div>
      </div>
    </section>
  )
}