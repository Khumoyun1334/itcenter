import { motion } from "framer-motion"
import { FaLaptopCode, FaUserGraduate, FaBriefcase, FaCertificate, FaClock, FaGlobe } from "react-icons/fa"

const features = [
  {
    id: 1,
    icon: FaUserGraduate,
    title: "Bepul ta'lim",
    desc: "Davlat tomonidan to'liq qoplanadigan bepul ta'lim",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Zamonaviy jihozlar",
    desc: "Eng yangi kompyuterlar va texnologiyalar",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: FaBriefcase,
    title: "Ishga joylashtirish",
    desc: "Kursni tamomlagandan so'ng ishga joylashtirish",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    icon: FaCertificate,
    title: "Sertifikat",
    desc: "Davlat tomonidan tan olingan sertifikat",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    icon: FaClock,
    title: "Qulay vaqt",
    desc: "Kechki va dam olish kunlari darslar",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    icon: FaGlobe,
    title: "Xalqaro standart",
    desc: "Xalqaro dasturlash standartlari asosida",
    color: "from-indigo-500 to-purple-500"
  }
]

export default function Features() {
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
            Nima uchun aynan biz?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rishton IT Center ni tanlashning 6ta asosiy sababi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}