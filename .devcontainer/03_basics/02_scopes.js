if(true){ let a=10
 const b=20
 c=30
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "shubh"

    function two(){
        const website ="yt"
        console.log(username);
    }
    //console.log(website);
    two()

}
//one()

if(true){
    const username = "shubh"
    if(username === "shubh"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
 //console.log(username);

 /////+++++++interesting++++++++



console.log(addone(5));
           
 function addone(num){
    return  num+1
 }
 
addTwo(5)                  //hoisting case (now it will not run)
 const addTwo = function(num){
    return num +2
 }
 