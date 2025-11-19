// 1.how to declare a variable in using let and const
const fatherName = "Parvej";
let season = "winter";
season = "summer";

// 2.Conditions
//  6 basic conditions: >,<, ===, !==, <=, >=
//  multiple conditions: &&, ||

if (fatherName === "parvej" || season === "rainy") {
  console.log("");
} else if (fatherName === "Parvej") {
} else {
}
// 3.Array declare
// index:  0,1,2,3,4
// length, push
const num = [1, 2, 3, 4, 5];
num[0] = 10;

// 4. loop
for (let i = 0; i < num.length; i++) {
  const number = num[i];
  console.log(number);
}

// 5. function
function multiply(a, b) {
  const result = a * b;
  return result;
}
const output = multiply(10, 20);

// 6. object
// access property by name
const student = {
  name: "abdul",
  age: 25,
  movies: ["king khan", "dhakar mastan"],
};
const myVariable = "age";

console.log(student.age); //direct by property 
console.log(student["name"]); //access via property name string
console.log(student[myVariable]); // access via property name in a variable
