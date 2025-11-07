import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import travelDestinations from "../assets/object";

const DestinationDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const place = travelDestinations.find(dest => dest.name === name);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newEntry = {
        id: Date.now(),
        text: newComment,
        date: new Date().toLocaleString(),
      };
      setComments([newEntry, ...comments]);
      setNewComment("");
    }
  };

  if (!place) return <Typography>Destination not found.</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      {/* Image Section */}
      <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3, mb: 4 }}>
        <Box component="img" src={place.image} alt={place.name} sx={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </Box>

      {/* Destination Info */}
      <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">{place.name}</Typography>
      <Typography sx={{ fontSize: "17px", lineHeight: 1.7, mb: 3 }}>{place.description}</Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "10px", flexWrap: "wrap", mb: 2 }}>
        <Typography ><b style={{ color: "#ef6c57" }}>Travel Rate: </b> {place.travelRates}</Typography>
        <Typography><b style={{ color: "#ef6c57" }}>Duration:</b> {place.durationDays}</Typography>
        <Typography><b style={{ color: "#ef6c57" }}>Airline:</b> {place.airline}</Typography>
        <Typography><b style={{ color: "#ef6c57" }}>Total Amount:</b> {place.totalAmount}</Typography>
      </Box>

      <Button onClick={() => navigate("/booking")} variant="contained" sx={{ backgroundColor: "#ef6c57", margin: "10px auto ", display: "block", px: 4, py: 1, fontSize: "1rem", transition: "border-radius 0.3s ease-in", ":hover": { borderRadius: "50px" } }}>Booking Now </Button>


      <Divider sx={{ my: 3 }} />

      {/* Comment Section */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>Comments</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Write a comment..."
          multiline
          minRows={2}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddComment}>
          Add Comment
        </Button>
      </Box>

      {/* Display Comments */}
      <Box sx={{ mt: 4 }}>
        {comments.length === 0 ? (
          <Typography sx={{ color: "gray" }}>No comments yet. Be the first to comment!</Typography>
        ) : (
          comments.map((cmt) => (
            <Box key={cmt.id} sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2, mb: 2, backgroundColor: "#fafafa" }}>
              <Typography sx={{ fontWeight: "bold", color: "#1976d2" }}>Traveler</Typography>
              <Typography>{cmt.text}</Typography>
              <Typography sx={{ fontSize: "12px", color: "gray", mt: 1 }}>{cmt.date}</Typography>
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default DestinationDetail;
