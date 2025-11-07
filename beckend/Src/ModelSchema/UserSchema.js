import mongoose, { mongo } from "mongoose"


const schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender:{type:String , required:true},
    status:{type:Boolean , default:true},
    userType: { enum: ["user", "admin"] },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
})

 const UserModel = mongoose.model("Users", schema)

 export default UserModel