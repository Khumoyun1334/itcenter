import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const carouselData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Rishton IT Center",
    subtitle: "Zamonaviy texnologiyalar markazi",
    description: "2024-yil 1-sentabrdan boshlab faoliyat yuritadi"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Bepul ta'lim",
    subtitle: "Barcha yoshlar uchun",
    description: "Rishton tumanida yashovchi har bir yosh IT sohasini o'rganishi mumkin"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Zamonaviy jihozlar",
    subtitle: "Eng yangi kompyuterlar va uskunalar",
    description: "50 dan ortiq kompyuterlar, robototexnika laboratoriyasi"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Sun'iy Intellekt",
    subtitle: "Kelajak kasbi",
    description: "AI va Machine Learning yo'nalishlari"
  }
]

export default function Carousel() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {carouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Rasm */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/1920x1080?text=Rishton+IT+Center";
                }}
              />
              {/* Qorong'u overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              
              {/* Matn */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-32 left-0 right-0 text-center text-white z-10 px-4"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="text-xl md:text-2xl mb-2"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="text-lg md:text-xl"
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Scroll down indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}