# 学生管理系统

## 1.学生 -- 增删改查

- 测试路由是否好使 √

- 向数据库增加学生信息 √
````
<form action="/doadd" method="GET"></form>
<input name = "">
Student.create(req.query,() => {}); // req.query - 提交的信息（object） 
````

- 首页展示学生信息列表 √
````
Student.find({},(err,result) => {
        res.render('../views/index.ejs',{
            "students" : result
        });
    });
````

- 移除某个学生信息 √
````
需要主键 - 索引（以防删除错误） +　为学生添加学号
测试路由
req.params["sid"] - 获取请求来的url的sid部分
Student.remove({"sid":sid},() => {
    res.send("删除成功");
});
````

- 修改某个学生信息 √
````
测试路由
显示要更改的信息
更改信息提交
更新数据
Student.update({"sid":sid},req.query,() => {
    res.send('更改成功');
});
````
