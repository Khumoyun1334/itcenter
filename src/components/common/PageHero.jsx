import { motion, useReducedMotion } from "framer-motion"

export default function PageHero({ eyebrow, title, description, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <header className="page-hero">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="section-kicker !text-emerald-300">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </header>
  )
}
