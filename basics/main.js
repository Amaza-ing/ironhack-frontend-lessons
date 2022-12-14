// definición e inicialización de variables
let myVar, myOtherVar;
let myStr = "Hola mundo";
let myNumber = 100;
let myBoolean = true;
let myNull = null;
let myUndefined; // = undefined;

// var myOldVariable -> no utilizar var para crear variables

myVar = 123;

console.log(myVar);
console.log("myStr: ", myStr);
console.log("myNumber: ", myNumber);
console.log("myBoolean: ", myBoolean);
console.log("myNull: ", myNull);
console.log("myUndefined: ", myUndefined);

// en javascript se puede redefinir el tipo de dato, pero no es una buena práctica
myStr = 1234;
console.log("type of myStr: ", typeof myStr);
console.log(myStr);

myStr = "Hola Ironhack";
console.log("type of myStr: ", typeof myStr);
console.log(myStr);

// las constantes no se pueden redefinir
const myConst = "esto es una constante";
console.log(myConst);

let num = 5;
let str = "5";

// Coerción de tipos de datos
console.log(num + str); //55
console.log(num - str); //0

// tipos de comillas en javascript
let str1 = "hola 'que' \"pasa\"";
let str2 = 'hola "que" \'pasa\'';
let str3 = `el valor de la variable myStr es: ${myStr}. Esto se puede hacer gracias a los template string `;

console.log(str1);
console.log(str2);
console.log(str3);

// métodos de los string
console.log(str3[3]);
console.log(str3.charAt(3));
console.log(str3.length);
console.log(str3.substring(0, 9));

// en javascript tenemos valores truthy y falsy, los siguiente son truthy:
let str4 = "truthy";
let number = 123;
let myBoolean2 = true;
// null & undefined son falsy

if (str4) {
  console.log("The condition is truthy");
} else {
  console.log("The condition is falsy");
}


// distintos tipos de comparadores de igualdad
let str5 = "30";
let num2 = 30;

if (str5 == num2) {
  console.log("ambos tienen el mismo valor, pero pueden tener distinto tipo");
} else {
  console.log("los valores son distintos");
}

if (str5 === num2) {
  console.log("ambos tienen el mismo valor y el mismo tipo");
} else {
  console.log("los valores o los tipos son distintos");
}

let newVar = num > 10 ? "mayor a 10" : "menor a 10";


// bucles en javascript
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

for (let j = 0; j <= 5; j++) {
  console.log(j);
}

for (const elem of str4) {
  console.log(elem);
}


// arrays en javascript
const myEmptyArray = [];
// se pueden mezclar elementos de distinto tipo dentro de un array, pero es una mala práctica
const myArray = [str, number, myNull, myBoolean, myEmptyArray];
console.log(myArray);

myEmptyArray.push(123);
myEmptyArray.push(456);
myEmptyArray.push(789);
myEmptyArray.unshift(0);
console.log(myEmptyArray);

myEmptyArray.pop();
console.log(myEmptyArray);
myEmptyArray.shift();
console.log(myEmptyArray);

myArray.splice(1, 0, "new element")
console.log(myArray);

myArray.forEach((elem) => {
  console.log(elem);
})

const newArray = [myArray]
console.log(...newArray);


// objetos en javascript

const person = {
  nombre: "Adrián",
  edad: 32,
  ciudad: "Málaga",
  gustos: [
    "cine",
    "videojuegos",
    "senderismo"
  ],
  dirección: {
    calle: "calle",
    portal: 4
  }
}

console.log(person);

person.ciudad = "Madrid";
person.dirección.calle = "otra calle";
console.log(person);

console.log(person["nombre"]);


// call by value & call by reference
let a = 10;
let b = a;
a = 20;
console.log(b);

let c = {key: "value"};
let d = c;
c.key = "patata";
console.log(d);
