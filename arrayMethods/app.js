let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log("After push:", arr);

arr.pop();
console.log("After pop:", arr);

arr.shift();
console.log("After shift:", arr);

arr.unshift(1);
console.log("After unshift:", arr);

arr.splice(2, 2, 10);
console.log("After splice:", arr);

let subArr = arr.slice(1, 4);
console.log("After slice:", subArr);

let index = arr.indexOf(10);
console.log("Index of 10:", index);

let hasThree = arr.includes(3);
console.log("Includes 3:", hasThree);

