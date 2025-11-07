import express from "express"
import { add_tour_contorller, all_users, booking_contorller, delete_tour, fetch_booking, get_all_tour, update_booking, update_tour, update_users } from "../Conotrollers/booking_contorller.js"

const bookingRoute = express.Router()

bookingRoute.post("/booking", booking_contorller)
bookingRoute.post("/add-tour", add_tour_contorller)
bookingRoute.get("/get-all-tour", get_all_tour)
bookingRoute.put("/update-tour/:id", update_tour)
bookingRoute.delete("/delete-tour/:id", delete_tour)
bookingRoute.get("/users", all_users)
bookingRoute.patch("/users-update/:id",update_users)
bookingRoute.get("/all-booking",fetch_booking)
bookingRoute.patch("/update-booking/:id",update_booking)


export default bookingRoute