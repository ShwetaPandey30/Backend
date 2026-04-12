// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr1.sayHello = () =>{
//     console.log("Hello I am a arr")
// }
// arr2.sayHello = () =>{
//     console.log("Hello I am a arr")
// }

    
// function personMaker(name,age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`hi i am ${this.name}`);
            
//         },
//     }
//     return person;
// }

// constructor-> doesnt return anything start with capital
// function Person(name,age){
   
//         this.name = name;
//         this.age =  age;
       
    
// };
// Person.prototype.talk = function(){
//     console.log(`Hello I am ${this.name}`);
    
// }
//  clas is the template and inside the clas we can defined constrctor
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
        
    }
}
let p1 = new Person("Shweta", 23);
let p2 = new Person("Sumit",21);

// Inheritance

class Person {
    constructor(name, age){
    this.name = name;
    this.age = age;
    
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}

class Student{
    constructor(marks){
        this.marks = marks;
    }
}
class Teacher {
    constructor(subject){
        this.subject =subject;
    }
}
    