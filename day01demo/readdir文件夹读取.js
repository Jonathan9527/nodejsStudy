const fs = require('fs')
fs.readdir(__dirname,(err,filename)=>{
    console.log(filename)
})