import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/common/PageHero'
import { FiSearch, FiCheckCircle, FiXCircle } from 'react-icons/fi'

const mockCertificates = [
  { id: "ITPR-2026-FE-001", name: "Abdulloh Karimov", course: "Frontend", date: "2026-06-15" },
  { id: "ITPR-2026-BE-002", name: "Nilufar Raximova", course: "Backend", date: "2026-06-15" },
  { id: "ITPR-2026-CS-003", name: "Jasur Toshmatov", course: "Cybersecurity", date: "2026-05-20" },
  { id: "ITPR-2026-GD-004", name: "Madina Azimova", course: "Graphic Design", date: "2026-07-01" },
  { id: "ITPR-2026-RT-005", name: "Sardor Mirzoev", course: "Robotics", date: "2026-07-01" }
]

export default function CertificateVerify() {
  const { t } = useLanguage()
  const [certId, setCertId] = useState("")
  const [result, setResult] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!certId.trim()) return
    
    setHasSearched(true)
    const found = mockCertificates.find(c => c.id.toUpperCase() === certId.trim().toUpperCase())
    
    if (found) {
      setResult(found)
    } else {
      setResult('invalid')
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-canvas flex flex-col"
    >
      <Helmet>
        <title>Sertifikat tekshirish | IT Park Rishton</title>
      </Helmet>

      <PageHero
        title={t('certificate.title') || "Sertifikatni Tekshirish"}
        description={t('certificate.subtitle') || "IT Park Rishton tomonidan berilgan sertifikatning haqiqiyligini tekshiring."}
      />

      <section className="section-space flex-1">
        <div className="site-container max-w-3xl">
          <form onSubmit={handleSearch} className="bg-white p-6 md:p-8 rounded-3xl border border-line shadow-sm mb-12 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg" />
              <input
                type="text"
                placeholder="ID raqamni kiriting (masalan: ITPR-2026-FE-001)"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="field-control !pl-12 !h-14 w-full rounded-2xl text-lg uppercase"
              />
            </div>
            <button type="submit" className="button-primary !h-14 px-8 whitespace-nowrap">
              Tekshirish
            </button>
          </form>

          <AnimatePresence mode="wait">
            {hasSearched && result === 'invalid' && (
              <motion.div
                key="invalid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center"
              >
                <FiXCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-700 mb-2">Sertifikat topilmadi</h3>
                <p className="text-red-600/80">
                  Kiritilgan ID bo'yicha ma'lumot yo'q. Iltimos, raqamni to'g'ri kiritganingizni tekshiring.
                </p>
              </motion.div>
            )}

            {hasSearched && typeof result === 'object' && result !== null && (
              <motion.div
                key="valid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[2rem] border-4 border-emerald-100 p-2 shadow-2xl relative overflow-hidden"
              >
                <div className="border-2 border-dashed border-emerald-600/30 rounded-3xl p-8 md:p-12 relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold">
                        <FiCheckCircle className="w-6 h-6" /> <span>Haqiqiy Sertifikat</span>
                      </div>
                      <p className="text-muted text-sm">ID: <span className="font-mono font-bold text-ink">{result.id}</span></p>
                    </div>
                    <div className="w-24 h-24 bg-canvas rounded-2xl border border-line flex items-center justify-center font-bold text-muted text-xs text-center p-2">
                      IT PARK<br/>LOGO
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Bitiruvchi:</h4>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-ink">{result.name}</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Yo'nalish:</h4>
                      <p className="text-xl font-bold text-ink">{result.course}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Bitirgan sana:</h4>
                      <p className="text-xl font-bold text-ink">{result.date}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-line/60 pt-8">
                    <div>
                      <div className="w-32 border-b-2 border-ink mb-2"></div>
                      <p className="text-xs font-bold text-muted uppercase tracking-wider">Direktor imzosi</p>
                    </div>
                    <div className="w-24 h-24 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center justify-center p-2 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "8px 8px" }}></div>
                      <span className="text-[10px] font-bold text-emerald-800 text-center relative z-10 bg-white/80 p-1 rounded">QR CODE<br/>{result.id.slice(-6)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  )
}
