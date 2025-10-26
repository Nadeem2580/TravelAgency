import React from 'react'
import { Button } from '@mui/material'

const Buttons = () => {
    return (
  <Button variant="contained" sx={{ backgroundColor: "#ef6c57", margin: "50px auto ", display: "block", px: 4, py: 1.5, fontSize: "1rem", transition: "border-radius 0.3s ease-in", ":hover": { borderRadius: "50px" } }}>Book Now </Button>

    )
}

export default Buttons