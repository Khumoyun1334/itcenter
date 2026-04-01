import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Directions from './pages/Directions'
import DirectionDetail from './pages/DirectionDetail'
import Teachers from './pages/Teachers'
import News from './pages/News'
import Contact from './pages/Contact'
import Admission from './pages/Admission'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <Navbar />
      <ScrollToTop />
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
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App