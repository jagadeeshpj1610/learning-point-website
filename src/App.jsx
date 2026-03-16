import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatBtns from './components/FloatBtns'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Results from './pages/Results'
import Gallery from './pages/Gallery'
// import Contact from './pages/Contact'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
      <FloatBtns />
    </>
  )
}
