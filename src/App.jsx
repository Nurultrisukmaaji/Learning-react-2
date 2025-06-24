import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import House from './pages/House'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/the-house' element={<House />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
