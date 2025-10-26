import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import hero_bg_2 from "../assets/hero_bg_2.jpg"
import person_1 from "../assets/person_1.jpg"
import person_2 from "../assets/person_2.jpg"
import person_3 from "../assets/person_4.jpg"
import DoneIcon from '@mui/icons-material/Done';
import Heading from "../Components/Heading";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Testimonials from "../Components/Testimonials";
import Buttons from "../Components/Button";
const AboutPage = () => {
    return (
        <>
            {/* Header */}
            <Box
                sx={{
                    height: "70vh",
                    backgroundImage: `url(${hero_bg_2})`, // 🌊 ocean background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", // 👈 magic line (parallax)
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                {/* Overlay (for slight dark effect) */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "rgba(0, 0, 0, 0.4)",
                        zIndex: 1,
                    }}
                />

                {/* Text + Button */}
                <Box sx={{ position: "relative", zIndex: 2 }}>


                    <Typography variant="h2" sx={{ color: "#fff", margin: "20px", textShadow: "10px 2px 4px rgba(0,0,0,1)" }}>
                        About Travelers
                    </Typography>
                </Box>
            </Box>
            {/* Hero section */}
            <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
                <Box>
                    <Grid spacing={2} container justifyContent={"center"} gap={8}>
                        {/* Image  */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box component={"img"} src={hero_bg_2} sx={{ width: "100%" }} />
                        </Grid>
                        {/* Text */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Typography variant="h4" sx={{ marginBottom: "10px" }}>About Company</Typography>
                            <Typography sx={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse voluptate iusto, atque reiciendis dignissimos alias sequi deserunt quibusdam quos libero nisi voluptas dolore quaerat fugiat eaque numquam ipsam recusandae.</Typography>
                            <Typography sx={{ color: "#555", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}><DoneIcon sx={{ color: "#ef6c57" }} /> Vitae cumque eius modi expedita</Typography>
                            <Typography sx={{ color: "#555", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}><DoneIcon sx={{ color: "#ef6c57" }} /> Totam at maxime Accusantium</Typography>
                            <Typography sx={{ color: "#555", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}><DoneIcon sx={{ color: "#ef6c57" }} /> Distinctio temporibus</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Heading heading={"Our Team"} />

            {/* Team Section */}
            <Container maxWidth="lg" sx={{ marginTop: "50px", marginBottom: "50px" }}>

                <Grid container spacing={2}>
                    {/* Card 1  */}
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "150px", borderRadius: "50%" }}>
                            <Box component={"img"} src={person_1} sx={{ width: "100%" }} />
                        </Box>
                        <Typography sx={{ fontSize: "25px", marginBottom: "10px" }}>Jean McMiller</Typography>
                        <Typography sx={{ textAlign: "center", color: "#555" }}>Lorem ipsum dolor, sit amet consectetur adipisi elit. Aliquam totam sequi distinctio sit. Reprehenderit quo ad ipsa non error! Cum autem alias consequatur a beatae assumenda nostrum inventore, doloribus illum.</Typography>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", margin: "10px 0" }}>
                            <TwitterIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <InstagramIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <FacebookIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                        </Box>
                    </Grid>

                    {/* Card 2  */}
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "150px", borderRadius: "50%" }}>
                            <Box component={"img"} src={person_2} sx={{ width: "100%" }} />
                        </Box>
                        <Typography sx={{ fontSize: "25px", marginBottom: "10px" }}>Claire Peters</Typography>
                        <Typography sx={{ textAlign: "center", color: "#555" }}>Lorem ipsum dolor, sit amet consectetur adipisi elit. Aliquam totam sequi distinctio sit. Reprehenderit quo ad ipsa non error! Cum autem alias consequatur a beatae assumenda nostrum inventore, doloribus illum.</Typography>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", margin: "10px 0" }}>
                            <TwitterIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <InstagramIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <FacebookIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                        </Box>
                    </Grid>
                    {/* Card 3 */}


                    <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "150px", borderRadius: "50%" }}>
                            <Box component={"img"} src={person_3} sx={{ width: "100%" }} />
                        </Box>
                        <Typography sx={{ fontSize: "25px", marginBottom: "10px" }}>John Sawyer</Typography>
                        <Typography sx={{ textAlign: "center", color: "#555" }}>Lorem ipsum dolor, sit amet consectetur adipisi elit. Aliquam totam sequi distinctio sit. Reprehenderit quo ad ipsa non error! Cum autem alias consequatur a beatae assumenda nostrum inventore, doloribus illum.</Typography>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", margin: "10px 0" }}>
                            <TwitterIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <InstagramIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                            <FacebookIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Heading heading={"What People Says"} />
            <Testimonials />
            <Heading heading={"Want To Travel With Us?"} />
<Buttons />
        </>
    )
}

export default AboutPage