let fs = require('fs');

// fs.readFile('./file/1.txt','utf-8',(err,data)=>{
//     if(err) return console.log(err.message)
//     console.log(data)
// }); //异步的读取方法

//同步的读取文件放法 不建议使用
// let content = fs.readFlieSync('./file/1.txt');
fs.writeFile('./file/1.txt','小小黑',err=>{
    if(err) return console.log(err.message);
    console.log('写入成功');
})

