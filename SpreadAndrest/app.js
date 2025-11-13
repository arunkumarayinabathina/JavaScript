let nums = [1, 2, 3, 4, 5];
let updatednums = [...nums];
updatednums.push(6);

console.log(nums);
console.log(updatednums);

function one(a, b, ...c) {
  console.log(a, b);
  console.log(...c);
}
one(3, 4, 9, 0, 1);

let student = {
  name: "ravi",
  gender: "male",
};

let updateStudent = { ...student, age: 21 };

console.log(updateStudent);
