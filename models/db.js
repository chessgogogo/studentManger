// 数据库的 开启 & 连接
'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studentManger');

let db = mongoose.connection;
db.once('open',(callback) => {
    console.log('数据库已经打开');
});

module.exports = db;