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

export const Home = () => {
  return (
    <>
  
<Hero/>
<Cards />
<Heading heading={"Testimonials"} text={null} />
<Testimonials />
<Heading heading={"Our Destinations"} text={"Choose your next destination"} />

<Destination />
<ParallaxHero />
{/* <Heading heading={"Our Services"} text={"We Offer The Following Services"}/> */}
<Services />
<Heading heading={"Want To Travel With Us?"} text={null}/>
<Buttons />

    </>
  )
}
export default Home

