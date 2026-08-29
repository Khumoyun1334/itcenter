import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowUpRight, FiClock, FiUsers, FiBookOpen } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"

export default function CourseCard({ direction, index = 0, featured = false }) {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const Icon = direction.icon

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07 }}
      whileHover={{ y: -6 }}
      className={[
        "group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-line/90 bg-white shadow-[0_12px_36px_rgba(7,21,15,0.06)] transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(12,166,108,0.15)]",
        featured ? "md:grid md:grid-cols-[1.1fr_.9fr]" : ""
      ].join(" ")}
    >
      {/* Image Container */}
      <div className={["relative overflow-hidden bg-[#071912]", featured ? "min-h-[280px] md:min-h-full" : "h-60"].join(" ")}>
        <img
          src={direction.image}
          alt={direction.title + " yo'nalishi"}
          width="800"
          height="500"
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05110c]/90 via-[#05110c]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        {/* Stats Pill Overlay */}
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-bold text-white/90">
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 backdrop-blur-md">
            <FiClock className="text-emerald-400" /> {direction.duration}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 backdrop-blur-md">
            <FiUsers className="text-emerald-400" /> {direction.students}+ {t('courses.students')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-primary-dark">
          {direction.title}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
          {direction.description}
        </p>

        {/* Topic Chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {direction.topics.slice(0, featured ? 4 : 3).map((topic) => (
            <span
              key={topic}
              className="rounded-xl border border-emerald-900/10 bg-[#eef7f2] px-3 py-1 text-xs font-bold text-[#1b5e40]"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-6 border-t border-line/60 flex items-center justify-between">
          <Link
            to={"/directions/" + direction.id}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-primary transition-colors group-hover:text-primary-dark"
          >
            {t('courses.details')}
            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/admission"
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {t('courses.apply')}
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

