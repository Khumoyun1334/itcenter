import { motion, useReducedMotion } from "framer-motion"
import { FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"

const formatDate = (value) => new Intl.DateTimeFormat("uz-UZ", {
  day: "numeric",
  month: "short",
  year: "numeric"
}).format(new Date(value))

export default function NewsCard({ item, index = 0, featured = false, onSelect }) {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect && onSelect(item)}
      className={[
        "group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-line/90 bg-white shadow-[0_12px_36px_rgba(7,21,15,0.06)] cursor-pointer transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(12,166,108,0.14)]",
        featured ? "md:grid md:grid-cols-[1.15fr_.85fr]" : ""
      ].join(" ")}
    >
      <div className={["relative overflow-hidden bg-[#071912]", featured ? "min-h-[280px] md:min-h-full" : "h-56"].join(" ")}>
        <img
          src={item.image}
          alt={item.title}
          width="800"
          height="500"
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05110c]/85 via-[#05110c]/20 to-transparent" />
        
        <span className="absolute left-5 top-5 rounded-full bg-emerald-600/90 px-3.5 py-1 text-xs font-extrabold text-white shadow-md backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-4 text-xs font-bold text-muted">
          <time dateTime={item.date} className="inline-flex items-center gap-1.5">
            <FiCalendar className="text-emerald-500" aria-hidden="true" /> {formatDate(item.date)}
          </time>
          {item.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <FiClock className="text-emerald-500" /> {item.readTime}
            </span>
          )}
        </div>

        <h3 className={["font-display mt-3 font-bold tracking-tight text-ink transition-colors group-hover:text-primary-dark", featured ? "text-2xl sm:text-3xl" : "text-xl"].join(" ")}>
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
          {item.excerpt}
        </p>

        <div className="mt-auto pt-5 flex items-center justify-between border-t border-line/60">
          <span className="text-xs font-extrabold text-primary flex items-center gap-1.5 group-hover:text-primary-dark">
            {t('news.readMore')} <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

