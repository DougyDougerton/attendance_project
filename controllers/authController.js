const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AttendanceManager = require('../models/attendanceManager.js');
require('dotenv').config();


exports.login = async(req,res) => {

    const {email, password} = req.body;
}
    try{
        const user = await AttendanceManager.findOne({email});
    
        if(!user){
            return res.status(401).send("Invaild username!");

            //Verify the password using bcrypt
            const result = await bcrypt.compare(password, user.password);

            if(!result){
                return res.status(401).send('It is not vaild!');
            }

            //Generate the JWT
            const token = jwt.sign({id:user._id.toString()}, 'secret_key', {expiresIn: '5m'});

           //Create a cookie and place JWT/token inside it
            res.cookie('jwt', token, {maxAge: 5 * 60 * 1000, http: true});

            res.redirect('attendance');

            
             
         }}
        
    
        


// exports.register = async(req,res) => {

//     const {email, password, confirmPassword} = req.body;
    
//     try{
//         const existingUser = await AttendanceManager.findOne({email});

//         if(existingUser){
//             return res.status(400).send("Username already exists. Please choose another username :)");



//         }
        
//         if(password !== confirmPassword){
//             return res.status(400).send("Passwords do not match. :( Sad Panda 🐼");
//         }

//         const hashPassword = await bcrypt.hash(password, 10);

//         const newUser = new AttendanceManager({
//             email,
//             password: hashPassword
//         });

//         await newUser.save();

//         res.redirect('/login');

//     }catch(error){
//         res.status(500).send('Server is broken. Hold tight!')
//     }


// }
catch (error) {
    res.status(500).send('Server has a silly brain!');
}