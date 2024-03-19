const name = "hitesh-hc"
const repocount = 90 

 // console.log(name + repocount +"value" );  // old use 

 console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

 const gamename = new String(`Hotesh-hc-com`)  // as a object with index no every index

 console.log(gamename[0]);
 console.log(gamename.__proto__);  // two underscore at start and two end 


 console.log(gamename.length);
 console.log(gamename.toLocaleUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf(`t`));

const newString = gamename.substring(0,4)

 console.log(newString);

 const anotherString  = gamename.slice(-8,4)
 console.log((anotherString));

 const newStringOne = "    Hitesh   "
 console.log(newStringOne);
 console.log(newStringOne.trim);


 const url ="https://hitehs.com/hitesh%20chaudhary"

   console.log(url.replace(`%20`,`_`));

  console.log( url.includes(`hitesh`));


  console.log(gamename.split(`-`))  // output array
  // out put =>  [`Hotesh`,`hc`,`com`]



