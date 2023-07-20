// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// });

//? Using addEventListener()
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
//click, mouseover, keydown, focus, blur, dblclick, mouseover, mouseout etc.

//? Removing listeners
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// }
// btn.addEventListener("click", changeBackground);
// btn.removeEventListener("click", changeBackground);

// Event handlers can also be removed by passing an AbortSignal to addEventListener()
//  and then later calling abort() on the controller owning the AbortSignal.
//? AbortSignal to AddEventListener() and then abort()

// const controller = new AbortController();

// btn.addEventListener(
//   "click",
//   () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//     document.body.style.backgroundColor = rndCol;
//   },
//   { signal: controller.signal }
// ); // pass an AbortSignal to this handler
// controller.abort(); // removes any/all event handlers accociated with this controller

//? Adding multiple listeners for a single event
// myElement.addEventListener("click", functionA);
// myElement.addEventListener("click", functionB);

// const para = document.querySelector("p");
// const heading = document.querySelector("h1");
// const body = document.body;

// const btn = document.querySelector("button");
// btn.addEventListener("click", functionA);
// btn.addEventListener("click", functionB);
// btn.addEventListener("click", functionC);

// function functionA() {
//   para.style.color = "blue";
//   para.style.border = "10px solid violet";
// }

// function functionB() {
//   heading.style.color = "red";
//   heading.style.border = "10px solid blue";
// }

// function functionC() {
//   document.body.style.backgroundColor = "black";
//   body.style.backgroundColor = "black";
//   para.style.color = "white"; // override color rule of css
// }

//? Event handler properties
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.onclick = () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// };

// We can also set handler property to a named functions:
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// }

// btn.onclick = bgChange;

//? Inline event handlers - don't use these

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// }

// function change() {
//   document.body.style.backgroundColor = "black";
// }

//? You shouldn't use these bad practice

//? what if 100 button
// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", bgChange);
// }

// function dark() {
// 	document.body.style.backgroundColor = "black";
// }

// function yellow() {
// 	document.body.style.backgroundColor = "yellow";
// }

// function green() {
// 	document.body.style.backgroundColor = "green";
// }

// function bgChange() {
//   document.body.style.backgroundColor = "maroon";
// }

// const buttons = document.querySelectorAll("button");
// for (const btn of buttons) {
//   btn.addEventListener("mouseover", bgChange);
// }
// If you have many buttons to add one style for all buttons then use like this

