// let numbers = [10,20,30];
// let [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let data = [1,2]
// let [a = 10 , b = 20] = data;
// console.log(a);   //give default value 1 only , it will give 10 if 1 is not there ex[,2]
// console.log(b);

// let p = 5; 
// let q = 10;
// [p,q] = [q,p];   // swapping
// console.log(p);
// console.log(q);

let colours = ["red" , "green", "blue"];
let [,secondcolour] = colours;
console.log(secondcolour);  // output green

let[,,thirdcolour] = colours;
console.log(thirdcolour);  // output blue

let[first,,] = colours;
console.log(first);   // output red
