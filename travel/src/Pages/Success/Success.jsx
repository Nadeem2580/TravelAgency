import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
const navigate = useNavigate()
    return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffe8e3, #fffaf8)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            boxShadow: "0 6px 20px rgba(239,108,87,0.2)",
            borderRadius: "20px",
            textAlign: "center",
            width: { xs: "90%", sm: "400px" },
            p: 2,
          }}
        >
          <CardContent>
            <CheckCircleOutlineIcon
              sx={{ fontSize: 80, color: "#ef6c57", mb: 2 }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#ef6c57", mb: 1 }}
            >
              Booking Successful!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              Thank you for choosing us! 🎉<br />
              Our team will contact you soon for confirmation.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ef6c57",
                "&:hover": { backgroundColor: "#e75a46" },
                borderRadius: "30px",
                px: 4,
                py: 1,
                fontWeight: "bold",
              }}
              onClick={()=>navigate("/")}
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default BookingSuccess;
