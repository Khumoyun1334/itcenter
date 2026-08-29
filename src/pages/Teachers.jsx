import { teachersData } from "../data/teachersData"
import PageHero from "../components/common/PageHero"
import TeacherCard from "../components/common/TeacherCard"
import CTASection from "../components/common/CTASection"

export default function Teachers() {
  return (
    <main>
      <PageHero
        eyebrow="Ustozlar jamoasi"
        title="Bilimni amaliy tajriba bilan bog'laydigan mentorlar."
        description="Har bir yo'nalishda o'z sohasining mutaxassislaridan ta'lim oling."
      />
      <section className="section-space bg-canvas">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teachersData.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  )
}
