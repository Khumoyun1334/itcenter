import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Bog'lanish</h1>
          <p className="text-gray-600 text-lg">Savol va takliflaringiz bo'lsa, biz bilan bog'lanishingiz mumkin</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form section */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Biz bilan bog'laning</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Ism Familya</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-800" 
                    placeholder="Ismingiz" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-800" 
                    placeholder="+998 90 123 45 67" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-800" 
                    placeholder="example@email.com" 
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Xabar</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-800" 
                    placeholder="Xabaringizni yozing..."
                  ></textarea>
                </div>
                <button className="gradient-text border w-full py-3 bg-linear-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg transition-all">
                  Yuborish
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact info section - Oq fon, qora matnlar */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Aloqa ma'lumotlari</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                  <div>
                    <p className="font-semibold text-gray-800">Manzil</p>
                    <p className="text-gray-600">Rishton tumani, 1-son texnikum ( eski sanoat kolejji ) hududida</p>
                  </div> 
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-primary" />
                  <div>
                    <p className="font-semibold text-gray-800">Telefon</p>
                    <p className="text-gray-600">+998 55 812 70 00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-primary" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@rishtonit.uz</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaClock className="text-2xl text-primary" />
                  <div>
                    <p className="font-semibold text-gray-800">Ish vaqti</p>
                    <p className="text-gray-600">Dushanba - Shanba | 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4 text-gray-800">Ijtimoiy tarmoqlar</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <FaTelegram size={24} className="text-primary group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <FaInstagram size={24} className="text-primary group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <FaFacebook size={24} className="text-primary group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}