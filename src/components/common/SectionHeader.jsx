import { motion, useReducedMotion } from "framer-motion"

export default function SectionHeader({ eyebrow, title, description, align = "left", inverted = false }) {
  const reduceMotion = useReducedMotion()
  const isCentered = align === "center"

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={["max-w-3xl", isCentered ? "mx-auto text-center" : ""].join(" ")}
    >
      {eyebrow && (
        <span className={["section-kicker", inverted ? "!text-emerald-300" : "", isCentered ? "justify-center" : ""].join(" ")}>
          {eyebrow}
        </span>
      )}
      <h2 className={["section-title mt-5", inverted ? "!text-white" : ""].join(" ")}>{title}</h2>
      {description && (
        <p className={["section-copy mt-5", inverted ? "!text-white/65" : "", isCentered ? "mx-auto" : ""].join(" ")}>
          {description}
        </p>
      )}
    </motion.header>
  )
}
