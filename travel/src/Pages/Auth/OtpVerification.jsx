import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toaster, { BASE_URL } from '../utils/utils';
import AllRoutes from '../All Api\'s';

const OTPpage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation()
    console.log("location", location)
const navigate= useNavigate()
   const verifyOTP = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
        if (otp.length < 6) {
            toaster({ type: "error", message: "Invalid OTP" });
            setError("Invalid OTP");
            return;
        }
        setError("");
       const locationEmail = location?.state?.email;
const email = locationEmail || localStorage.getItem("otpEmail");
        const res = await axios.post(`${BASE_URL}${AllRoutes.otp}`, { otp, email });

        if (res.data.status) {
            setSuccess(true);
            toaster({ type: "success", message: "OTP verified successfully" });
            navigate("/"); // navigate after success
        } else {
            toaster({ type: "error", message: res.data.message });
        }
    } catch (error) {
        console.log(error.message);
        toaster({ type: "error", message: error.message });
    }
};


    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, p: 4, border: '1px solid #ccc', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    OTP Verification
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Enter the 6-digit OTP sent to your email or phone.
                </Typography>

                <form onSubmit={verifyOTP}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                inputProps={{ maxLength: 6, inputMode: 'numeric' }}
                                error={!!error}
                            />
                        </Grid>

                        {error && (
                            <Grid size={{ xs: 12 }}>
                                <Alert severity="error">{error}</Alert>
                            </Grid>
                        )}
                        {success && (
                            <Grid size={{ xs: 12 }}>
                                <Alert severity="success">OTP Verified Successfully!</Alert>
                            </Grid>
                        )}

                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={otp.length !== 6}
                            >
                                Verify OTP
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default OTPpage;