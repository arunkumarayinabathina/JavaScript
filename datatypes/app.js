// Primitive data types
let num = 3;
console.log(typeof num);
let str = "Arun";
console.log(typeof str);
let bool = true;
console.log(typeof bool);
let variableNotDefine;
console.log(typeof variableNotDefine);
let symb1 = Symbol('person');
console.log(typeof symb1);
let big = 123n;
console.log(typeof big);


let symbol1 = Symbol('@');
let symbol2 = Symbol('@');
console.log(symbol1 == symbol2)


let variableOne;
let variableTwo = null;
console.log(typeof variableOne,typeof variableTwo)


// Non- primitive data tyoes

const arr = ['A','B','C']
arr.push('D');
console.log(arr);


const student = {
    name:"Arun",
    age:22,
    qualification:'B-Tech'
}
student.cgpa = 7.4
console.log(student)

// Check the type of arr - it will show 'object' because arrays are special objects in JavaScript
console.log(typeof arr); // 'object'

// To properly check if arr is an array, use Array.isArray()
console.log(Array.isArray(arr)); // true

// Check the type of student - also shows 'object' as it's an object literal
console.log(typeof student); // 'object'

// In JavaScript, both arrays and objects return 'object' when using typeof
// This is because arrays are specialized objects with numeric indices and length property
// Array.isArray() was introduced to specifically identify arrays



// functions
// remember for further