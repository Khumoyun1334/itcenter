import Carousel from '../components/home/Carousel'
import Hero from '../components/home/Hero'
import Directions from '../components/home/Directions'
import Statistics from '../components/home/Statistics'
import Teachers from '../components/home/Teachers'
import News from '../components/home/News'

export default function Home() {
  return (
    <main>
      <Carousel />
      <Hero />
      <Directions />
      <Statistics />
      <Teachers />
      <News />
    </main>
  )
}