import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import plane from "../assets/planeicon.png"
import tour from "../assets/touricon.png"
import cruise from "../assets/cruise.png"
import hotel from "../assets/hotel.jpg"
import ship from "../assets/download.jpg"
import ski from "../assets/images.png"
const Services = () => {
    const obj = [
        { icon: plane, title: "Air Ticketing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: tour, title: "Cruises", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: cruise, title: "Tour Packages", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: hotel, title: "Hotel Accomodations", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: ship, title: "Sea Explorations", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: ski, title: "Ski Experiences", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
    ]

    return (
        <Container maxWidth="lg" sx={{marginTop:"30px"}}>
             <Box sx={{ textAlign: "center", margin: "50px 0" }}>
                    <Typography fontWeight={"bold"} fontSize={30}>Our Destinations</Typography>
                    <Typography sx={{ color: "#555", fontSize: "14px" }}>Choose your next destination</Typography>
                </Box>


            <Grid container spacing={2} sx={{ margin: "0 auto", display: "flex", gap: "30px", padding: "0 40px" }}>
                {obj.map((item, index) => (
                    <Grid key={item.title} size={{ xs: 12, md: 6, lg: 3.5 }} justifyContent={"center"}>
                        <Box >
                            <Box sx={{ display: "flex" }}>
                                <Box component={"img"} src={item.icon} sx={{ width: "100px", height: "50px", marginRight: "15px" }} />
                                <Box>
                                    <Box>
                                        <Typography fontWeight={"bold"} mb={2}>{item.title}</Typography>
                                        <Typography sx={{ color: "#555", fontSize: "13px" }}>{item.description}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                ))}



            </Grid>
            <Box sx={{ height: "100px" }} />
        </Container>
    )
}

export default Services