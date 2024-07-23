const accountId =14453
let accountEmail="shubh@gmail.com"
var accountPassword="12345"
accountCity= "delhi"

//accountId =2 //not allowed
accountEmail= "ramrinku@google.com"
accountPassword= "29344"
accountCity= "bengaluru"
let accountState;

console.log(accountId);
/*
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
*/


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])