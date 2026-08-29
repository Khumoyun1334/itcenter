import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiMinus, FiPlus, FiHelpCircle, FiSearch } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"

const faqsData = {
  uz: [
    { id: 1, question: "IT Park Rishtan kurslariga kimlar qatnasha oladi?", answer: "Rishton tumani va unga yaqin hududlarda istiqomat qiluvchi, kompyuter va texnologiyalarga qiziqqan 10 yoshdan 35 yoshgacha bo'lgan barcha yoshlar qatnashishi mumkin." },
    { id: 2, question: "Kurslar haqiqatdan ham bepulmi?", answer: "Ha! Rishton tumani hokimligi va IT Park tashabbusi bilan tashkil etilgan ushbu markazda darslar to'liq bepul tashkil etilgan. Faqatgina qabul imtihoni va suhbatdan muvaffaqiyatli o'tish kifoya." },
    { id: 3, question: "Darslar qancha davom etadi va qaysi kunlari bo'ladi?", answer: "Yo'nalishiga qarab kurslar 2 oydan 5 oygacha davom etadi. Darslar haftada 3 kun (juft yoki toq kunlar) 2 soatdan amaliy shaklda olib boriladi." },
    { id: 4, question: "O'qish yakunida sertifikat beriladimi?", answer: "Ha, kurs yakuniy imtihonini va amaliy bitiruv loyihasini muvaffaqiyatli himoya qilgan har bir talabaga rasmiy tasdiqlangan IT Park sertifikati topshiriladi." },
    { id: 5, question: "Bitiruvchilarga ishga joylashishda qanday yordam beriladi?", answer: "Eng yaxshi natija ko'rsatgan iqtidorli bitiruvchilar IT Park rezident kompaniyalari, mahalliy korxonalar va frilans loyihalarga tavsiya etiladi." },
    { id: 6, question: "Qanday qilib ro'yxatdan o'tishim mumkin?", answer: "Saytimizdagi “Ariza topshirish” sahifasida onlayn formani to'ldirishingiz yoki markazimizga bevosita tashrif buyurib ro'yxatdan o'tishingiz mumkin." }
  ],
  oz: [
    { id: 1, question: "IT Park Rishtan курсларига кимлар қатнаша олади?", answer: "Риштон тумани ва унга яқин ҳудудларда истиқомат қилувчи, компьютер ва технологияларга қизиққан 10 ёшдан 35 ёшгача бўлган барча ёшлар қатнашиши мумкин." },
    { id: 2, question: "Курслар ҳақиқатдан ҳам бепулми?", answer: "Ҳа! Риштон тумани ҳокимлиги ва IT Park ташаббуси билан ташкил этилган ушбу марказда дарслар тўлиқ бепул ташкил этилган. Фақатгина қабул имтиҳони ва суҳбатдан муваффақиятли ўтиш кифоя." },
    { id: 3, question: "Дарслар қанча давом этади ва қайси кунлари бўлади?", answer: "Йўналишига қараб курслар 2 ойдан 5 ойгача давом этади. Дарслар ҳафтада 3 кун 2 соатдан амалий шаклда олиб борилади." },
    { id: 4, question: "Ўқиш якунида сертификат бериладими?", answer: "Ҳа, курс якуний имтиҳонини ва амалий битирув лойиҳасини муваффақиятли ҳимоя қилган ҳар бир талабага расмий тасдиқланган IT Park сертификати топширилади." },
    { id: 5, question: "Битирувчиларга ишга жойлашишда қандай ёрдам берилади?", answer: "Энг яхши натижа кўрсатган иқтидорли битирувчилар IT Park резидент компаниялари ва фриланс лойиҳаларга тавсия этилади." },
    { id: 6, question: "Қандай қилиб рўйхатдан ўтишим мумкин?", answer: "Сайтимиздаги “Ариза топшириш” саҳифасида онлайн формани тўлдиришингиз ёки марказимизга бевосита ташриф буюриб рўйхатдан ўтишингиз мумкин." }
  ],
  ru: [
    { id: 1, question: "Кто может обучаться на курсах IT Park Rishtan?", answer: "Обучаться могут все желающие в возрасте от 10 до 35 лет, проживающие в Риштанском районе и интересующиеся IT." },
    { id: 2, question: "Обучение действительно бесплатное?", answer: "Да! Курсы финансируются государством и IT Park. Обучение 100% бесплатное при успешном прохождении собеседования." },
    { id: 3, question: "Какова длительность и график занятий?", answer: "Курсы длятся от 2 до 5 месяцев. Занятия проходят 3 раза в неделю по 2 часа в интерактивном практическом формате." },
    { id: 4, question: "Выдается ли официальный сертификат?", answer: "Да, каждый выпускник, успешно защитивший финальный проект, получает официальный верифицированный сертификат IT Park." },
    { id: 5, question: "Помогаете ли вы с трудоустройством?", answer: "Лучшие выпускники получают рекомендации в компании-резиденты IT Park и помощь в выходе на международный фриланс." },
    { id: 6, question: "Как подать заявку на обучение?", answer: "Вы можете заполнить онлайн-заявку на странице «Подать заявку» или лично посетить наш центр." }
  ],
  en: [
    { id: 1, question: "Who is eligible to join IT Park Rishtan courses?", answer: "Anyone aged 10 to 35 residing in Rishtan and nearby regions with an interest in technology and computer science." },
    { id: 2, question: "Is the education genuinely free?", answer: "Yes! All training programs are 100% free of charge through state and IT Park initiatives for qualified applicants." },
    { id: 3, question: "What is the duration and schedule of classes?", answer: "Courses run from 2 to 5 months, 3 sessions per week (2 hours per lesson) with heavy hands-on practice." },
    { id: 4, question: "Do graduates receive an official certificate?", answer: "Yes, an official verified certificate from IT Park is awarded upon successful completion and final capstone defense." },
    { id: 5, question: "How do you assist with job placement?", answer: "Top-performing students are connected with IT Park partner tech firms and global freelance platforms." },
    { id: 6, question: "How can I apply?", answer: "Fill out the online application form on our 'Apply Now' page or visit our center directly." }
  ]
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)
  const [search, setSearch] = useState("")
  const { t, language } = useLanguage()

  const currentFaqs = faqsData[language] || faqsData.uz

  const filteredFaqs = currentFaqs.filter(f => 
    f.question.toLowerCase().includes(search.toLowerCase()) || 
    f.answer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section id="faq" className="section-space bg-white">
      <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            description={t("faq.description")}
          />

          <div className="relative mt-7 max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder={t("faq.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="field-control !pl-11 !min-h-12 text-sm"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
            <p className="text-xs font-bold text-emerald-900 flex items-center gap-2">
              <FiHelpCircle className="text-primary text-base" /> {t("faq.otherQuestion")}
            </p>
            <p className="mt-1 text-xs text-muted">
              {t("faq.directCall")} <strong className="text-ink">+998 55 812 70 00</strong>
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <p className="text-sm text-muted py-8 text-center">{t("faq.notFound")}</p>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className={[
                    "overflow-hidden rounded-2xl border transition-all duration-200",
                    isOpen
                      ? "border-emerald-500/40 bg-white shadow-[0_12px_30px_rgba(12,166,108,0.08)]"
                      : "border-line/80 bg-[#fbfdfc] hover:border-line"
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span className={["font-display text-base sm:text-lg font-bold tracking-tight transition-colors", isOpen ? "text-primary" : "text-ink"].join(" ")}>
                      {faq.question}
                    </span>
                    <span className={["flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200", isOpen ? "bg-primary text-white rotate-180" : "bg-emerald-50 text-emerald-700"].join(" ")}>
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm leading-relaxed text-muted border-t border-line/50 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}


