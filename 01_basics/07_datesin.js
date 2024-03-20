// dates 


let mydate = new Date ()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.getTimezoneOffset());

// console.log(typeof mydate);  // Object

// let myCreateDate = new Date (2023,0,23,5,3)   // javascript month start with 0;
// console.log(myCreateDate.toDateString());     // Mon Jan 23 2023

// let myCreateDate2 = new Date (2023,0,23)   // javascript month start with 0;
// console.log(myCreateDate.toLocaleString());  // 1/23/2023, 5:03:00 AM

// let myCreateDate3 = new Date ("2023-01-14")   // javascript month start with 1;
// console.log(myCreateDate.toLocaleString());   // 1/23/2023, 5:03:00 AM

// let myCreateDate4 = new Date ("01-14-2023")   // Indian style 
// console.log(myCreateDate.toLocaleString());   //1/23/2023, 5:03:00 AM

 
let myCreateDate5 = new Date ("01-14-2023")

 let myTimeStamp = Date.now()                // for polls and quiz we use 
//  console.log(myTimeStamp);                  // output in milisecond  => 1710963260879
//  console.log(myCreateDate5.getTime());       // output in miliseconds => 1673654400000     to compare 

// always compare in milisecond 
 
console.log(Date.now());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDate());   // 2
console.log(newdate.getDay());    //3
console.log(newdate.getMonth()+1);  // 3

// console.log(`${newdate.getDay()} and the time is ${newdate.getTime}`);

newdate.toLocaleDateString(`default`{
    weekday: 'long',                       // for specific chance in format 
    month:`numeric`
})