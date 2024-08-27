const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        required: true,
    }
});

const studentRecordSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    attendance: {
        type: [attendanceSchema],
        default: [],
    }

});








const studentRecord = mongoose.model('studentRecord', studentRecordSchema);
module.exports = studentRecord;