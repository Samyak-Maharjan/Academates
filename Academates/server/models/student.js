import mongoose from "mongoose";

const studentSchema= new mongoose.Schema({
    studentID:String,
    firstName: String,
    middleName:String,
    lastName:String,
    intrests: [String],
    number: Number
});

const Student = mongoose.model('studentModel', studentSchema);

export default Student;