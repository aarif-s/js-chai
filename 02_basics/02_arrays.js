const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//   marvel_heros.push(dc_heros)        
              
//   console.log(marvel_heros);                     // output contains array ke andar array aa gya after push
//                                                  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//  console.log(marvel_heros[3][1]);               // for getting thor 

// const allHeros = marvel_heros.concat(dc_heros)     // proper add
// console.log(allHeros);                              // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]      //spread operator most used for add two arrrys

//  console.log(all_new_heros);                           // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//   const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//   const real_another_array = another_array.flat(Infinity)       // for arrys ke andar aaaay and uske andar phir array many level arrays ko agar nor normal ek array me krna hai tb

//   console.log(real_another_array);                          // [ 1, 2, 3, 4, 5 , 6 , 7, 6, 7, 4, 5 ]
    



// console.log(Array.isArray("Hitesh"))          // check array hai ki nhi // false 
// console.log(Array.from("Hitesh"))              // convert string to array
// console.log(Array.from({name: "hitesh"}))     // interesting // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // new array from set of elements
                                                 //  [ 100, 200, 300 ]