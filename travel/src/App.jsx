import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DestinationPage from './Pages/Destination'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/About'
import Contact from './Pages/Contact'
import DestinationDetail from './Pages/DestinationDetail'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
