//? Basic if...else syntax
// if (condition) {
/* code to run if condition is true */
// } else {
/* run some other code instead */
// }

// 
// let student = false;
// let teacher;
// if (student === true) {
//    teacher = "student is present in school";
// } else {
//    teacher = "Student is absent from school";
// }
// teacher;
//

// const himansu = 10;
// const Biscuit = 20;
// const store = Biscuit;

// if (store === Biscuit) {
// 	console.log("Biscuit price is 20 rupees");
// }

// the following code is also perfectly legal code
// if (condition) {
/* code to run if condition is true */
// }
/* run some other code */
// not recommended

// this syntax is perfectly valid but not recommended
// if (condition) /* code to run if condition is true */
// else /* run some other code instead */

//? A real example
// let shoppingDone = false;
// let childAllowance;

// if (shoppingDone === true) {
//   childAllowance = 10;
// } else {
//   childAllowance = 5;
// }
// childAllowance;

// let child = 7;
// let child = 6;
// let miniChild;

// if (child === 7) {
// 	miniChild = "you give 7 rupees him.";
// } else {
// 	miniChild = "Ohh! you don't give 7 rupees him.";
// }
// miniChild;

// let money = "10k";
// let money = "9k";
// let chintu;

// if (money === "10k") {
// 	chintu = "I got 10k rupees today.";
// } else {
// 	chintu = "I am not get money.";
// }
// chintu;

//

// let bird = "Parrot";
// let bird = "Peacock";
// let birdCall;
// if (bird === "Parrot") {
// 	birdCall = "Wow Parrot call me Programmer.";
// } else {
// 	birdCall = "Ohh! No, Parrot did not call me Programmer.";
// }

// birdCall;

//

// let Duck = 9;
// let Duck = 8;
// let Duck = 22;
// let Duck = 2;
// let Chinku;
// if (Duck >= 9) {
// console.log("Duck Give me some Eggs.");
// 	Chinku = "Duck Give me some Eggs.";
// } else if (Duck <= 9) {
// console.log("Crying... Duck Give me lower than 9 Eggs.");
// 	Chinku = "Crying... Duck Give me lower than 9 Eggs.";
// }

// Chinku;

//

// let Uncle = 20;
// let Uncle = 10;
// let ChintuPocketMoney;

// if (Uncle === 20) {
//    ChintuPocketMoney = "I get money yaahoo!";
// } else {
// 	ChintuPocketMoney = "ohh! no I'm not paid money, or low paid by my uncle.";
// }

// ChintuPocketMoney;

//

// let season = "Rainy";
// let season = "Winter";
// let season;

// if (season === "Rainy") {
//   console.log("This is Rainy Season.");
// } else if (season === "Winter") {
//   console.log("This is Winter.");
// } else if (season === "Summer") {
//   console.log("This is summer season.");
// } else {
//   console.log("No season found.");
// }

// season;

// let chinu = "Monday";
// let chinu = "";
// let badal = "Sunday";
// let badal = "";
// let sibu = "Tuesday";
// let sibu = "";
// let himansu = "Thursday";
// let himansu = "";
// if (chinu === "Monday") {
// 	console.log("today is monday");
// } else if (badal === "Sunday") {
// 	console.log("Today is Sunday");
// } else if (sibu === "Tuesday") {
// 	console.log("Today is Tuesday");
// } else if (himansu === "Thursday") {
// 	console.log("Today is Thursday");
// } else {
// 	console.log("NO day today");
// }
// chinu;
// badal;
// sibu;
// himansu;

//

// let myIncome = "10k";
// let myIncome = "5k";
// let myExpense;

// if (myIncome === "10k") {
//   myExpense = "5k";
// } else {
//   myExpense = "not it is zero";
// }
// myExpense;

//

//? Else if
// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent = "It is nice and sunny outside today.";
//   } else if (choice === "rainy") {
//     para.textContent = "Rain is falling outside;";
//   } else if (choice === "snowing") {
//     para.textContent = "The snow is coming down.";
//   } else if (choice === "overcast") {
//     para.textContent = "It isn't raining.";
//   } else {
//     para.textContent = "";
//   }
// }

//

// let animal = "Dog";
// let animal = "Cat";
// let animal;

// function animals() {
//   if (animal === "Dog") {
//     console.log("This is Dog.");
//   } else if (animal === "Cat") {
//     console.log("This is Cat.");
//   } else {
//     console.log("No animals found.");
//   }
// }

// animals();

//

