import React, { useState, useEffect } from 'react';
import {
  Box, Button, Card, CardContent, CardHeader, Chip, CircularProgress,
  Grid, Typography, TextField, Container, MenuItem, Select, FormControl, InputLabel,
  CardActions
} from '@mui/material';
import toaster, { BASE_URL } from '../utils/utils';
import axios from "axios";
import AllRoutes from '../All Api\'s';

export default function AdminBookingList() {
  const [bookings, setBookings] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [search, setSearch] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);

  const fetch_booking = async () => {
    try {
      const resBooking = await axios.get(`${BASE_URL}${AllRoutes.fetch_booking}`);
      const bookings = resBooking.data.data;
      setBookings(bookings);
    } catch (error) {
      toaster({
        message: error.message || "Something went wrong",
        status: false
      });
    }
  };

  useEffect(() => {
    fetch_booking();
  }, [isRefresh]);

  const handleUpdateStatus = async (id, newConfirmation) => {
    setLoadingId(id);
    try {
    const bookingUpdate =  await axios.patch(`${BASE_URL}${AllRoutes.update_booking}/${id}`, {
      
        confirmation: newConfirmation,
        // status: newConfirmation === "confirmed" ? true : false
      });
console.log(bookingUpdate , "bookingUpdate")
      setBookings(prev =>
        prev.map(b =>
          b._id === id ? { ...b, confirmation: newConfirmation, status: newConfirmation === "confirmed" } : b
        )
      );
      toaster({ message: `Booking ${newConfirmation}`, status: true });
    } catch (error) {
      toaster({ message: error.message || "Update failed", status: false });
    } finally {
      setLoadingId(null);
    }
  };

  const filteredBookings = bookings.filter((b) =>
    b.fullName.toLowerCase().includes(search.toLowerCase()) ||
    b.email.toLowerCase().includes(search.toLowerCase()) ||
    b.destination.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (confirmation) => {
    switch (confirmation) {
      case 'confirmed':
        return 'success';
      case 'rejected':
        return 'error';
      default:
        return 'warning';
    }
  };

  return (
    <Container maxWidth="lg">
  <Box
    p={4}
    bgcolor="#fafafa"
    minHeight="100vh"
    sx={{ fontFamily: "'Roboto', sans-serif" }}
  >
    <Typography
      variant="h3"
      mb={4}
      textAlign="center"
      fontWeight="700"
      color="#ef6c57"
      letterSpacing={1}
      sx={{ textTransform: 'uppercase' }}
    >
      Admin Booking Orders
    </Typography>

    <Box
      mb={4}
      maxWidth={480}
      mx="auto"
      sx={{
        boxShadow:
          "0 4px 10px rgb(0 0 0 / 0.1), 0 0 10px rgb(0 158 253 / 0.15)",
        borderRadius: 3,
        bgcolor: "white",
        p: 2,
      }}
    >
      <TextField
        fullWidth
        label="Search by name, email or destination"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{ sx: { fontSize: '1rem' } }}
      />
    </Box>

    <Grid container spacing={4}>
      {filteredBookings.length === 0 ? (
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            color="textSecondary"
            fontStyle="italic"
            variant="h6"
            mt={6}
          >
            No bookings found.
          </Typography>
        </Grid>
      ) : (
        filteredBookings.map((booking) => (
          <Grid item xs={12} sm={6} md={4} key={booking._id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow:
                  "0 8px 20px rgb(0 0 0 / 0.12), 0 0 8px rgb(0 123 255 / 0.15)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-8px)" },
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              elevation={10}
            >
              <CardHeader
                title={
                  <Typography variant="h6" fontWeight="700" gutterBottom noWrap>
                    {booking.fullName}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="textSecondary" noWrap>
                    Travel to <strong style={{color:"#ef6c57"}}>{booking.destination}</strong> on{" "}
                    {new Date(booking.travelDate).toLocaleDateString()}
                  </Typography>
                }
                action={
                  <Chip
                    label={booking.confirmation || "Pending"}
                    color={statusColor(booking.confirmation)}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      fontSize: "0.60rem",
                      borderRadius: 2,
                      boxShadow: "0 1px 4px rgb(0 0 0 / 0.15)",
                      backgroundColor:"#ef6c57",
                    }}
                  />
                }
                sx={{ pb: 0 }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Booking ID:</strong> {booking._id}
                </Typography>
                <Typography mb={0.75} variant="body1">
                  <strong>Email:</strong> {booking.email}
                </Typography>
                <Typography mb={0.75} variant="body1">
                  <strong>WhatsApp:</strong> {booking.whatsAppNo}
                </Typography>
                <Typography mb={2} variant="body1">
                  <strong>No. of Persons:</strong> {booking.noOfPerson}
                </Typography>

                <FormControl fullWidth size="small" variant="outlined" sx={{ mt: 1 }}>
                  <InputLabel>Change Status</InputLabel>
                  <Select
                    label="Change Status"
                    value={booking.confirmation || "pending"}
                    onChange={(e) => handleUpdateStatus(booking._id, e.target.value)}
                    disabled={loadingId === booking._id}
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                  </Select>
                </FormControl>
                {loadingId === booking._id && (
                  <Box mt={2} textAlign="center">
                    <CircularProgress size={24} />
                  </Box>
                )}
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => navigator.clipboard.writeText(booking._id)}
                  sx={{
                    textTransform: "none",
                    fontWeight: "600",
                    ":hover": { bgcolor: "primary.light", color: "white" },
                  }}
                >
                  Copy ID
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  </Box>
</Container>

  );
}
