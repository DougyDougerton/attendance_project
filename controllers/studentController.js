const StudentRecord = require('../models/studentRecord.js');
const AttendanceManager = require('../models/attendanceManager.js');

exports.getHome = async (req,res) =>{

    try{
        const students = await StudentRecord.find({});

        const maxAttendanceCount = students.length;

        res.render('attendance.ejs', {students, maxAttendanceCount});


    }catch(error){
        res.status(500).send('The server is not servering.');
    }
}
