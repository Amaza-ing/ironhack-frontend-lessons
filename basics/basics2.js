// functions declarations & function expresions
function functionDeclaration() {
  console.log("inside function declaration");
}

functionDeclaration();

const functionExpresion = function(str) {
  console.log(str);
}

functionExpresion("function expresion parameter")



// callbacks
const myFunction = function(callback) {
  console.log("inside myFunction");
  let str = "patata";
  callback(str);
}

const sayMyName = function() {
  console.log("Adrián");
}

const sayAString = function(str) {
  console.log(str);
}

myFunction(sayMyName);
myFunction(sayAString);



const mathOperations = function (num1, num2, callback) {
  console.log("el primer número es: ", num1);
  console.log("el segundo número es: ", num2);
  const result = callback(num1, num2);
  console.log("el resultado es: ", result);
}

const sumNumbers = function (n1, n2) {
  return n1 + n2;
}

const multiplyNumbers = function (n1, n2) {
  return n1 * n2;
}

mathOperations(4, 5, sumNumbers);
mathOperations(3, 8, multiplyNumbers);


// setTimeout(function () {
//   console.log("inside anonymous function inside setTimeout");
// }, 2000);
// console.log("esto está después del setTimeout");



const arrowFunction = () => {
  console.log("i'm an arrow function");
}
arrowFunction();

const sum = (n1, n2) => {
  return n1 + n2;
}
console.log(sum(1, 2));

const msgToUpperCase = msg => msg.toUpperCase();
console.log(msgToUpperCase("hola mundo"));



// add a key value pair to an object

const myObject = {};
console.log("myObject: ", myObject);
myObject.key = "value";
myObject["anotherKey"] = "another value";
console.log("myObject modified: ", myObject);


// array methods: map
const numArray = [1, 2, 3, 28, 13, 4, 5, 10, 20];
console.log("num array: ", numArray);

const modifiedArray = numArray.map((number) => number * 2);
console.log("modified array: ", modifiedArray);

const countries = ["Spain", "Argentina", "Venezuela"];
console.log(countries);
const upperCaseCountries = countries.map((country) => country.toUpperCase());
console.log(upperCaseCountries);

const person1 = {
  name: "Alberto",
  age: 30,
  city: "Madrid"
}

const person2 = {
  name: "Beatriz",
  age: 25,
  city: "Barcelona"
}

const person3 = {
  name: "Carmen",
  age: 20,
  city: "Málaga"
}

const people = [person1, person2, person3];
console.log(people);

const ages = people.map((person) => person.age);
console.log(ages);

const olderPeople = people.map((person) => {
  person.age *= 2;
  return person;
})
console.log(olderPeople);



// array methods: filter

const evenNumbers = numArray.filter((number) => (number % 2) === 0);
console.log(evenNumbers);



// array methods: reduce

const sumResult = numArray.reduce((accum, currentValue) => {
  return accum + currentValue;
}, 0)
console.log("sum result: ", sumResult);

const countriesConcat = countries.reduce((accum, currentValue) => {
  return accum + " " + currentValue;
}, "")
console.log("countries concat: ", countriesConcat);

const countriesObject = countries.reduce((accum, currentValue) => {
  accum[currentValue] = currentValue.length;
  return accum;
}, {})
console.log("countries object: ", countriesObject);



// array methods: sort
const sortedCountries = [...countries];
console.log(sortedCountries.sort());
console.log(countries);

// console.log(numArray.sort()); // this modifies the original array and sort it alphabetically

const sortedNumbers = [...numArray];
sortedNumbers.sort((a, b) => a - b);
console.log("sorted numbers: ", sortedNumbers);

const countriesByLength = [...countries].sort((a, b) => {
  return b.length - a.length;
})
console.log(countriesByLength);

const peopleByAge = [...people].sort((a, b) => {
  return b.age - a.age;
})
console.log(peopleByAge);


// array methods: reverse
const reversedNumbers = [...numArray].reverse();
console.log(reversedNumbers);