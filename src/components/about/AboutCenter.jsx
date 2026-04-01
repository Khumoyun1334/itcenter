import { motion } from "framer-motion"
import { FaRocket, FaUsers, FaLaptopCode, FaAward } from "react-icons/fa"

export default function AboutCenter() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Markaz haqida</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Rishton IT Center - yoshlarni zamonaviy IT kasblarga tayyorlaydigan bepul ta'lim markazi</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="About" className="rounded-2xl shadow-xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-3xl font-bold mb-4">Rishton IT Center</h2>
          <p className="text-gray-600 mb-4">Rishton tumani hokimi tashabbusi bilan tashkil etilgan IT markaz yoshlarga zamonaviy IT sohalarida bepul ta'lim beradi.</p>
          <p className="text-gray-600 mb-6">Markazda 4 ta asosiy yo'nalish mavjud: Frontend, Backend, Robototexnika va Sun'iy Intellekt. Kelajakda yangi yo'nalishlar ham qo'shiladi.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <FaRocket className="text-3xl text-primary mb-2" />
              <h3 className="font-bold">Missiyamiz</h3>
              <p className="text-sm text-gray-600">Yoshlarni IT sohasida yetuk mutaxassis qilib tayyorlash</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <FaAward className="text-3xl text-primary mb-2" />
              <h3 className="font-bold">Maqsadimiz</h3>
              <p className="text-sm text-gray-600">1000+ yoshni IT sohasiga jalb qilish</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: FaUsers, title: "500+ Talaba", desc: "Hozirgi kunda 500 dan ortiq talaba ta'lim olmoqda" },
          { icon: FaLaptopCode, title: "6 ta Yo'nalish", desc: "4 ta asosiy va 2 ta qo'shimcha yo'nalish" },
          { icon: FaAward, title: "12 ta Ustoz", desc: "Tajribali va malakali ustozlar jamoasi" }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <item.icon className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}