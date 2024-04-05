//user model
import  User  from '../models/user.js';

//password handling
import bcrypt from 'bcrypt';

export const signUp = async (req,res) => {
    let {name, email, password} = req.body;
    name=name.trim();
    email=email.trim();
    password=password.trim();

    if(name=="" || email=="" || password=="" ){
        res.json({
            status: "FAILED",
            message: "Empty Input Fields"
        });
    } else if (!/^[a-zA-z0-9]*$/.test(name)){
        res.json({
            ststus: "FAILED",
            message: "Invalid Name"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            ststus: "FAILED",
            message: "Invalid Email"
        })
    } else if(password.length < 8){
        res.json({
            ststus: "FAILED",
            message: "Password is too short"
        })
    } else {
        User.find({email}).then(result => {
            if(result.length){
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })
            } else{
                //Try to create new user

                //password handling
                const saltRounds =10;
                bcrypt.hash(password, saltRounds).then(hashedPassword =>{
                    const newUser= new User({
                        name,
                        email,
                        password: hashedPassword,
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occured while saving user account"
                        })
                    })
                })
                .catch(err =>{
                    res.json({
                        status: "FAILED",
                        message: "An error occured while hashing the password"
                    })
                })
            }
        }).catch(err =>{
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }
}