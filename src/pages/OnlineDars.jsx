import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaPlay, FaYoutube, FaClock, FaEye, FaCalendarAlt, FaExternalLinkAlt,
  FaSearch, FaTimes, FaShieldAlt, FaPaintBrush, FaCheckCircle, FaLaptopCode
} from "react-icons/fa"
import { SiReact, SiNodedotjs, SiArduino } from "react-icons/si"
import { useLanguage } from "../context/LanguageContext"
import PageHero from "../components/common/PageHero"

const coursesData = {
  frontend: {
    id: "frontend",
    title: "Frontend Dasturlash",
    icon: SiReact,
    color: "from-blue-500 to-cyan-500",
    description: "HTML, CSS, JavaScript, React.js va zamonaviy frontend texnologiyalari",
    videos: [
      { id: 1, title: "1-Dars: HTML5 Asoslari va Birinchi Veb-sahifa", duration: "25:30", views: "3.2K", date: "2026-01-15", level: "Boshlang'ich", youtubeId: "UB1O30fR-EE" },
      { id: 2, title: "2-Dars: CSS3 Selektorlar, Ranglar va Stillar", duration: "32:15", views: "2.8K", date: "2026-01-20", level: "Boshlang'ich", youtubeId: "yfoY53QXEnI" },
      { id: 3, title: "3-Dars: Flexbox va CSS Grid Layout Mukammal", duration: "38:40", views: "2.5K", date: "2026-01-28", level: "O'rta", youtubeId: "fYq5PXgSsbE" },
      { id: 4, title: "4-Dars: JavaScript Asoslari: O'zgaruvchilar va Funksiyalar", duration: "42:10", views: "2.1K", date: "2026-02-05", level: "Boshlang'ich", youtubeId: "W6NZfCO5SIk" },
      { id: 5, title: "5-Dars: JavaScript DOM Manipulyatsiyasi va Hodisalar", duration: "35:20", views: "1.9K", date: "2026-02-12", level: "O'rta", youtubeId: "0ik6X4DJKCc" },
      { id: 6, title: "6-Dars: React.js ga Kirish: Komponentlar va JSX", duration: "45:00", views: "2.4K", date: "2026-02-20", level: "O'rta", youtubeId: "SqcY0GlETPk" },
      { id: 7, title: "7-Dars: React Hooks (useState, useEffect) bilan ishlash", duration: "40:15", views: "1.8K", date: "2026-02-28", level: "O'rta", youtubeId: "4pO-HcG2igk" },
      { id: 8, title: "8-Dars: Tailwind CSS bilan Zamonaviy UI yaratish", duration: "29:30", views: "1.6K", date: "2026-03-05", level: "Amaliy", youtubeId: "dFgzHOX84xQ" }
    ]
  },
  backend: {
    id: "backend",
    title: "Backend Dasturlash",
    icon: SiNodedotjs,
    color: "from-emerald-500 to-teal-500",
    description: "Node.js, Express, MongoDB, PostgreSQL va REST API arxitekturasi",
    videos: [
      { id: 1, title: "1-Dars: Node.js ga Kirish va Muhitni O'rnatish", duration: "28:30", views: "2.7K", date: "2026-01-14", level: "Boshlang'ich", youtubeId: "TlB_eWDSMt4" },
      { id: 2, title: "2-Dars: Express.js orqali Birinchi Web Server", duration: "35:15", views: "2.3K", date: "2026-01-22", level: "Boshlang'ich", youtubeId: "L72fhGm1tfE" },
      { id: 3, title: "3-Dars: REST API Tushunchasi va HTTP Metodlari", duration: "31:45", views: "2.0K", date: "2026-01-30", level: "O'rta", youtubeId: "-MTSQjw5DrM" },
      { id: 4, title: "4-Dars: MongoDB va Mongoose bilan Baza Ulanishi", duration: "42:20", views: "1.8K", date: "2026-02-08", level: "O'rta", youtubeId: "DZBGEExL2VU" },
      { id: 5, title: "5-Dars: Foydalanuvchi Ro'yxatdan O'tishi va JWT Token", duration: "48:10", views: "1.5K", date: "2026-02-16", level: "Yuqori", youtubeId: "mbsmsi7l3r4" },
      { id: 6, title: "6-Dars: PostgreSQL va SQL So'rovlar Asoslari", duration: "39:00", views: "1.4K", date: "2026-02-24", level: "O'rta", youtubeId: "qw--VYLpxG4" }
    ]
  },
  cybersecurity: {
    id: "cybersecurity",
    title: "Kiberxavfsizlik",
    icon: FaShieldAlt,
    color: "from-indigo-500 to-purple-500",
    description: "Tarmoqlar xavfsizligi, zaifliklarni aniqlash va himoya qilish",
    videos: [
      { id: 1, title: "1-Dars: Kiberxavfsizlikka Kirish va Axborot Himoyasi", duration: "35:20", views: "2.8K", date: "2026-01-10", level: "Boshlang'ich", youtubeId: "inWWhr5tnEA" },
      { id: 2, title: "2-Dars: Kompyuter Tarmoqlari va OSI Modeli", duration: "42:15", views: "2.1K", date: "2026-01-18", level: "Boshlang'ich", youtubeId: "IPvYjXCsTg8" },
      { id: 3, title: "3-Dars: Kali Linux bilan Ishlash va Asosiy Buyruqlar", duration: "46:20", views: "1.9K", date: "2026-01-26", level: "O'rta", youtubeId: "lZAoFs75_cs" },
      { id: 4, title: "4-Dars: Nmap orqali Tarmoqni Skanerlash Asoslari", duration: "38:45", views: "1.6K", date: "2026-02-04", level: "O'rta", youtubeId: "4t4kBkMsDbQ" },
      { id: 5, title: "5-Dars: Web Ilovalar Zaifliklari (OWASP Top 10)", duration: "52:10", views: "1.4K", date: "2026-02-14", level: "Yuqori", youtubeId: "F5Bswp9Jp1A" }
    ]
  },
  robotech: {
    id: "robotech",
    title: "Robototexnika & IoT",
    icon: SiArduino,
    color: "from-rose-500 to-amber-500",
    description: "Arduino, elektronika, sensorlar, IoT va robotlarni dasturlash",
    videos: [
      { id: 1, title: "1-Dars: Arduino ga Kirish va Dasturiy Muhit", duration: "24:30", views: "3.5K", date: "2026-01-12", level: "Boshlang'ich", youtubeId: "fJWR73zpJko" },
      { id: 2, title: "2-Dars: LED Chiroqlar va Tugmalar bilan Sxema Yig'ish", duration: "29:15", views: "2.9K", date: "2026-01-21", level: "Boshlang'ich", youtubeId: "d8_xXNcGYgo" },
      { id: 3, title: "3-Dars: Ultrasonik Masofa Sensori bilan Ishlash", duration: "33:45", views: "2.4K", date: "2026-01-29", level: "O'rta", youtubeId: "ZejQOX69K5M" },
      { id: 4, title: "4-Dars: Servo Motor va Dvigatellarni Boshqarish", duration: "37:20", views: "2.0K", date: "2026-02-07", level: "O'rta", youtubeId: "1WnGv-b8Z9o" },
      { id: 5, title: "5-Dars: Bluetooth orqali Telefon Bilan Robotni Boshqarish", duration: "44:00", views: "1.8K", date: "2026-02-18", level: "Yuqori", youtubeId: "4T3G8aV3XpI" }
    ]
  },
  graphicDesign: {
    id: "graphicDesign",
    title: "Grafik Dizayn & UI/UX",
    icon: FaPaintBrush,
    color: "from-pink-500 to-rose-500",
    description: "Dizayn asoslari, logotip, poster, veb dizayn, Adobe va Figma bilan ishlash",
    videos: [
      { id: 1, title: "1-Dars: Dizayn Qoidalari: Kompozitsiya va Ranglar Nazariyasi", duration: "28:30", views: "3.1K", date: "2026-01-11", level: "Boshlang'ich", youtubeId: "_2LLXnUdUIc" },
      { id: 2, title: "2-Dars: Photoshop Asoslari: Qatlamlar va Maskalar", duration: "42:15", views: "2.6K", date: "2026-01-19", level: "Boshlang'ich", youtubeId: "IyR_uYsRdPs" },
      { id: 3, title: "3-Dars: Adobe Illustrator orqali Vektor Logotip Yasash", duration: "45:20", views: "2.2K", date: "2026-01-27", level: "O'rta", youtubeId: "IBouhf4seWQ" },
      { id: 4, title: "4-Dars: Figma: Web Sayt Interfeysini Noldan Chizish", duration: "54:30", views: "2.0K", date: "2026-02-06", level: "O'rta", youtubeId: "jwMqX_bI3_M" },
      { id: 5, title: "5-Dars: UI/UX Prototip va Interaktiv Animatsiyalar", duration: "38:15", views: "1.7K", date: "2026-02-15", level: "Yuqori", youtubeId: "FTFaQWZBqQ8" }
    ]
  },
  computerLiteracy: {
    id: "computerLiteracy",
    title: "Kompyuter Savodxonligi",
    icon: FaLaptopCode,
    color: "from-teal-500 to-emerald-500",
    description: "Kompyuterdan to'g'ri foydalanish, ofis dasturlari va internet",
    videos: [
      { id: 1, title: "1-Dars: Kompyuter Tuzilishi va Windows 11 Asoslari", duration: "25:30", views: "4.2K", date: "2026-01-10", level: "Boshlang'ich", youtubeId: "8L6Xm3fHlY8" },
      { id: 2, title: "2-Dars: O'n Barmoqli Tez Yozish Ko'nikmalari", duration: "22:15", views: "3.8K", date: "2026-01-17", level: "Boshlang'ich", youtubeId: "F1Oxb9Y9X0I" },
      { id: 3, title: "3-Dars: Microsoft Word: Hujjatlar va Jadvallar", duration: "39:30", views: "3.4K", date: "2026-01-25", level: "Boshlang'ich", youtubeId: "S-nHYzK-BVg" },
      { id: 4, title: "4-Dars: Microsoft Excel: Formulalar va Hisob-kitoblar", duration: "48:20", views: "3.1K", date: "2026-02-03", level: "O'rta", youtubeId: "Vl0H-qTclOg" },
      { id: 5, title: "5-Dars: PowerPoint: Chiroyli Taqdimotlar Yaratish", duration: "35:45", views: "2.6K", date: "2026-02-11", level: "Boshlang'ich", youtubeId: "XF34-Wu6qWU" }
    ]
  }
}

