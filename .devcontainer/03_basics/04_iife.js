//Immediately Invoked Function Expressions (IIFE)


// function chai (){
//     console.log(`DBCONNECTED`);
    
// }
// chai()
(function chai(){ 
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

( ()=>{
    console.log(`DB CONNECTED TWO`)
    
}

)();