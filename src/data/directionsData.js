import { 
  SiReact, 
  SiNodedotjs, 
  SiArduino,
} from "react-icons/si"
import { FaShieldAlt, FaPaintBrush } from "react-icons/fa"

export const directionsData = [
  {
    id: "frontend",
    title: "Frontend Dasturlash",
    icon: SiReact,
    bgGradient: "from-blue-500 to-cyan-400",
    duration: "3 oy",
    students: 45,
    description: "Veb-saytlar va mobil ilovalarning ko'rinish qismini yaratish. HTML, CSS, JavaScript, React.js texnologiyalari.",
    topics: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design", "API Integration"],
    requirements: "Kompyuter savodxonligi, mantiqiy fikrlash",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "backend",
    title: "Backend Dasturlash",
    icon: SiNodedotjs,
    bgGradient: "from-green-500 to-emerald-400",
    duration: "4 oy",
    students: 32,
    description: "Server tomoni dasturlash, ma'lumotlar bazasi, API yaratish. Node.js, Python, PostgreSQL texnologiyalari.",
    topics: ["Node.js", "Express.js", "Python/Django", "PostgreSQL", "REST API", "Authentication"],
    requirements: "JavaScript asoslari, mantiqiy fikrlash",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "robotech",
    title: "Robototexnika",
    icon: SiArduino,
    bgGradient: "from-red-500 to-orange-400",
    duration: "4 oy",
    students: 28,
    description: "Robotlar yaratish, elektronika asoslari, Arduino va IoT texnologiyalari.",
    topics: ["Arduino", "Elektronika asoslari", "Sensorlar", "IoT", "C++ dasturlash", "3D Modeling"],
    requirements: "Fizikani bilish, qiziqish",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik",
    icon: FaShieldAlt,
    bgGradient: "from-indigo-500 to-purple-500",
    duration: "5 oy",
    students: 20,
    description: "Tarmoqlar xavfsizligi, tizimlarni himoya qilish, hacking usullari va himoya texnologiyalari.",
    topics: ["Tarmoq asoslari", "Kriptografiya", "Kali Linux", "Penetration Testing", "Siem", "Forensics"],
    requirements: "Networking asoslari, Linux bilimi",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "graphic-design",
    title: "Grafik Dizayn",
    icon: FaPaintBrush,
    bgGradient: "from-pink-500 to-rose-500",
    duration: "3 oy",
    students: 35,
    description: "Dizayn asoslari, logotip, poster, veb dizayn, Adobe va Figma bilan ishlash.",
    topics: ["Photoshop", "Illustrator", "Figma", "Color Theory", "Typography", "Branding"],
    requirements: "Dizayn qiziqishi, ijodiy fikrlash",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "computer-literacy",
    title: "Kompyuter Savodxonligi",
    icon: FaPaintBrush,
    bgGradient: "from-teal-500 to-emerald-500",
    duration: "2 oy",
    students: 50,
    description: "Kompyuterdan foydalanish, ofis dasturlari, internetdan foydalanish va asosiy bilimlar.",
    topics: ["Windows asoslari", "Word", "Excel", "PowerPoint", "Internet", "Email", "Xavfsizlik"],
    requirements: "O'qish va yozish bilimi",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

// Asosiy sahifa uchun 4 ta yo'nalish (birinchi 4 tasi)
export const mainPageDirections = directionsData.slice(0, 4)

// Barcha yo'nalishlar
export const allDirections = directionsData