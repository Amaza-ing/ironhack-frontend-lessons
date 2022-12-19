console.log("Hola mundo");

// let timeoutId = setTimeout(() => {
//   console.log("inside timeout");
// }, 2000);

// console.log("timeoutId: ", timeoutId);

// clearTimeout(timeoutId);

// let intervalId = setInterval(() => {
//   console.log("inside setInterval");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 4500)


const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];


// const getDirections = (step, callback, errorCallback) => {
//   setTimeout(() => {

//     console.log(directions[step]);
  
//     if (directions[step]) callback();
//     else errorCallback("Instructions not found");
    
//   }, 1000);
// }

// Callback Hell
// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         console.log("Fin del camino");
//       }, (error) => console.log(error))
//     }, (error) => console.log(error))
//   }, (error) => console.log(error))
// }, (error) => console.log(error))


const promiseDirections = (step) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
      if (directions[step]) {
        console.log(directions[step]);
        resolve();
      } 
      else reject("Instructions not found");

    }, 1000);
  })
}

// promiseDirections(0)
//   .then(() => promiseDirections(1))
//   .then(() => promiseDirections(2))
//   .then(() => promiseDirections(3))
//   .then(() => console.log("Fin del camino"))
//   .catch((error) => console.log(error));


// const getMexicanFood = async () => {
//   try {
//     await promiseDirections(0);
//     await promiseDirections(1);
//     await promiseDirections(2);
//     await promiseDirections(3);

//     // for(let i = 0; i < directions.length; i++) {
//     //   await promiseDirections(i);
//     // }

//     console.log("You have arrived to the Mexican cantina");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getMexicanFood();




let users;

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => users = data);

// setTimeout(() => {
//   console.log("users: ", users);
// }, 400)

const getUsers = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  users = data;
  console.log("users: ", users);
  let title = document.querySelector("#title");
  title.textContent = `Hola ${users[0].name}`;
}

getUsers();

