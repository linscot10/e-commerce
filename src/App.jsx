
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'

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
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App