export default function OnlineDars() {
  const [activeCourse, setActiveCourse] = useState("frontend")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [completedVideos, setCompletedVideos] = useState({})
  const { t } = useLanguage()

  const currentCourse = coursesData[activeCourse] || coursesData.frontend
  const Icon = currentCourse.icon

  const filteredVideos = currentCourse.videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleComplete = (id) => {
    setCompletedVideos(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <main>
      <PageHero
        eyebrow={t("nav.onlineLessons")}
        title={t("hero.seasonBadge")}
        description={t("stats.subtitle")}
      />

      <section className="section-space min-h-screen bg-canvas">
        <div className="site-container">
          {/* Course Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2.5 sm:gap-3 mb-8"
          >
            {Object.entries(coursesData).map(([key, course]) => {
              const CourseIcon = course.icon
              const isActive = activeCourse === key
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCourse(key)
                    setSearchTerm("")
                    setSelectedVideo(null)
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-[0_10px_25px_rgba(12,166,108,0.3)] scale-[1.02]"
                      : "border border-line bg-white text-muted hover:border-primary/40 hover:text-ink"
                  }`}
                >
                  <CourseIcon className="text-base shrink-0" />
                  <span className="whitespace-nowrap">{course.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-[#edf4f0] text-muted"}`}>
                    {course.videos.length}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Search Bar & Stats */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="relative max-w-md w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Darslarni qidirish (masalan: Flexbox, React, Docker)..."
                aria-label="Darslarni qidirish"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="field-control !pl-11 !pr-10 !min-h-12 text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Qidiruvni tozalash"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs font-bold text-muted bg-white border border-line px-4 py-2.5 rounded-2xl shadow-sm self-start sm:self-auto">
              <span>Jami darslar: <strong className="text-ink">{currentCourse.videos.length} ta</strong></span>
              <span>•</span>
              <span className="text-emerald-700">100% Bepul</span>
            </div>
          </div>

          {/* Active Video Theater Mode (When Clicked) */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="mb-12 overflow-hidden rounded-[2.2rem] border border-emerald-500/30 bg-[#05110c] text-white shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
              >
                {/* Theater Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-white">
                      <FaYoutube />
                    </span>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-extrabold">
                        {currentCourse.title} • Video Darslik
                      </span>
                      <h2 className="text-base font-bold text-white leading-snug">
                        {selectedVideo.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Videoni yopish"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Video Player */}
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>

                {/* Theater Footer & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white/5 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <span className="flex items-center gap-1.5"><FaClock className="text-emerald-400" /> {selectedVideo.duration}</span>
                    <span className="flex items-center gap-1.5"><FaEye className="text-emerald-400" /> {selectedVideo.views} ko'rish</span>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 font-bold text-emerald-300">{selectedVideo.level}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleComplete(selectedVideo.id)}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
                        completedVideos[selectedVideo.id]
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <FaCheckCircle /> {completedVideos[selectedVideo.id] ? "O'zlashtirildi ✓" : "Bajarildi deb belgilash"}
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary !min-h-9 !py-1.5 !px-4 !text-xs"
                    >
                      YouTube'da ochish <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => {
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setSelectedVideo(video)
                    window.scrollTo({ top: 380, behavior: "smooth" })
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-line/90 bg-white shadow-[0_12px_36px_rgba(7,21,15,0.06)] cursor-pointer transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(12,166,108,0.14)]"
                >
                  {/* Video Thumbnail Box */}
                  <div className="relative h-48 bg-gradient-to-br from-[#061811] to-[#0c3927] flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                      onError={(e) => {
                        e.target.style.display = "none"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Play Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform duration-300 group-hover:scale-115">
                        <FaPlay className="ml-1 text-lg" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                      {video.duration}
                    </span>

                    {/* Level Pill */}
                    <span className="absolute top-3 left-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 backdrop-blur-md">
                      {video.level}
                    </span>
                  </div>

                  {/* Video Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-bold tracking-tight text-ink line-clamp-2 transition-colors group-hover:text-primary-dark">
                      {video.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between text-xs text-muted border-t border-line/60 pt-3">
                      <span className="flex items-center gap-1"><FaEye className="text-emerald-600" /> {video.views}</span>
                      <span className="flex items-center gap-1"><FaCalendarAlt className="text-emerald-600" /> {video.date}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-2.5 text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <FaPlay className="text-[10px]" /> Darsni boshlash
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Empty Search Result */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-line p-8">
              <p className="text-lg font-bold text-ink">Hech qanday dars topilmadi</p>
              <p className="text-sm text-muted mt-1">Boshqa kalit so'z bilan qidirib ko'ring yoki tozalang.</p>
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="button-primary mt-4 !min-h-10 !text-xs"
              >
                Barcha darslarni ko'rsatish
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
