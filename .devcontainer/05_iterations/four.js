const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift: "swift by apple"
}
//forin loops
for (const key in myObject) {
   // console.log(myObject[key]);
//   console.log(`${key} shortcut is for ${myObject[key]}`);
   
    
   
}
const programming = ["js","cpp","py","java"]
for (const key in programming) {
 //   console.log(programming[key]);
}
const map = new Map()
 map.set('IN',"India")
 map.set('USA', "united states of america")
 map.set('fr', "france")

 for (const key in map) {
   console.log(key);   //not iterable
   
 }
 