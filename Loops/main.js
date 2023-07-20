//? loops

//? The for...of loop
// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   console.log(cat);
// }

// const fruits = ["Mango", "PineApple", "Lichi", "Banana"];

// for (const fruit of fruits) {
// 	console.log(fruit);
// }

// const veg = ["Potato", "Tomato", "Brinjal", "Carrot"];

// for (const vegitem of veg) {
// 	console.log(vegitem);
// }

//

// const fruits = ["Mango", "Orange", "Guava", "Lichi", "Apple"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

//

// const flowers = ["Haragaura", "Gendu", "Tagar"];

// for (const x of flowers) {
//   console.log(x);
// }

//

// const vehicle = ["Car", "Bus", "Train", "Cycle"];

// for (let i = 0; i < vehicle.length; i++) {
//   console.log(vehicle[i]);
// }

//

// const animals = ["Elephants", "Dog", "Tiger", "Lion"];

// for (const animal of animals) {
// 	console.log(animal);
// }

//

// const books = ["Think and Grow Rich", "You can win"];

// let bookName = "";

// const para = document.createElement("p");
// document.body.appendChild(para);

// for (const book of books) {
//     console.log(book);
//   bookName += `${book}`;
// }
// para.innerHTML = bookName;
// para.textContent = bookName;

//

// const skills = ["Programming", "Coding", "Design", "Writing", "Excel"];

// let mySkills = "These are My Skill:-";

// const para = document.createElement("p");
// document.body.appendChild(para);

// for (const skill of skills) {
//   mySkills += `${skill} `;
// }
// para.innerHTML = mySkills;

//

// const $flower = ['tagar', 'gendu', 'sunflower', 'haragaura'];
// for (const x of $flower) {
//   console.log(x);
// }

//

// const _vehicle = ['truck', 'car', 'bus', 'motorcycle', 'aeroplane', 'taxi', 'auto'];
// for (const y of _vehicle) {
//   console.log(y);
// }

// or
// const newVehicle = ['truck', 'car', 'bullet', 'auto', 'aeroplane', 'taxi'];
// for (let i = 0; i < newVehicle.length; i++) {
//   console.log(newVehicle[i]);
// }

//

// const flower = ["mandar", "Tagar", "haragaura"];
// for (const f of flower) {
// 	console.log(f);
// }

// or

// const flower = ["mandar", "Tagar", "haragaura"];
// for (let i = 0; i < flower.length; i++) {
//   console.log(flower[i]);
// }

//

// const weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// for (const days of weekDays) {
//   console.log(days);
// }

// //? for...in 
// //? iterate over object property name;

// const fruits = {
// 	name:"mango",
// 	color:"yellow"
// }

// for (const x in fruits) {
// 	console.log(x); // here is only property name not property value
// }

// const fruits2 = [
// 	{name:"mango"},
// 	{color:"yellow"}
// ]

// for (const x of fruits2) {
// 	console.log(x.name + " " + x.color); // here is only property value not property name
// }

// for (const x in fruits2) {
	// console.log(x[0].name)
	// console.log(fruits2[0].name)
	// console.log(fruits2[0]);
// }

// console.log(fruits2[0].name);

//

// const weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// for (let i = 0; i < weekDays.length; i++) {
//   console.log(weekDays[i]);
// }

//

//? map() and filter()

// function toUpper(string) {
// 	return string.toUpperCase();
// }

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

//

// function toLower(name) {
// 	return name.toLowerCase();
// }

// const fruits = ["mango", "orange", "guava", "lichi", "PineApple"];
// const lowerFruits = fruits.map(toLower);
// console.log(lowerFruits);

//

// function multiply(a, b) {
// 	return a * b;
// }
//  const numbers = [1,2,3,4,5,6];

//  const newNumbers = numbers.map(multiply);
//  console.log(newNumbers);

//

// function toUpper(fruitnames) {
//   return fruitnames.toUpperCase();
// }

// const fruits = ['banana', 'apple', 'lichi', 'guava'];
// const lowerFruits = fruits.map(toUpper);

// console.log(lowerFruits);

//

