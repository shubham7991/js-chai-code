// singleton
//object.create

//object.lliterals

const mySym = Symbol("myKey1")

const jsUser = {
    name: "shubh",
    mySym: "urKey1",
    age: 18,
    location: "jaipur",
    email: "shubh@google.com",
    isLoggedIn: false,
    LastLoggedInDays : ["monday", "thursday"],

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.mySym);
//jsUser.email = "shubh@chat.com"
//Object.freeze(jsUser)
//jsUser.email = "shubh@grit.com"
//console.log(jsUser);

jsUser.greeting = function () {
    console.log("hellojs user");
    
}
console.log(jsUser.greeting);

jsUser.greetingtwo = function(){
    console.log('hello js user, ${this.name}');
    
}
console.log(jsUser.greetingtwo);


