const myNums =[1,2,3]

// const myTotal= myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)   //0 is the current value


const  myTotal = myNums.reduce((acc,currval)=> acc+currval,0)

console.log(myTotal);

const shoppingCart =[
{
    itemName:"js course",
    price:2999
},
{
    itemName:"python",
    price:999
},
{
    itemName:"mobile dev",
    price:4999
},
{
    itemName:"data science",
    price:9999
},
]
    
 const priceToPay=  shoppingCart.reduce((acc,item)=> acc+item.price,0)
 console.log(priceToPay);
 