import { useState } from "react"
import { motion } from "framer-motion"
import { directionsData } from "../data/directionsData"
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaGraduationCap, FaArrowRight } from "react-icons/fa"

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", direction: "", birthDate: "", education: "", message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">ARIZA TOPSHIRISH</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Rishton IT Centerga bepul o'qishga kirish uchun ariza qoldiring</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">To'liq ism *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ism Familya" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefon raqam *</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+998 90 123 45 67" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" placeholder="example@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Yo'nalish *</label>
                  <select required value={formData.direction} onChange={(e) => setFormData({...formData, direction: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Tanlang</option>
                    {directionsData.map(dir => (<option key={dir.id} value={dir.id}>{dir.title}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tug'ilgan sana</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Ma'lumot</label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Tanlang</option>
                      <option>O'rta ma'lumot</option>
                      <option>O'rta maxsus</option>
                      <option>Oliy ma'lumot</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">Qo'shimcha ma'lumot</label>
                <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" placeholder="IT sohasidagi tajribangiz, qiziqishlaringiz..."></textarea>
              </div>
              <button type="submit" className="w-full mt-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                ARIZA YUBORISH <FaArrowRight />
              </button>
              {submitted && <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl text-center">Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.</div>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 ">
              <h3 className="text-2xl font-bold mb-4">Nima uchun IT Center?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">✓ Bepul ta'lim</li>
                <li className="flex items-center gap-2">✓ Zamonaviy jihozlar</li>
                <li className="flex items-center gap-2">✓ Tajribali ustozlar</li>
                <li className="flex items-center gap-2">✓ Sertifikat beriladi</li>
                <li className="flex items-center gap-2">✓ Ishga joylashtirish</li>
              </ul>
            </div>
            <div className="mt-6 bg-white rounded-2xl shadow-xl p-8">
              <h4 className="font-bold text-lg mb-4">Manzil</h4>
              <p className="text-gray-600 mb-2">Rishton tumani, Markaziy ko'cha 45</p>
              <p className="text-gray-600 mb-2">Tel: +998 90 123 45 67</p>
              <p className="text-gray-600">Email: info@rishtonit.uz</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}