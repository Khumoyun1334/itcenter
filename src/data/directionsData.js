import { SiReact, SiNodedotjs, SiArduino, SiTensorflow } from "react-icons/si"

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
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "ai",
    title: "Sun'iy Intellekt",
    icon: SiTensorflow,
    bgGradient: "from-purple-500 to-pink-400",
    duration: "6 oy",
    students: 24,
    description: "Machine Learning, Deep Learning, Neural Networks. Python, TensorFlow, PyTorch texnologiyalari.",
    topics: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Computer Vision", "NLP"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]