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
import { Bounce, ToastContainer } from 'react-toastify'
import BookingForm from './Pages/BookingForm'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './Theme'
import BookingSuccess from './Pages/Success/Success'
import AdminDahsboard from './Pages/Admin/AdminDahsboard'
import CreateTour from './Pages/Admin/CreateTour'
function App() {
  const token = localStorage.getItem("token")

  console.log(token, "token")
  return (
    <>
     <ThemeProvider theme={theme}>

      {token ? <Navbar /> : null}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/success' element={<BookingSuccess />} />
        
        {/* Admin Route */}
        <Route path='/admin' element={<AdminDahsboard />} />
        <Route path='/creat_tour' element={<CreateTour />} />

      </Routes>
      {token ? <Footer /> : null}




     </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


    </>
  )
}

export default App
