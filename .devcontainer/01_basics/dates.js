//Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(typeof(myDate));
 
let myCreateDate = new Date(2023, 0 , 23)
//console.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})







