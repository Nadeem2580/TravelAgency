
import express from "express"
import { longinContoller, signUPConroller } from "../Conotrollers/authController.js"

const authRouter = express.Router()

authRouter.post("/login" , longinContoller)
authRouter.post("/signup", signUPConroller)

export default authRouter 