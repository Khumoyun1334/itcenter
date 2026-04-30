import { useState } from "react"  // BU MUHIM! useState import qilish kerak
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaPlay, FaYoutube, FaTelegram, FaArrowLeft, FaShare } from "react-icons/fa"

// IT Park haqida video taqdimotlar
const videos = [
  {
    id: 1,
    title: "Rishton IT Park - Rasmiy video taqdimot",
    description: "IT Park haqida to'liq ma'lumot, yo'nalishlar, imkoniyatlar va kelajak rejalari",
    duration: "5:30",
    views: "2.5K",
    date: "2024",
    type: "main",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "IT Park binosi va jihozlari",
    description: "Zamonaviy kompyuterlar, robototexnika laboratoriyasi va o'quv xonalari",
    duration: "3:45",
    views: "1.8K",
    date: "2024",
    type: "tour",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Talabalar hayoti",
    description: "IT Park talabalarining kundalik hayoti, dars jarayonlari va tadbirlar",
    duration: "4:20",
    views: "1.5K",
    date: "2024",
    type: "life",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Bitiruvchilar muvaffaqiyati",
    description: "IT Park bitiruvchilarining ishga joylashish hikoyalari va muvaffaqiyatlari",
    duration: "6:15",
    views: "1.2K",
    date: "2024",
    type: "success",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Robototexnika laboratoriyasi",
    description: "Robototexnika yo'nalishi bo'yicha amaliy mashg'ulotlar va loyihalar",
    duration: "4:50",
    views: "980",
    date: "2024",
    type: "robotics",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "IT Park ochilish marosimi",
    description: "Rishton IT Parkning tantanali ochilish marosimi",
    duration: "7:30",
    views: "3.2K",
    date: "2024",
    type: "opening",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    watchUrl: "https://youtu.be/dQw4w9WgXcQ"
  }
]

export default function VideoPresentation() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])  // useState ishlaydi

  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
          >
            <FaArrowLeft /> Bosh sahifaga qaytish
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Video Taqdimot
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rishton IT Park haqida to'liq ma'lumot beruvchi video taqdimotlar
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="aspect-video bg-gray-900">
            <iframe
              src={selectedVideo.embedUrl}
              title={selectedVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h2>
                <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>⏱️ {selectedVideo.duration}</span>
                  <span>👁️ {selectedVideo.views}</span>
                  <span>📅 {selectedVideo.date}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={selectedVideo.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  <FaYoutube /> YouTube
                </a>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                  <FaShare /> Ulashish
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Boshqa videolar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedVideo(video)}
                className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedVideo.id === video.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="relative h-40 bg-gray-800 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <FaPlay className="text-white text-lg ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1 line-clamp-1">{video.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-2">{video.description}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>👁️ {video.views}</span>
                    <span>📅 {video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-linear-to-r from-primary to-secondary rounded-2xl p-8 text-">
            <h3 className="text-2xl font-bold mb-2">IT Parkga ariza topshiring!</h3>
            <p className="mb-6">Sifatli ta'lim olish imkoniyatini qo'ldan boy bermang</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admission"
                className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-lg transition hover:scale-105"
              >
                Ariza topshirish
              </Link>
              <a
                href="https://t.me/itparkrishton_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3  border bg-white border-white/30 rounded-lg font-semibold hover:bg-white/30 transition flex items-center gap-2"
              >
                <FaTelegram /> Telegram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}