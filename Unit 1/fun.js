// (function show(){
//     console.log("Welcome to CS");
// })(); // for immediate calling or not to write call function - ifa

// const aa = () => {
//     console.log("Welcome");
// }
// aa();

// function person() {
//     this.age = 25;

//     setTimeout(function( ){
//         console.log(this.age);
//     }, 1000);
// }

// person();

// function Person() {
//     this.age = 25;

//     setTimeout(() => {
//         console.log(this.age);
//     }, 1000);
// }


// Person();

// const aa = () => { return { user : name }};
// console.log(aa());

// const bb = ()=> [1 ,2 ,3 ,4 ,5 ,6];
// console.log(bb());

const user = {
    name : "adj" , age: 22,
    welcome : function(){
        console.log(`hello ${this.name}`);
        console.log(this);
    }
};

const f = user.welcome();
console.log(f);
// user.name = "ajay";
// user.welcome();