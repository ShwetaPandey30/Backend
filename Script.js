// const someValue = require("./math");
// const info = require("./fruitsfruits")

// // console.log(someValue) 
// console.log(info);

// const figlet = require("figlet");

// figlet("Shweta Pandey", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import modules
import { sum, p } from "./math.js";
import { generate, count } from "random-words";

console.log(sum(1,2));
console.log(generate());

// import package