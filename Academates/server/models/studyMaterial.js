import mongoose  from "mongoose";

const studyMaterialSchema= mongoose.Schema({
    StudyMaterialID: String,
    title: String,
    fileName: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const StudyMaterial= mongoose.model('teacherModel', StudyMaterialSchema);

export default StudyMaterial;