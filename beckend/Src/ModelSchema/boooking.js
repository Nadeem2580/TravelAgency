import mongoose, { mongo } from "mongoose"


const schema = new mongoose.Schema({

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    whatsAppNo: { type: String, required: true },
    destination: { type: String, required: true },
    travelDate: { type: String, required: true },
    confirmation: { type: String, default: "pending" },
    noOfPerson: { type: String, required: true }

})



const BookingModel = mongoose.model("booking", schema)

export default BookingModel