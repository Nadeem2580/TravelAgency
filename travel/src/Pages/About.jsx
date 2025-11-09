import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import hero_bg_2 from "../assets/hero_bg_2.jpg";
import person_1 from "../assets/person_1.jpg";
import person_2 from "../assets/person_2.jpg";
import person_3 from "../assets/person_4.jpg";
import DoneIcon from "@mui/icons-material/Done";
import Heading from "../Components/Heading";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Testimonials from "../Components/Testimonials";
import Buttons from "../Components/Button";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };

  return (
    <>
      {/* Header */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            height: "70vh",
            backgroundImage: `url(${hero_bg_2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Typography
                variant="h2"
                sx={{ color: "#fff", margin: "20px", textShadow: "10px 2px 4px rgba(0,0,0,1)" }}
              >
                About Travelers
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </motion.div>

      {/* About Section */}
      <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Grid spacing={2} container justifyContent={"center"} gap={8}>
          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.img
              src={hero_bg_2}
              alt="about"
              style={{ width: "100%", borderRadius: "10px" }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                About Company
              </Typography>
              <Typography sx={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse voluptate iusto, atque reiciendis dignissimos alias sequi deserunt quibusdam quos libero nisi voluptas dolore quaerat fugiat eaque numquam ipsam recusandae.
              </Typography>
              {["Vitae cumque eius modi expedita", "Totam at maxime Accusantium", "Distinctio temporibus"].map((text, i) => (
                <Typography key={i} sx={{ color: "#555", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <DoneIcon sx={{ color: "#ef6c57" }} /> {text}
                </Typography>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Heading heading={"Our Team"} />

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Grid container spacing={3}>
          {[person_1, person_2, person_3].map((person, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Box sx={{ width: "150px", borderRadius: "50%", overflow: "hidden", mb: 2 }}>
                  <Box component="img" src={person} sx={{ width: "100%", borderRadius: "50%" }} />
                </Box>
                <Typography sx={{ fontSize: "25px", marginBottom: "10px" }}>
                  {index === 0 ? "Jean McMiller" : index === 1 ? "Claire Peters" : "John Sawyer"}
                </Typography>
                <Typography sx={{ textAlign: "center", color: "#555", mb: 1 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam sequi distinctio sit. Reprehenderit quo ad ipsa non error! Cum autem alias consequatur a beatae assumenda nostrum inventore, doloribus illum.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", margin: "10px 0" }}>
                  <TwitterIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                  <InstagramIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                  <FacebookIcon sx={{ fontSize: "16px", color: "#ef6c57" }} />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Heading heading={"What People Says"} />
      <Testimonials />
      <Heading heading={"Want To Travel With Us?"} />
      <Buttons />
    </>
  );
};

export default AboutPage;
