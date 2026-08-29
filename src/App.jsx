import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import FloatingChat from './components/common/FloatingChat'
import Home from './pages/Home'
import About from './pages/About'
import Directions from './pages/Directions'
import DirectionDetail from './pages/DirectionDetail'
import Teachers from './pages/Teachers'
import News from './pages/News'
import Contact from './pages/Contact'
import Admission from './pages/Admission'
import OnlineDars from './pages/OnlineDars'
import VideoPresentation from './pages/VideoPresentation'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
import CareerQuiz from './pages/CareerQuiz'
import Events from './pages/Events'
import CertificateVerify from './pages/CertificateVerify'
import NotFound from './pages/NotFound'
import BackToTop from './components/common/BackToTop'

function App() {
  return (
    <div className="app-shell flex min-h-screen flex-col justify-between">

      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/directions/:id" element={<DirectionDetail />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/video-presentation" element={<VideoPresentation />} />
            <Route path="/onlinedarslar" element={<OnlineDars />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career-quiz" element={<CareerQuiz />} />
            <Route path="/events" element={<Events />} />
            <Route path="/certificate-verify" element={<CertificateVerify />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <FloatingChat />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
