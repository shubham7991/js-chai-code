//arrays

const myArr = [0,1,2,3,4]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[3]);

//Array Methods

// myArr.push(8)
// myArr.push(6)
// myArr.pop()
//myArr.unshift(9)
//myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9));

// console.log(myArr);
const newArr = myArr.join()  //string type

//console.log(typeof(newArr));

// Slice & Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);


