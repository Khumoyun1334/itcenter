import { motion, useReducedMotion } from "framer-motion"
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"

export default function TeacherCard({ teacher, index = 0 }) {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.8rem] border border-line/90 bg-white shadow-[0_12px_36px_rgba(7,21,15,0.06)] transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(12,166,108,0.14)]"
    >
      {/* Teacher Image */}
      <div className="relative h-80 overflow-hidden bg-[#071912]">
        <img
          src={teacher.image}
          alt={teacher.name}
          width="480"
          height="640"
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05110c]/90 via-[#05110c]/30 to-transparent" />
        
        {/* Experience Badge */}
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-extrabold text-emerald-300 backdrop-blur-md">
          {teacher.experience} {t('teachers.experience')}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
          {teacher.direction}
        </p>

        <h3 className="font-display mt-1 text-xl font-bold tracking-tight text-ink">
          {teacher.name}
        </h3>

        <p className="mt-1 text-xs font-bold text-muted">
          {teacher.position}
        </p>

        <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
          {teacher.bio}
        </p>

        {/* Skills Chips */}
        {teacher.skills && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {teacher.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="rounded-lg bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Social Link */}
        <div className="mt-auto pt-5 border-t border-line/60 flex items-center justify-between">
          <span className="text-[11px] font-bold text-muted flex items-center gap-1">
            <FiCheckCircle className="text-emerald-500" /> {t('teachers.certified')}
          </span>
          {teacher.social?.telegram && (
            <a
              href={teacher.social.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label={teacher.name + " — Telegram"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FaTelegram className="text-base" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

