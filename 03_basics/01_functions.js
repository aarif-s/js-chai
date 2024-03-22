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
console.log(loginusermessage());