const dt = new Date();
const Y = dt.getFullYear();
const M = dt.getMonth().toString().padStart(2,'0');
const D = dt.getDate();
const hh = dt.getHours();
const mm = dt.getMinutes().toString().padStart(2,'0');
const ss = dt.getSeconds().toString().padStart(2,'0');
let result =`${Y}-${M}-${D} ${hh}:${mm}:${ss}`
console.log(result)

let str ="123"
let res = str.padStart(6,'0').padEnd(9,'x');
console.log(res)