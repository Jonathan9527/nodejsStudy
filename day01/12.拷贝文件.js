// ## 练习：
// 1. 复制指定的 `1.txt` 文件，并重命名为 `1 - copy.txt`

const fs = require('fs');
// fs.readFile('./files/1.txt',(err,buf)=>{
//     if(err) console.log('读取出错')
//     // console.log(buf)
//     fs.writeFile('./files/1-copy.txt',buf,err=>{
//         if(err) console.log('写入失败')
//         console.log('写入成功')
//     })
// })
/**
src <string> | <Buffer> | <URL> 要被拷贝的源文件名称
dest <string> | <Buffer> | <URL> 拷贝操作的目标文件名
flags <number> 拷贝操作修饰符 默认: 0
callback <Function>
 */
fs.copyFile('./files/1.txt','./files/1-copy.txt',err=>{
    if(err) console.log('拷贝出错')
    console.log('拷贝成功')
})