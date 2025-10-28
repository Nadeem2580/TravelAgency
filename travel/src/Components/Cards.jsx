import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import plane from "../assets/planeicon.png"
import tour from "../assets/touricon.png"
import cruise from "../assets/cruise.png"
const Cards = () => {
    const obj = [
        { icon: plane,title:"Air Ticketing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: tour, title:"Cruises",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
        { icon: cruise, title:"Tour Packages",description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." },
    ]


    return (
        <Container maxWidth="lg" >
            <Grid container spacing={3} sx={{  padding: "10px" }} justifyContent={"center"}>
                {obj.map((item, index) => (
                    <Grid key={item.title} size={{ xs: 12, md: 6, lg: 3.5 }} sx={{borderRadius:"5px",padding:"30px",":hover":{boxShadow:"0 0 3px black"}}}>
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

export default Cards