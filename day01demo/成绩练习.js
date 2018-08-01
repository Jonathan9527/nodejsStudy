const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'file/成绩.txt'),'utf-8',(err,datastr)=>{
    if(err) return console.log('文件读取失败'+err.message)
    let scoreArr = datastr.split(' ')
    let scoreStr ='';
    scoreArr.forEach(item => {
        if(item.length>0){
            scoreStr += item.split('=').join(':')+'\n'
        }
    });
    console.log(scoreStr.trim())
    fs.writeFile(path.join(__dirname,'file/成绩-Ok.txt'),scoreStr.trim(),err=>{
        if(err)console.log('文件写入失败'+err.message)
    }
       
    )
})