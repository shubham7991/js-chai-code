// PRIMITIVE

//7TYPES: string, number, boolean, null, undefined, symbol , big int

const score =100
const scoreValue= 100.3

const isLoggedIn = false
const temp = null

let userEmil;   //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id=== anotherId);
//const bigNumber = 345556445233324889n



// REFERENCE TYPE(NON PRIMITIVE)

//arrays , objects, functions

const heroes =["shaktiman","naagraj","doga"]
let myObj ={
    name: "shubham",
    age : 21,
}

const myfunction = function(){
    //console.log("hello world");
}
// console.log(typeof temp)
// console.log(typeof scoreValue);
// console.log(typeof myfunction);

//++++++++++++++++++++++++++++++++++++++++++++


// STACK(primitive),HEAP MEMORY(non-primitive)

let myhomename = "shubh"
let anothername= myhomename
anothername = "shubham"
console.log(myhomename)
 console.log(anothername)

 let userone ={                     //OBJECT
    email: "user@google.com",
    upi:"user@sbi"

 }
 let usertwo = userone

 usertwo.email = "shubham@google.com"

 console.log(userone.email)
 console.log(usertwo.email)