//const tinderUser = new Object()
const tinderUser = {}
//console.log(tinderUser);

tinderUser.id = "123sam"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUSer = {
    email : "shubh@gmail.com",
    fullName:{
        userfullName: {
            firstName: "shubh"
        }
    }
}
//console.log(regularUSer.email);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4: "b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1 , obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const course = {
    courseName : "jsHindi",
    price : "999",
    courseInstructor : "hitesh"

}
//course.courseInstructor
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

