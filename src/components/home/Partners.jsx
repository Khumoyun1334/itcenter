import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"
import { partnersData } from "../../data/partnersData"
import { motion } from "framer-motion"

export default function Partners() {
  const { t } = useLanguage()
  return (
    <section id="partners" className="py-24 sm:py-32 bg-white dark:bg-[#071912]/50">
      <div className="site-container overflow-hidden">
        <SectionHeader title={t("partners.title")} subtitle={t("partners.subtitle")} />
        <div className="mt-14 relative flex">
          <motion.div 
            className="flex w-max gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...partnersData, ...partnersData, ...partnersData, ...partnersData].map((partner, i) => (
              <a 
                key={`${partner.id || partner.name}-${i}`} 
                href={partner.website || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="group shrink-0 block"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 w-auto object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100" 
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
