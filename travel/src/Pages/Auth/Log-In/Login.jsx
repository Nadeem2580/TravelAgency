import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import axios from "axios"
import backimage from "../../../assets/loginImage.webp"
import toaster, { BASE_URL } from "../../utils/utils";
import AllRoutes from "../../All Api's";
import Cookies from "js-cookie"
import homeImage from "../../../assets/homeImage.png"
import { CircularProgress } from "@mui/material"
const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const schema = yup.object({
    email: yup.string().email("Invalid email format").required("email is required"),
    password: yup.string().required("password is required"),
  });

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  // ------------- on submit -------------
  const onSubmit = async (obj) => {
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}${AllRoutes.login}`, obj)
      console.log(response, "response")

      if (!response.data.status) {
        throw toaster({
          message: "invalid email or password",
          type: "error"
        })
      }

      if (!response.data.data.isVerified) {
        navigate("/otp-verify", {
          state: {
            email: obj.email,
            page: "login"
          }
        })
        setIsLoading(false) // ✅ Stop loader before navigating
        return
      }

      const token = {
        token: response.data.token,
        type: response.data.data.type
      }
      Cookies.set("token", JSON.stringify(token));


      toaster({
        message: "Login Successfully",
        type: "success"
      })
      if (response.data.data.type == "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }



    } catch (error) {
      toaster({
        type: "error",
        message: error.message
      })
    } finally {
      setIsLoading(false) 
  }
}


const [isLogin, setIsLogin] = useState(true);
const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleToggle = () => {
  setIsLogin(!isLogin);
};

return (
  <Box sx={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f5f5f5",
    p: { xs: 2, sm: 3, md: 4 }
  }}>
    <Box sx={{ position: "absolute", top: "20px", left: "20px" }}> <Box component={"img"} src={homeImage} alt="Home"
      onClick={() => navigate("/")} sx={{ width: "50px", cursor: "pointer" }} /></Box>
    <Box
      sx={{
        boxShadow: "0 0 3px #ef6c57",
        borderRadius: "10px",
        backgroundColor: "#fff",
        overflow: "visible",
        flexShrink: 0,
        width: {
          xs: "90%",  // almost full width on extra small screens
          sm: "70%",  // smaller on small devices
          md: "40%",  // medium devices
          lg: "30%",  // large devices and up
        },
        maxWidth: "400px",  // limit max width for very large screens
        p: { xs: 2, sm: 3 },  // padding responsive as well
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: "10px", p: 2 }}
      >
        <Typography
          textAlign="center"
          sx={{ fontWeight: 600, color: "#ef6c57", fontSize: { xs: "1rem", md: "1.8rem" } }}
        >
          Login to dashboard
        </Typography>

        {/* Email Field */}
        <Controller

          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Enter email"
              {...field}
              error={!!error}
              autoComplete="off"
              helperText={error ? error.message : ""}
              sx={{
                mt: 2,
                input: { color: "#ef6c57" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ef6c57" },
                  "&:hover fieldset": { borderColor: "#ef6c57" },
                  "&.Mui-focused fieldset": { borderColor: "#ef6c57" },
                },
              }}
            />
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              fullWidth
              label="Enter Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              {...field}
              autoComplete="off"
              error={!!error}
              helperText={error ? error.message : ""}
              sx={{
                input: { color: "#ef6c57" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ef6c57" },
                  "&:hover fieldset": { borderColor: "#ef6c57" },
                  "&.Mui-focused fieldset": { borderColor: "#ef6c57" },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "#00c6ff" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* Navigation */}
        <Typography sx={{ ml: "auto", mr: "20px" }} variant="body2">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#00c6ff", textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </Typography>

        {/* Submit Button */}
        <Button
          type="submit"
          sx={{
            display: "flex", gap: "10px",
            background: "linear-gradient(145deg, #3f0d12, #5e3939ff, #8d1d27ff)",
            border: "1px solid #fff",
            py: "15px",
            color: "white",
            "&:hover": {
              background: "linear-gradient(145deg, #3f0d12, #000000)",
            },
          }}
        >
          Submit {isLoading ? <CircularProgress size={30} thickness={5} color="inherit" /> : null}
        </Button>
      </Box>
    </Box>
  </Box>







);
};

export default LoginPage;
