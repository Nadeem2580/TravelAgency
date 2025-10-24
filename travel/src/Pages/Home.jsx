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

export const Home = () => {
  return (
    <>
<Navbar  />
<Hero/>
<Cards />
<Testimonials />
<Destination />
<ParallaxHero />
<Services />
<Heading />
<Footer />

    </>
  )
}
export default Home

