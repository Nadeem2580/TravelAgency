import BookingModel from "../ModelSchema/boooking.js"
import TourModel from "../ModelSchema/Tour.js"

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