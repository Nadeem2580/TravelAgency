
import express from "express"
import { longinContoller, signUPConroller, verify_otp_controller } from "../Conotrollers/authController.js"

const authRouter = express.Router()

authRouter.post("/login" , longinContoller)
authRouter.post("/signup", signUPConroller)
authRouter.post('/otp-verification', verify_otp_controller)
export default authRouter 