//? You shouldn't use HTML event handler attributes- those are outdated;
//? Event Objects (event, evt, or e)
//? You can use any name you like for the event object

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange(e) {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   e.target.style.backgroundColor = rndCol;
//   console.log(e);
// }
// btn.addEventListener("click", bgChange);

//

// const btn = document.querySelector("button");

// function change(e) {
//   e.target.style.color = "red";
//   console.log(e);
// }
// btn.addEventListener("click", change);

// const btn = document.querySelector("button");

// function change(func) {
// 	func.target.style.backgroundColor = "black";
// 	func.target.style.color = "white";
// 	console.log(func);
// }
// btn.addEventListener("click", change);

//? but in easy perspective programmers use event, evt or e;

//? Extra properties of event objects
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener(
//   "keydown",
//   (event) => (output.textContent = `You pressed "${event.key}".`)
// );

// const textfield = document.querySelector("#textfield");
// const output = document.querySelector("#para");
// textfield.addEventListener(
//   "keydown",
//   (event) => (output.textContent = `You pressed "${event.key}".`) // with noticeable string see live
// );

// const mybtn = document.querySelector("#mybutton");
// const box = document.querySelector("#box");
// mybtn.addEventListener("click", (e) => (box.textContent = "Hello Programmers"));

// const textarea = document.querySelector("#textarea");
// const para = document.querySelector("#para");
// textarea.addEventListener(
// 	"keydown", (evt) => (para.textContent = `You pressed ${evt.key}`) // without notice string see live
// );

// const btn = document.querySelector("#btn");
// const divbox = document.querySelector("#mybox");
// btn.addEventListener("mouseup", (touch) => {
//   divbox.style.color = "red";
//   divbox.style.fontSize = "3rem";
//   console.log(touch);
// });

//? Preventing default behavior
// const form = document.querySelector("form");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const para = document.querySelector("p");

// form.addEventListener("submit", (e) => {
//   if (fname.value === "" || lname.value === "") {
//     e.preventDefault();
//     para.textContent = "You need to fill in both names!";
//   }
// });

// const form = document.querySelector("form");
// const fname = document.querySelector("#fname");
// const lname = document.querySelector("#lname");
// const para = document.querySelector("p");

// form.addEventListener("submit", (event) => {
//   if (fname.value === "" || lname.value === "") {
//     event.preventDefault();
//     para.textContent = "Please fill both names!";
//   }
// });

//? Event bubbling
//? setting a listener on a parent element
// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// container.addEventListener("click", handleClick);

//

// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`; // you notice a small mistake confuse you why this not repeat again & again press the button!. = instead of +=
// }

// const box = document.querySelector("#box");
// box.addEventListener("click", handleClick);

//

// const para = document.querySelector("#para");
// function click(event) {
// 	para.textContent += `You clicked on a ${event.currentTarget.tagName} \n`;
// }

// const mydiv = document.querySelector("#mydiv");
// mydiv.addEventListener("click", click);

//? bubbling Example

// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);

// const result = document.querySelector("#result");
// function click(event) {
// 	result.textContent += "Bubbling! Bubbling!\n";
// }

// const contain = document.querySelector("#contain");
// const button = document.querySelector("#mybtn");

// document.body.addEventListener("click", click);
// contain.addEventListener("click", click);
// button.addEventListener("click", click);

// const final = document.querySelector("#show");
// function bubbling(func) {
// final.textContent += "bubbling! bubbling!\n";
// 	final.textContent += `you clicked ${func.currentTarget.tagName}\n`;
// }

// const room = document.querySelector("#room");
// const btn = document.querySelector("#switch");

// document.body.addEventListener("click", bubbling);
// room.addEventListener("click", bubbling);
// btn.addEventListener("click", bubbling);

// const result = document.querySelector("#para");
// function clicking() {
// 	result.textContent += `You clicked on a bubbling`;
// }

// const box = document.querySelector("#container");
// const btn = document.querySelector("#btn");

// document.body.addEventListener("click", clicking);
// box.addEventListener("click", clicking);
// btn.addEventListener("click", clicking);

//? Video player Example
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));

//? fixing the problem with stopPropagation()
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", (event) => {
//   event.stopPropagation();
//   video.play();
// });
// box.addEventListener("click", () => box.classList.add("hidden"));

//? Event Capture // in this case the order is reversed
// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick, { capture: true });
// container.addEventListener("click", handleClick, { capture: true });
// button.addEventListener("click", handleClick);

// const result = document.querySelector("#result");
// function click(e) {
//   result.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const box = document.querySelector("#box");
// const btn = document.querySelector("button");

// document.body.addEventListener("click", click, { capture: true });
// box.addEventListener("click", click, { capture: true });
// btn.addEventListener("click", click);

// const result = document.querySelector("#result");
// function click(e) {
//   result.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const box = document.querySelector("#box");
// const btn = document.querySelector("button");

// document.body.addEventListener("click", click);
// box.addEventListener("click", click, { capture: true });
// btn.addEventListener("click", click, {capture : true});

// const result = document.querySelector("#result");
// function click(e) {
//   result.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const box = document.querySelector("#box");
// const btn = document.querySelector("button");

// document.body.addEventListener("click", click);
// box.addEventListener("click", click, { capture: true });
// btn.addEventListener("click", click);

// const box = document.querySelector("#box");
// const btn = document.querySelector("button");

// box.addEventListener("click", click, { capture: true });
// document.body.addEventListener("click", click, {capture : true});
// btn.addEventListener("click", click);

// const result = document.querySelector("#result");
// function click(e) {
//   result.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

//? Event delegation
// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function bgChange() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   return rndCol;
// }

// const container = document.querySelector("#container");

// container.addEventListener(
//   "click",
//   (event) => (event.target.style.backgroundColor = bgChange())
// );

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function change() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   return rndCol;
// }

// const container = document.querySelector("#container");

// container.addEventListener(
//   "click",
//   (e) => (e.target.style.backgroundColor = change())
// );
