import { cloudinaryUplaoder } from "../Configs/cloudinary.js";
import upload from "../Middlewares/cloudinary.js"
import cloudinary from "cloudinary"
import streamifier from "streamifier";


export const uploadImageContoller = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Create a promise to upload the file to Cloudinary
    const uploadToCloudinary = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream =cloudinaryUplaoder.upload_stream(
          { folder: 'your_folder_name' }, // optional folder
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        // Create a stream from the buffer and pipe it to Cloudinary
        streamifier.createReadStream(fileBuffer).pipe(uploadStream);
      });
    };

    // Upload the file
    const result = await uploadToCloudinary(req.file.buffer);

    res.status(200).json({
      message: 'File uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
};