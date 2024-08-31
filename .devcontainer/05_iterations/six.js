const coding = ["js","ruby","java","cpp"]

// const values = coding.forEach((item)=> {
//     //console.log(item);
//     return item
    
// })
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num)=>{ return  num>4})    //parenthesis if used then use return keyword to return value (scope issue)
//  const newNums = []
//     //another approach
//  myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
//  })


// console.log(newNums);

const books = [
    {
        title : 'book one', genre: 'fiction', publish: 1981, edition :2004
    },
    {
        title : 'book two', genre: 'non-fiction', publish: 1992, edition :2008
    },
    {
        title : 'book three', genre: 'fiction', publish: 1999, edition :2007
    },
    {
        title : 'book four', genre: 'history', publish: 1989, edition :2010
    },
    {
        title : 'book five', genre: 'science', publish: 2009, edition :2014
    },
    {
        title : 'book six', genre: 'non-fiction', publish: 1987, edition :2010
    },
    {
        title : 'book seven', genre: 'fiction', publish: 1986, edition :1996
    },
];

let userBooks = books.filter((bk)=>bk.genre==='history')
console.log(userBooks);
 userBooks = books.filter((bk)=>{return bk.publish>1990})
console.log(userBooks);

