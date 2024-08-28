function sayName(){
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    
}
//sayName()
function addTwoNumbers(number1,number2) {
      let result = number1+number2
      //console.log("shubh");
      return result
    //console.log(number1+number2);
    console.log("shubh");    // will not execute in this line if shift up to return line then execute
    
}
const result = addTwoNumbers(3,4)
//console.log("han:",result);

function loginUser(username = "sam"){
    if(username=== undefined){
        console.log("enter username");
        

    }
    return `${username} justloggedin`
}
  console.log(loginUser("shubh"));

  function calculateCartPrice(num1){
    return num1

  }
  
    
