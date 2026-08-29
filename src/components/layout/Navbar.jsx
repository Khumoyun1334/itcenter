import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FiArrowUpRight, FiMenu, FiX, FiSun, FiMoon, FiGlobe, FiChevronDown } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi"
import { useTheme } from "../../context/ThemeContext"
import { useLanguage, SUPPORTED_LANGUAGES } from "../../context/LanguageContext"
import logo from "../../assets/itparklogo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const isClickScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)
  const langMenuRef = useRef(null)

  const { toggleTheme, isDark } = useTheme()
  const { language, setLanguage, t, currentLangMeta } = useLanguage()

  const location = useLocation()
  const navigate = useNavigate()
  const isSolid = scrolled || isOpen || isDark

  const isHome = location.pathname === "/"

  const navLinks = [
    { id: "hero", target: "#hero", page: "/", label: t("nav.home") },
    { id: "about", target: "#about", page: "/about", label: t("nav.about") },
    { id: "courses", target: "#courses", page: "/directions", label: t("nav.courses") },
    { id: "teachers", target: "#teachers", page: "/teachers", label: t("nav.teachers") },
    { id: "onlinedars", target: "/onlinedarslar", isPage: true, label: t("nav.onlineLessons") },
    { id: "portfolio", target: "/portfolio", isPage: true, label: t("nav.portfolio") },
    { id: "gallery", target: "/gallery", isPage: true, label: t("nav.gallery") },
    { id: "events", target: "/events", isPage: true, label: t("nav.events") },
    { id: "quiz", target: "/career-quiz", isPage: true, label: t("nav.quiz") },
    { id: "news", target: "#news", page: "/news", label: t("nav.news") },
    { id: "contact", target: "#contact", page: "/contact", label: t("nav.contact") }
  ]

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle scroll detection and smooth scrollspy without jitter
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (isClickScrollingRef.current || !isHome) return

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact")
        return
      }

      const sections = ["hero", "about", "courses", "teachers", "news", "contact"]
      const scrollPosition = window.scrollY + 220

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i])
        if (sectionEl) {
          const top = sectionEl.offsetTop
          if (top <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [isHome])

  // Handle hash scrolling when landing from another page
  useEffect(() => {
    if (isHome && location.hash) {
      const targetId = location.hash.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        isClickScrollingRef.current = true
        setTimeout(() => {
          setActiveSection(targetId)
          el.scrollIntoView({ behavior: "smooth" })
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
          scrollTimeoutRef.current = setTimeout(() => {
            isClickScrollingRef.current = false
          }, 850)
        }, 100)
      }
    }
  }, [isHome, location.hash])

  // Universal click handler for section scroll & navigation
  const handleNavClick = (link, event) => {
    if (link.isPage) {
      setIsOpen(false)
      return
    }

    event.preventDefault()
    setIsOpen(false)

    const targetId = link.target.replace("#", "")

    if (isHome) {
      const el = document.getElementById(targetId)
      if (el) {
        isClickScrollingRef.current = true
        setActiveSection(targetId)
        window.history.replaceState(null, "", `#${targetId}`)
        el.scrollIntoView({ behavior: "smooth" })

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = setTimeout(() => {
          isClickScrollingRef.current = false
        }, 850)
      }
    } else {
      navigate(`/#${targetId}`)
    }
  }

  const isLinkActive = (link) => {
    if (link.isPage) {
      return location.pathname.startsWith(link.target)
    }
    if (isHome) {
      return activeSection === link.id
    }
    return location.pathname.startsWith(link.page)
  }

  return (
    <nav aria-label="Asosiy navigatsiya" className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={[
        "site-container !w-full rounded-2xl border transition-all duration-300 sm:px-5",
        isSolid
          ? isDark
            ? "border-white/10 bg-[#071912]/92 py-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            : "border-emerald-900/15 bg-white/95 py-2.5 shadow-[0_16px_45px_rgba(7,21,15,0.08)] backdrop-blur-2xl"
          : "border-white/10 bg-[#071710]/40 py-3.5 backdrop-blur-md"
      ].join(" ")}>
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="group flex min-w-0 items-center gap-3"
            aria-label="IT Park Rishtan bosh sahifa"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="" width="44" height="44" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 leading-tight">
              <strong className={["block truncate font-display text-[0.98rem] font-bold tracking-tight sm:text-base transition-colors", isDark || !isSolid ? "text-white" : "text-ink"].join(" ")}>
                IT PARK RISHTAN
              </strong>
              <span className={["mt-0.5 flex items-center gap-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.18em]", isDark || !isSolid ? "text-emerald-300" : "text-primary-dark"].join(" ")}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("nav.tagline")}
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(link)
              return (
                <Link
                  key={link.id}
                  to={link.isPage ? link.target : `/#${link.id}`}
                  onClick={(e) => handleNavClick(link, e)}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative rounded-full px-3 py-2 text-[0.82rem] font-bold transition xl:px-3.5 xl:text-[0.86rem]",
                    active
                      ? isDark || !isSolid ? "text-white font-extrabold" : "text-primary-dark font-extrabold"
                      : isDark || !isSolid ? "text-white/70 hover:text-white" : "text-[#4f6158] hover:text-ink"
                  ].join(" ")}
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className={[
                        "absolute inset-0 -z-10 rounded-full",
                        isDark
                          ? "bg-white/12 shadow-sm border border-emerald-500/30"
                          : isSolid
                            ? "bg-[#e9f8f0] shadow-sm border border-emerald-200"
                            : "bg-white/14 backdrop-blur-md border border-white/20"
                      ].join(" ")}
                    />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right Controls: Theme Toggle + Language Dropdown + Apply Button + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className={[
                  "flex h-10 items-center gap-1.5 rounded-xl border px-2.5 text-xs font-extrabold transition",
                  isDark || !isSolid
                    ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
                    : "border-line bg-[#f0f6f2] text-ink hover:bg-[#e4efe8]"
                ].join(" ")}
                aria-label="Tilni tanlash"
              >
                <span>{currentLangMeta.flag}</span>
                <span className="font-mono">{currentLangMeta.short}</span>
                <FiChevronDown className={["text-xs transition-transform duration-200", langDropdownOpen ? "rotate-180" : ""].join(" ")} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={[
                      "absolute right-0 mt-2 w-36 overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-2xl z-50",
                      isDark
                        ? "border-white/15 bg-[#092218]/98 text-white"
                        : "border-line bg-white/98 text-ink"
                    ].join(" ")}
                  >
                    {SUPPORTED_LANGUAGES.map((langItem) => {
                      const isSelected = language === langItem.code
                      return (
                        <button
                          key={langItem.code}
                          type="button"
                          onClick={() => {
                            setLanguage(langItem.code)
                            setLangDropdownOpen(false)
                          }}
                          className={[
                            "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition",
                            isSelected
                              ? isDark ? "bg-emerald-600/30 text-emerald-300" : "bg-[#eaf5ee] text-primary-dark font-extrabold"
                              : isDark ? "hover:bg-white/8 text-white/80" : "hover:bg-canvas text-muted"
                          ].join(" ")}
                        >
                          <span className="flex items-center gap-2">
                            <span>{langItem.flag}</span>
                            <span>{langItem.label}</span>
                          </span>
                          {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={[
                "flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition-all duration-300",
                isDark
                  ? "border-emerald-400/30 bg-emerald-950/70 text-amber-300 hover:bg-emerald-900/80 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : isSolid
                    ? "border-line bg-[#f0f6f2] text-amber-600 hover:bg-[#e4efe8]"
                    : "border-white/15 bg-white/10 text-amber-300 hover:bg-white/15"
              ].join(" ")}
              aria-label={isDark ? t("nav.lightMode") : t("nav.darkMode")}
              title={isDark ? t("nav.lightMode") : t("nav.darkMode")}
            >
              {isDark ? (
                <FiSun className="h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <FiMoon className="h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Ariza Topshirish Button */}
            <div className="flex">
              <Link to="/admission" className="button-primary !min-h-10 !px-3 !text-[10px] sm:!text-xs xl:!px-5 !py-2 shadow-lg group">
                <HiSparkles className="hidden sm:block text-emerald-200 animate-spin-slow" />
                <span>{t("nav.apply")}</span>
                <FiArrowUpRight className="hidden sm:block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              className={[
                "flex h-10 w-10 items-center justify-center rounded-xl border transition xl:hidden",
                isDark || !isSolid ? "border-white/15 bg-white/8 text-white" : "border-line bg-[#f4f7f5] text-ink"
              ].join(" ")}
            >
              {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={[
              "site-container mt-2 overflow-hidden rounded-2xl border p-4 shadow-[0_24px_70px_rgba(7,21,15,0.35)] backdrop-blur-2xl xl:hidden",
              isDark
                ? "border-white/15 bg-[#071912]/98 text-white"
                : "border-line bg-white/98 text-ink"
            ].join(" ")}
          >
            {/* Mobile Language Selector */}
            <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
              <span className="text-xs font-bold text-muted flex items-center gap-1.5">
                <FiGlobe /> Til:
              </span>
              <div className="flex gap-1.5">
                {SUPPORTED_LANGUAGES.map((langItem) => (
                  <button
                    key={langItem.code}
                    type="button"
                    onClick={() => setLanguage(langItem.code)}
                    className={[
                      "rounded-lg px-2.5 py-1 text-xs font-extrabold transition",
                      language === langItem.code
                        ? "bg-primary text-white"
                        : isDark ? "bg-white/10 text-white/70" : "bg-canvas text-muted"
                    ].join(" ")}
                  >
                    {langItem.short}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link)
                return (
                  <Link
                    key={link.id}
                    to={link.isPage ? link.target : `/#${link.id}`}
                    onClick={(e) => handleNavClick(link, e)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition",
                      active
                        ? isDark ? "bg-emerald-600/30 text-emerald-300" : "bg-[#e9f8f0] text-primary"
                        : isDark ? "text-white/80 hover:bg-white/5" : "text-[#405148] hover:bg-[#f3f7f5]"
                    ].join(" ")}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-primary" />}
                  </Link>
                )
              })}
              <Link to="/admission" onClick={() => setIsOpen(false)} className="button-primary mt-3 w-full sm:hidden justify-center">
                {t("nav.apply")} <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}



