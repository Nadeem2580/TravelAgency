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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toaster, { BASE_URL } from "../utils/utils";
import AllRoutes from "../All Api's";
import axios from "axios";

const CreateTour = () => {

const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState(null);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const schema = yup.object({
        title: yup.string().required("title  is required"),
        detail: yup.string().required("detail  is required"),
        rate: yup.string().required("rate  is required"),
        airline: yup.string().required("airline  is required"),
        duration: yup.string().required("airline  is required"),

    });

    const { control, reset, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            detail: "",
            rate: "",
            airline: "",
            duration: ""
        },

        resolver: yupResolver(schema),
    });
    const handleChange = (e) => {
        setImage(e.target.files[0]);
    };

    const tourSubmit = async (data) => {
        try {
            let imageUrl;
            if (image) {
                const imageApi = `${BASE_URL}${AllRoutes.image}`;
                const formData = new FormData();
                formData.append("Image", image);

                const imageResponse = await axios.post(imageApi, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                imageUrl = imageResponse.data.url;

            }

            console.log(imageUrl, "imageUrl")
            const tourAdd = {
                title: data.title,
                detail: data.detail,
                rate: data.rate,
                duration: data.duration,
                airline: data.airline,
                image: imageUrl,
            };


            const tourRes = await axios.post(`${BASE_URL}${AllRoutes.addTour}`, tourAdd)

            reset()
            setImage(null)
            toaster({
                type: "success",
                message: "Tour Added Successfuly"
            })
            navigate("/admin")
        } catch (error) {
            toaster({
                type: "error",
                message: error.message
            })
        }
    }


    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 2, sm: 3, md: 4 }, // ✅ padding keeps spacing without scroll
                backgroundColor: "#f5f5f5",
            }}
        >
            <Box
                sx={{
                    boxShadow: "0 0 3px #ef6c57",
                    borderRadius: "10px",
                    width: { xs: "100%", sm: "60%", md: "60%", lg: "40%" },
                    p: { xs: "20px", md: "40px", xl: "60px" },
                    backgroundColor: "#fff",
                    overflow: "visible", // ✅ ensures labels don’t get cut
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit(tourSubmit)}
                    sx={{ display: "flex", flexDirection: "column", gap: "10px", p: 2 }}
                >
                    <Typography
                        variant="h5"
                        textAlign="center"
                        sx={{ fontWeight: 600, color: "#ef6c57" }}

                    >
                        Add New Tour Package
                    </Typography>

                    {/* title Field */}
                    <Controller
                        name="title"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                label="Tour Title"
                                {...field}
                                error={!!error}
                                autoComplete="off"
                                helperText={error ? error.message : ""}
                            />
                        )}
                    />

                    {/* Detail Field */}
                    <Controller
                        name="detail"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Destination Detail"
                                error={!!error}
                                autoComplete="off"
                                helperText={error ? error.message : ""}
                                multiline
                                rows={6}
                                fullWidth
                            />
                        )}
                    />


                    {/* Travel Rate */}
                    <Controller
                        name="rate"
                        control={control}
                        placeholder="PKR 10,000 person "
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                label="Travel Rate"
                                {...field}
                                error={!!error}
                                autoComplete="off"
                                helperText={error ? error.message : ""}
                            />
                        )}
                    />

                    {/* Traveling Duration */}
                    <Controller
                        name="duration"
                        placeholder="3 Days / 2 Nights"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                placeholder="6 Days / 5 Nights"
                                label="Traveling duration"
                                {...field}
                                error={!!error}
                                autoComplete="off"
                                helperText={error ? error.message : ""}
                            />
                        )}
                    />

                    {/* Airline Detial */}
                    <Controller
                        name="airline"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                label="Airline Detail"
                                {...field}
                                error={!!error}
                                autoComplete="off"
                                helperText={error ? error.message : ""}
                            />
                        )}
                    />

                    {/* Image */}

                    {/* Image Upload Field */}
                    <Button variant="outlined" component="label" sx={{ borderColor: "#ef6c57", color: "#ef6c57" }}>
                        Upload Logo
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            name="logo"
                            onChange={handleChange}
                        />
                    </Button>

                    {image && (
                        <Typography variant="body2" color="text.secondary">
                            Selected file: {image.name}
                        </Typography>
                    )}



                    {/* Submit Button */}
                    <Button
                        type="submit"
                        sx={{
                            background: "linear-gradient(145deg, #3f0d12, #5e3939ff, #8d1d27ff)",
                            border: "1px solid #fff",
                            py: "15px",
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


export default CreateTour