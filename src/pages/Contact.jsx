import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaInstagram, FaTelegram } from "react-icons/fa"
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiUser } from "react-icons/fi"
import { useLanguage } from "../context/LanguageContext"
import PageHero from "../components/common/PageHero"

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
const API_URL = BOT_TOKEN ? "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage" : ""

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  message: ""
}

const escapeHtml = (value) => String(value || "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const { t } = useLanguage()

  const contactDetails = [
    { icon: FiMapPin, title: t("contact.addressLabel"), value: t("contact.addressValue") },
    { icon: FiPhone, title: t("contact.phoneLabel"), value: "+998 55 812 70 00", href: "tel:+998558127000" },
    { icon: FiMail, title: t("contact.emailLabel"), value: "info@rishtonit.uz", href: "mailto:info@rishtonit.uz" },
    { icon: FiClock, title: t("contact.hoursLabel"), value: t("contact.hoursValue") }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  const validateForm = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = t("contact.nameLabel")
    if (!formData.phone.trim()) {
      nextErrors.phone = t("contact.phonePlaceholder")
    } else if (!/^\+?998[0-9]{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      nextErrors.phone = t("contact.phoneError") || t("contact.phoneInvalid")
    }
    if (!formData.message.trim()) nextErrors.message = t("contact.messageLabel")
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)

    if (!API_URL || !CHAT_ID) {
      setTimeout(() => {
        setSubmitted(true)
        setFormData(emptyForm)
        setLoading(false)
        setTimeout(() => setSubmitted(false), 5000)
      }, 800)
      return
    }

    const text = [
      "<b>📩 YANGI MUROJAAT (BOG'LANISH) — IT PARK RISHTAN</b>",
      "",
      "<b>YUBORUVCHI</b>",
      "Ism: " + escapeHtml(formData.name),
      "Telefon: " + escapeHtml(formData.phone),
      "Email: " + escapeHtml(formData.email || "-"),
      "",
      "<b>XABAR MATNI</b>",
      escapeHtml(formData.message),
      "",
      "Vaqt: " + new Date().toLocaleString()
    ].join("\n")

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "HTML" })
      })
      const data = await response.json()
      if (data.ok) {
        setSubmitted(true)
        setFormData(emptyForm)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Xatolik yuz berdi. Qayta urinib ko'ring.")
      }
    } catch (err) {
      console.error("Xabar yuborishda xatolik:", err)
      alert("Aloqa xatosi yuz berdi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <PageHero
        eyebrow={t("nav.contact")}
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="section-space bg-canvas">
        <div className="site-container grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(7,21,15,0.06)]"
          >
            <div className="flex items-center justify-between border-b border-line pb-6">
              <div>
                <p className="section-kicker">{t("contact.formSubtitle")}</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{t("contact.formTitle")}</h2>
              </div>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800"
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p>{t("contact.successTitle")}</p>
                    <p className="text-xs font-normal text-emerald-700 mt-0.5">{t("contact.successDesc")}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5" aria-label="Bog'lanish formasi">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("contact.nameLabel")}</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className="field-control !pl-11"
                      placeholder={t("contact.namePlaceholder")}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-xs font-bold text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("contact.phoneLabel")} *</label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      className="field-control !pl-11"
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>
                  {errors.phone && <p className="mt-1.5 text-xs font-bold text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("contact.emailOptional")}</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field-control !pl-11"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-ink">{t("contact.messageLabel")}</label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className="field-control resize-y"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                {errors.message && <p className="mt-1.5 text-xs font-bold text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="button-primary mt-3 w-full sm:w-auto sm:justify-self-start disabled:opacity-60"
              >
                {loading ? t("contact.sending") : t("contact.sendBtn")} <FiSend className={loading ? "animate-pulse" : ""} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details Card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between rounded-[2.2rem] bg-gradient-to-br from-[#061811] via-[#09261b] to-[#0c3927] p-7 text-white shadow-[0_28px_80px_rgba(7,21,15,0.3)] sm:p-9 lg:p-10"
          >
            <div>
              <p className="section-kicker !text-emerald-400">{t("contact.cardTitle")}</p>
              <h2 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                {t("contact.title")}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                {t("contact.description")}
              </p>

              <div className="mt-8 divide-y divide-white/10">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 backdrop-blur-md">
                        <Icon className="text-lg" />
                      </span>
                      <div>
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/45">{item.title}</span>
                        <span className="mt-1 block text-sm font-bold leading-relaxed text-white/90">{item.value}</span>
                      </div>
                    </>
                  )
                  return (
                    <div key={item.title} className="py-5 first:pt-0">
                      {item.href ? (
                        <a href={item.href} className="flex items-start gap-4 transition hover:text-emerald-300">
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">{content}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/45">Ijtimoiy Tarmoqlar</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://t.me/itparkrishton_uz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-emerald-400 hover:bg-emerald-600"
                >
                  <FaTelegram className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/itpark_rishtan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-emerald-400 hover:bg-emerald-600"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  )
}
