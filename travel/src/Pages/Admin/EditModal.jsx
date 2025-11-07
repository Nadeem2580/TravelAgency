import React, { useEffect, useState } from "react";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import toaster, { BASE_URL } from "../utils/utils";
import AllRoutes from "../All Api's";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

const EditingModal = ({ open, close, dataEdit, isRefresh, setIsRefresh }) => {
    const { register, handleSubmit, reset } = useForm();
    const [image, setImage] = useState(null);
    const [updateImage, setUpdateImage] = useState(null)
    useEffect(() => {
        if (dataEdit) {
            reset({
                title: dataEdit.title || "",
                detail: dataEdit.detail || "",
                rate: dataEdit.rate || "",
                airline: dataEdit.airline || "",
                duration: dataEdit.duration || "",
            });
            setImage(dataEdit.image || null);
        }
    }, [dataEdit, reset]);




    const handleImageChange = async (e) => {
        try {
            const file = e.target.files[0];
            console.log(file, "file");
            let imageUrl;
            if (file) {
                const formData = new FormData();
                formData.append("Image", file);

                const imageApi = `${BASE_URL}${AllRoutes.image}`;
                const imageResponse = await axios.post(imageApi, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                // ✅ Set uploaded image URL to state
                imageUrl = imageResponse.data.url;
                console.log("Uploaded Image URL:", imageUrl);
                setUpdateImage(imageUrl)
            }
            toaster({
                message: "Image uploaded successfully",
                type: "success"
            })
            setIsRefresh(!isRefresh)
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };


    const onSubmit = async (data) => {
        try {
            const obj = { ...data, image: updateImage }
            const editRes = await axios.put(
                `${BASE_URL}${AllRoutes.update_Tour}/${dataEdit._id}`, updateImage ? obj : data);
            toaster({
                message: "Tour updated successfully",
                type: "success"
            })

            close();
            reset();
           
            setIsRefresh(!isRefresh)
        } catch (error) {
            console.error("Error updating tour:", error);
            toaster({
                message: error.message || "Something went wrong",
                type: "error"
            })

        }
    };


    return (
        <Modal open={open} onClose={close}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{
                ...style,
                maxHeight: "90vh",
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                },
            }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Edit Tour
                </Typography>

                <TextField fullWidth label="Title" {...register("title")} sx={{ mb: 2 }} />
                <TextField fullWidth label="Detail" {...register("detail")} multiline rows={3} sx={{ mb: 2 }} />
                <TextField fullWidth label="Rate" {...register("rate")} sx={{ mb: 2 }} />
                <TextField fullWidth label="Airline" {...register("airline")} sx={{ mb: 2 }} />
                <TextField fullWidth label="Duration" {...register("duration")} sx={{ mb: 2 }} />

                <Button variant="outlined" component="label" sx={{ mb: 2 }}>
                    Upload Image
                    <input type="file" hidden onChange={handleImageChange} />
                </Button>

                {image && typeof image === "string" ? (
                    <img src={updateImage} alt="Preview" style={{ width: "100%", borderRadius: 8, marginBottom: 10 }} />
                ) : image ? (
                    <img src={dataEdit.image} alt="Preview" style={{ width: "100%", borderRadius: 8, marginBottom: 10 }} />
                ) : null}

                <Button type="submit" variant="contained" fullWidth>
                    Update
                </Button>
            </Box>
        </Modal>
    );
};

export default EditingModal;
