import { useState } from "react"
import { motion } from "framer-motion"
import { directionsData } from "../data/directionsData"
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaGraduationCap, FaArrowRight, FaSpinner, FaCheckCircle } from "react-icons/fa"

// Telegram bot ma'lumotlari
const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: "", 
    phone: "", 
    email: "", 
    direction: "", 
    birthDate: "", 
    education: "", 
    message: ""
  })
  
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Xatoni o'chirish
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      })
    }
  }

  // Validatsiya
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Ismingizni kiriting"
    }
    
    if (!formData.phone?.trim()) {
      newErrors.phone = "Telefon raqamingizni kiriting"
    } else if (!/^\+?998[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Telefon noto'g'ri formatda (+998901234567)"
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email noto'g'ri formatda"
    }
    
    if (!formData.direction) {
      newErrors.direction = "Yo'nalishni tanlang"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Telegramga yuborish
  const sendToTelegram = async () => {
    const directionName = directionsData.find(d => d.id === formData.direction)?.title || formData.direction
    
    // Ma'lumotni o'zbekcha ko'rinishda yozish
    const educationText = {
      "school": "Maktab o'quvchisi",
      "secondary": "O'rta ma'lumot",
      "specialized": "O'rta maxsus",
      "higher": "Oliy ma'lumot"
    }[formData.education] || formData.education || '-'
    
    const message = `
📬 <b>YANGI ARIZA</b> (IT Center)
══════════════════

👤 <b>ARIZA BERUVCHI:</b>
• Ism: ${formData.fullName}
• Telefon: ${formData.phone}
• Email: ${formData.email || '-'}

🎯 <b>TA'LIM HAQIDA:</b>
• Yo'nalish: ${directionName}
• Tug'ilgan sana: ${formData.birthDate || '-'}
• Ma'lumot: ${educationText}

📝 <b>QO'SHIMCHA:</b>
${formData.message || '-'}

══════════════════
⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })

      const data = await response.json()
      return data.ok
    } catch (error) {
      console.error('Telegram xatosi:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    const success = await sendToTelegram()
    
    if (success) {
      setSubmitted(true)
      setFormData({
        fullName: "", 
        phone: "", 
        email: "", 
        direction: "", 
        birthDate: "", 
        education: "", 
        message: ""
      })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } else {
      alert('❌ Xatolik yuz berdi. Qayta urinib ko\'ring.')
    }
    
    setLoading(false)
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
              {/* Success Message */}
              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-300 rounded-xl p-4 flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <p className="text-green-700">Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">To'liq ism *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      className={`w-full pl-10 pr-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary`} 
                      placeholder="Ism Familya" 
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefon raqam *</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary`} 
                      placeholder="+998 90 123 45 67" 
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary`} 
                      placeholder="example@email.com" 
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Yo'nalish *</label>
                  <select 
                    name="direction"
                    required 
                    value={formData.direction} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-3 border ${errors.direction ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Tanlang</option>
                    {directionsData.map(dir => (<option key={dir.id} value={dir.id}>{dir.title}</option>))}
                  </select>
                  {errors.direction && <p className="text-red-500 text-xs mt-1">{errors.direction}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Tug'ilgan sana</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="date" 
                      name="birthDate"
                      value={formData.birthDate} 
                      onChange={handleChange} 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Ma'lumot</label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                      name="education"
                      value={formData.education} 
                      onChange={handleChange} 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Tanlang</option>
                      <option value="school">🏫 Maktab o'quvchisi</option>
                      <option value="secondary">📚 O'rta ma'lumot</option>
                      <option value="specialized">🎓 O'rta maxsus</option>
                      <option value="higher">🎓 Oliy ma'lumot</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">Qo'shimcha ma'lumot</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="IT sohasidagi tajribangiz, qiziqishlaringiz..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-8 py-4 bg-gradient-to-r from-primary to-secondary border font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    YUBORILMOQDA...
                  </>
                ) : (
                  <>
                    ARIZA YUBORISH <FaArrowRight />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-black bg-white shadow-2xl">
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