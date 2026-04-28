import { Link } from "react-router-dom"
import { FaTelegram, FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              
              </div>
              <h3 className="text-xl font-bold">Rishton IT Park</h3>
            </div>
            <p className="text-gray-400 mb-4">Rishton tumanidagi zamonaviy IT ta'lim markazi. Yoshlarni zamonaviy kasblarga o'rgatamiz.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><FaTelegram /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><FaFacebook /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><FaYoutube /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tez menyu</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition">Markaz haqida</Link></li>
              <li><Link to="/directions" className="hover:text-primary transition">Yo'nalishlar</Link></li>
              <li><Link to="/teachers" className="hover:text-primary transition">Ustozlar</Link></li>
              <li><Link to="/news" className="hover:text-primary transition">Yangiliklar</Link></li>
              <li><Link to="/admission" className="hover:text-primary transition">Ariza topshirish</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Yo'nalishlar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Frontend Dasturlash</li>
              <li>Backend Dasturlash</li>
              <li>Robototexnika</li>
              <li>Sun'iy Intellekt</li>
              <li>Mobile Development</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bog'lanish</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-primary" /> Rishton tumani, Markaziy ko'cha 45</li>
              <li className="flex items-center gap-3"><FaPhone className="text-primary" /> +998 90 123 45 67</li>
              <li className="flex items-center gap-3"><FaEnvelope className="text-primary" /> info@rishtonit.uz</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rishton IT Center. Barcha huquqlar himoyalangan. Owner @khumoyun1535</p>
        </div>
      </div>
    </footer>
  )
}
