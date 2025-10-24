import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import hero_bg_2 from "../assets/hero_bg_2.jpg"
const ParallaxHero = () => {
    return (
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
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                }}
            />

            {/* Text + Button */}
            <Box sx={{ position: "relative", zIndex: 2 }}>

               

                <Button
                    variant="contained"
                    startIcon={<PlayCircleFilledWhiteIcon />}
                    sx={{
                        backgroundColor: "#ef6c57",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "30px",
                        px: 4,
                        py: 1.5,
                        fontSize: "16px",
                        "&:hover": { backgroundColor: "#d45745" },
                    }}
                >
                    Play Video
                </Button>
                    <Typography variant="h4" sx={{ margin: "20px" }}>
                   Experience Our Outstanding <br /> Services
                    </Typography>
            </Box>
        </Box>
    );
};

export default ParallaxHero;
