import { motion } from "framer-motion"

const partners = [
  { id: 1, name: "IT Park", logo: "https://via.placeholder.com/150x80?text=IT+Park" },
  { id: 2, name: "EPAM Systems", logo: "https://via.placeholder.com/150x80?text=EPAM" },
  { id: 3, name: "Google", logo: "https://via.placeholder.com/150x80?text=Google" },
  { id: 4, name: "Microsoft", logo: "https://via.placeholder.com/150x80?text=Microsoft" },
  { id: 5, name: "Uzum", logo: "https://via.placeholder.com/150x80?text=Uzum" },
  { id: 6, name: "Najot Ta'lim", logo: "https://via.placeholder.com/150x80?text=Najot" }
]

export default function Partners() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            Hamkorlarimiz
          </h2>
          <p className="text-gray-600 mt-2">Biz bilan hamkorlik qilayotgan tashkilotlar</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}