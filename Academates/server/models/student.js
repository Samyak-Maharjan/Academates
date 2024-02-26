import mongoose from "mongoose";

const studentSchema= mongoose.Schema({
    studentID:String,
    firstName: String,
    middleName:String,
    lastName:String,
    email: String,
    intrests: [String],
    number: Number
})

const Student = mongoose.model('studentModel', studentSchema);

export default student;