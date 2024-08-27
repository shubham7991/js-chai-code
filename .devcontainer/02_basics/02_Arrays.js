const marvel_heros = ["thor","hulk", "ironman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
 //const all_heros= marvel_heros.concat(dc_heros)
//console.log(all_heros);
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
const arr_now = [1,2,3,[4,5],7,[6,7],9,[10,11,12]]
const arr_another = arr_now.flat(1)
console.log(arr_another);

console.log(Array.isArray("shubh"));
console.log((Array.from("shubh")));
console.log((Array.from({name:"shubh"})));    //empty array will return

let score1 =200;
let score2 =400;
let score3=600;

console.log(Array.of(score1,score2,score3));
