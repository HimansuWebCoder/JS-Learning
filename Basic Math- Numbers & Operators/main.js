// Basic Maths in Javascript
// Types of Numbers
// Integers e.g. 10, 400, or -5.
// Floating point numbers(floats) ex:- 12.5, 45.234544;
// Doubles spedific type of floating

// Number: BigInt64Array, Octal, Hexadecimal;

//

// It's all numbers to me
// const myInt = 5;
// const myFloat = 6.622;
// myInt;
// myFloat;
// console.log(typeof myInt);
// console.log(typeof myFloat);
// const int = 10;
// const myFloat = 2.333;
// int;
// myFloat;

//

//? Useful Number methods
// const lotsOfDecimal = 1.75545689389449;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// const Decimal = 12.222;
// Decimal;
// const oneDecimal = Decimal.toFixed(1);
// oneDecimal;
// const twoDecimal = Decimal.toFixed(2);
// twoDecimal;
// const threeDecimal = Decimal.toFixed(3);
// threeDecimal;

// const decimal = 2.34345;
// decimal;

// const decimal1 = 1.32453;
// decimal1;

// const decimal2 = 3.23443;
// decimal2;

// const decimal3 = 4.2321;
// decimal3;

//

//? Converting to number data types
// let myNumber = "45";
// myNumber += 3;
// myNumber;
// console.log(typeof myNumber);
// to fix
// let myNumber = "45";
// myNumber = Number(myNumber) + 3;
// myNumber;
// console.log(typeof myNumber);

// let number = "23";
// number += 2;
// number;
// console.log(typeof number);
// to fix
// let number = "45";
// number = Number(number) + 2;
// number;
// console.log(typeof number);

// let number1 = "55";
// number1 += 5;
// number1;
// console.log(typeof number1);
// to fix
// let number1 = "55";
// number1 = Number(number1) + 5;
// number1;
// console.log(typeof number1);

// let number2 = "10";
// number2 += 5;
// number2;
// console.log(typeof number2);
// to fix
// let number2 = "10";
// number2 = Number(number2) + 5;
// number2;
// console.log(typeof number2);

// let number3 = "25";
// number3 += 5;
// console.log(typeof number3);
// to fix
// let number3 = "25";
// number3 = Number(number3) + 5;
// number3;
// console.log(typeof number3);

// let number4 = "50";
// number4 += 10;
// number4;
// console.log(typeof number4);
// to fix
// let number4 = "50";
// number4 = Number(number4) + 10;
// number4;
// console.log(typeof number4);

// let number5 = "100";
// number5 += 100;
// number5;
// console.log(typeof number5)
// to fix;
// let number5 = "100";
// number5 = Number(number5) + 100;
// number5;

// let number6 = "200";
// number6 += 200;
// number6;
// console.log(typeof number6);
// to fix
// let number6 = "200";
// number6 = Number(number6) + 200;
// number6;
// console.log(typeof number6);

//

//? Arithmetic Operators
// console.log(4 + 3);
// console.log(20 - 12);
// console.log(3 * 3);
// console.log(12/4);
// console.log(8%3);
// console.log(4**2);
// console.log(4 + 9);
// console.log(120 - 20);
// console.log(12 * 12 * 12);
// console.log(180 / 12);
// console.log(15%5);
// console.log(120%7);
// console.log(78%12);

//

// const num1 = 10;
// const num2 = 50;
// console.log(9 * num1);
// console.log(num1 ** 3);
// console.log(num2 / num1);

// const myBal = 10000;
// const myAnotherBal = 50000;
// console.log(myBal + myAnotherBal);
// console.log(myBal * 2 / myAnotherBal);
// console.log(100 / myBal * myAnotherBal);

//

// console.log(4 + 3 + 10);
// console.log(num2 % 9) * num1;
// console.log(num2 + num1 / 8 + 2);

//

//? Operator Precedence
// const num1 = 10;
// const num2 = 50;
// console.log(num2 + num1 / 8 + 2)
//* multiply and divide are always done first then add and subtract(calculation is always evaluated from left to right); ha-gu-mi-fe rule (from odia), divide-multiply-addition-subtraction (from english);
//* you can put ();
// console.log((num2 + num1) / (8 + 2));

//

//? Increment and decrement operators
// guessCount++;
// 3++;
// let num1 = 4;
// num1++;
// num1;
 
// let hima = 10;
// hima++;
// hima;

// let rinky = 100;
// rinky++;
// rinky;

// let cars = 10 + 10;
// cars++;
// cars;

// let network = 10 + 20 * 20;
// network++;
// network;

// let fruits = (10 + 10) / 100;
// fruits++;
// fruits;
 
// let animals = (20 - 10) / 100 * 20 % 10;
// animals++;
// animals;

// let counting = 2 / 4 * 4 % 3;
// counting++;
// counting;

// let counting2 = 2 / 4;
// counting2++;
// counting2;



// let num1 = 5;
// num1++;
// num1;
// let num2 = 10;
// num2++;
// num2;

//

// let num2 = 6;
// num2--;
// num2;

//

//? Assignment Operators
// let x = 3; // x contains value of 3
// let y = 4; // y contains value of 4
// x = y; // x now contains the same value of y contains, 4
// x
// y

// let a = 10;
// let b = 5;
// a = b;
// a;
// b;

// let himansu = 20;
// let rinky = 10;
// himansu = rinky;
// himansu;
// rinky;


//

//  let x = 3;
//  let y = 4;
//  x += 4; // x = x + 4
//  x
//  x -= 3; // x = x - 4
//  x
// x *= 3; // x = x * 3
// x
// x /= 5; // x = x / 5
// x

// let a = 3;
// let b = 10;
// a += 10; // a = a + 10;
// a;
// b += 10;
// b;

// let x = 10 / 2;
// let y = 2 / 10;
// x += 5;
// x;
// y+= 5;
// y;


// let a = 5;
// let b = 10;
// a += 5;
// a;
// b += 10;
// b;
// a += b;
// a;
// b += a;
// b;

//

// Active learning: sizing a canvas box
// see in MDN page for understand only math parts
// let x = 50;
// let y = 50;

//

// x = 50;
// y = 50;
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, x, y);

//

//? Comparison Operators
// console.log(5 === 2 + 4);
// console.log(5 === 2 + 3);
// console.log(5 !== 2 + 3);
// console.log(5 !== 2 + 4);
// console.log(10 < 2);
// console.log(10 > 2);
// console.log(10 <= 2);
// console.log(10 >= 2);
// console.log(5 !== 5);
// console.log(5 !== 3);
// let number = (5 === 3);
// number;
// let number1 = (5 === 5);
// number1;
// let number3 = (5 !== 2);
// number3;
// let number4 = (5 !== 5);
// number4;

//

//? Another Active Learning
// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "start machine") {
//     btn.textContent = "stop machine";
//     txt.textContent = "the machine has started!";
//   } else {
//     btn.textContent = "start machine";
//     txt.textContent = "the machine is stopped";
//   }
// }

//

//? and we rewrite function using arrow function

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// const updateBtn = (updateBtn) => {
//   if (btn.textContent === "start machine") {
//     btn.textContent = "stop machine";
//     txt.textContent = "the machine has started!";
//   } else {
//     btn.textContent = "start machine";
//     txt.textContent = "the machine is stopped";
//   }
// };
// btn.addEventListener("click", updateBtn);
