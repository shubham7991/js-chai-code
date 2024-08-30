const user = {
    username : "shubh",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcm to web`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

//console.log(this);

// function chai(){
//     let username= "shubh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "shubh"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "shubh"
    console.log(this);
    
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));

//const addTwo = (num1, num2) => num1+ num2     //Implicit return
//console.log(addTwo(3,5));

///to return as object///:--
const addTwo =(num1,num2) => ({username:"shubh"})
console.log(addTwo(3,4));


