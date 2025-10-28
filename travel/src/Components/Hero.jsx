import { Box, Button, Container, Grid, IconButton, Typography } from "@mui/material"
import React, { useState } from "react"
import heroImage from "../assets/hero_bg_1.jpg"
import heroImage2 from "../assets/hero_bg_2.jpg"
import img_1 from "../assets/img_1.jpg"
import img_2 from "../assets/img_2.jpg"
import img_3 from "../assets/img_3.jpg"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import { useEffect } from "react"

const Hero = () => {
    const travelDestinations = [
        {
            name: "Azad Kashmir",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssTHL0PnaaRl90CeEQRRZRnBU7ah2BnchlA&s",
            description: "Azad Kashmir is known for its lush green valleys, rivers, and snow-capped mountains, offering breathtaking natural beauty.",
            travelRates: "PKR 18,000 per person",
            durationDays: "5 Days / 4 Nights",
            airline: "PIA",
            totalAmount: "PKR 36,000 (for 2 persons)"
        }, {
            name: "Swat Valley",
            image: "https://visitinpakistan.com/wp-content/uploads/2020/02/1-Alpurai-Swat-KPK-1-640x499-1.jpg",
            description: "Swat is known as the 'Switzerland of Pakistan' for its lush valleys, lakes, and rivers surrounded by majestic mountains.",
            travelRates: "PKR 20,000 per person",
            durationDays: "5 Days / 4 Nights",
            airline: "SereneAir",
            totalAmount: "PKR 40,000 (for 2 persons)"
        }, {
            name: "Hunza Valley",
            image: "https://www.jasminetours.com/wp-content/uploads/2024/01/hunza-valley-1-min.jpg",
            description: "Hunza Valley is famous for its breathtaking mountains, peaceful lakes, and friendly locals.",
            travelRates: "PKR 25,000 per person",
            durationDays: "6 Days / 5 Nights",
            airline: "AirBlue",
            totalAmount: "PKR 50,000 (for 2 persons)"
        },
    ]
    const [slide, setSlide] = useState(0)

    const nextImage = () => setSlide((prev) => (prev === 0 ? 1 : 0))
    const prevImage = () => setSlide((prev) => (prev === 1 ? 0 : 1))
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 4000)

        return () => clearInterval(interval)
    })
    return (
        <>
            <Box sx={{ width: "100vw", overflow: "hidden", position: "relative" }}>
                {/* Slider Section */}
                <Box sx={{ display: "flex", width: "200%", transition: "transform 0.8s ease-in-out", transform: `translateX(-${slide * 50}%)` }}>
                    {/* Slide 1 */}
                    <Box
                        sx={{ width: "100%", backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Box sx={{ width: { xs: "90%", md: "50%" }, textAlign: "center", color: "#fff" }}>
                            <Typography sx={{ fontSize: { xs: "1.8rem", md: "3.5rem" }, fontWeight: 700, mb: 2 }}>Never Stop Exploring</Typography>
                            <Typography sx={{ mb: 3 }}>
                                Discover the beauty of the world with us — your journey starts here. Explore, dream, and travel without limits.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: "#ef6c57", px: 4, py: 1.5, fontSize: "1rem", borderRadius: "8px", transition: "all 0.3s ease-in-out", ":hover": { borderRadius: "50px" } }}>
                                Book Now
                            </Button>
                        </Box>
                    </Box>

                    {/* Slide 2 */}
                    <Box sx={{ width: "100%", backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${heroImage2})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", }} >
                        <Box sx={{ width: { xs: "90%", md: "50%" }, textAlign: "center", color: "#fff" }}>
                            <Typography sx={{ fontSize: { xs: "1.8rem", md: "3.5rem" }, fontWeight: 700, mb: 2 }}>Love The Places</Typography>
                            <Typography sx={{ mb: 3 }}>
                                Journey beyond your imagination. Let’s find your next destination and make unforgettable memories.
                            </Typography>
                            <Button variant="contained"
                                sx={{
                                    backgroundColor: "#ef6c57", margin: "50px auto ", display: "block", px: 4, py: 1.5, fontSize: "1rem",
                                    transition: "border-radius 0.3s ease-in", borderRadius: "8px", ":hover": { borderRadius: "50px" }
                                }}>Book Now </Button>

                        </Box>
                    </Box>
                </Box>

                {/* Navigation Icons */}
                <IconButton onClick={prevImage} sx={{ position: "absolute", top: "50%", left: 25, transform: "translateY(-50%)", color: "#fff" }}>
                    <ArrowCircleLeftIcon sx={{ fontSize: "45px" }} />
                </IconButton>
                <IconButton onClick={nextImage} sx={{ position: "absolute", top: "50%", right: 25, transform: "translateY(-50%)", color: "#fff" }}>
                    <ArrowCircleRightIcon sx={{ fontSize: "45px" }} />
                </IconButton>

                {/* Overlapping Image Cards */}

                <Container maxWidth="lg" sx={{ padding: "20px", mt: { xs: -8, sm: -8, md: -10 }, position: "relative", zIndex: 10 }}>
                    <Grid container spacing={3} justifyContent="center">
                        {travelDestinations.map((data, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3.5 }} key={data.name} sx={{
                                overflow: "hidden", position: "relative",
                                "&:hover .bgImage": { transform: "scale(1.1)" },
                                "&:hover .text": { bottom: "40px" },
                                transition: "all 0.4s ease"
                            }}>
                                <Box
                                    className="bgImage"
                                    component="div"
                                    src={data.image}
                                    alt={`destination-${index}`}
                                    sx={{
                                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)),
                                     url(${data.image})`, backgroundSize: "cover", backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat", width: "350px", height: "400px",
                                        boxShadow: 5, objectFit: "cover", overflow: "hidden", transition: "transform 0.4s ease"
                                    }} />
                                <Typography variant="h6" className="text" sx={{
                                    transition: "bottom 0.4s ease", position: "absolute",
                                    bottom: "30px", textAlign: "center", color: "#fff", marginLeft: "10px"
                                }}>{data.name}</Typography>

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Extra spacing below */}
            <Box sx={{ height: "100px" }} />
        </>
    )
}

export default Hero
