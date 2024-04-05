import Teacher from "../models/teacher.js"

export const teacherDashboard = async (req,res) => {
    const result = await Teacher.find();
    console.log(result);
    res.send({"Teachers": result});
}