//? A note on comparison operators
// let cheese = "Cheddar";
// let cheese;

// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

//

// let greeting = "Programmer";
// let greeting = "";
// let greet;

// if (greeting) {
//   console.log("Hello Programmer.");
// } else {
//   console.log("Programming Community.");
// }

//

// let shoppingDone = false;
// let shoppingDone = true;
// let childAllowance;

//?  we don't need to explicitly specify 'shoppingDone === true'
// if (shoppingDone) {
// childAllowance = 10;
// } else {
// childAllowance = 5;
// }
// childAllowance;

// let socialMedia = true;
// let socialMedia = "";
// let socialMedia = " ";
// let socialChild;

// if (socialMedia) {
//   socialChild = "Dopamine hijacked";
// } else {
// 	socialChild = "Dopamine not hijacked";
// }
// socialChild;

//

// let fruit = true;
// let fruit = false;
// let myFruit;

// if (fruit) {
//   myFruit = "Mango";
// } else {
//   myFruit = "Orange";
// }

// myFruit;

//

//?  Nesting if...else
// let choice = "sunny";
// let temperature = 78;
// let temperature = 89;
// if (choice === "sunny") {
//   if (temperature < 86) {
//     console.log(`it is ${temperature} degrees outside - nice and sunny.`);
//   } else if (temperature >= 86) {
//     console.log(`It is ${temperature} degrees outside - REALLY HOT!`);
//   }
// }

// let friend = "Good";
// let score = 90;
// let score = 60;
// if (friend === "Good") {
// 	if (score === 90) {
// 		console.log(`my friend mark is ${score}. It is good.`);
// 	} else if (score <= 90) {
// 		console.log(`my friend's mark is ${score}. It is not good as so much.Improvement required.`);
// 	}
// }

//

//?  Logical operators: AND, OR & NOT
// test multiple conditions without nested if..else
// let choice = "sunny";
// let temperature = 85;
// let temperature = 95;

// if (choice === "sunny" && temperature < 86) {
//   console.log(`It is ${temperature} degrees outside - nice and sunny.`);
// } else if (choice === "sunny" && temperature >= 86) {
//   console.log(`It is ${temperature} degrees outside - REALLY HOT!`);
// }

// let himansu = "Student";
// let himansu = "averageStudent";
// let score = 98;
// let score = 75;
// let level = "Excellent";
// let level = "Average";
// if (himansu === "Student" && score === 98 && level === "Excellent") {
// 	console.log(`Himansu marks is ${score}, and position is ${level}. He is a good Student.`);
// } else if (himansu === "averageStudent" && score <= 98 && level === "Average") {
// 	console.log(`Himansu marks is ${score}, and position is ${level}. He need improvement with guidance.`);
// }

//? OR
// let iceCreamVanOutside = "on water";
// let houseStatus = "on fire";
// if (iceCreamVanOutside || houseStatus === "on fire") {
//   console.log("You should leave the house quickly.");
// } else {
//   console.log("Probably should just stay in then.");
// }

// let friends = "Water";
// let friends = "";
// let family = "Earth";
// let family = "";
// if (friends || family === "Earth") {
// 	console.log("Both are required isn't it.");
// } else {
// 	console.log("Both are necessay but thsoe are not agreed.");
// }

//

//? NOT
// let iceCreamVanOutside = "on fire";
// let houseStatus = "on fire";
// if (!(iceCreamVanOutside || houseStatus === "on fire")) {
// 	console.log('Probably should just stay in then.');
// } else {
// 	console.log('You should leave the house quickly.');
// }

// let fruits = "Mango";
// let fruits = "";
// let veg = "Patoto";
// let veg = "";
// if (!(fruits || veg === "Mango")) {
// 	console.log("Eat Mango");
// } else {
// 	console.log("Don't eat Mango");
// }

//

//? mix
// if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
// run the code
// }

// it is logically not what we want!
// if (x === 5 || 7 || 10 || 20) {
// run my code
// }

// this is a complete test
// if (x === 5 || x === 7 || x === 10 || x === 20) {
// run my code
// }

// let x = 20;
// let x = 6;
// let x = 20;
// let x = 23;
// let x = 10;

// if (x === 6 || x === 2 || x === 20 || x === 23) {
// 	console.log("these are numbers.");
// } 

// let x = 20;
// let x = 10;
// let x = 11;

// if (x >= 20 || x <= 10 || x === 20) {
// 	console.log("conditions successfully applied.");
// }

// let x = 20;
// let x = 11;

