import { allDirections } from "../data/directionsData"
import CourseCard from "../components/common/CourseCard"
import PageHero from "../components/common/PageHero"
import CTASection from "../components/common/CTASection"

export default function Directions() {
  return (
    <main>
      <PageHero
        eyebrow="Ta'lim yo'nalishlari"
        title="Kelajak kasbini tanlash uchun 6 ta yo'nalish."
        description="Rishton IT Parkda dasturlash, texnologiya va dizayn bo'yicha mavjud yo'nalishlarni o'rganing."
      />
      <section className="section-space bg-canvas">
        <div className="site-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allDirections.map((direction, index) => (
            <CourseCard key={direction.id} direction={direction} index={index} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  )
}
