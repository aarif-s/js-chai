// primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

 const isLoggedIn = false 
 const outsideTemp = null;
 let userEmail;

 const id = Symbol('123');
 const anotherId = Symbol('123');

 console.log(id === anotherId);

 const bigNumber = 3483264828378377384798n  // for bigInt n

// Reference type (Non primitive)

// Arrays , Objects Functions 

const heros = ["shaktiman","nagraj","doga"] // Arrays 

//Objects
let myobj = {
   name : "Hitesh",
   age : 22,
}

//functions 

const myfunctions = function(){    // treating fi=unction as variable
    console.log("Hellow world");
}


console.log(typeof anotherId);

/* 
The typeof operator 

undefined => "undefined"
Null      => "object"
Boolean   => "boolean"
Number    => "number"
String    => "string"
function  => function   (function object)
Object (native without implement call ) => "object"
Object (native 0r host  without implement call ) => "Function"
Object (host  without implement call )  => 
*/

 // https://262.ecma-international.org/5.1/#sec-11.4.3
