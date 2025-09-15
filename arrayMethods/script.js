const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// forEach
numbers.forEach(num => {
  console.log(num);
});

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// fill
const filled = numbers.fill(1000, 1, 2);
console.log(filled);
