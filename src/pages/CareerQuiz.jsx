import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'

const questions = [
  {
    question: "Qaysi turdagi ish sizga ko'proq yoqadi?",
    options: [
      { text: "Mantiqiy masalalar", course: "Backend" },
      { text: "Vizual dizayn", course: "Graphic Design" },
      { text: "Xavfsizlik tahlili", course: "Cybersecurity" },
      { text: "Qurilmalar bilan ishlash", course: "Robotics" }
    ]
  },
  {
    question: "Qanday muhitda ishlashni afzal ko'rasiz?",
    options: [
      { text: "Kompyuter oldida yakka", course: "Backend" },
      { text: "Jamoa bilan", course: "Frontend" },
      { text: "Laboratoriyada", course: "Robotics" },
      { text: "Erkin ravishda", course: "Graphic Design" }
    ]
  },
  {
    question: "Qaysi fan maktabda sizga yoqgan?",
    options: [
      { text: "Matematika", course: "Backend" },
      { text: "San'at", course: "Graphic Design" },
      { text: "Fizika", course: "Robotics" },
      { text: "Informatika", course: "Frontend" }
    ]
  },
  {
    question: "Bo'sh vaqtingizda nima qilishni yoqtirasiz?",
    options: [
      { text: "O'yinlar o'ynash", course: "Frontend" },
      { text: "Rasm chizish", course: "Graphic Design" },
      { text: "Gadgetlar bilan tajriba", course: "Robotics" },
      { text: "Yangiliklar o'qish", course: "Cybersecurity" }
    ]
  },
  {
    question: "Qaysi natija sizni ko'proq qiziqtiradi?",
    options: [
      { text: "Ishlaydigan dastur", course: "Backend" },
      { text: "Chiroyli dizayn", course: "Graphic Design" },
      { text: "Xavfsiz tizim", course: "Cybersecurity" },
      { text: "Aqlli qurilma", course: "Robotics" }
    ]
  },
  {
    question: "Qancha vaqt o'qishga tayyorsiz?",
    options: [
      { text: "2-3 oy", course: "Computer Literacy" },
      { text: "3-4 oy", course: "Graphic Design" },
      { text: "4-5 oy", course: "Frontend" },
      { text: "5+ oy", course: "Backend" }
    ]
  }
]

export default function CareerQuiz() {
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (course) => {
    const newAnswers = [...answers, course]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})
    
    const maxCourse = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)
    const percentage = Math.round((counts[maxCourse] / questions.length) * 100)
    
    return { course: maxCourse, percentage }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>IT Kasb Testi | IT Park Rishton</title>
      </Helmet>

      <PageHero
        title={t('quiz.title') || "Sizga qaysi IT kasbi mos keladi?"}
        description={t('quiz.subtitle') || "Qisqa testdan o'ting va o'zingizga mos yo'nalishni aniqlang."}
      />

      <section className="section-space bg-canvas min-h-[60vh] flex flex-col items-center justify-center">
        <div className="site-container w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-line"
              >
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-bold text-muted mb-2">
                    <span>{currentQuestion + 1} - savol</span>
                    <span>{questions.length} dan</span>
                  </div>
                  <div className="w-full bg-line h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-primary h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8">
                  {questions[currentQuestion].question}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {questions[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt.course)}
                      className="text-left p-4 rounded-xl border-2 border-line hover:border-primary hover:bg-emerald-50 transition-all font-semibold text-ink"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-line text-center"
              >
                <h2 className="text-2xl text-muted font-bold mb-2">Sizga mos yo'nalish:</h2>
                <div className="text-5xl font-extrabold text-primary mb-4">
                  {getResult().course}
                </div>
                <div className="text-lg font-semibold text-emerald-700 bg-emerald-100 inline-block px-4 py-1 rounded-full mb-6">
                  {getResult().percentage}% moslik
                </div>
                
                <p className="text-muted mb-8 max-w-lg mx-auto">
                  Sizning javoblaringiz asosida shu yo'nalish sizga eng ko'p mos kelishini aniqladik. 
                  Bu sohada muvaffaqiyatga erishishingiz uchun barcha imkoniyatlar mavjud!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/directions" className="button-primary px-8">
                    Kurslar bilan tanishish
                  </Link>
                  <Link to="/admission" className="button-primary px-8 !bg-ink hover:!bg-gray-800">
                    Ro'yxatdan o'tish
                  </Link>
                </div>
                
                <button 
                  onClick={resetQuiz}
                  className="mt-8 text-sm font-bold text-muted hover:text-primary transition-colors underline"
                >
                  Testni qayta ishlash
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      <CTASection />
    </motion.main>
  )
}
