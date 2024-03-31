import mongoose from "mongoose";
import StudyMaterial from "./studyMaterial.js";

const teacherSchema = new mongoose.Schema({
    teacherID:String,
    firstName: String,
    middleName:String,
    lastName:String,
    subjects: [String],
    number: Number,
    qualifications: [String],
    // studyMaterial: StudyMaterial.schema
});

const Teacher= mongoose.model('teacherModel', teacherSchema);

export default Teacher;