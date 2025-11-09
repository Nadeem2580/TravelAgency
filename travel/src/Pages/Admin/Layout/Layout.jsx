import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../../Components/Navbar"
import Footer from "../../../Components/Footer"

const Layout = () => {
  const location = useLocation().pathname

  // Hide Navbar & Footer on these pages
  const hideLayout = ["/login", "/signup", "/otp-verify"].includes(location)

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet /> {/* All pages will load here */}
      {!hideLayout && <Footer />}
    </>
  )
}

export default Layout
