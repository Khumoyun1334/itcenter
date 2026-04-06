import { useState } from "react"
import { motion } from "framer-motion"
// Fa iconlar - react-icons/fa dan
import { 
  FaPlay, 
  FaYoutube, 
  FaClock, 
  FaEye, 
  FaCalendarAlt, 
  FaExternalLinkAlt,
  FaSearch,
  FaTimes
} from "react-icons/fa"

// Si iconlar - react-icons/si dan (BU MUHIM!)
import { 
  SiReact, 
  SiNodedotjs, 
  SiArduino, 
  SiTensorflow 
} from "react-icons/si"

// Yo'nalishlar va ularning videolari
const coursesData = {
  frontend: {
    id: "frontend",
    title: "Frontend Dasturlash",
    icon: SiReact,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    description: "HTML, CSS, JavaScript, React.js va zamonaviy frontend texnologiyalari",
    videos: [
      { id: 1, title: "HTML5 - Asosiy teglar", duration: "25:30", views: "2.5K", date: "2024-03-15", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 2, title: "CSS3 - Flexbox va Grid", duration: "32:15", views: "2.1K", date: "2024-03-18", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 3, title: "JavaScript - O'zgaruvchilar", duration: "28:45", views: "1.9K", date: "2024-03-20", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 4, title: "React.js - Komponentlar", duration: "35:20", views: "1.7K", date: "2024-03-22", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 5, title: "Tailwind CSS bilan ishlash", duration: "22:10", views: "1.5K", date: "2024-03-25", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 6, title: "API dan ma'lumot olish", duration: "30:00", views: "1.3K", date: "2024-03-28", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 7, title: "React Router DOM", duration: "27:45", views: "1.2K", date: "2024-04-01", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 8, title: "State Management (Redux)", duration: "42:30", views: "1.0K", date: "2024-04-05", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 9, title: "Responsive Design", duration: "24:15", views: "950", date: "2024-04-08", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 10, title: "Portfolio yaratish", duration: "38:20", views: "880", date: "2024-04-10", link: "https://youtu.be/dQw4w9WgXcQ" }
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
      { id: 1, title: "Node.js - Kirish", duration: "28:30", views: "2.3K", date: "2024-03-14", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 2, title: "Express.js - Server yaratish", duration: "35:15", views: "2.0K", date: "2024-03-17", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 3, title: "REST API - Tushuncha", duration: "26:45", views: "1.8K", date: "2024-03-19", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 4, title: "MongoDB - Ma'lumotlar bazasi", duration: "32:20", views: "1.6K", date: "2024-03-21", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 5, title: "Authentication (JWT)", duration: "45:10", views: "1.4K", date: "2024-03-24", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 6, title: "PostgreSQL - SQL asoslari", duration: "38:00", views: "1.2K", date: "2024-03-27", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 7, title: "Deployment (Heroku)", duration: "29:45", views: "1.1K", date: "2024-03-30", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 8, title: "WebSocket bilan ishlash", duration: "36:30", views: "980", date: "2024-04-03", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 9, title: "GraphQL - Kirish", duration: "34:15", views: "890", date: "2024-04-06", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 10, title: "Docker va Microservices", duration: "52:20", views: "760", date: "2024-04-09", link: "https://youtu.be/dQw4w9WgXcQ" }
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
      { id: 1, title: "Arduino - Kirish va o'rnatish", duration: "22:30", views: "3.1K", date: "2024-03-13", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 2, title: "LED va tugmalar bilan ishlash", duration: "28:15", views: "2.8K", date: "2024-03-16", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 3, title: "Sensorlar - Ultrasonik", duration: "31:45", views: "2.5K", date: "2024-03-18", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 4, title: "DC motor va servo motor", duration: "35:20", views: "2.2K", date: "2024-03-20", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 5, title: "Bluetooth modul bilan ishlash", duration: "29:10", views: "2.0K", date: "2024-03-23", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 6, title: "IoT - Internet of Things", duration: "42:00", views: "1.7K", date: "2024-03-26", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 7, title: "Robot qurish - Loyiha", duration: "48:45", views: "1.5K", date: "2024-03-29", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 8, title: "C++ dasturlash asoslari", duration: "34:30", views: "1.3K", date: "2024-04-02", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 9, title: "3D modeling (Fusion 360)", duration: "41:15", views: "1.1K", date: "2024-04-04", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 10, title: "Line Follower Robot", duration: "38:20", views: "980", date: "2024-04-07", link: "https://youtu.be/dQw4w9WgXcQ" }
    ]
  },
  ai: {
    id: "ai",
    title: "Sun'iy Intellekt",
    icon: SiTensorflow,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    description: "Python, Machine Learning, Deep Learning, Neural Networks va AI texnologiyalari",
    videos: [
      { id: 1, title: "Python - Kirish", duration: "32:30", views: "2.9K", date: "2024-03-12", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 2, title: "Machine Learning - Kirish", duration: "38:15", views: "2.6K", date: "2024-03-15", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 3, title: "NumPy va Pandas", duration: "35:45", views: "2.3K", date: "2024-03-17", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 4, title: "Data Visualization", duration: "29:20", views: "2.0K", date: "2024-03-19", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 5, title: "Linear Regression", duration: "42:10", views: "1.8K", date: "2024-03-22", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 6, title: "Neural Networks", duration: "55:00", views: "1.5K", date: "2024-03-25", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 7, title: "TensorFlow - Kirish", duration: "44:45", views: "1.3K", date: "2024-03-28", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 8, title: "Computer Vision", duration: "51:30", views: "1.1K", date: "2024-04-01", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 9, title: "NLP - Natural Language", duration: "46:15", views: "950", date: "2024-04-03", link: "https://youtu.be/dQw4w9WgXcQ" },
      { id: 10, title: "AI loyihasi - Chatbot", duration: "58:20", views: "820", date: "2024-04-06", link: "https://youtu.be/dQw4w9WgXcQ" }
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

        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${course.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-600 hover:shadow-md hover:scale-105"
                }`}
              >
                <CourseIcon className="text-xl" />
                <span>{course.title}</span>
              </button>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
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
        </div>

        {/* Course Info */}
        <div className={`${currentCourse.bgColor} rounded-2xl p-6 mb-8`}>
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentCourse.color} flex items-center justify-center`}>
              <Icon className="text-3xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{currentCourse.title}</h2>
              <p className="text-gray-600">{currentCourse.description}</p>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        {selectedVideo ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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
              <div className="flex gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FaClock /> {selectedVideo.duration}</span>
                <span className="flex items-center gap-1"><FaEye /> {selectedVideo.views}</span>
                <span className="flex items-center gap-1"><FaCalendarAlt /> {selectedVideo.date}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gray-800 flex items-center justify-center group">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1"><FaEye /> {video.views}</span>
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {video.date}</span>
                    </div>
                    <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2">
                      <FaYoutube /> Ko'rish
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Hech qanday dars topilmadi</p>
              </div>
            )}
          </>
        )}

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