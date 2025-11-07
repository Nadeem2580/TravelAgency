import { ThemeProvider } from "@mui/material/styles"
import { Route, Routes, useLocation } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/About'
import AdminBooking from './Pages/Admin/AdminBooking'
import AdminDashboard from './Pages/Admin/AdminDahsboard'
import CreateTour from './Pages/Admin/CreateTour'
import AdminLayout from './Pages/Admin/Layout/AdminLayout'
import Users from './Pages/Admin/Users'
import LoginPage from './Pages/Auth/Log-In/Login'
import SignUp from './Pages/Auth/Sign-up/SignUp'
import BookingForm from './Pages/BookingForm'
import Contact from './Pages/Contact'
import DestinationPage from './Pages/Destination'
import DestinationDetail from './Pages/DestinationDetail'
import Home from './Pages/Home'
import BookingSuccess from './Pages/Success/Success'
import theme from './Theme'
import Auth from "./Pages/Routes/Auth"
import UserRoute from "./Pages/Routes/UserRoute"
function App() {
 
  const location = useLocation().pathname
  return (
    <>
      <ThemeProvider theme={theme}>

        {location == "/login" ? null : location == "/signup" ? null : <Navbar />}

        <Routes>
          <Route index element={<Home />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/destination/:name" element={<DestinationDetail />} />

          <Route element={<Auth />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>



          <Route element={<UserRoute />}>
            <Route path='/booking' element={<BookingForm />} />
            <Route path='/success' element={<BookingSuccess />} />
          </Route>

          {/* Admin Route */}

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="creat_tour" element={<CreateTour />} />
            <Route path="admin-user" element={<Users />} />
            <Route path="admin-booking" element={<AdminBooking />} />
          </Route>

        </Routes>
        {location == "/login" ? null : location == "/signup" ? null : <Footer />}




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
