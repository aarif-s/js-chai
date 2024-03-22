// object singleto or constructor 

 // const  tinderUser = new object()    // singletop object

 const tinderUser = {}   // non sigleton Object 
 
  tinderUser.id = "123abc"
  tinderUser.name = " Sammy"
  tinderUser.isLoggedIn = false
 
 // console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullname:{
            firstname : "Hitesh",
            lastname : "Chaudhary"
        }
    }
}

 // console.log(regularUser.fullName.userfullname.firstname);     // fullname? for check wo hai ki n

 const obj1 = {1:"a", 2: "b"}
 const obj2 = {3:"c", 4: "d"}
 const obj4 = {5:"c", 6: "d"}

  // const obj3 = {obj1 , obj2}   // same problem object ke andar object aa jayega                   
                              // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 // console.log(obj3);

// const  obj3 = Object.assign({},obj1,obj2)     // {} is target and all obj are source 
 //  console.log(obj3);

 const obj3 = {...obj1,...obj2}
 // console.log(obj3);

  const users = [       // objects in arrays 
    {
        id : 1,
        email :  "ali@gmailcom"
    },
    {

    },
    {

    }

  ]


  users[1].email

//    console.log(tinderUser);

//    console.log(Object.keys(tinderUser));    // for returning all keys of any bject here object is tindeuser 
//                                            // return type is array
//                                         // [ 'id', 'name', 'isLoggedIn' ]

//    console.log(Object.values(tinderUser));      // for all value related to keys                            
                                                // [ '123abc', ' Sammy', false ]

    // console.log(Object.entries(tinderUser));   //   [ [ 'id', '123abc' ], [ 'name', ' Sammy' ], [ 'isLoggedIn', false ] ]                                         

    // console.log(tinderUser.hasOwnProperty(`isLoggedIn`));    // true  // for checking it method me property h ki nhi

    // console.log(tinderUser.hasOwnProperty(`isLog`));    // false 


     // destructuring of values  objects *******************************  



     const course ={
        coursename : " js in hindi ",
        price : 999,
        courseInstructor : " Hitesh"
     }
    
     // course.courseInstructor 

    //  const {courseInstructor} =  course 

    //  console.log(courseInstructor);

    const {courseInstructor : instructor } =  course 

     console.log(instructor);

     // ******** APIS ***********
     
     // JSON  

    //  {
    //     "NAME" : " hitesh",                 // keys and values must be written like stings
    //     "cousename" : "js in hindi",
    //     "price" : "free"

     [
        {},
        {},
        {}

    ]



      


