import express from "express"
import authMiddleware from "../Middlewares/authmiddleware.js"
import upload from "../Middlewares/cloudinary.js"
import { uploadImageContoller } from "../Conotrollers/imageController.js";


const uploadImage = express.Router();

uploadImage.post("/upload-image", upload.single("Image"),uploadImageContoller);


export default uploadImage;






//  let imageUrl;
//       if (image) {
//         const imageApi = `${BASE_URL}/api/upload-image`;
//         const formData = new FormData();

//         formData.append("Image", image);
//         const imageResponse = await axios.post(imageApi, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${Cookies.get("token")}`,
//           },
//         });
//         imageUrl = imageResponse.data.url;
//       }

//       const sendObj = {
//         ...obj,
//         imageUrl: imageUrl || null,
//       };