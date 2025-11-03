import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // all lowercase key
  api_key: process.env.API_KEY,       // all lowercase key
  api_secret: process.env.API_SECRET, // all lowercase key
});

const cloudinaryUplaoder = cloudinary.uploader;

export { cloudinaryConfig, cloudinaryUplaoder };