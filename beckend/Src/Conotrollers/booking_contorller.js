import { v2 as cloudinary } from "cloudinary";
import TourModel from "../ModelSchema/Tour.js"
import BookingModel from "../ModelSchema/boooking.js"
import UserModel from "../ModelSchema/UserSchema.js";

export const booking_contorller = async (req, res) => {
    try {
        console.log(req.body)
        const { fullName
            , email
            , whatsAppNo
            , destination
            , travelDate
            , noOfPerson } = req.body

        if (!fullName || !email || !whatsAppNo || !destination || !travelDate || !noOfPerson) {
            return res.status(400).json({
                message: "all fields are mendatory",
                status: false
            })
        }


        const obj = {
            fullName, email, whatsAppNo, destination, travelDate, noOfPerson
        }
        const bookingRes = await BookingModel.create(obj)
        return res.status(200).json({
            message: "Booking Request Succefull",
            status: true,
            res: bookingRes

        })

    } catch (error) {
        res.status(200).json({
            message: error.message,
            status: false,

        })
    }
}

export const add_tour_contorller = async (req, res) => {
    try {
        const body = req.body
        const resTour = await TourModel.create(body)

        return res.status(200).json({
            message: "Tour added Succefully",
            status: true,
            res: resTour

        })

    } catch (error) {
        res.status(200).json({
            message: error.message,
            status: false,

        })
    }
}

export const get_all_tour = async (req, res) => {
    try {
        const data = await TourModel.find({})

        return res.status(200).json({
            message: "All Tour Data Fetched Succefully",
            status: true,
            res: data

        })

    } catch (error) {
        res.status(200).json({
            message: error.message,
            status: false,

        })
    }
}


export const update_tour = async (req, res) => {
    try {
        const { id } = req.params; // URL se tour id aayegi
        const body = req.body;     // title, description, rate, etc.
        console.log(body)
        let updatedData = { ...body };


        // ✅ MongoDB document update
        const updatedTour = await TourModel.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedTour) {
            return res.status(404).json({
                message: "Tour not found",
                status: false,
            });
        }

        return res.status(200).json({
            message: "Tour updated successfully",
            status: true,
            data: updatedTour,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
};


export const delete_tour = async (req, res) => {
    try {
        const { id } = req.params; // URL se tour id aayegi
        const body = req.body;     // title, description, rate, etc.
        console.log(body)

        const deleteTour = await TourModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Tour updated successfully",
            status: true,
            data: deleteTour,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
};

export const all_users = async (req, res) => {
    try {


        const users = await UserModel.find({})

        res.status(200).json({
            message: "All users fetched",
            status: true,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
}

export const update_users = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params

        const updateUser = await UserModel.findByIdAndUpdate(id, body, { new: true })
        console.log(updateUser, "updateUser")

        res.status(200).json({
            message: "User Updated successfully",
            status: true,
            data: updateUser
        });


    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
}

export const fetch_booking = async (req, res) => {
    try {
        const fetchAllBookings = await BookingModel.find({})
        console.log(`fetchAllBookings`, fetchAllBookings)

        res.status(200).json({
            message: "Fetched all booking",
            status: true,
            data: fetchAllBookings
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
}

export const update_booking = async (req, res) => {
    try {
        const updateBody = req.body
        const { id } = req.params
        console.log(updateBody, "updateBody")
        console.log(id, "id")
        const data = await BookingModel.findByIdAndUpdate(id, updateBody, { key: true })
        console.log(data, "data")
        res.status(200).json({
            message: "Updated successfully",
            status: true,
            data
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false,
        });
    }
}