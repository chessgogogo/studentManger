// 核心入口 - 处理所有的引入模块 & 路由处理
'use strict';
const express = require('express');
const app = express();
const router = require('./router/router.js');
const db = require('./models/db.js');

app.set('view engine','ejs');

// 增
app.get('/add',router.showAdd);
app.get('/doadd',router.doAdd);
// 查 - 显示
app.get('/',router.showIndex);
// 删
app.get('/remove/:sid',router.remove);
// 改
app.get('/edit/:sid',router.edit);
app.get('/doedit/:sid',router.doEdit);

app.listen('3000',function () {
   console.log('3000端口已经启动');
});