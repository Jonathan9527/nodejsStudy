//导入fs,path模块
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'./files/成绩.txt'),'utf-8',(err,data)=>{
    if(err) console.log('读取失败'+err.message)

    // console.log(data)
    const score = data.split(' ')
    let str = '';
    score.forEach(item => {
        if(item.length>0){
            str+=item.split('=').join(':')+'\n'
        }
    });
    fs.writeFile(path.join(__dirname,'./files/成绩 - ok.txt'),str.trim(),err=>{
        if(err) console.log('写入失败'+err.message)
        console.log('写入成功')
    })
})