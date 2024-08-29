const StudentRecord = require('../models/studentRecord');
const AttendanceManager = require('../models/attendanceManager.js');
const studentRecord = require('../models/studentRecord');

exports.getHome = async (req, res) =>{
    try{
        const students = await StudentRecord.find({});

        const maxAttendanceCount = students.length;

        res.render('attendance.ejs', {students, maxAttendanceCount});

    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.addStudent = async (req,res) => {
    try{
        const student = new StudentRecord({name: req.body.name, email: req.body.email});
        await student.save();
        res.redirect('/home');
    }catch(error) {
        console.log('Error adding a student');
        res.status(500).send('Server is broken 😤');
    }


};

exports.deleteStudent = async (req,res) => {
    try{
        const studentName = req.body.name;
        const result = await StudentRecord.deleteOne({name: studentName});
        res.redirect('/home');

        if(result.deletedCount === 0){
            res.status(404).send('Student not found!');
        } else {
            res.redirect('/home');
        }

    }catch(error) {
        console.log('Error deleting student');
        res.status(500).send('Server is broken 😤');
    }

    exports.updateStudent = async (req,res) => {

        const {attendanceDate} = req.body;

        try{
            for(let i = 0; i < length; i++){
                await StudentRecord.findByIdAndUpdate[i](
                    studentId,
                    {
                        $inc: { attendanceCount: 1 },
                        $push: { attendance: { date: new Date(attendanceDate), status: 'present' } }
                    },
                    {new: true}
                );
            }
            res.redirect('/home');
        }catch(error) {
            console.log('Error updating student');
            res.status(500).send('Server is broken 😤');
        }
    
    
    };


};

exports.addStudent = (req, res) => {
    res.send('Student has been added.');
};
exports.deleteStudent = (req, res) => {
    res.send('Student has been deleted.');
};
exports.updateStudent = (req, res) => {
    res.send('Student has been updated.');
};