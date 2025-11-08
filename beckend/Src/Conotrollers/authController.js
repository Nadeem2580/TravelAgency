import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../ModelSchema/UserSchema.js"
import nodemailer from "nodemailer";
import OTPModel from "../ModelSchema/otp.js";
import { SignupEmailTemplate } from "../../template/emailTemplate.js";
export const signUPConroller = async (req, res) => {
    try {
        const body = req.body
        const { fullName, email, password, confirmPassword } = body
        const getEmail = await UserModel.findOne({ email })
        if (getEmail) {
            return res.status(409).json({
                message: "User already exist",
                status: false,
                data: null
            })
        }

        if (password !== confirmPassword) {
            return res.status(409).json({
                message: "password doesn't match",
                status: false,
                data: null
            })
        }

        const hashPassowrd = await bcrypt.hash(password, 10)
        const obj = {
            ...body,
            password: hashPassowrd,

        }
        await UserModel.create(obj)
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.otpEmail,
                pass: process.env.appPassword
            }
        });
        const otp = Math.floor(100000 + Math.random() * 900000);

        const mailOptions = {
            from: process.env.email,
            to: obj.email,
            subject: "User signup",
            html: SignupEmailTemplate(obj, otp)
        }

        const userEmail = await transporter.sendMail(mailOptions)
        console.log(userEmail, "userEmail")
        await OTPModel.create({
            otp, email: obj.email
        })
        res.status(200).json({
            message: "Succefully signup",
            status: true,

        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false
        })
    }
}



export const longinContoller = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            res.status(401).json({
                message: "email or password is invalid",
                status: false
            })
        }
        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            res.status(401).json({
                message: "email or password is invalid",
                status: false
            })
        }
        const privateKey = process.env.PRIVATE_KEY;
        console.log(privateKey, "privateKey")
        const token = jwt.sign({ id: user._id }, privateKey)

        return res.status(200).json({
            message: "Login successful",
            status: true,
            data: user,
            token: token
        });


    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server Error",
            status: false,
        });
    }
}

export const verify_otp_controller = async (req, res) => {
    try {
        const { email, otp } = req.body
        const checkOtp = await OTPModel.findOne({ email, otp, isUsed: false })
        if (!checkOtp) {
            return res.status(400).json({
                message: "Invalid otp", status: false
            })
        }
        checkOtp.isUsed = true
        await checkOtp.save()

        const updateVerify = await UserModel.findOneAndUpdate({ email }, { isVerified: true })
        console.log(updateVerify)
        res.status(200).json({
            message: "Otp Verified", status: true,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message, status: false,
        })
    }
}