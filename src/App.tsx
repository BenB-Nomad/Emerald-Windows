import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Windows from './pages/Windows'
import Doors from './pages/Doors'
import Sunrooms from './pages/Sunrooms'
import Conservatories from './pages/Conservatories'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/windows" element={<Windows />} />
            <Route path="/services/doors" element={<Doors />} />
            <Route path="/services/sunrooms" element={<Sunrooms />} />
            <Route path="/services/conservatories" element={<Conservatories />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 