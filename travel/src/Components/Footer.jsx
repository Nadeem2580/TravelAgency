import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
       <Box sx={{ backgroundColor: "#333333", padding: "100px 0" }}>
  <Container>
    <Grid container spacing={2} sx={{ margin: "50px 0" }}>
      {/* Column 1 */}
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold", marginBottom: "10px" }}>About Travelers</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!
        </Typography>
      </Grid>

      {/* Column 2 */}
      <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold", marginBottom: "10px" }}>Quick Links</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px", cursor: "pointer", "&:hover": { color: "#ef6c57" } }}>Home</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px", cursor: "pointer", "&:hover": { color: "#ef6c57" } }}>Destination</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px", cursor: "pointer", "&:hover": { color: "#ef6c57" } }}>Services</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px", cursor: "pointer", "&:hover": { color: "#ef6c57" } }}>About</Typography>
      </Grid>

      {/* Column 3 */}
      <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold", marginBottom: "10px" }}>Contact</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px" }}>Privacy Policy</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px" }}>Contact Us</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px" }}>Discount</Typography>
      </Grid>

      {/* Column 4 */}
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Subscribe Newsletter</Typography>
        <Typography sx={{ color: "#aaa", fontSize: "14px", marginBottom: "15px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            InputProps={{
              sx: {
                height: 40,
                padding: 0,
                "& input": { padding: "8px 10px" },
              },
            }}
            sx={{
              flexGrow: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fff",
                borderRadius: "6px",
              },
            }}
          />
          <Button variant="contained" sx={{ height: "40px", backgroundColor: "#ef6c57", "&:hover": { backgroundColor: "#e95a45" } }}>
            Send
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>



    )
}

export default Footer