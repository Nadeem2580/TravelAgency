import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import hero_bg_2 from "../assets/hero_bg_2.jpg"
import { Link } from "react-router-dom";
import Destination from "../Components/Destination";
import Heading from "../Components/Heading";
import Testimonials from "../Components/Testimonials";
import Cards from "../Components/Cards";

const DestinationPage = () => {
  return (
    <>
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
            Destinations
          </Typography>
        </Box>
      </Box>



      <Box sx={{ margin: "80px 0" }}>
        <Destination />
      </Box>

      <Heading heading={"What people says"} text={null} />

      <Testimonials />
    </>
  )
}

export default DestinationPage