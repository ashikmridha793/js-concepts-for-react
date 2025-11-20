const num = [21, 24, 83, 54, 45];
const student = {
  name: "Abdul",
  age: 25,
  movies: ["king khan", "dhakar mastan"],
};

// 1. template string
const about = `My name ${student.name} age ${student.age} has number ${num[2]}
also like movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 === 0; 
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}
// 3. spread operator
const newNumbers = [...num];
// create a new array from an older array and add an element
const currentNumbers = [...num, 787];

num.push(88)
num.push(88)
num.push(88)
num.push(88)




console.log(newNumbers);
console.log(num);
console.log(currentNumbers);


// Summary:- কোনো array বা object কে নতুন করে কপি করতে চাইলে 
// spread operator (...) ব্যবহার করতে পারি। আর যদি নতুন করে কোন array 
// বা object এর মধ্যে আগের array বা object এর সব গুলা element বা 
// property রাখতে চাই তাহলে ও spread operator ব্যবহার করতে পারি।