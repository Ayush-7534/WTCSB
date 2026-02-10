// function add(...numbers){     // using rest operator
//     let total = 0 ;
//     for(let i in numbers){    // in loop
//         total = total + numbers[i];
//     }
//     return total;
// }

// console.log(add(1,2,3,4));

// function add(...numbers){     // using rest operator
//     let total = 0 ;
//     for(let i = 0 ; i < numbers.length ; i++ ){  // normal loop
//         total = total + numbers[i];
//     }
//     return total;
// }

// console.log(add(1,2,3,4));


// function add(...numbers){     // using rest operator
//     let total = 0 ;
//     for(let i of numbers){
//         total = total + i;   // of loop for not working on index
//     }
//     return total;
// }

// console.log(add(1,2,3,4));

// let a = [1,2,3,4,5];
// let [first,second,last] = a;
// console.log(first,second,last);   // output - 1 2 3

// let a = [1,2,3,4,5];
// let [first,second,...last] = a;
// console.log(first,second,last);   //output - 1 2 [ 3, 4, 5 ]

// let a = [1,2,3,4,5];
// let [first,second,...last] = a;
// console.log(first,second,...last);  //output - 1 2 3 4 5

// let a1 = [10,20,30]
// let a2 = [...a1]
// console.log(a2);

// function test(...args){ // ex of spread and rest together
//     console.log(args);
// }
// let arr = [1,2,3]
// test(...arr);

// const isEven = (num) => num % 2 === 0 ? "Even" : "Odd";

// console.log(isEven(4));   
// console.log(isEven(7));   


// reverse the string
const reverseString = (str) => {
    let str1 = "";
    for(let i = str.length-1 ; i>=0 ;i--)
        str1 += str[i];
    return str1;
};

console.log(reverseString("AyushKumar"));


function add(...numbers){     // using rest operator
    let total = 0 ;
    for(let i of numbers){
        total = total + i;   // of loop for not working on index
    }
    return total;
}

const averageMarks = (marks) => (add(...marks) / marks.length >= 40) ?"Pass" : "Fail";

console.log(averageMarks([45, 50, 35]));  
console.log(averageMarks([30, 35, 40])); 


