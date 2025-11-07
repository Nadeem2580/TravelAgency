import { Box, Container, Grid, Typography } from '@mui/material'
import greece from "../assets/01-greece.jpg"
import rome from "../assets/02-rome.jpg"
import japan from "../assets/03-japan.jpg"
import dubai from "../assets/04-dubai.jpg"
import london from "../assets/05-london.jpg"
import australia from "../assets/06-australia.jpg"
import travelDestinations from '../assets/object'
import { useNavigate } from 'react-router-dom'

const Destination = () => {
    const destinations = [
        { price: "$ 590", image: greece, title: "Santorini, Greece" },
        { price: "$ 390", image: rome, title: "Rome, Italy" },
        { price: "$ 390", image: japan, title: "Maount Fuji, Japan" },
        { price: "$ 320", image: dubai, title: "Camels, Dubai" },
        { price: "$ 290", image: london, title: "Elizabeth Tower, London" },
        { price: "$ 390", image: australia, title: "Opera House, Australia" },
    ]
    const navigate = useNavigate()




    return (
        <Container maxWidth="lg">

            <Box>
                <Box >
                    <Grid container spacing={4}>
                        {
                            travelDestinations.map((item, index) => (
                                <Grid key={item.name + index} size={{ xs: 12, md: 6, lg: 4 }}>
                                    <Box onClick={() => navigate(`/destination/${item.name}`)} sx={{
                                        position: "relative", overflow: "hidden", cursor: "pointer", height: "400px",
                                        "&:hover .priceText": { transform: "translateY(-10px) translateX(-50%)" }, "&:hover .image": { transform: "scale(1.1)" }
                                    }}>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                width: "100%",
                                                height: "100%",
                                                overflow: "hidden",
                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
                                                    zIndex: 1,
                                                },
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.name}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    position: "relative",
                                                    zIndex: 0,
                                                }}
                                            />
                                        </Box>


                                        <Typography
                                            className="priceText"
                                            sx={{
                                                position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", color: "#ef6c57", fontSize: "20px", zIndex: 2, whiteSpace: "nowrap",

                                                fontWeight: "bold", transition: "transform 0.3s ease", textShadow: "0px 0px 5px rgba(0,0,0,0.6)"
                                            }} >
                                            {item.name}
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