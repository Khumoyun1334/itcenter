import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"
import TestimonialCard from "../common/TestimonialCard"
import { testimonialsData } from "../../data/testimonialsData"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const { t } = useLanguage()
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#05110c]">
      <div className="site-container">
        <SectionHeader title={t("testimonials.title")} subtitle={t("testimonials.subtitle")} />
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonialsData.map((testimonial, i) => (
              <SwiperSlide key={testimonial.id || i}>
                <TestimonialCard testimonial={testimonial} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
