// const para = document.querySelector("p");

// para.addEventListener("click", updateName);

// function updateName() {
//   const name = prompt("Enter a new name");
//   para.textContent = `Player 1: ${name}`;
// }

// const mypara = document.querySelector("p");

// mypara.addEventListener("click", update);

// function update() {
//   const name = prompt("Enter Your Name");
//   mypara.textContent = `Programmer 1: ${name}`;
// }

//* Comment
//* Single line comment
// I am a comment

//* A multi-line comment
/*
  I am also
  a comment
*/

// Function: creates a new paragraph and appends it to the bottom of the HTML body.

// function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }

/*
	1. Get references to all the buttons on the page in an array format.
	2. Loop through all the buttons and add a click event listener to each one.
  
	When any button is pressed, the createParagraph() function will be run.
  */

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }
