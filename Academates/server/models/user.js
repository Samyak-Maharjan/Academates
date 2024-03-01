import mongoose from "mongoose";
import Teacher from "./teacher.js";
import Student from "./student.js";

const UserSchema= mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    userType: [{Teacher,Student}]
})

const User = mongoose.model('UserModel', UserSchema);

export default User;