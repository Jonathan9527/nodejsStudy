const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname,'./img'),(err,filenames)=>{
    if(err) console.log('读取文件错误'+err.message)

    let newArr = [];
    // console.log(filenames)
    filenames.forEach((item,index)=>{
        let i=index<10?'0'+index:index
        newArr[index] = '北京'+i+path.extname(item)
        fs.rename(path.join(__dirname,`./img/${item}`),path.join(__dirname,`./img/${newArr[index]}`),err=>{
            if(err) console.log('更改文件名错误'+err.message)
            console.log('ok')
        })

    })

})