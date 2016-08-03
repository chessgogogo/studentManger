// 路由处理模块 - （数据的增删改查 & 模板生成）
'use strict';
const mongoose = require('mongoose');
const Student = require('../models/Student.js');

// 查　-　显示
exports.showIndex = (req,res,next) => {
    // res.send('showIndex - test code'); // 测试 路由成功
    Student.find({},(err,result) => {
        res.render('../views/index.ejs',{
            "students" : result
        });
    });

};

// 增 - 输入界面
exports.showAdd = (req,res,next) => {
    // res.send('showAdd - test code'); // 测试 路由成功
    res.render('../views/add.ejs');
};

// 增 - 实际操作
exports.doAdd = (req,res,next) => {
    // res.send('showAdd - test code'); // 测试 路由成功
    // 增加 学生 信息
    //url是   /doadd?sid=10000&name=小红&sex=男&kechengs=100&kechengs=102/
    //req.query就是对象
    //{name: 小红 ,  sex:男，  kechengs:[100,102]}
    Student.create(req.query,() => {
        console.log(req.query);
        console.log("插入成功");
        //在课程中添加此人
    });
};

// 删
exports.remove = (req,res,next) => {
    let sid = parseInt(req.params["sid"]);
    console.log(req.params["sid"]);
    Student.remove({"sid":sid},() => {
        res.send("删除成功");
    });
};

// 改 - 界面
exports.edit = (req,res,next) => {
    let sid = parseInt(req.params["sid"]);
    Student.find({"sid":sid},(err,result) => {
        res.render('../views/edit.ejs',{
            "student" : result[0]
        });
    });
};

// 改 - 实际操作
exports.doEdit = (req,res,next) => {
    let sid = parseInt(req.params["sid"]);
    Student.update({"sid":sid},req.query,() => {
        res.send('更改成功');
    });
};
