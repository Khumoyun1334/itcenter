import { 
  SiReact, 
  SiNodedotjs, 
  SiArduino,
  SiPython
} from "react-icons/si"
import { FaShieldAlt, FaPaintBrush, FaLaptopCode } from "react-icons/fa"

export const directionsData = [
  {
    id: "frontend",
    title: "Frontend Dasturlash",
    icon: SiReact,
    bgGradient: "from-blue-500 to-cyan-400",
    duration: "4 oy",
    students: 65,
    description: "Veb-saytlar va zamonaviy web-ilovalarning foydalanuvchi interfeysini yaratish. HTML, CSS, JavaScript, React.js va Tailwind CSS texnologiyalari.",
    topics: ["HTML5 & Semantik Web", "CSS3, Flexbox & Grid", "Modern JavaScript (ES6+)", "React.js & Hooks", "Tailwind CSS & UI Kit", "REST API & Redux Toolkit"],
    modules: [
      { step: "01", title: "Web Asoslari", desc: "HTML5, CSS3, Responsive Web Design va zamonaviy flexbox/grid layoutlar." },
      { step: "02", title: "JavaScript Chuqur", desc: "DOM manipulyatsiyasi, Async/Await, API fetch, LocalStorage va ES6+ xususiyatlari." },
      { step: "03", title: "React.js & Ekotizim", desc: "Komponentlar, State management, React Router, Custom Hooks va Tailwind CSS." },
      { step: "04", title: "Real Loyihalar & Portfolio", desc: "Katta e-commerce yoki boshqaruv paneli yaratish va Vercel/GitHub'ga joylash." }
    ],
    tools: ["React", "JavaScript", "Tailwind CSS", "Vite", "Git", "Figma", "Redux Toolkit"],
    requirements: "Boshlang'ich kompyuter savodxonligi, mantiqiy fikrlash va qiziqish",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "backend",
    title: "Backend Dasturlash",
    icon: SiNodedotjs,
    bgGradient: "from-emerald-500 to-teal-400",
    duration: "5 oy",
    students: 48,
    description: "Server arxitekturasi, ma'lumotlar bazalari, xavfsizlik va yuqori yuklamali REST API xizmatlarini ishlab chiqish.",
    topics: ["Node.js & Express.js", "Python & Django Framework", "PostgreSQL & MongoDB", "REST API & GraphQL", "Authentication & JWT", "Docker & Server Deployment"],
    modules: [
      { step: "01", title: "Dasturlash tili va Server", desc: "Node.js yoki Python asoslari, asinxron dasturlash va fayllar bilan ishlash." },
      { step: "02", title: "Ma'lumotlar bazasi", desc: "Relatsion (PostgreSQL) va NoSQL (MongoDB) bazalarni loyihalash, SQL so'rovlar." },
      { step: "03", title: "API Arxitekturasi", desc: "RESTful API yaratish, Middleware, Token asosidagi avtorizatsiya va xavfsizlik." },
      { step: "04", title: "Deployment & CI/CD", desc: "Docker konteynerizatsiyasi, Linux serverlar va bulutli platformalarga joylash." }
    ],
    tools: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "Postman"],
    requirements: "Dasturlash asoslari haqida tushuncha, mantiqiy fikrlash",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik",
    icon: FaShieldAlt,
    bgGradient: "from-indigo-600 to-purple-500",
    duration: "5 oy",
    students: 36,
    description: "Tarmoqlar xavfsizligi, zaifliklarni aniqlash (Pentest), tizimlarni xakerlik hujumlaridan himoya qilish va kriptografiya.",
    topics: ["Kompyuter tarmoqlari (OSI/TCP-IP)", "Linux (Kali/Ubuntu) Administratorlik", "Penetration Testing & Zaifliklar", "Kriptografiya asoslari", "Web & Server Xavfsizligi", "SIEM va Incident Response"],
    modules: [
      { step: "01", title: "Tarmoq va Linux", desc: "Tarmoq protokollari, Wireshark, Linux terminali va xavfsizlik arxitekturasi." },
      { step: "02", title: "Axborot xavfsizligi asoslari", desc: "Kriptografiya, shifrlash algoritmlari, xavfsizlik siyosatlari." },
      { step: "03", title: "Penetration Testing", desc: "OWASP Top 10 zaifliklari, Web pentest, Metasploit va Nmap vositalari." },
      { step: "04", title: "Himoya & Monitoring", desc: "Xavfsizlik auditlari, xakerlik hujumlarini aniqlash va himoyalash rejalari." }
    ],
    tools: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Bash"],
    requirements: "Networking asoslari, Linux bo'yicha boshlang'ich tushuncha",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "robotech",
    title: "Robototexnika & IoT",
    icon: SiArduino,
    bgGradient: "from-rose-500 to-amber-500",
    duration: "4 oy",
    students: 42,
    description: "Aqlli qurilmalar, mikroprotsessorlar, elektronika, sensorlar va avtomatlashtirilgan robot tizimlarini yaratish.",
    topics: ["Elektronika va sxemotexnika", "Arduino platformasi", "C++ dasturlash asoslari", "Dvigatellar va sensorlar", "IoT (Internet of Things)", "3D modellashtirish"],
    modules: [
      { step: "01", title: "Elektronika asoslari", desc: "Rezystorlar, tranzistorlar, mikrosxemalar va elektr zanjirlarini o'rganish." },
      { step: "02", title: "Arduino & C++", desc: "Mikrokontrollerlarni dasturlash, sensorlardan ma'lumot olish." },
      { step: "03", title: "Aqlli Tizimlar (IoT)", desc: "Wi-Fi va Bluetooth orqali masofadan boshqarish tizimlari." },
      { step: "04", title: "Robot Yasash", desc: "To'siqlarni aylanib o'tuvchi va chiziq bo'ylab harakatlanuvchi robot loyihalari." }
    ],
    tools: ["Arduino Uno/Nano", "ESP32/ESP8266", "C++", "Tinkercad", "Fusion 360"],
    requirements: "Fizika va matematikaga qiziqish, ijodkorlik",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "graphic-design",
    title: "Grafik Dizayn & UI/UX",
    icon: FaPaintBrush,
    bgGradient: "from-pink-500 to-purple-500",
    duration: "3 oy",
    students: 55,
    description: "Vizual brending, logotiplar, ijtimoiy tarmoqlar uchun kreativ posterlar hamda zamonaviy veb/mobil UI/UX dizayni.",
    topics: ["Photoshop & Raster Grafika", "Illustrator & Vektor Grafika", "Figma & UI/UX Dizayn", "Ranglar va Tipografika", "Brending va Korporativ Stil", "Design System & Prototip"],
    modules: [
      { step: "01", title: "Dizayn Qoidalari & Photoshop", desc: "Kompozitsiya, ranglar nazariyasi, fotomontaj va bannerlar." },
      { step: "02", title: "Vektor & Illustrator", desc: "Logotiplar, vektor illyustratsiyalar, ikonka to'plamlari va brending." },
      { step: "03", title: "Figma & UI/UX", desc: "Veb va mobil ilovalar interfeysini loyihalash, wireframe va prototiplar." },
      { step: "04", title: "Portfolio va Prezentatsiya", desc: "Behance va Dribbble uchun professional dizayn keyslari tayyorlash." }
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Behance"],
    requirements: "Kreativ fikrlash, dizaynga qiziqish",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "computer-literacy",
    title: "Kompyuter Savodxonligi",
    icon: FaLaptopCode,
    bgGradient: "from-teal-500 to-emerald-500",
    duration: "2 oy",
    students: 70,
    description: "Noldan kompyuterni mukammal o'rganish, ofis dasturlari (Word, Excel, PowerPoint), internet xavfsizligi va tez yozish.",
    topics: ["Windows OS & Fayllar tizimi", "Microsoft Word mukammal", "Microsoft Excel & Formulalar", "PowerPoint Taqdimotlar", "Internet & Email madaniyati", "Kibergigiyena va Xavfsizlik"],
    modules: [
      { step: "01", title: "Kompyuter Asoslari", desc: "Qurilma tushunchasi, Windows tizimida tezkor ishlash va o'n barmoqli tez yozish." },
      { step: "02", title: "Microsoft Word", desc: "Hujjatlarni rasmiylashtirish, jadvallar, shartnomalar va hisobotlar tayyorlash." },
      { step: "03", title: "Microsoft Excel", desc: "Jadvallar bilan ishlash, formulalar, diagrammalar va ma'lumotlar tahlili." },
      { step: "04", title: "Taqdimot & Internet", desc: "Chiroyli prezentatsiyalar tayyorlash, Google xizmatlari va bulutli xotira." }
    ],
    tools: ["Windows 11", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Workspace"],
    requirements: "Hech qanday maxsus bilim talab etilmaydi (Noldan o'rgatiladi)",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

export const mainPageDirections = directionsData.slice(0, 4)
export const allDirections = directionsData