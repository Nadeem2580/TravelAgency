import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import Testimonials from '../Components/Testimonials'
import Destination from '../Components/Destination'
import ParallaxHero from '../Components/ParallaxHero'
import Services from '../Components/Services'
import Heading from '../Components/Heading'
import Footer from '../Components/Footer'
import Buttons from '../Components/Button'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const location = useLocation().pathname

  return (
    <>
      {location == "/login" ? null : location == "/signup" ? null : <Navbar />}
      <Hero />
      <Cards />
      <Heading heading={"Testimonials"} text={null} />
      <Testimonials />

      <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
        <Heading heading={"Our Destinations"} text={"Choose your next destination"} />
      </Box>


      <Destination />
      <ParallaxHero />
      <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
        <Heading heading={"Our Services"} text={"We Offer The Following Services"} />
      </Box>
      <Services />
      <Heading heading={"Want To Travel With Us?"} text={null} />
      <Buttons />
      {location == "/login" ? null : location == "/signup" ? null : <Footer />}

    </>
  )
}
export default Home