// function lCat(cat) {
// 	return cat.startsWith('L');
// }

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter(lCat);
// console.log(filtered);

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter((cat) => cat.startsWith('L'));
// console.log(filtered);

//

//? The Standard for loop
// for (initializer; condition; final-expression) {
// code to run
// }

//

// let str = "";
// for (let i = 0; i < 9; i++) {
//   str = str + i;
//   str += i;
// }
// console.log(str);

// let score = "";
// for (let i = 0; i < 20; i++) {
// 	score += i + "\n";
// }
// console.log(score);

//

// let person = "";
// for (let i = 0; i < 10; i++) {
//   person += i + "\n";
//   person += i + ",";
//   person += i + " ";
// }
// console.log(person);

//

// const fruits = ["Mango", "Orange", "Guava", "Apple", "Lichi"];

// let sweet = "";
// for (let i = 0; i < fruits.length - 1; i++) {
//   sweet += fruits[i] + " ";
// }
// console.log(sweet);

// const juice = ["Podina", "Orange", "Lichi", "Mango"];

// let i;
// for (i = 0; i < juice.length - 1; i++) {
//   i += juice[i] + " ";
// }
// console.log(i);

//

// const btn = document.createElement("button");
// btn.innerHTML = "Button";
// document.body.appendChild(btn);
// btn.addEventListener("click", loop);
// function loop() {
//   let hima = "";
//   for (let i = 0; i < 100; i++) {
//     hima += i + "\n";
//   }

//   const para = document.createElement("p");
//   para.textContent = hima;
//   document.body.appendChild(para);
// }
// console.log(hima);

//

// let hima = "";
// for (let i = 0; i < 10; i++) {
//   hima = hima + i;
//   hima += i;
// }

// console.log(hima);

//

// let mamuni = "";
// for (let i = 0; i < 20; i++) {
// 	mamuni += i + " ";
// }
// console.log(mamuni)

//

// for (let i = 0; i < 9; i++) {
// console.log(i);
// more statements
// }

//

//? Looping through collections with a for loop
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const cat of cats) {
// 	console.log(cat);
// }

//

//? we could write above code like this:
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for ( let i = 0; i < cats.length; i++) {
// 	console.log(cats[i]);
// }

// const vegetables = ["Patato", "Tomato", "Brinjal", "Carrot"];

// for (let i = 0; i < vegetables.length; i++) {
// console.log(i)
// 	console.log(vegetables[i]);
// }

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
// 	myFavoriteCats += `${cat},`
// }

// console.log(myFavoriteCats);

//

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {
// We are at the end of the array
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]},`;
//   }
// }

// console.log(myFavoriteCats);

//

// const fruits = ["mango", "orange", "Amla", "Apple", "Lichi"];

// let myFruits = "";

// for (let i = 0; i < fruits.length; i++) {
//   if (i === fruits.length-1) {
//     myFruits += `hello ${fruits[i]}`;
//   } else {
//     myFruits += `${fruits[i]},`;
//   }
// }

// console.log(myFruits);

//

//? Exiting loops with break

// let i = 0;

// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i = i + 1;
// }

// console.log(i);

// let i = 5;

// while (i < 10) {
// 	if (i === 6) {
// 		break;
// 	}
// 	i = i + 1;
// }
// console.log(i);

// let i = 0;

// while (i < 10) {
// 	if (i === 8) {
// 		break;
// 	}
// 	i += 1;
// }
// console.log(i);

// let i = 0;

// while (i <= 10) {
//   if (i === 9) {
//     break;
//   }
//   i += 1;
// }
// console.log(i);

//

// Expected output: 3

// let text = "";
// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   text += i + "\n";
// }

// console.log(text);

//

// let number = "";

// for (let i = 0; i < 100; i+= 2) {
//   if (i === 50) break;
//   number += i + "\n";
// }

// console.log(number);

//

// let oddNumber = "";

// for (let i = 0; i < 100; i += 3) {
//   if (i === 66) break;
//   oddNumber += i + "\n";
// }
// console.log(oddNumber);

//

// const fruits = ["Mango", "Orange", "Apple", "Lichi"];

// let fruit = "";
// for (let i = 0; i < fruits.length; i++) {
//   if (i === 2) break;
//   fruit += fruits[i] + "\n";
// }
// console.log(fruit);

//or

// const fruits = ["Mango", "Orange", "Apple", "Lichi"];

// let myFavFruits = "";

// for (const fruit of fruits) {
//   if (fruit === "Apple") break;
//   myFavFruits += `${fruit} `;
// }
// console.log(myFavFruits);

//

// const contacts = [
//   "Himansu:9861194145",
//   "Rinky:9827852631",
//   "bou:7894041941",
//   "bapa:9777273769",
// ];
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const searchName = input.value.toLowerCase();
//   input.value = "";
//   input.focus();
//   para.textContent = "";
//   for (const contact of contacts) {
//     const splitContact = contact.split(":");
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = `${splitContact[0]}' s number is ${splitContact[1]}.`;
//       break;
//     }
//   }
//   if (para.textContent === "") {
//     para.textContent = "Contact not found.";
//   }
// });

//

//? Skipping iterations with continue
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   para.textContent = "Output: ";
//   const num = input.value;
//   input.focus();
//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }
//     para.textContent += `${i} `;
//   }
// });

// let himansu = "";
// for (let i = 1; i <=10; i++) {
// 	if (i === 5) {
// continue;
// break;
// 	}
// 	console.log(i);
// }

// let score = "";
// for (let i = 0; i <= 50; i++) {
// 	if (i === 25) {
// continue;
// break;
// 	}
// 	console.log(i)
// }

//

//? while and do... while
//Syntax
// initializer
// while (condition) {
// code to run

// 	final-expression
// }

// const veg = ["Tomato", "Potato", "Carrot", "Brinjal"];

// let vegetables = "these are:-";

// let i = 0;
// while (i < veg.length) {
// 	vegetables += `${veg[i]} `;
// 	i++;
// }
// console.log(vegetables);
// vegetables;

//

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }

