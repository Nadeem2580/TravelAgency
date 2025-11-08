import mongoose from "mongoose";


const otpSchema = new mongoose.Schema({
    otp: { type: String },
    email: { type: String },
    isUsed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
})


const OTPModel = mongoose.model("otp",otpSchema)


export default OTPModel