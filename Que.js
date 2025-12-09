
// 1. 
const variableScopeExample = () => {
  var x = 10;   
  let y = 20;   
  const z = 30; 

  console.log("var x:", x);
  console.log("let y:", y);
  console.log("const z:", z);
};
variableScopeExample();



// 2.
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

const getSecondFruit = () => fruits[1];

console.log("Second fruit:", getSecondFruit());



// 3.
const modifyArray = (arr) => {
  arr.push("New Element");
  arr.pop();
  return arr;
};

console.log("Modified array:", modifyArray([1, 2, 3, 4]));
// 4.
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = (arr) => arr.map(num => num * num);

console.log("Squared numbers:", squareNumbers(numbers));

// 5. 
const filterOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);

console.log("Odd numbers:", filterOddNumbers([10, 11, 12, 13, 14, 15]));

// 6.

const person = {
  name: "Sarthak",
  age: 22,
  occupation: "Web Developer"
};

const greeting = (obj) => {
  console.log(
    `Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`
  );
};

greeting(person);


// 7. 

const rectangleArea = (obj) => obj.width * obj.height;

console.log("Area of rectangle:", rectangleArea({ width: 8, height: 6 }));


// 8. 

const getObjectKeys = (obj) => Object.keys(obj);

console.log("Object keys:", getObjectKeys({ a: 10, b: 20, c: 30 }));


// 9. merge two objects

const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);

console.log(
  "Merged object:",
  mergeObjects({ name: "A" }, { age: 22, city: "Mumbai" })
);



const nums = [5, 15, 25, 35];

const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);

console.log("Sum of array:", sumArray(nums));
