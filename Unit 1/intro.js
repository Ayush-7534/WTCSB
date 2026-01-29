// "use strict";
// console.log("First");
// // document.write("From JS");

// a = 10;
// console.log(a);

// var a = 10;
// var a = 20; // redeclaration is alowed
// console.log(a);

// function hello(){ // function
//     if(true){
//         var x = 10;
//         console.log(x);
//     }
//     console.log(x);
// }

// hello();

// console.log(z); // z is undefinied
// var z = 20;

function hello(){ // function
    if(true){
        const x = 10;
        console.log(x);
    }
    // console.log(x); // cant access x outside
}

hello();

let x = 1;
{
    let x = 2;
}

console.log(x); // x == 1 only because value change in block only

