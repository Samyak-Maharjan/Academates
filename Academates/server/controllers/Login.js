//user model
import  User  from '../models/user.js';

//password handling
import bcrypt from 'bcrypt';

export const logIn = async (req,res) => {
    let {email, password} = req.body;
    email=email.trim();
    password=password.trim();

    if(email==""|| password==""){
        res.json({
            status: "FAILED",
            message: "Empty credentials"
        })
    } else{
        User.find({email}).then(data =>{
            if(data){

                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result=>{
                    if(result){
                        res.json({
                            status: "SUCCESS",
                            message: "Login successful",
                            data: data
                        })
                    } else{
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occured while comparing passwords"
                    })

                })
            }else{
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials entered"
                })
            }
        })
        .catch(err =>{
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }
}