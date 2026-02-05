const student = {
    name: "Abhishek",
    age: 33,
    address: {
        city: "GZB",
        state: "UP"
    }
}

// const name = student.name;
// const age = student.age;
// console.log(name,age);

// const { name , age} = student
// console.log(name,age);

// const { name: stuname , age , address:{city}} = student;
// console.log(stuname,age,city);

// const { name: stuname = "Amit", age , address:{city}} = student;
// console.log(stuname,age,city);

// function displaystu(object){
//     console.log(`My name is ${object.name} and age is ${object.age}`);
// }

// displaystu(student);

function displaystu({name,age}){
    console.log(`My name is ${name} and age is ${age}.`);
}

displaystu(student);