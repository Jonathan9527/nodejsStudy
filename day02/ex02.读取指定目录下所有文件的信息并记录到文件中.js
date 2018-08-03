const fs = require('fs')
const path = require('path')

// 读取指定目录下所有文件的`名称、大小、是否为文件`，并将读取的结果记录到`info.txt`文档中

// 1. 根据给定的目录，调用 fs.readdir 读取其中的所有文件名
// 2. 调用 fs.stat 来循环 读取每一个文件的 相关信息
// 3. 把 所有文件的信息，组织成字符串，拼接起来，最终，写入到  info.txt 中

let strInfo = '';
let count = 0;
fs.readdir(__dirname,(err,filenames)=>{
    // console.log(filenames)
    if(err) console.log('读取文件夹错误'+err.message)
    // 循环 filenames 数组中每一个文件名，然后，调用 fs.stat 方法读取信息
    
    filenames.forEach(item=>{
        fs.stat(path.join(__dirname,item),(err,itemStat)=>{
            if(err) console.log('读取文件夹错误'+err.message)

            const infoStr = `文件名：${item}\n文件大小：${itemStat.size}\n是否为文件：${itemStat.isFile()?'是文件':'不是文件'}\n--------------\n`
            strInfo+=infoStr;

            // 核心思想：定义一个计数器，每次异步的读取完一个文件信息后，就让是计数器+ 1，并立即和 总数量做判断
            // console.log(strInfo)
            count++;
            if(count == filenames.length){
                fs.writeFile(path.join(__dirname,'./files/info.txt'),strInfo,err=>{
                    if(err) console.log('写入文件错误'+err.message)

                    console.log('写入成功')
                })
            }

        })
    })
})