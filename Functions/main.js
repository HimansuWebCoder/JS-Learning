//? Functions
//? Built-in browser functions

//

// const myText = 'I am a string';
// const newString = myText.replace('string', 'programmer');
// console.log(newString);
// the replace() string function takes a source and a target string and replaces the source string,
// with the target string, and returns the newly formed string

//

// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);
// the join() function takes an Array, joinis all the array items together into a single string, and returns this new string

//

// const myNumber = Math.random();
// myNumber;
// the random() function generates a random number between 0 and up to but not including 1, and returns that number

//

// function draw() {

// 	ctx.clearRect(0,0,WIDTH,HEIGHT);
// 	for (let i = 0; i < 100; i++) {
// 		ctx.beginPath();
// 		ctx.fillStyle = 'rgba(255,0,0,0.5';
// 		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
// 		ctx.fill();
// 	}
// }

// draw()

//

// function random(number) {
// 	return Math.floor(Math.random()*number);
// }

//

//? Invoking Functions
// function myFunction() {
// 	alert('hello');
// }

// myFunction();
// calls the function once

// function call() {
// 	console.log("Hello World!");
// }

// call(); // invoked function

//

//? Function Parameters
// const myNumber = Math.random(); // don't require any parameter it is buil-in funciton browser

// const myText = 'I am a string';
// const newString = myText.replace('string', 'programmer'); // it has two parameters.

//

//? Optional Parameters
// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);

// const randSentence = ["i", "love", "programming"];
// const sentence = randSentence.join();
// console.log(sentence);

// const fruits = ["Mango", "Orange", "Grapes", "Coconut"];
// const fruit = fruits.join(" : ");
// console.log(fruit);

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);
//? If no parameter is included to specify a joining/delimiting character, a (,) is used by default.

//

//? Default Parameters // default values by adding = after name of parameter
// function hello(name = 'Himansu') {
// 	console.log(`Hello ${name}!`);
// }

// hello('Rinky');
// hello();

// function veg(name = "Tomato") {
// 	console.log(`This is ${name}`);
// }
// veg();
// veg("Patato");

//

// function fruits(name = "mango") {
// 	console.log(`This is my ${name}`);
// }

// fruits() // Default
// fruits("Car") 

//

//? Anonymous functions and arrow Functions
// function myFunction() {
// 	alert('hello');
// }
// but we can also create a function that doesn't have a name

// (function () {
// 	alert('hello');
// })
// This is called anonymous function. means there's function that no name;


//? Anonymous function Example
// function logKey(event) {
// 	console.log(`You pressed "${event.key}".`);
// }

// textBox.addEventListener('keydown', logKey);

// using an anonymous function:
// textBox.addEventListener('keydown', function(event) {
// 	console.log(`You pressed "${event.key}".`);
// });

// function veg(e) {
// 	console.log(`I love "${e}".`);
// }
// veg("Programming");

// function hello() {
// 	console.log("Hello");
// }

// console.log(hello(),veg("Expriment"));

// or 

// just experiment with this although it is not satified logical test failed skip it now for later solve this 
// function hello() {
// 	console.log("Hello!");
// }

// console.log(hello(), function(e) {
// 	console.log(`I love "${e}".`);
// })



//? Arrow Functions
// textBox.addEventListener('keydown', (event) => {
// 	console.log(`You pressed "${event.key}".`);
// });

//

//? if the function only 1 line in {}, you omit this:
// textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

//

//? if the function only takes 1 parameter, you can also omit the brackets () around parameter
// textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

// const originals = [1, 2, 3];

// const doubled = originals.map((item) => item * 2);

// console.log(doubled);

//

//? (item) => item * 2 is arrow function equivalent of:
// function doubleItem(item) {
// 	return item * 2;
// }

// const numbers = [1, 3, 5];
// const tripled = numbers.map((number) => number * 3);
// tripled;
// console.log(tripled);

//

//? Arrow function live example
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener(
//   "keydown",
//   (event) => (output.textContent = `You pressed "${event.key}".`)
// );

//

//? Function scope and conflicts
//? in details in MDN Docs

//? Active learning: Playing with scope
//? details in MDN DOCS

//? Build your own Function
//? Active learning: Let's build a function
// alert("This is a message");

//

//? The basic Function
//? this code in function-stage-4.html

//? Function Return values
//?  What are return values?
// const myText = "The weather is cold";
// const newString = myText.replace("cold", "warm");
// console.log(newString);
// Should print "The weather is warm"
// the replace() string function takes a string, replaces one substring with another, and returns a new string with the replacement made

// function multiply(a, b) {
// 	return a * b;
// }
// const crossing = multiply(12,12);
// crossing;
// const numberMultiply = multiply(10,10);
// numberMultiply;
// console.log(multiply(2,3));

// function divide(a, b) {
// 	const result = a / b;
// 	return result;
// }
// console.log(divide(100,10));

// function divide(a, b) {
// 	return a / b;
// }
// console.log(divide(100,50));

// function divide(a, b) {
// 	const divNumber = a / b;
// 	return divNumber;
// }
// console.log(divide(12,12));

// here if return not declared then final result not show.

// function add(a, b) {
// 	const adding = a + b;
// }
// console.log(add(12,12));

//

//? Using return values in your own functions
// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgba(255,0,0,0.5";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
//?  three value return x-coordinate, y-coordinate, and radius,

//

// function random(number) {
// 	return Math.floor(Math.random()* number);
// }
// this could be written as follows:
// function random(number) {
// 	const result = Math.floor(Math.random() * number);
// 	return result;
// }
//? but 1st version is quicker to write, and more compact;

//? Active Learning: our own return value function
//? see this in function-library.html
