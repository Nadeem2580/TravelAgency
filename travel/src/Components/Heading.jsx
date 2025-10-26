import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({ heading, text }) => {
    return (
        <><Box sx={{ textAlign: "center" }} >

            <Typography fontWeight={"bold"} fontSize={30}>{heading}</Typography>
            <Typography sx={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}>{text}</Typography>
        </Box>

        </>
    )
}

export default Heading