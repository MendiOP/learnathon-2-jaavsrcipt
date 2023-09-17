// let num = 10;
// let n = 209;
// console.log(num + n);

// var name = "Munna";
// var name = 10;
// console.log(name);

// var num = 10;
// function getNum() {
//     var sq = num * num;
//     console.log(sq);
//     return sq;
// }
// console.log(num);
// console.log(getNum());

// let whatIsThis = function getNum(number) {
//     return number * 21;
// }
// let num = whatIsThis(21);
// console.log(num);
// console.log(whatIsThis(19));

// let arrow = (number, s) => {
//     return number * 23 + s;
// }

// console.log(arrow(20, 's'));


//example of Hoisting
// doWhat();
// console.log(b);

// var b;
// function doWhat() {
//     var b = 20;
//     console.log("Hello " + b);
// }

// const arr = [];
// if (arr) {    // array and objects are always TRUE in js irrespective of they empty or full
//     console.log("Inside");
// }

//but {"", undefined, NaN, 0, false} these are always false in js
// if ("") {
//     console.log("This is not going to be printed")
// } else {
//     console.log("This is going to be printed");
// }

//NaN is Not a Number.
// console.log(isNaN(NaN));         // true or False ??? Always True.
// console.log(isNaN(5));           // false
// console.log(isNaN("Hello"));     // true, because "Hello" is a String.

//what happens now?
// if (NaN) { //Nan itself is false always. So weirddddd...
//     console.log(NaN);
// } else {
//     console.log("Is it here?");
// }

//taking input from user
// const prompt = require("prompt-sync")();
// let n1 = parseInt(prompt("Give n1 : ")); // prompt takes everything as a string. so make it number first
// console.log(typeof (n1));
// for (let i = 1; i * i <= n1; i++) {
//     if (n1 % i === 0)
//         console.log(i, n1 / i);
// }


//this keyword is interesting in js

// const tempObject = {
//     name: "Munna",
//     add: "Dhaka",
//     getName() {
//         console.log(this.name);
//     },
//     getThisObject() {
//         console.log(this); // here "this" returns the current object
//         // it is inside.
//     }
// }

// tempObject.getName();
// tempObject.getThisObject(); // it will show the "tempObject" fully, everything inside it.

// //now if we add another function
// tempObject.getAnotherThisObject = function () {
//     console.log(this);
// }

// tempObject.getAnotherThisObject();

//now what happerns??
// console.log(this); //it shows ans Empty object {}, because when "this" is outside of any method or function,
//js maps it with an empty object.


//now, as this is inside an function, it will simply return the "window" object in a browser and "global object" in node.js
// function thisFunction() {
//     let name = "Vivasoft";
//     let number = Infinity;
//     console.log(this);
// }

// thisFunction();

//constructor function
// const random = function (title) {
//     this.title = title;
//     console.log(this);
// }
// //creates a empty object {} first, then points the "this" to the object and add the property to the object
// const r1 = new random("Harry Potter");


// const VugiChugi = {
//     fname: "Mehedi",
//     lname: "hasan",
//     arr: ['M', 'U', 'N', 'N', 'A'],

//     showName() {
//         this.arr.forEach(function (item) {
//             console.log(this.fname + " " + this.lname + " " + item);
//         }, this);  // here "this" means the current object VuguChugi. if we delete this, then the callback function will act like
//                  //  another function outside the object.
//     }
// }

// VugiChugi.showName();