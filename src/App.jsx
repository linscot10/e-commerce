
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='container my-4'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App
