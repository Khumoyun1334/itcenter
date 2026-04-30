import { useState } from "react"
import { motion } from "framer-motion"
import { 
  FaPlay, FaYoutube, FaClock, FaEye, FaCalendarAlt, FaExternalLinkAlt,
  FaSearch, FaTimes, FaShieldAlt, FaPaintBrush, FaLaptopCode
} from "react-icons/fa"
import { SiReact, SiNodedotjs, SiArduino,  } from "react-icons/si"

const coursesData = {
  frontend: {
    id: "frontend",
    title: "Frontend Dasturlash",
    icon: SiReact,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    description: "HTML, CSS, JavaScript, React.js va zamonaviy frontend texnologiyalari",
    videos: [
      { id: 1, title: "HTML5 - Asosiy teglar", duration: "25:30", views: "2.5K", date: "2024-03-15", link: "#" },
      { id: 2, title: "CSS3 - Flexbox va Grid", duration: "32:15", views: "2.1K", date: "2024-03-18", link: "#" },
      { id: 3, title: "JavaScript - O'zgaruvchilar va turlar", duration: "28:45", views: "1.9K", date: "2024-03-20", link: "#" },
      { id: 4, title: "React.js - Komponentlar", duration: "35:20", views: "1.7K", date: "2024-03-22", link: "#" },
      { id: 5, title: "Tailwind CSS bilan ishlash", duration: "22:10", views: "1.5K", date: "2024-03-25", link: "#" },
      { id: 6, title: "API dan ma'lumot olish", duration: "30:00", views: "1.3K", date: "2024-03-28", link: "#" },
      { id: 7, title: "React Router DOM", duration: "27:45", views: "1.2K", date: "2024-04-01", link: "#" },
      { id: 8, title: "State Management (Redux)", duration: "42:30", views: "1.0K", date: "2024-04-05", link: "#" },
      { id: 9, title: "Responsive Design", duration: "24:15", views: "950", date: "2024-04-08", link: "#" },
      { id: 10, title: "Portfolio yaratish", duration: "38:20", views: "880", date: "2024-04-10", link: "#" }
    ]
  },
  backend: {
    id: "backend",
    title: "Backend Dasturlash",
    icon: SiNodedotjs,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    description: "Node.js, Express, MongoDB, PostgreSQL va server tomon dasturlash",
    videos: [
      { id: 1, title: "Node.js - Kirish va o'rnatish", duration: "28:30", views: "2.3K", date: "2024-03-14", link: "#" },
      { id: 2, title: "Express.js - Server yaratish", duration: "35:15", views: "2.0K", date: "2024-03-17", link: "#" },
      { id: 3, title: "REST API - Tushuncha", duration: "26:45", views: "1.8K", date: "2024-03-19", link: "#" },
      { id: 4, title: "MongoDB - Ma'lumotlar bazasi", duration: "32:20", views: "1.6K", date: "2024-03-21", link: "#" },
      { id: 5, title: "Authentication (JWT)", duration: "45:10", views: "1.4K", date: "2024-03-24", link: "#" },
      { id: 6, title: "PostgreSQL - SQL asoslari", duration: "38:00", views: "1.2K", date: "2024-03-27", link: "#" },
      { id: 7, title: "Deployment (Heroku)", duration: "29:45", views: "1.1K", date: "2024-03-30", link: "#" },
      { id: 8, title: "WebSocket bilan ishlash", duration: "36:30", views: "980", date: "2024-04-03", link: "#" },
      { id: 9, title: "GraphQL - Kirish", duration: "34:15", views: "890", date: "2024-04-06", link: "#" },
      { id: 10, title: "Docker va Microservices", duration: "52:20", views: "760", date: "2024-04-09", link: "#" }
    ]
  },
  robotech: {
    id: "robotech",
    title: "Robototexnika",
    icon: SiArduino,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    description: "Arduino, elektronika, sensorlar, IoT va robotlarni dasturlash",
    videos: [
      { id: 1, title: "Arduino - Kirish va o'rnatish", duration: "22:30", views: "3.1K", date: "2024-03-13", link: "#" },
      { id: 2, title: "LED va tugmalar bilan ishlash", duration: "28:15", views: "2.8K", date: "2024-03-16", link: "#" },
      { id: 3, title: "Sensorlar - Ultrasonik", duration: "31:45", views: "2.5K", date: "2024-03-18", link: "#" },
      { id: 4, title: "DC motor va servo motor", duration: "35:20", views: "2.2K", date: "2024-03-20", link: "#" },
      { id: 5, title: "Bluetooth modul bilan ishlash", duration: "29:10", views: "2.0K", date: "2024-03-23", link: "#" },
      { id: 6, title: "IoT - Internet of Things", duration: "42:00", views: "1.7K", date: "2024-03-26", link: "#" },
      { id: 7, title: "Robot qurish - Loyiha", duration: "48:45", views: "1.5K", date: "2024-03-29", link: "#" },
      { id: 8, title: "C++ dasturlash asoslari", duration: "34:30", views: "1.3K", date: "2024-04-02", link: "#" },
      { id: 9, title: "3D modeling (Fusion 360)", duration: "41:15", views: "1.1K", date: "2024-04-04", link: "#" },
      { id: 10, title: "Line Follower Robot", duration: "38:20", views: "980", date: "2024-04-07", link: "#" }
    ]
  },
  cybersecurity: {
    id: "cybersecurity",
    title: "Kiberxavfsizlik",
    icon: FaShieldAlt,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    description: "Tarmoqlar xavfsizligi, tizimlarni himoya qilish, hacking usullari",
    videos: [
      { id: 1, title: "Kiberxavfsizlikka kirish", duration: "35:20", views: "1.8K", date: "2024-03-10", link: "#" },
      { id: 2, title: "Tarmoq xavfsizligi asoslari", duration: "42:15", views: "1.5K", date: "2024-03-12", link: "#" },
      { id: 3, title: "Kriptografiya", duration: "38:45", views: "1.3K", date: "2024-03-15", link: "#" },
      { id: 4, title: "Kali Linux bilan ishlash", duration: "45:20", views: "1.2K", date: "2024-03-18", link: "#" },
      { id: 5, title: "Penetration Testing", duration: "52:10", views: "1.0K", date: "2024-03-20", link: "#" },
      { id: 6, title: "Web application security", duration: "48:30", views: "950", date: "2024-03-23", link: "#" },
      { id: 7, title: "SIEM tizimlari", duration: "41:15", views: "820", date: "2024-03-25", link: "#" },
      { id: 8, title: "Forensics", duration: "55:00", views: "780", date: "2024-03-28", link: "#" },
      { id: 9, title: "SOC operatsiyalari", duration: "44:45", views: "710", date: "2024-03-30", link: "#" },
      { id: 10, title: "Sertifikatsiya (CEH)", duration: "58:20", views: "650", date: "2024-04-02", link: "#" }
    ]
  },
  graphicDesign: {
    id: "graphic-design",
    title: "Grafik Dizayn",
    icon: FaPaintBrush,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    description: "Dizayn asoslari, logotip, poster, veb dizayn, Adobe va Figma bilan ishlash",
    videos: [
      { id: 1, title: "Dizayn asoslari", duration: "28:30", views: "2.2K", date: "2024-03-11", link: "#" },
      { id: 2, title: "Color Theory (Ranglar nazariyasi)", duration: "32:15", views: "2.0K", date: "2024-03-13", link: "#" },
      { id: 3, title: "Photoshop - Asosiy vositalar", duration: "45:20", views: "1.8K", date: "2024-03-16", link: "#" },
      { id: 4, title: "Illustrator bilan ishlash", duration: "42:45", views: "1.6K", date: "2024-03-18", link: "#" },
      { id: 5, title: "Figma - UI/UX dizayn", duration: "51:30", views: "1.4K", date: "2024-03-21", link: "#" },
      { id: 6, title: "Logotip yaratish", duration: "38:15", views: "1.2K", date: "2024-03-23", link: "#" },
      { id: 7, title: "Tipografiya", duration: "29:45", views: "1.1K", date: "2024-03-26", link: "#" },
      { id: 8, title: "Poster dizayn", duration: "44:20", views: "980", date: "2024-03-28", link: "#" },
      { id: 9, title: "Branding", duration: "47:30", views: "890", date: "2024-03-31", link: "#" },
      { id: 10, title: "Portfolio yaratish", duration: "53:15", views: "820", date: "2024-04-03", link: "#" }
    ]
  },
  computerLiteracy: {
    id: "computer-literacy",
    title: "Kompyuter Savodxonligi",
    icon: FaPaintBrush,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    description: "Kompyuterdan foydalanish, ofis dasturlari, internetdan foydalanish",
    videos: [
      { id: 1, title: "Kompyuterga kirish", duration: "25:30", views: "3.5K", date: "2024-03-10", link: "#" },
      { id: 2, title: "Windows bilan ishlash", duration: "32:15", views: "3.2K", date: "2024-03-12", link: "#" },
      { id: 3, title: "Word - Matn muharriri", duration: "42:30", views: "2.9K", date: "2024-03-14", link: "#" },
      { id: 4, title: "Excel - Jadval", duration: "48:20", views: "2.7K", date: "2024-03-17", link: "#" },
      { id: 5, title: "PowerPoint - Prezentatsiya", duration: "35:45", views: "2.5K", date: "2024-03-19", link: "#" },
      { id: 6, title: "Internetdan foydalanish", duration: "28:15", views: "2.3K", date: "2024-03-22", link: "#" },
      { id: 7, title: "Email va xavfsizlik", duration: "31:30", views: "2.1K", date: "2024-03-24", link: "#" },
      { id: 8, title: "Fayl boshqaruvi", duration: "26:45", views: "1.9K", date: "2024-03-27", link: "#" },
      { id: 9, title: "Online xizmatlar", duration: "34:20", views: "1.7K", date: "2024-03-29", link: "#" },
      { id: 10, title: "Kompyuterni himoya qilish", duration: "39:30", views: "1.5K", date: "2024-04-01", link: "#" }
    ]
  }
}

