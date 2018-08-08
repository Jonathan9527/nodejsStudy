// var arr =[{a:undefined},{a:1}]
// console.log(arr[0]['a'])

// arr.forEach(item=>{
//     if(!item.a){
//         console.log(item.a)
//     }
// })

setTimeout(function(){console.log('1')});
 
new Promise(function(resolve){
    console.log('2');
    resolve()
}).then(function(){
    console.log('3')
});
 
console.log('4');