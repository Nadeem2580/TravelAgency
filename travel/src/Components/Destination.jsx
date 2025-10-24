import { Box, Container, Grid, Typography } from '@mui/material'
import greece from "../assets/01-greece.jpg"
import rome from "../assets/02-rome.jpg"
import japan from "../assets/03-japan.jpg"
import dubai from "../assets/04-dubai.jpg"
import london from "../assets/05-london.jpg"
import australia from "../assets/06-australia.jpg"

const Destination = () => {
    const destinations = [
        { price: "$ 590", image: greece, title: "Santorini, Greece" },
        { price: "$ 390", image: rome, title: "Rome, Italy" },
        { price: "$ 390", image: japan, title: "Maount Fuji, Japan" },
        { price: "$ 320", image: dubai, title: "Camels, Dubai" },
        { price: "$ 290", image: london, title: "Elizabeth Tower, London" },
        { price: "$ 390", image: australia, title: "Opera House, Australia" },
    ]
    return (
        <Container maxWidth="lg">

            <Box>
                <Box sx={{ textAlign: "center", margin: "50px 0" }}>
                    <Typography fontWeight={"bold"} fontSize={30}>Our Destinations</Typography>
                    <Typography sx={{ color: "#555", fontSize: "14px" }}>Choose your next destination</Typography>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        {
                            destinations.map((item, index) => (
                                <Grid key={item.title +index} size={{ xs: 12, md: 6, lg: 4 }}>
                                    <Box sx={{
                                        position: "relative", overflow: "hidden", cursor: "pointer", height: "400px",
                                        "&:hover .priceText": { transform: "translateY(-10px) translateX(-50%)" }, "&:hover .image": { transform: "scale(1.1)" }
                                    }}>
                                        <Box
                                            className="image"
                                            sx={{ width: "100%", height: "100%", transition: "transform 0.5s ease", transformOrigin: "center center" }}>
                                            <Box component="img" src={item.image} alt="London" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                        </Box>

                                        <Typography
                                            className="priceText"
                                            sx={{
                                                position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", color: "#ef6c57", fontSize: "20px", zIndex: 2,

                                                fontWeight: "bold", transition: "transform 0.3s ease", textShadow: "0px 0px 5px rgba(0,0,0,0.6)"
                                            }} >
                                            {item.price}
                                        </Typography>

                                        <Typography
                                            className="priceText"
                                            sx={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "18px", zIndex: 2, fontWeight: "bold", whiteSpace: "nowrap", textAlign: "center", transition: "transform 0.3s ease", textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>

            </Box>

            <Box sx={{ height: "100px" }}></Box>
        </Container>
    )
}

export default Destination