// // synchronization and asynchronization

// console.log(1);

// function getData(){
//     console.log("get data called")
//     

//     setTimeout(() => {
//         
//     }, 500);
//     return data;
// }

// api - application programming interface

// http/ url / page

// let givemeData = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("data")
//     }, 2000);
// })

// function render(){
//     console.log("render  called")
//     let p = document.createElement("p");
//     givemeData.then((data)=>{
//         console.log(data)
//         p.textContent = data;
//     });
//     document.body.append(p);
// }

// render();
// try and catch

// Promise - class - pending, fullfilled, rejected

// constructor - a function which get called at initializaton time to create the object.

// prototype inheritance - 

// class Promise {
//     constructor(a,b){

//     }

//     data = "data"

//     methodsomething(){

//     }
// }
// // initialization
// let b = new a(10,20);
// b.data



// try {
//     console.log("this will work");
//     throw new Error("meri marzi");
    
// }catch(error) {
//     let p = document.createElement("p");
//     p.textContent = "there were some errors....please wait...";
//     document.body.appendChild(p);
// }

// fetch

// let promise1 = new Promise((resolve,reject)=>{
//     let suceess = false;
//     if(suceess){
//         resolve("123","34");
//     }else{
//         reject("this is my error","dusra error");
//     }
// })

// promise1.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// console.log(2);

// fetch - return promise
let data;
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        let p = document.createElement('p');
        p.textContent = obj.title
      })

    //   ek loop ka use hoga
    // json jo .then ke andar
    // element banane ka code

