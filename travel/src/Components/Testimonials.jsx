import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import img_1 from "../assets/img_1.jpg"
import img_2 from "../assets/img_2.jpg"
import img_3 from "../assets/img_4.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import { useState } from 'react'
const Testimonials = () => {
  const [slide, setSlide] = useState(0)

  // const testimonialObject = [
  //   { image: img_1, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Clair Auhust," },
  //   { image: img_2, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Jhon bush," },
  //   { image: img_3, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Shoun catlin," }
  // ]

 const testimonialObject = [
  {
    author: "Azad Kashmir",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssTHL0PnaaRl90CeEQRRZRnBU7ah2BnchlA&s",
    description: "Azad Kashmir, often called the 'Paradise on Earth', is a region of unmatched beauty nestled in the foothills of the Himalayas. From the mesmerizing Neelum Valley to the sparkling waters of Rawalakot and Banjosa Lake, every corner offers a picture-perfect view. Travelers can enjoy boating in the serene lakes, trekking through lush forests, or simply relaxing amidst snow-capped peaks and cool mountain breeze. The local culture, traditional food, and warm hospitality make it one of Pakistan’s most unforgettable travel destinations.",
    travelRates: "PKR 18,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "PIA",
    totalAmount: "PKR 36,000 (for 2 persons)"
  },
  {
    author: "Swat Valley",
    image: "https://visitinpakistan.com/wp-content/uploads/2020/02/1-Alpurai-Swat-KPK-1-640x499-1.jpg",
    description: "Swat Valley, also known as the 'Switzerland of Pakistan', is a magical blend of crystal-clear rivers, lush meadows, and majestic mountains. The valley is home to famous spots like Malam Jabba, Fizaghat, and Kalam, where nature unfolds its charm in full glory. Visitors can explore ancient Buddhist sites, enjoy ziplining and chairlift rides at Malam Jabba, or experience the calm of the Swat River flowing gently through the valley. With cool weather throughout the year, it’s a dream destination for nature lovers and photographers alike.",
    travelRates: "PKR 20,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "SereneAir",
    totalAmount: "PKR 40,000 (for 2 persons)"
  },
  {
    author: "Hunza Valley",
    image: "https://www.jasminetours.com/wp-content/uploads/2024/01/hunza-valley-1-min.jpg",
    description: "Hunza Valley is one of Pakistan’s crown jewels — a land of towering peaks, turquoise rivers, and warm-hearted locals. The valley’s capital, Karimabad, is surrounded by iconic sites like Baltit Fort and Altit Fort that reflect centuries of rich history. The stunning Rakaposhi and Ultar Sar mountains dominate the skyline, while Passu Cones offer postcard-perfect views. In spring, Hunza transforms into a paradise of cherry blossoms, and in autumn, it’s painted with golden hues. Whether you’re hiking Eagle’s Nest, exploring Attabad Lake, or sipping apricot juice by the roadside, Hunza offers a life-changing experience you’ll never forget.",
    travelRates: "PKR 25,000 per person",
    durationDays: "6 Days / 5 Nights",
    airline: "AirBlue",
    totalAmount: "PKR 50,000 (for 2 persons)"
  }
];





  const next = () => {
    setSlide((prev) => (prev + 1) % 3);
  };

  const previous = () => {
    setSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    },6000)

    return () => clearInterval(interval)
  })


  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        {/* <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>Testimonials</Typography>
        </Box> */}

        <Box sx={{
          minWidth: `${100 * testimonialObject.length}vw`, position: "relative", overflow: "hidden", display: "flex",
          transition: "transform 0.8s ease-in-out", transform: `translateX(-${slide * (100 / testimonialObject.length)}%)`
        }}>
          {/* first testimonial  */}
          {
            testimonialObject.map((item, index) => (
              <Box key={item.author} sx={{ width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, padding: "30px" }}>
                {/* Image */}
                <Box component="img" src={item.image} sx={{
                  width: { xs: "100%", sm: "70%", md: "60%", lg: "45%" },
                  maxHeight: "600px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }} />

                {/* Overlapping Text Box */}
                <Box sx={{
                  minHeight: "300px",
                  position: { xs: "static", sm: "absolute", md: "absolute", lg: "absolute" },
                  right: { xs: "5%", sm: "0", md: "0%", lg: "20%" },
                  width: { xs: "100%", sm: "40%", md: "45%" },
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  p: 3,
                  zIndex: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mt: { xs: 2, md: 3 }
                }}>
                  <Typography sx={{ mb: 1, color: "#333", fontSize: "1rem" }}>
                    {item.description}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#ef6c57" }}>
                    {item.author}
                   
                  </Typography>
                </Box>
              </Box>
            ))
          }



        </Box>

        {/* Icons Arrow */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={previous} sx={{ color: "blue" }}>
            <ArrowCircleLeftIcon sx={{ fontSize: "45px" }} />
          </IconButton>
          <IconButton onClick={next} sx={{ color: "blue" }}>
            <ArrowCircleRightIcon sx={{ fontSize: "45px" }} />
          </IconButton>
        </Box>
        {/* Spacer to prevent overlap cutoff */}
        <Box sx={{ height: { xs: "120px", md: "100px" } }} />
      </Container>
    </Box>

  )
}

export default Testimonials