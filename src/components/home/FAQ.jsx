import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlus, FaMinus } from "react-icons/fa"

const faqs = [
  {
    id: 1,
    question: "IT Center ga kimlar qatnasha oladi?",
    answer: "Rishton tumanida yashovchi 10 yoshdan 35 yoshgacha bo'lgan barcha yoshlar bepul qatnasha oladi."
  },
  {
    id: 2,
    question: "Qanday qilib ariza topshirish mumkin?",
    answer: "Saytimizdagi 'Ariza topshirish' sahifasida formani to'ldirishingiz yoki IT Park ga to'g'ridan-to'g'ri kelib murojaat qilishingiz mumkin."
  },
  {
    id: 3,
    question: "Darslar qancha davom etadi?",
    answer: "Yo'nalishga qarab 1 oydan 6 oygacha davom etadi. Har hafta 3 kun darslar tashkil etiladi."
  },
  {
    id: 4,
    question: "Sertifikat beriladimi?",
    answer: "Ha, kursni muvaffaqiyatli tamomlaganlarga davlat tomonidan tan olingan sertifikat beriladi."
  },
  {
    id: 5,
    question: "Ishga joylashtirishda yordam berasizmi?",
    answer: "Ha, kursni tamomlagandan so'ng, bizning hamkor kompaniyalarimizga ishga joylashtirishda yordam beramiz."
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Ko'p beriladigan savollar
          </h2>
          <p className="text-gray-600">Sizni qiziqtirgan savollarga javoblar</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-all"
              >
                <span className="font-semibold text-lg text-left">{faq.question}</span>
                {openId === faq.id ? <FaMinus /> : <FaPlus />}
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}