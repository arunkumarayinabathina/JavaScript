const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num=> console.log(num * 2)));

// const finalnums = numbers.forEach(num => num * 2);
// console.log(finalnums);

// map
const squares = numbers.map((num)=>num*num)
console.log(squares)

// filter
const filteredNums = squares.filter((num)=>num%2==0);
console.log(filteredNums)

// fill
filteredNums.fill(0,0,1);
console.log(filteredNums)

// reduce
const result = numbers.reduce((acc,ele)=>acc+ele,0);
console.log(result)



