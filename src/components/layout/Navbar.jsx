import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { path: "/", label: "Bosh sahifa" },
  { path: "/about", label: "Markaz haqida" },
  { path: "/directions", label: "Yo'nalishlar" },
  { path: "/teachers", label: "Ustozlar" },
  { path: "/onlinedarslar", label: "Online Dars" },  // YANGI
  { path: "/news", label: "Yangiliklar" },
  { path: "/contact", label: "Bog'lanish" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"></div>
              <div>
                <h1 className="text-xl font-bold gradient-text">
                  Rishton IT Park
                </h1>
                <p className="text-xs text-gray-500">
                  Bepul ta'lim markazi
                </p>
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 transition-all duration-300 ${
                    isActive
                      ? "gradient-text font-bold"
                      : scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-gray-400 hover:text-primary"
                  }`}
                >
                  {link.label}

                  {/* ACTIVE underline */}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    />
                  )}

                  {/* HOVER underline */}
                  {!isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* BUTTON */}
            <Link
              to="/admission"
              className="gradient-text px-5 py-2 bg-linear-to-r from-primary to-secondary text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Ariza
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />} 
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "gradient-text font-bold"
                        : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                to="/admission"
                className="py-2 px-4 bg-primary text-white rounded-lg text-center font-semibold hover:scale-105"
              >
                Ariza topshirish
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}