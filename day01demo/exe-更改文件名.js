const fs = require('fs');
const path = require('path');


// console.log(path.extname('index.html'))
fs.readdir(path.join(__dirname,'img'),(err,filenames)=>{
    let newArr = []
    // console.log(filenames);
    filenames.forEach((item,index) => {
        // console.log(item)
        let i = index<10?'0'+index:index
        newArr[index]= '南京'+i+path.extname(item)

        fs.rename(path.join(__dirname,`/img/${item}`),path.join(__dirname,`/img/${newArr[index]}`),err=>{
            console.log('ok')
        });
    });

    
})