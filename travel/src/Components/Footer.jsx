import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#333333", padding: "100px 0" }}>
            <Container>

                <Grid container spacing={2} >
                    <Grid size={{ xs: 12, md: 6, lg: 3 }} >
                        <Typography sx={{ color: "#fff" }}>About Travelers</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</Typography>
                    </Grid>


                    <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{display : "flex",alignItems:"center" , flexDirection:"column"}}>
                        <Typography sx={{ color: "#fff" }}>About Travelers</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Home</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Destination</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Services</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>About</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        <Typography sx={{ color: "#fff", fontSize: "16px" }}>Contact</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Privacy policy</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Contact Us</Typography>
                        <Typography sx={{ color: "#555", fontSize: "14px" }}>Discount</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>

                    <Typography sx={{ color: "#fff" }}>Subscribes Newletter</Typography>
                        <Typography sx={{ color: "#555",fontSize:"14px",marginBottom:"15px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio</Typography>
                        <Box sx={{ display: "flex", overflow: "hidden" }}>
                            <TextField variant='outlined' sx={{ height: "50px" }} />
                            <Button variant='contained' sx={{ overflow: "hidden" }}>Send</Button>
                        </Box>

                    </Grid>



                </Grid>
            </Container>

        </Box>


    )
}

export default Footer