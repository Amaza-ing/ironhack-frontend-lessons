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
