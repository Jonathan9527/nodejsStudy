// 服务器端项目的入口文件
const express = require('express')
const app = express();

// 注册 解析表单的 body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// 导入CORS 模块
const cors = require('cors')
app.use(cors())

//创建数据库连接对象
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'mybase'
})


// 获取所有未删除的英雄的列表
app.get('/api/getheros',(req,res)=>{
    // 定义Sql语句
    const sqlStr = 'select * from heros where isdel=0'
    conn.query(sqlStr, (err, results) => {
        console.log(results)
        if (err) return res.json({ err_code: 1, message: '获取数据失败', affectedRows: 0 })
        res.json({ err_code: 0, message: results, affectedRows: 0 })
    })
});

//根据Id更新英雄数据
app.post('/api/updatehero',(req,res)=>{
    const sqlStr = 'update heros set ? where id=?'
    conn.query(sqlStr,[req.body,req.body.id],(err,result)=>{
        if(err) return res.json({err_code:1,message:'更新英雄失败',affectedRows:0})
       
        if(result.affectedRows !== 1) return res.json({err_code:1,message:'更新的英雄不存在!',affectedRows:0})
        
        res.json({err_code:0,message:'更新成功！',affectedRows:result.affectedRows})
    })

})

// 根据ID获取英雄
//req.query.id 获取url?..&..数据
app.get('/api/gethero',(req,res)=>{
    const id = req.query.id;
    const sqlStr = 'select * from heros where id = ?'
    conn.query(sqlStr,id,(err,result)=>{
        if(err) return res.json({err_code:1,message:'获取英雄失败',affectedRows:0})
        if(result.length==0) return res.json({err_code:1,message:'获取英雄不存在',affectedRows:0})

        res.json({err_code:0,message:result[0],affectedRows:0})
    })
})

//req.params 获取方法
// app.get('/api/gethero/:id',(req,res)=>{
//     const id = req.params.id;
//     const sqlStr = 'select * from heros where id = ?'
//     conn.query(sqlStr,id,(err,result)=>{
//         if(err) return res.json({err_code:1,message:'获取英雄失败',affectedRows:0})
//         if(result.length==0) return res.json({err_code:1,message:'获取英雄不存在',affectedRows:0})

//         res.json({err_code:0,message:result[0],affectedRows:0})
//     })
// })
// 根据ID删除英雄
app.get('/api/delhero',(req,res)=>{
    const id = req.query.id
    const sqlStr = 'update heros set isdel=1 where id=?'
    conn.query(sqlStr,id,(err,result)=>{
        if(err) return res.json({ err_code: 1, message: '删除英雄失败！', affectedRows: 0 });
        if(result.affectedRows !== 1) return res.json({err_code:1,message:'英雄不存在',affectedRows:0});
        res.json({err_code:1,message:'删除英雄成功',affectedRows:result.affectedRows})
    })
})

// 添加英雄
app.post('/api/addhero',(req,res)=>{
    //引用了body-parser 模块 可使用 req.body
    const hero = req.body
    //补全英雄的创建时间

})


app.listen(5000,function(){
    console.log('Data server running at http://127.0.0.1:5000');
})