import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../ModelSchema/UserSchema.js"
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