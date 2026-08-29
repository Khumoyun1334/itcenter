import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiBookOpen
} from "react-icons/fi"
import { directionsData } from "../data/directionsData"
import { useLanguage } from "../context/LanguageContext"
import PageHero from "../components/common/PageHero"

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
const API_URL = BOT_TOKEN ? "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage" : ""

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  direction: "frontend",
  birthDate: "",
  education: "secondary",
  message: ""
}

const escapeHtml = (value) => String(value || "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

export default function Admission() {
  const [formData, setFormData] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const { t } = useLanguage()

  const selectedDirection = directionsData.find(d => d.id === formData.direction) || directionsData[0]

  const benefits = [
    t("features.f1_title"),
    t("features.f2_title"),
    t("features.f3_title"),
    t("features.f4_title"),
    t("features.f5_title")
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: null }))
  }

  const validateForm = () => {
    const nextErrors = {}
    if (!formData.fullName.trim()) nextErrors.fullName = t("admission.nameLabel")
    if (!formData.phone.trim()) {
      nextErrors.phone = t("admission.phoneLabel")
    } else if (!/^\+?998[0-9]{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      nextErrors.phone = "+998 90 123 45 67"
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Email format"
    if (!formData.direction) nextErrors.direction = t("admission.courseLabel")
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const sendToTelegram = async () => {
    if (!API_URL || !CHAT_ID) {
      return true
    }
    const directionName = selectedDirection?.title || formData.direction

    const message = [
      "<b>🎓 YANGI ARIZA (QABUL 2026) — IT PARK RISHTAN</b>",
      "",
      "<b>ARIZA TOPSHIRUVCHI</b>",
      "To'liq Ism: " + escapeHtml(formData.fullName),
      "Telefon: " + escapeHtml(formData.phone),
      "Email: " + escapeHtml(formData.email || "-"),
      "Tug'ilgan sana: " + escapeHtml(formData.birthDate || "-"),
      "Ma'lumoti: " + escapeHtml(formData.education || "-"),
      "",
      "<b>TANLANGAN YO'NALISH</b>",
      "Kurs: " + escapeHtml(directionName),
      "",
      "<b>QO'SHIMCHA IZOH</b>",
      escapeHtml(formData.message || "-"),
      "",
      "Yuborilgan vaqt: " + new Date().toLocaleString()
    ].join("\n")

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "HTML" })
      })
      const data = await response.json()
      return data.ok
    } catch (error) {
      console.error("Telegram yuborish xatosi:", error)
      return false
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validateForm()) return
    setLoading(true)
    const success = await sendToTelegram()
    if (success) {
      setSubmitted(true)
      setFormData(emptyForm)
    } else {
      alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.")
    }
    setLoading(false)
  }

  return (
    <main>
      <PageHero
        eyebrow={t("admission.eyebrow")}
        title={t("admission.title")}
        description={t("admission.description")}
      />

      <section className="section-space bg-canvas">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Main Application Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(7,21,15,0.06)]"
          >
            <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">{t("admission.onlineTag")}</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {t("admission.formTitle")}
                </h2>
              </div>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-3xl border border-emerald-300 bg-emerald-50 p-6 text-emerald-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                      <FiCheckCircle className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{t("admission.successTitle")}</h3>
                      <p className="text-xs text-emerald-800 mt-0.5">{t("admission.successDesc")}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
                  >
                    {t("admission.newApplication")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!submitted && (
              <form onSubmit={handleSubmit} className="mt-7">
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.nameLabel")}</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.fullName)}
                        className="field-control !pl-11"
                        placeholder="Azizbek Karimov"
                      />
                    </div>
                    {errors.fullName && <p className="mt-1.5 text-xs font-bold text-red-500">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.phoneLabel")}</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        className="field-control !pl-11"
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                    {errors.phone && <p className="mt-1.5 text-xs font-bold text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.emailLabel")}</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="field-control !pl-11"
                        placeholder="example@mail.com"
                      />
                    </div>
                  </div>

                  {/* Direction */}
                  <div>
                    <label htmlFor="direction" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.courseLabel")}</label>
                    <div className="relative">
                      <select
                        id="direction"
                        name="direction"
                        value={formData.direction}
                        onChange={handleChange}
                        className="field-control font-bold"
                      >
                        {directionsData.map((item) => (
                          <option key={item.id} value={item.id}>{item.title} ({item.duration})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label htmlFor="birthDate" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.birthLabel")}</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                      <input
                        id="birthDate"
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="field-control !pl-11"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <label htmlFor="education" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.eduLabel")}</label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="field-control"
                    >
                      <option value="school">{t("admission.edu_school")}</option>
                      <option value="secondary">{t("admission.edu_secondary")}</option>
                      <option value="specialized">{t("admission.edu_special")}</option>
                      <option value="higher">{t("admission.edu_higher")}</option>
                    </select>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("admission.notesLabel")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="field-control resize-y"
                    placeholder="..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="button-primary mt-7 w-full shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>{t("admission.submitting")} <FiSend className="animate-pulse" /></>
                  ) : (
                    <>{t("admission.submitBtn")} <FiArrowUpRight /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Aside: Selected Course Info & Perks */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="space-y-6 lg:sticky lg:top-28"
          >
            {/* Selected Course Quick Card */}
            {selectedDirection && (
              <div className="premium-card p-6 border-emerald-500/30 bg-gradient-to-br from-white to-emerald-50/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                    <FiBookOpen className="text-xl" />
                  </span>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">Tanlangan kurs</span>
                    <h3 className="font-display text-lg font-bold text-ink">{selectedDirection.title}</h3>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-bold text-muted border-t border-line/80 pt-3">
                  <span>{t("courses.duration")}: <strong className="text-ink">{selectedDirection.duration}</strong></span>
                  <span>{t("courses.students")}: <strong className="text-ink">{selectedDirection.students}+</strong></span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selectedDirection.topics?.slice(0, 3).map(topic => (
                    <span key={topic} className="rounded-lg bg-white px-2 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-100">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Why IT Park */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#061811] via-[#09261b] to-[#0c3927] p-7 text-white shadow-[0_26px_70px_rgba(7,21,15,0.3)] sm:p-8">
              <p className="section-kicker !text-emerald-400">{t("admission.whyTitle")}</p>
              <h2 className="font-display mt-4 text-xl font-bold tracking-tight">
                {t("admission.whyDesc")}
              </h2>
              <ul className="mt-6 space-y-3.5">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-white/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#05110c]">
                      <FiCheck className="text-xs" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & Support */}
            <div className="premium-card p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-primary">{t("contact.cardTitle")}</p>
              <div className="mt-4 flex gap-3">
                <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-xs font-bold leading-relaxed text-muted">
                  {t("contact.addressValue")}
                </p>
              </div>
              <a
                href="tel:+998558127000"
                className="mt-4 flex items-center gap-2.5 text-xs font-extrabold text-ink transition hover:text-primary border-t border-line/80 pt-3"
              >
                <FiPhone className="text-primary" /> +998 55 812 70 00
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  )
}
