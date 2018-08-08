const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './img'), (err, filenames) => {
    if (err) console.log('读取文件错误' + err.message)

    let newArr = [];
    // console.log(filenames)
    // fs.writeFile(path.join())
    filenames.forEach((item, index) => {
        fs.readFile(path.join(__dirname, `./img/${item}`), (err, data) => {
            // console.log(data)
            if (err) console.log('读取文件出错' + err.message)
            let i = index < 10 ? '0' + index : index
            newArr[index] = '东京' + i + path.extname(item)
            fs.writeFile(path.join(__dirname, `./img2/${newArr[index]}`),data,err=>{
                if(err) console.log('写入文件出错' + err.message)

                console.log('ok')
            })
        })
    })
})