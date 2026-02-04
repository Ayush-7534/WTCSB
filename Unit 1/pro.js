// const name = prompt("Enter your name");
// const age = prompt("Enter your age");
// const info = `My name is ${name} and age is ${age}`;
// console.log(info);
// document.write(info);


const calculator = () => ({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => (b === 0 ? "Error " : a / b),
});



console.log(calculator().add(8,5));
console.log(calculator().sub(8,5));
console.log(calculator().mul(8,5));
console.log(calculator().div(8,5));
console.log(calculator().div(10,0));




