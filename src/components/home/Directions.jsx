import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"
import { allDirections } from "../../data/directionsData"
import { useLanguage } from "../../context/LanguageContext"
import CourseCard from "../common/CourseCard"
import SectionHeader from "../common/SectionHeader"

export default function Directions() {
  const { t } = useLanguage()

  return (
    <section id="courses" className="section-space bg-white">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t("courses.eyebrow")}
            title={t("courses.title")}
            description={t("courses.description")}
          />
          <Link to="/admission" className="button-dark shrink-0 self-start lg:self-auto group">
            <span>{t("courses.registerBtn")}</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allDirections.map((direction, index) => (
            <CourseCard key={direction.id} direction={direction} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

