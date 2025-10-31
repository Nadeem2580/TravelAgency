import mongoose, { Mongoose } from "mongoose";
import "dotenv/config";

export const dbConnect = () => {
  const URI = process.env.URI;
  mongoose
    .connect(URI)
    .then(() => console.log(`Mongo database connected`))
    .catch((error) => console.log(error.message));
};
