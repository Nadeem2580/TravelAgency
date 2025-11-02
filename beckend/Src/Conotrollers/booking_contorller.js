import BookingModel from "../ModelSchema/boooking.js"

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
        const bookingRes= await BookingModel.create(obj)
        return res.status(200).json({
            message: "Booking Request Succefull",
            status: true,
            res : bookingRes

        })

    } catch (error) {

    }
}