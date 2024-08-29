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
  //console.log(loginUser("shubh"));

  function calculateCartPrice(val1,val2,...num1){           // ... gives array of all
    return num1

  }
  
  console.log(calculateCartPrice(200,400,500,30000));
  
  const user = {
    username:"shubh",
    prices: 199
  }
    function handleObject(anyObject){
      console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
      

    }
    //handleObject(user)

handleObject({
  username:"sam",
  price:399
})

const myNewArray = [200,400,500,600]
function returnSecondValue(getArray){
  return getArray[2]
}

console.log(returnSecondValue(myNewArray));
