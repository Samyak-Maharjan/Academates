import mongoose  from "mongoose";

const studyMaterialSchema= new mongoose.Schema({
    StudyMaterialID: String,
    title: String,
    fileName: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const StudyMaterial= mongoose.model('studyMaterialModel', studyMaterialSchema);

export default StudyMaterial;