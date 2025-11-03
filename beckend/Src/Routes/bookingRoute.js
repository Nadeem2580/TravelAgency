import express from "express"
import { add_tour_contorller, booking_contorller } from "../Conotrollers/booking_contorller.js"

const bookingRoute = express.Router()

bookingRoute.post("/booking", booking_contorller)
bookingRoute.post("/add-tour", add_tour_contorller)


export default bookingRoute