let score =  "33" 
 
console.log(typeof score );
console.log(typeof (score)); // as a method 

let valueNumber = Number(score);
console.log(typeof valueNumber);
// NAN for "33abc"
// 0 FOR NULL
// NAN  for undefined 
// String like "Ritech"  => NAN

//  "33" => 33
// "33abc" => NAN
// true =>1 ; flase => 0

let isLOggedIn = 1  // true 
// 0 => false 
// let isLOggedIn = "" => false 
// let isLOggedIn = "man" => true
let booleanIsLOggedIn = Boolean(isLOggedIn)

let someNumbeer = 33;

let stringNumber = String (someNumbeer)
console.log(typeof stringNumber);