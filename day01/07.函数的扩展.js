//---形参默认值----

/** 
function add(x,y=0){
    return x+y;
}
console.log(add(1))
*/

//-----解构赋值和形参默认值结合使用----

// function add({x,y=0}){
//     return x+y;
// }
// let result = add({x:3})
// console.log(result)

//-----rest参数----

// ...obj是 rest 参数和arguments伪数组类似
/** 
function add() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i]
    }
    console.log(total)
}
add(1,2,3,4,5)
*/


function add(...args){// 在定义方法的时候，方法的形参列表中使用 ...obj 是 rest 参数
    // console.log(args)//[]
    // console.log(args instanceof Array)//true
    let total = 0;
    for(let i=0;i<args.length;i++){
        total += args[i]
    }
    console.log(total)
}

// 前提：在调用 add 方法的时候，参数个数，可能不确定
let arr = [1,2,3,4,5]
add(...arr)// 在调用函数的时候，使用的 ...obj  表示 扩展运算符 

//...obj 可用作浅拷贝
const a ={name:'zs',age:18}
const b = {sex:'男',age:20}
const c = {...a,...b}
console.log(c)