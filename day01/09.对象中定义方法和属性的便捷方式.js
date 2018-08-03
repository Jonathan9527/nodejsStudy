const name = '渣渣辉'
const age = 22
const gender = '妖'
function sayHi() {
  console.log('大家好，我是渣渣辉')
}

// const person = {
//     name: name,
//     age: age,
//     gender: gender,
//     sayHi:sayHi
//   } 

//es6快速定义对象
  const person = {
    name,
    age,
    gender,
    sayHi
  }
//   console.log(person)
person.sayHi()

// 应用场景
// let id = 5;
// $.ajax(
//     {
//         url:'',
//         data:{id}
//     }
// )

/* function add(x, y) {
  return x + y
} */

/* var o = {
  add
} */

/* var o = {
  add(x, y) {
    return x + y
  }
} */



