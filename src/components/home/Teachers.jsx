import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"
import { teachersData } from "../../data/teachersData"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"
import TeacherCard from "../common/TeacherCard"

export default function Teachers() {
  const { t } = useLanguage()

  return (
    <section id="teachers" className="section-space bg-[#eaf3ed]/60">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t("teachers.eyebrow")}
            title={t("teachers.title")}
            description={t("teachers.description")}
          />
          <Link to="/admission" className="button-dark shrink-0 self-start lg:self-auto group">
            <span>{t("teachers.contactBtn")}</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teachersData.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

