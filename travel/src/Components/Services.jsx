import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import plane from "../assets/planeicon.png"
import tour from "../assets/touricon.png"
import cruise from "../assets/cruise.png"
import hotel from "../assets/hotel.jpg"
import ship from "../assets/download.jpg"
import meal from "../assets/meal.png"
import assistant from "../assets/assitant.png"
import experiance from "../assets/experiance.png"
import NotesDetail from './Notes'
import { motion } from "framer-motion"

const Services = () => {
    const obj = [
        { icon: plane, title: "Air Ticketing", description: "Explore Pakistan’s most beautiful destinations with complete travel and stay packages." },
        { icon: tour, title: "Bus Travel", description: "Comfortable and affordable luxury bus travel to major tourist destinations." },
        { icon: cruise, title: "Hotel Accomodations", description: "Stay in comfortable and well-rated hotels with modern amenities and great service" },
        { icon: meal, title: "Meals (Food & Dining)", description: "Enjoy delicious local and continental meals throughout your journey." },
        { icon: assistant, title: "Tour Guide & Assistance", description: "Experienced guides to help you explore and enjoy every moment of your trip." },
        { icon: experiance, title: "Experiences", description: "Enhance your trip with luxury transport, premium stays, or adventure activities." },
    ]

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
                <Grid container spacing={2} sx={{ margin: "0 auto", display: "flex", padding: "10px 40px" }}>
                    {obj.map((item, index) => (
                        <Grid key={item.title} size={{ xs: 12, md: 6, lg: 3 }} justifyContent={"center"} sx={{
                            p: 2, borderRadius: "5px", ":hover": {
                                boxShadow: "0 0 5px black"
                            }
                        }}>
                             <motion.div
                                initial={{ opacity: 0, y: 50 }} // starting position
                                whileInView={{ opacity: 1, y: 0 }} // visible position
                                transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
                                whileHover={{ scale: 1.05 }} // hover zoom effect
                              >
                                <Box sx={{ display: "flex" }}>
                                    <Box component={"img"} src={item.icon} sx={{ width: "100px", height: "50px", marginRight: "15px" }} />
                                    <Box>
                                        <Box>
                                            <Typography fontWeight={"bold"} mb={2}>{item.title}</Typography>
                                            <Typography sx={{ color: "#555", fontSize: "13px" }}>{item.description}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>

                    ))}
                </Grid>

            </Container>


            <Box sx={{ backgroundColor: "#f9f9f9", mt: 8, mb: 8 }}>
                <NotesDetail />
            </Box>

        </>
    )
}

export default Services