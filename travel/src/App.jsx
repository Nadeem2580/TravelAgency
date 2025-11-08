import { ThemeProvider } from "@mui/material/styles"
import { Route, Routes } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import AboutPage from './Pages/About'
import AdminBooking from './Pages/Admin/AdminBooking'
import AdminDashboard from './Pages/Admin/AdminDahsboard'
import CreateTour from './Pages/Admin/CreateTour'
import Users from './Pages/Admin/Users'
import LoginPage from './Pages/Auth/Log-In/Login'
import OTPpage from "./Pages/Auth/OtpVerification"
import SignUp from './Pages/Auth/Sign-up/SignUp'
import BookingForm from './Pages/BookingForm'
import Contact from './Pages/Contact'
import DestinationPage from './Pages/Destination'
import DestinationDetail from './Pages/DestinationDetail'
import Home from './Pages/Home'
import AdminRoute from "./Pages/Routes/AdminRoute"
import Auth from "./Pages/Routes/Auth"
import UserRoute from "./Pages/Routes/UserRoute"
import BookingSuccess from './Pages/Success/Success'
import theme from './Theme'
function App() {



  return (
    <>
      <ThemeProvider theme={theme}>



        <Routes>
          <Route index element={<Home />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/destination/:name" element={<DestinationDetail />} />

          <Route element={<Auth />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/otp-verify' element={<OTPpage />} />
          </Route>



          <Route element={<UserRoute />}>
            <Route path='/booking' element={<BookingForm />} />
            <Route path='/success' element={<BookingSuccess />} />
          </Route>

          {/* Admin Route */}
          <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="creat_tour" element={<CreateTour />} />
              <Route path="/admin/admin-user" element={<Users />} />
              <Route path="/admin/admin-booking" element={<AdminBooking />} />
          </Route>

        </Routes>




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
