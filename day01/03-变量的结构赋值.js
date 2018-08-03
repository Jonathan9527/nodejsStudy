let person = {
    name: 'zs',
    age: 22,
    gender: '男'
  }

// 变量的解构赋值
let { name : name123, age, gender } = person
// name123 = '娃哈哈'
console.log(name123)