export default function OnlineDars() {
  const [activeCourse, setActiveCourse] = useState("frontend")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedVideo, setSelectedVideo] = useState(null)

  const currentCourse = coursesData[activeCourse]
  const Icon = currentCourse.icon

  const filteredVideos = currentCourse.videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Online Darslar
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bepul video darslar orqali IT sohasini o'zlashtiring
          </p>
        </motion.div>

        {/* Course Tabs - 6 ta yo'nalish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${course.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-600 hover:shadow-md hover:scale-105"
                }`}
              >
                <CourseIcon className="text-lg" />
                <span className="text-sm whitespace-nowrap">{course.title}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Darslarni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          )}
        </motion.div>

        {/* Course Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${currentCourse.bgColor} rounded-2xl p-6 mb-8`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentCourse.color} flex items-center justify-center`}>
              <Icon className="text-3xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentCourse.title}</h2>
              <p className="text-gray-600">{currentCourse.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Videos Grid */}
        {selectedVideo ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <FaTimes />
              </button>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaYoutube className="text-7xl text-red-500 mx-auto mb-4" />
                  <h3 className="text-white text-xl mb-4">{selectedVideo.title}</h3>
                  <a
                    href={selectedVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <FaYoutube /> YouTube'da ko'rish
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FaClock /> {selectedVideo.duration}</span>
                <span className="flex items-center gap-1"><FaEye /> {selectedVideo.views}</span>
                <span className="flex items-center gap-1"><FaCalendarAlt /> {selectedVideo.date}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedVideo(video)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{video.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FaEye /> {video.views}</span>
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {video.date}</span>
                    </div>
                    <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2">
                      <FaYoutube /> Ko'rish
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No results */}
            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Hech qanday dars topilmadi</p>
              </div>
            )}
          </>
        )}

        {/* Back button when video is open */}
        {selectedVideo && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setSelectedVideo(null)}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ← Barcha darslar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}