// if ( x >= 20 || x <= 10 || x === 20) {
// 	console.log("conditions successfully applied.");
// } else {
// 	console.log("applied conditions failed due to not satisfied result.");
// }

// let x = 10;
// let y = 20;
// let z = 30;
// let x = 9;
// let y = 10;
// let z = 20;
// if (x === 10 || y === 20 || z === 30) {
// 	console.log("Wow! conditions are succeed.");
// } else {
// 	console.log("Conditions are not scucceed.");
// }

// let himansu = 87;
// let raja = 45;
// let lulu = 85;
// let himansu = 85;
// let raja = 44;
// let lulu = 84;
// let himansu = "";
// let raja = "";
// let lulu = "";
// if (himansu >= 87 || raja >= 45 || lulu >= 85) {
// 	console.log("Friends are Good Gain Marks.");
// } else if (himansu <= 87 || raja <= 45 || lulu <= 85) {
// 	console.log("Ohh! Friends are not gain Good marks. Improve next time.");
// } else {
// 	console.log("No one gave this Exam.");
// }

//

//? Switch Statements
// switch (expression) {
// case choice1:
// run this code
// break;

// case choice2:
// run this code instead
// break;

// include as many cases as you like

// default:
// actually, just run this code
// }

//

//? A switch Example
// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent = "It is nice and sunny outsie today.";
//       break;
//     case "rainy":
//       para.textContent =
//         "Rain is falling outside; take a rain coat and an umbrella.";
//       break;
//     case "snowing":
//       para.textContent = "The snow is coimg down!";
//       break;
//     case "overcast":
//       para.textContent = "It isn't raining.";
//       break;
//     default:
//       para.textContent = " ";
//   }
// }

// let choice = "Monday";
// let choice = "Sunday";
// let choice = "Tuesday";

// switch (choice) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Sunday":
//     console.log("Today is Sunday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
// }

// let code = "Good";
// let code = "Bad";

// switch (code) {
//   case "Good":
//     console.log("Your code is best.");
//     break;
//   case "Bad":
//     console.log("Your code is worst");
//     break;
// }

// let Biscuit = "ParlG";
// let Biscuit = "Britania";

// switch (Biscuit) {
//   case "Britania":
//     console.log("This biscuit is little bit better than parleG.");
//     break;
//   case "ParlG":
//     console.log("This biscuit is best for anyone since it is produce.");
//     break;
// }

// let friend = "Lulu";
// let friend = "Raja";

// switch (friend) {
// 	case "Lulu":
// 	 console.log("Lulu is my good friend since childhood classmate.");
// 	 break;
// 	case "Raja":
//      console.log("Raja is naughty in our school since childhood.");
// 	 break;
// }

//

//? Ternary Operator
// condition ? run this code : run this code instead

// const greeting = isBirthday
//   ? "Happy birthday Mrs. Himansu - we hope you have a great day!"
//   : "Good morning Mrs. Himansu.";

//

//? Ternary operator example
// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener("change", () =>
//   select.value === "black" ? update("black", "white") : update("white", "black")
// );

//

// const age = 25;
// const age = 20;
// const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage);

// const score = 90;
// const score = 23;
// const HighScore = score >= 80 ? "Good" : "Bad";
// console.log(HighScore);


//

// const age = "";
// const hima = age ? "wow" : "oh!";
// console.log(hima);
// console.log(hima);

// const choco = "sweet";
// const choco = "";
// const chocoTaste = choco ? "this is sweet but not good for health." : "choco is not give me.";
// console.log(chocoTaste);

// const veg = "Tomato";
// const myveg = veg.length > 5 ? "Wow Tomato." : "Bad Tomato";
// console.log(myveg);

//

// const isBirthday = "";

// const isBirthday = " ";
// const greeting = isBirthday
//   ? "Happy birthday Mrs. Smith — we hope you have a great day!"
//   : "Good morning Mrs. Smith.";
// console.log(greeting);

// const value = "";
// const value = " ";

// const myValue = value
// ? "Your value is not defined in place where you live."
// : "your value is defined what you are by your talent and interest with passion.";
// console.log(myValue);

//

// const Greet = "";

// const Greet = " ";
// const Greeting = Greet ? "Hello Programmers." : "Good Day Programming.";
// console.log(Greeting);
//
// const animals = "";
// const animalName = animals
// ? "Hello animals"
// : "What do you eat?";
// console.log(animalName);

//

// Active learning: A simple calender 
// Active learning: More color choices
// Test your skills: conditionals
