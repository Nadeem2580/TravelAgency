import React from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import hero_bg_2 from "../assets/hero_bg_2.jpg"
import hero_bg_1 from "../assets/hero_bg_1.jpg"
import { Label } from "@mui/icons-material";
import Buttons from "../Components/Button";
const Contact = () => {
    return (
        <>
            {/* Headers  */}<Box sx={{ backgroundColor: "#f8f9fa" }}>


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
                            Get In Touch
                        </Typography>
                    </Box>
                </Box>

                {/* Contact Form */}
                <Container>
                    <Grid container spacing={3}>
                        {/* Left Form */}
                        <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "20px 0" }}>
                            <Box component="form" sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2, mt: "60px", backgroundColor: "#fff" }}>
                                {/* First + Last Name */}
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                    <Box sx={{ flex: 1, minWidth: "200px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 0.5 }}>First Name</Typography>
                                        <TextField fullWidth variant="outlined" placeholder="Enter first name" InputProps={{ sx: { height: 45, "& input": { padding: "10px" } } }} />
                                    </Box>

                                    <Box sx={{ flex: 1, minWidth: "200px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 0.5 }}>Last Name</Typography>
                                        <TextField fullWidth variant="outlined" placeholder="Enter last name" InputProps={{ sx: { height: 45, "& input": { padding: "10px" } } }} />
                                    </Box>
                                </Box>

                                {/* Email */}
                                <Box sx={{ flex: 1, minWidth: "200px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 0.5 }}>Email</Typography>
                                    <TextField fullWidth variant="outlined" placeholder="Email" InputProps={{ sx: { height: 45, "& input": { padding: "10px" } } }} />
                                </Box>

                                {/* Subject */}
                                <Box sx={{ flex: 1, minWidth: "200px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 0.5 }}>Subject</Typography>
                                    <TextField fullWidth variant="outlined" placeholder="Subject" InputProps={{ sx: { height: 45, "& input": { padding: "10px" } } }} />
                                </Box>

                                {/* Message */}
                                <Box sx={{ flex: 1, minWidth: "200px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 0.5 }}>Message</Typography>
                                    <TextField fullWidth variant="outlined" placeholder="Message" multiline rows={6} />
                                </Box>

                                <Button variant="contained" sx={{ borderRadius: 0, backgroundColor: "#ef6c57", width: "150px", fontSize: "13px" }}>
                                    Send Message
                                </Button>
                            </Box>
                        </Grid>

                        {/* Right Info */}
                        <Grid size={{ xs: 12, md: 6 }} sx={{mt: "80px",backgroundColor:"#ffffff",mb:"100px"}}>
                            <Box sx={{ backgroundColor: "#ffffff", p: 3 }}>
                                <Typography sx={{ fontWeight: "bold" }}>Address</Typography>
                                <Typography>203 Fake St. Mountain View, San Francisco, California, USA</Typography>

                                <Typography sx={{ fontWeight: "bold", mt: 2 }}>Phone</Typography>
                                <Typography>+1 232 3235 324</Typography>

                                <Typography sx={{ fontWeight: "bold", mt: 2 }}>Email Address</Typography>
                                <Typography>youremail@domain.com</Typography>
                            </Box>

                            <Box sx={{ p: 3 }}>
                                <Box component={"img"} src={hero_bg_1} sx={{ width: "100%" }} />
                                <Typography sx={{ marginTop: "10px"}}>More Information</Typography>
                                <Typography sx={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga blanditiis sit expedita error numquam repudiandae repellendus harum ratione mollitia illum totam eveniet, suscipit reprehenderit quae, excepturi nostrum eos labore?</Typography>

                            <Button variant="contained" sx={{ marginTop:"10px",borderRadius: 0, backgroundColor: "#ef6c57", width: "150px", fontSize: "13px" }}>
                                Learn More
                            </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Contact