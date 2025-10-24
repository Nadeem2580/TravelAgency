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

  const testimonialObject = [
    { image: img_1, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Clair Auhust," },
    { image: img_2, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Jhon bush," },
    { image: img_3, description: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quidem magnam accusamus consectetur ullam quae fugit odio officia beatae non temporibus pariatur inventore sit, doloremque velit.”", author: "__ Shoun catlin," }
  ]

  const next = () => {
    setSlide((prev) => (prev + 1) % 3);
  };

  const previous = () => {
    setSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>Testimonials</Typography>
        </Box>

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
                  <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                    {item.author}
                    <Typography component="span" variant="caption" sx={{ color: "#ef6c57", fontSize: "16px" }}>
                      Traveler
                    </Typography>
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