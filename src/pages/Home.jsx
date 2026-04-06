import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Directions from '../components/home/Directions'
import Statistics from '../components/home/Statistics'
import Teachers from '../components/home/Teachers'
import Testimonials from '../components/home/Testimonials'
import Blog from '../components/home/Blog'
import Partners from '../components/home/Partners'
import FAQ from '../components/home/FAQ'
import Map from '../components/home/Map'
import News from '../components/home/News'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Directions />
      <Statistics />
      <Teachers />
      <Testimonials />
      <Blog />
      <Partners />
      <FAQ />
      <Map />
      <News />
    </main>
  )
}