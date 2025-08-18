// Loops definition :  A loop is a programming construct that repeats a block of code as long as a specified condition is met.

// Loops in JavaScript

// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop


// 1.for loop

// for(let i=0;i<10;i++){
//     console.log(i);    // Dynamic loops
// }

// for(let i=0;i<10;i++){
//     console.log("Hello World");    // Static loops
// }

// 2. while loop
    // let i = 0;
    // while (i < 10) {
    //     console.log(i);
    //     i++;
    // }
// 3. do while loop
    // let j = 0;
    // do {
    //     console.log(j);
    //     j++;
    // } while (j < 10);
// 4. for in loop
    const obj = { a: 1, b: 2, c: 3 };
    for (let key in obj) {
        console.log(obj[key]);
    }
// 5. for of loop
    // const arr = [1, 2, 3];
    // for (let value of arr) {
    //     console.log(value);
    // }



// for and while are entry control loops and do while is exit control loop .
// for of is used to iterate over arrays.
// for in is used to iterate over the keys of an object.
