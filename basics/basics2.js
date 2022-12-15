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