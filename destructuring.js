// array destructuring
const numbers = [65, 21];
// const x = numbers[0]
// const y = numbers[1]

// const [a, b] = [91, 51];
// console.log(a, b); // 91 51

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [30, 34];
const [first, second] = boxify(90, 34);
console.log(boxify(90, 34)); // [ 90, 34
// console.log(x, y); // 65 21

const student = {
  name: "abdul",
  age: 25,
  movies: ["king khan", "dhakar mastan"],
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// object destructuring
// const { name, age } = { name: "Allu", age: 56, profession: "actor" };
// const { name, age } = { id: 12, name: "Allu", age: 14 };

const employee = {
  ide: "VS code",
  designation: "developer",
  machine: "computer",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 55,
    address: "Rajshahi",
    drink: "water",
    watch: {
       color: "black",
       price: 500,
       brand: "garmin"
    }
  },
};

const { machine, ide } = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification?.watch;