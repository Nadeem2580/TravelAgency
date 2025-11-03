import mongoose, { mongo } from "mongoose"


const schema = new mongoose.Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    rate: { type: String, required: true },
    airline: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now() },

})

const TourModel = mongoose.model("Tour", schema)

export default TourModel