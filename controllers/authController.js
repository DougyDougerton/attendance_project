const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AttendanceManager = require('../models/attendanceManager.js');
require('dotenv').config();

exports.register = async(req,res) => {

    const {email, password, confirmPassword} = req.body;
    
    try{
        const existingUser = await AttendanceManager.findOne({email});
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        if(existingUser){
            return res.status(400).send("Username already exists. Please choose another username :)");



        }
        
        if(password !== confirmPassword){
            return res.status(400).send("Passwords do not match. :( Sad Panda 🐼");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new AttendanceManager({
            email,
            password: hashPassword
        });

        await newUser.save();

        res.redirect('/login');

    }catch(error){

    }






}

