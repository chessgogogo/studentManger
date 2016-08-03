// 创建学生类 - 模块
'use strict';
const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    "sid"  : Number,
    "name" : String,
    "age"  : Number,
    "sex"  : String
});

let Student = mongoose.model('Student',studentSchema);

module.exports = Student;