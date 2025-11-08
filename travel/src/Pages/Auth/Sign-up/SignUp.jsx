import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toaster, { BASE_URL } from "../../utils/utils";
import AllRoutes from "../../All Api's";
import homeImage from "../../../assets/homeImage.png"

const SignUp = () => {
  const navigate = useNavigate()
  const schema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email format").required("email is required"),
    password: yup.string().required("password is required"),
    confirmPassword: yup.string().required("confirmPassword is required"),
    gender: yup.string().required("gender is required"),
  });

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // ----------- On Submit ---------------
  const onSubmit = async (obj) => {

    try {
      if (obj.password !== obj.confirmPassword) {
        return toaster({
          message: "Credential is not valid",
          type: "error"
        })
      }
      const signup = await axios.post(`${BASE_URL}${AllRoutes.signup}`, obj)
      reset()

      toaster({
        message: "User created successfully",
        type: "success"
      })

      navigate("/otp-verify", {
        state: {
          email: obj.email,
          page: "signup"
        }
      })

    } catch (error) {
      toaster({
        message: error.message,
        type: "error"
      })
    }
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0 }}> <Box component={"img"} src={homeImage} alt="Home"
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
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem", },
              fontWeight: "bold", color: "#ef6c57",
            }}
            textAlign={"center"}>
            Register your account
          </Typography>

          {/* Full Name Field */}
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Enter full name"
                autoComplete="off"
                {...field}
                error={error}
                helperText={error ? error.message : ""}
                sx={{
                  input: { color: "#ef6c57" }, label: { color: "#ef6c57" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ef6c57",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ef6c57",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ef6c57",
                      label: { color: "#ef6c57" }
                    },
                  },
                }}
              />
            )}
          />

          {/* Full email Field */}

          <Controller
            name="email"
            type="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Enter email"
                {...field}
                autoComplete="off"
                error={error}
                helperText={error ? error.message : ""}
                sx={{
                  input: { color: "#ef6c57" },
                  label: { color: "#ef6c57" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ef6c57",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ef6c57",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ef6c57",
                    },
                  },
                }}
              />
            )}
          />
          {/* Password field */}
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Enter Password"
                {...field}
                autoComplete="off"
                error={error}
                helperText={error ? error.message : ""}
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                sx={{
                  input: { color: "#ef6c57" },
                  label: { color: "#ef6c57" },
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
                        sx={{ color: "white" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {/*Confirm Password field */}

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Enter confirm Password"
                {...field}
                autoComplete="off"
                error={error}
                helperText={error ? error.message : ""}
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                sx={{
                  input: { color: "#ef6c57" },
                  label: { color: "#ef6c57" },
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
          {/*Gender Radio button */}

          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={error}

                helperText={error ? error.message : ""} component="fieldset" sx={{ color: "#ef6c57" }}>
                <FormLabel
                  sx={{
                    color: "#ef6c57",
                    "&.Mui-focused": {
                      color: "#ef6c57",
                    },
                  }}
                >
                  Gender
                </FormLabel>
                <RadioGroup row {...field} name="gender">
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          color: "#ef6c57", // default color
                          "&.Mui-checked": {
                            color: "#ef6c57", // checked color
                          },
                          "&.Mui-focusVisible": {
                            color: "#ef6c57", // when focused via keyboard
                          },
                        }}
                      />
                    }
                    label="Male"
                  />


                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        sx={{
                          color: "#ef6c57", // default color
                          "&.Mui-checked": {
                            color: "#ef6c57", // checked color
                          },
                          "&.Mui-focusVisible": {
                            color: "#ef6c57", // when focused via keyboard
                          },
                        }}
                      />
                    }
                    label="female"
                  />


                </RadioGroup>
              </FormControl>
            )}
          />

          {/* Navigation */}
          <Typography
            sx={{ marginLeft: "auto", marginRight: "20px" }}
            variant="body2"
          >
            don't have an account?{" "}
            <Link
              to={"/login"}
              style={{ color: "#00c6ff", textDecoration: "underline" }}
            >
              Log in
            </Link>
          </Typography>

          {/* Sign up Button */}
          <Button
            type="submit"
            sx={{
              background: "linear-gradient(145deg, #3f0d12, #5e3939ff, #8d1d27ff)",
              border: "1px solid #fff",
              padding: "15px 0",
              color: "white",
              "&:hover": {
                background: "linear-gradient(145deg, #3f0d12, #000000)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
