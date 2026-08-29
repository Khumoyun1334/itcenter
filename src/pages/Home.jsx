import Hero from "../components/home/Hero"
import Statistics from "../components/home/Statistics"
import AboutPreview from "../components/home/AboutPreview"
import Directions from "../components/home/Directions"
import Features from "../components/home/Features"
import Countdown from "../components/home/Countdown"
import Teachers from "../components/home/Teachers"
import Testimonials from "../components/home/Testimonials"
import Partners from "../components/home/Partners"
import News from "../components/home/News"
import FAQ from "../components/home/FAQ"
import Map from "../components/home/Map"
import CTASection from "../components/common/CTASection"

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <AboutPreview />
      <Directions />
      <Features />
      <Countdown />
      <Teachers />
      <Testimonials />
      <Partners />
      <News />
      <FAQ />
      <Map />
      <CTASection />
    </main>
  )
}
