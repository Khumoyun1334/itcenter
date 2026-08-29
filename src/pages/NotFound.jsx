import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#05110c] flex items-center justify-center relative overflow-hidden p-6"
    >
      <Helmet>
        <title>404 | IT Park Rishton</title>
      </Helmet>

      {/* Animated floating symbols */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-emerald-500/20 text-6xl font-mono font-bold select-none pointer-events-none"
      >
        {'{'}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 text-emerald-500/20 text-6xl font-mono font-bold select-none pointer-events-none"
      >
        {'}'}
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/3 text-emerald-500/10 text-8xl font-mono font-bold select-none pointer-events-none"
      >
        {'</>'}
      </motion.div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 mb-6"
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t('notFound.title') || "Sahifa topilmadi"}
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-white/60 mb-10"
        >
          {t('notFound.description') || "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan."}
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-500/20">
            Bosh sahifaga qaytish
          </Link>
        </motion.div>
      </div>
    </motion.main>
  )
}
