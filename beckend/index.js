import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./Src/Routes/authRoute.js";
import { dbConnect } from "./Src/Configs/db.js";
import bookingRoute from "./Src/Routes/bookingRoute.js";
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cors());


// ----- Auth Routes-------
app.use("/api/auth" , authRouter)
app.use("/api" , bookingRoute)




dbConnect();


app.use("/" , (req, res)=> res.send("Server Up"))

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));