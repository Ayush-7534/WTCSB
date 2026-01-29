// (function show(){
//     console.log("Welcome to CS");
// })(); // for immediate calling or not to write call function - ifa

// const aa = () => {
//     console.log("Welcome");
// }
// aa();

function person() {
    this.age = 25;

    setTimeout(function( ){
        console.log(this.age);
    }, 1000);
}

person();

function Person() {
    this.age = 25;

    setTimeout(() => {
        console.log(this.age);
    }, 1000);
}




Person();