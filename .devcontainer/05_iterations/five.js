const coding = ["js","rb","java","cpp"]


// coding.forEach(function (val){
//     console.log(val);
    
// })
   //no name of this call back function
//    coding.forEach((item)=>{
//     console.log(item);
    
//    })
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index , arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding =[
    {
        languageName : "javascript",
        languagFilename:"js"
    },
    {
        languageName : "java",
        languagFilename:"java"
    },
    {
        languageName : "python",
        languagFilename:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagFilename);
    
})