const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);     // current context
    }

}

user.welcomeMessage()       //hitesh , welcome to website
user.username = "sam"
user.welcomeMessage()       //sam , welcome to website

// console.log(this);       // {} current contex in node but windos in browser 

// function chai(){
//     let username = "hitesh"           // function ke andar this print me bht value h
//     console.log(this.username);          // undefined 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // undefined 
// }

const chai =  () => {
    let username = "hitesh"           
    console.log(this);            //{} in arrow function
}                    


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2            // without {} and return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})      // object return ke lie paranthesis () me wrap krna hoga 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()