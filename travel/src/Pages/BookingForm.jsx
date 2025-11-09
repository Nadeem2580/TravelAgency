import { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import travelDestinations from "../assets/object";
import toaster, { BASE_URL } from "./utils/utils";
import AllRoutes from "./All Api's";
import axios from "axios";
import { CircularProgress } from "@mui/material"
import { useNavigate } from "react-router-dom";
const BookingForm = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const bookiingRes = await axios.post(`${BASE_URL}${AllRoutes.booking}`, data)

      toaster({
        message: "Booking Successfully",
        type: "success"
      })
      reset({
        fullName: "",
        email: "",
        whatsAppNo: "",
        destination: "",
        travelDate: "",
        noOfPerson: ""
      })
      setSelectedDestination(null)
      navigate("/")

    } catch (error) {
      toaster({
        message: error.message || "Something went wrong",
        type: "error"
      })
    }
    finally {
      setIsLoading(false)
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%", md: "50%" },
        margin: "auto",
        mt: 4,
        p: 3,
        backgroundColor: "#fff",
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h5" mb={2} fontWeight="bold" color="#ef6c57">
        Travel Booking Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full Name is required" }}
          render={({ field }) => (
            <TextField {...field} label="Full Name" fullWidth margin="normal"
              error={!!errors.fullName}
              helperText={errors.fullName?.message} />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          }}
          render={({ field }) => (
            <TextField {...field} label="Email" fullWidth margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message} />
          )}
        />

        {/* WhatsApp Number */}
        <Controller
          name="whatsAppNo"
          control={control}
          rules={{ required: "whatsAppNo Number is required" }}
          render={({ field }) => (
            <TextField {...field} label="WhatsApp Number" fullWidth margin="normal" type="number"
              error={!!errors.whatsAppNo}
              helperText={errors.whatsAppNo?.message} />
          )}
        />

        {/* Select Destination */}
        <Controller
          name="destination"
          control={control}
          rules={{ required: "Please select a destination" }}
          render={({ field }) => (
            <TextField {...field} select label="Select Destination" fullWidth margin="normal"
              onChange={(e) => {
                field.onChange(e);
                const selected = travelDestinations.find(d => d.name === e.target.value);
                setSelectedDestination(selected);
              }}
              error={!!errors.destination}
              helperText={errors.destination?.message}>
              {travelDestinations.map((dest) => (
                <MenuItem key={dest.name} value={dest.name}>
                  {dest.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        {/* Travel Dates */}
        <Controller
          name="travelDate"
          control={control}
          rules={{ required: "Travel Date is required" }}
          render={({ field }) => (
            <TextField {...field} type="date" InputLabelProps={{ shrink: true }}
              label="Preferred Travel Date" fullWidth margin="normal"
              error={!!errors.travelDate}
              helperText={errors.travelDate?.message} />
          )}
        />

        {/* Number of Persons */}
        <Controller
          name="noOfPerson"
          control={control}
          rules={{ required: "Enter number of noOfPerson" }}
          render={({ field }) => (
            <TextField {...field} label="No.of Person" type="number" fullWidth margin="normal"
              error={!!errors.noOfPerson}
              helperText={errors.noOfPerson?.message} />
          )}
        />

        {/* Auto Populate UI Details ( Optional placement ) */}
        {selectedDestination && (
          <Box mt={2} p={2} sx={{ backgroundColor: "#fafafa", borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Travel Package Info:
            </Typography>
            <Typography variant="body2">Travel Rate: {selectedDestination.travelRates}</Typography>
            <Typography variant="body2">Duration: {selectedDestination.durationDays}</Typography>
            <Typography variant="body2">Airline: {selectedDestination.airline}</Typography>
            <Typography variant="body2">Total: {selectedDestination.totalAmount}</Typography>
          </Box>
        )}

        <Button type="submit" fullWidth variant="contained"
          sx={{ display: "flex", gap: "10px", mt: 3, py: 1.2, backgroundColor: "#ef6c57", "&:hover": { backgroundColor: "#d45243" } }}>
          Submit Booking Request {isLoading ? <CircularProgress size={30} thickness={5} color="inherit" /> : null}
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
