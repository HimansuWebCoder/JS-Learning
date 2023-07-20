// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// });

//* Using addEventListener()
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

//* Removing listeners
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

//* AbortSignal to AddEventListener() and then abort()

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

//* Adding multiple listeners for a single event
// myElement.addEventListener("click", functionA);
// myElement.addEventListener("click", functionB);

//* Event handler properties
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

//* Inline event handlers - don't use these
// function bgChange() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   document.body.style.backgroundColor = rndCol;
// } //* You shouldn't use these bad practice

//* what if 100 button
// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", bgChange);
// }
//* You shouldn't use HTML event handler attributes- those are outdated;
//* Event Objects
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

//* Extra properties of event objects
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener(
//   "keydown",
//   (event) => (output.textContent = `You pressed "${event.key}".`)
// );

//* Preventing default behavior
// const form = document.querySelector("from");
// const fname = document.querySelector("fname");
// const lname = document.querySelector("lname");
// const para = document.querySelector("p");

// form.addEventListener("submit", (e) => {
//   if (fname.value === " " || lname.value === " ") {
//     e.preventDefault();
//     para.textContent = "You need to fill in both names!";
//   }
// });

//* Event bubbling
//* setting a listener on a parent element
// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// container.addEventListener("click", handleClick);

//* bubbling Example

// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);

//* Video player Example
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));

//* fixing the problem with stopPropagation()
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", (event) => {
//   event.stopPropagation();
//   video.play();
// });
// box.addEventListener("click", () => box.classList.add("hidden"));

//*Event Capture // in this case the order is reversed
// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick, { capture: true });
// container.addEventListener("click", handleClick, { capture: true });
// button.addEventListener("click", handleClick);

//* Event delegation
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


//* It's not just web pages
//* read in MDN Web docs
