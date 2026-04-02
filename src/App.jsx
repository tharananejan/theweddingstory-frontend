import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Header/Footer'
function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <main style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
