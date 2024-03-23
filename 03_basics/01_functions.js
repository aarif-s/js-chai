function saymynane (){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

saymynane()  // for values of functions

function addtwonumbers(number1 , number2){
   console.log(number1+number2);
}

function addtwonumbers(number1 , number2){
    let result = number1 + number2
    return result;
 }
addtwonumbers(3,4)
addtwonumbers(3,"4")

const result = addtwonumbers(3,5)

// console.log("Result" , result );

function loginusermessage (username = "sam"){      // value over ride
    // if(username === undefined){
    //     console.log("Please enter user name ");
    //     return
    // }
    if(!username){                  // undefined means false
        console.log("Please enter user name ");
        return
    }


    return `${username} just logged in`

}

   // console.log(loginusermessage("hitesh"));
   // console.log(loginusermessage());


   // for adding multiple prices like shopping cards 

   function  calculatecartprice (val1,val2,...num1){     // rest operator return a arry of all inputs 
    return num1                                          // we can add all these things using loop
   }                                                     // [ 400, 500 ]
   console.log(calculatecartprice(200,300,400,500));

const user ={
    username : "hiyesh",         // object
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({                 
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// hum function call object ke bahar kr skte h java me object ke andar krte hai aur sb same hai
