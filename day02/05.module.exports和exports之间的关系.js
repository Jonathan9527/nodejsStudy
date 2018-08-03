// console.log(module.exports)
// console.log(exports)

// console.log(module.exports === exports)

/* module.exports.a = 10
exports.b = 20 */

module.exports = { a: 10 }
exports.b = 20
//若module.exports的对象的地址指向没有发生改变，那module.exports===exports 否则，以module.exports为标准
console.log(module.exports === exports)

// 