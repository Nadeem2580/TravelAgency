import React from "react";
import { Box, Card, CardContent, Typography, Grid, Container } from "@mui/material";

const addOns = [
    { title: "Luxury Transport Upgrade", description: "Upgrade to luxury cars or executive transport for enhanced comfort." },
    { title: "Hotel Upgrade (4★ or 5★)", description: "Enjoy premium hotel stays with top-notch facilities and service." },
    { title: "Adventure Packages", description: "Add thrilling experiences like Rafting, Skiing, or Jeep Safari to your tour." },
    { title: "Drone Photography / Photoshoot", description: "Capture your journey with drone or professional photoshoots." },
];

const importantNotes = [
    "Prices may vary based on travel dates.",
    "Non-refundable after confirmation Weather may affect trip schedule.",
    "ID card required at check-in."
];

const paymentDetails = [
    "Advance Payment Required: 50%",
    "Remaining Balance: Before departure",
    "Payment Modes: Bank Transfer, EasyPaisa, Cash",
];

export default function NotesDetail() {
    return (
        <Container>

            <Box sx={{ p: 4, }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#333" }}>
                    ✨ Add-ons (Optional Upgrades)
                </Typography>
                <Grid container spacing={2}>
                    {addOns.map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Important Notes */}
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{p:2}} >
                        <Box sx={{ mt: 5,p:2,borderRadius:"10px", ":hover":{
                            boxShadow:"0 0 5px black"
                        }}}>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
                                ⚠️ Important Notes / Terms
                            </Typography>
                            <Box component="ul" sx={{ pl: 3 }}>
                                {importantNotes.map((note, i) => (
                                    <Typography component="li" key={i} variant="body2" sx={{ color: "#555", mb: 1 }}>
                                        {note}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }} sx={{p:2}}>
                        {/* Payment Details */}
                        <Box sx={{ mt: 5,p:2,borderRadius:"10px",":hover":{
                            boxShadow:"0 0 5px black"} }}>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
                                💰 Payment & Booking
                            </Typography>
                            <Box component="ul" sx={{ pl: 3 }}>
                                {paymentDetails.map((p, i) => (
                                    <Typography component="li" key={i} variant="body2" sx={{ color: "#555", mb: 1 }}>
                                        {p}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>



            </Box>
        </Container>

    );
}
