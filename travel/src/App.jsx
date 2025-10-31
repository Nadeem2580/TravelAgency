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
import LoginPage from './Pages/Auth/Log-In/Login'
import SignUp from './Pages/Auth/Sign-up/SignUp'

function App() {
  const token = localStorage.getItem("token")

  console.log(token, "token")
  return (
    <>
      {token ? <Navbar /> : null}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      {token ?<Footer /> : null}
    </>
  )
}

export default App