//   i++;
// }

// console.log(myFavoriteCats);

// let play = ["Piano", "Musics", "Tabla"];

// let instruments = "These are playing instruments: ";

// let i = 0;
// while (i < play.length) {
// 	instruments += `${play[i]} `;
// 	i++;
// }
// console.log(instruments);
// instruments;

// This is a little bit of logic function that is  a little bit advanced thinking I or we will do it later skipp for now.
// const randomNames = ["himansu", "URBASI", "sipu", "SUBRAT", "lalit", "SANDHYA"];

// let capitalNames = "these are capitals names: ";

// let i = 0;
// while (i < randomNames.toUpperCas) {

// }

//

//? do while
// initializer;
// do {
// code to run

//   final - expression;
// } while (condition);

// const veg = ["Patato", "Carrot", "Brinjal", "Tomato"];

// let myVeg = "My fav veg are: ";

// let i = 0;
// do {
// 	myVeg += `${veg[i]},`;
// 	i++;
// } while (i < veg.length);
// console.log(myVeg);
// myVeg;

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// let i = 0;

// do {
// 	if (i === cats.length - 1) {
// 		myFavoriteCats += `and ${cats[i]}.`;
// 	} else {
// 		myFavoriteCats += `${cats[i]}, `;
// 	}

// 	i++;
// } while (i < cats.length);

// console.log(myFavoriteCats);

// const hobbies = ["Drawing", "Animations", "Coding", "Logic", "Programming"];

// let myHobbies = "These are my Hobbies: ";

// let i = 0;
// do {
// myHobbies = `${hobbies[i]},`; // There is a small mistake you will notice. only = here not += every time add another things, so conscioudly do this, otherwise show error.
// 	myHobbies += `${hobbies[i]}, `;
// 	i++;
// } while (i < hobbies.length);
// console.log(myHobbies);

//

//? which loop type should you use?
//? see in MDN in Details

//

//? for...of:
// for (const item of array) {
// 	code to run
// }

//

//? for:
// for (initializer; condition; final-expression) {
// 	code to run
// }

//

//? while:
// initializer
// while (condition) {
// 	code to run

// 	final-expression
// }

//

//? and finally do...while
// initializer
// do {
// 	code to run
// 	final-expression
// } while (condition)

//
