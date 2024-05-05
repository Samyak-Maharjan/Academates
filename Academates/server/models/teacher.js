import mongoose from "mongoose";
import StudyMaterial from "./studyMaterial";

const teacherSchema = mongoose.Schema({
    teacherID:String,
    firstName: String,
    middleName:String,
    lastName:String,
    email: String,
    subjects: [String],
    number: Number,
    qualifications: [String],
    studyMaterials: StudyMaterial
})

const Teacher= mongoose.model('teacherModel', teacherSchema);

export default Teacher;