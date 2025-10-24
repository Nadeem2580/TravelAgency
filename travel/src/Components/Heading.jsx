import { Button, Typography } from '@mui/material'
import React from 'react'

const Heading = () => {
    return (
        <>
            <Typography sx={{ fontSize: "30px", textAlign: "center" }}>Want To Travel With Us?</Typography>

            <Button variant="contained" sx={{ backgroundColor: "#ef6c57",margin:"50px auto ",display:"block", px: 4, py: 1.5, fontSize: "1rem",transition : "border-radius 0.3s ease-in" , borderRadius: "8px", ":hover": { borderRadius: "50px" } }}>Book Now </Button>
        </>
    )
}

export default Heading