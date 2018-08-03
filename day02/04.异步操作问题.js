const fs = require('fs')

// JS 中是单线程的   唯一的这个单线程 非常的宝贵， 如果 这个唯一的单线程，被某个耗时的操作给阻塞了，后续任务则无法被继续执行；
let count = 0;

console.log('开始')
fs.readFile(__dirname + '/files/1.txt', 'utf-8', (err, data) => {
  count++;
  console.log(data)
})
console.log('写在1后面')

fs.readFile(__dirname + '/files/2.txt', 'utf-8', (err, data) => {
  count++;
  console.log(data)
})
console.log('写在2后面')

fs.readFile(__dirname + '/files/3.txt', 'utf-8', (err, data) => {
  count++;
  console.log(data)
})
console.log('写在3后面')
console.log('结束')
//若要判断异步操作是否全部执行完毕，需添加一个计数器，当count==3(异步操作的数量)是，所有异步操作全部执行完毕