import express from "express"
import { booking_contorller } from "../Conotrollers/booking_contorller.js"

const bookingRoute = express.Router()

bookingRoute.post("/booking", booking_contorller)


export default bookingRoute