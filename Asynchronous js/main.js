//? Asynchronouse js learning
//? Synchronous Programming

// const name = "Miriam";
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);
// "Hello, my name is Miriam!"

//? It would still be synchronous even if we called a separate function, like this:
// function makeGreeting(name) {
// 	return `Hello, my name is ${name}!`;
//   }

//   const name = 'Miriam';
//   const greeting = makeGreeting(name);
//   console.log(greeting);
// "Hello, my name is Miriam!"

// or

// function greeting(myname) {
//   return `Hello, My name is ${myname}!`;
// };

// const myName = "Himansu";
// const greet = greeting(myName);
// console.log(greet);

// or

// function fruit(name) {
//   return `Hello, I am ${name}!`;
// };

// const myself = "Mango";
// const newFruit = fruit(myself);
// console.log(newFruit);

// or

// function message(coding) {
//  return `My message about ${coding}.`;
// };

// const myMessage = "Coding is the starting of thinking.";
// console.log(message(myMessage));
// const newMsg = message(myMessage);
// console.log(newMsg);

//? A long running synchronous function

// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);

// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   document.location.reload();
// });

// //?The trouble with long-running synchronous functions

// //? Event handlers

// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//   log.textContent = "";

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
//   );
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   log.textContent = "";
//   document.location.reload();
// });

//? Callbacks
//? An event handler is a particular type of callback

// function doStep1(init) {
//   return init + 1;
// }

// function doStep2(init) {
//   return init + 2;
// }

// function doStep3(init) {
//   return init + 3;
// }

// function doOperation() {
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   console.log(`result: ${result}`);
// }

// doOperation();

//?  if we implemented the steps using callbacks?

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// function step1(x, callback) {
//   const result = `Cat eats ` + x;
//   callback(result);
// }

// function step2(y, callback) {
//   const result1 = `Tiger eats ` + y;
//   callback(result1);
// }

// function step3(z, callback) {
//   const result3 = `Cat eats ` + z;
//   callback(result3);
// }

// function sumSteps() {
//   step1("Grass", (result1) => {
//     step2("Meats", (result2) => {
//       step3("Fish", (result3) => {
//         console.log(`${result3} ${result2} ${result1}`);
//       });
//     });
//   });
// }

// sumSteps();

//

// function multiply(x, operation) {
//   const result = x + 1000000000000000 * 23723 * 23423 * 234234 * 234234 * 23423423423423423423423234232323232342342342342342342334;
//   operation(result);
// }

// function add(x, operation) {
//   const result = x + 123234;
//   operation(result);
// }
// function divide(x, operation) {
//   const result = x + 10000 / 12;
//   operation(result);
// }

// function all() {
//   multiply(15, (step1) => {
//     add(step1, (step2) => {
//       divide(step2, (step3) => {
//         console.log(`${step3} ${step2} ${step1}`);
//       });
//     });
//   });
// }

// all();

//? When we nest callbacks like this, it can also get very hard to handle errors:
//? For these reasons, most modern asynchronous APIs don't use callbacks
//? Instead, the foundation of asynchronous programming in JavaScript is the Promise

//? How to use promises
// Promises are the foundation of asynchronous programming in modern JavaScript.
// Using the fetch() API

//?try in your js console
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

//?The complete output should be something like:
// Promise { <state>: "pending" }
// Started request…
// Received response: 200

//? Chaining promises
// this is a case where we have to call two successive asynchronous functions.

//? try in your js web console
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

//?  we can (and certainly should) rewrite the above code like this:

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

//? Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(),
//? and call the second then() on that return value. This is called promise chaining

//? try in your browser console
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

//? Catching errors

//? try in the web browser
// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

//? Promise Terminology
//?a promise can be in one of three states:
//? pending, fulfilled, rejected
//? Sometimes, we use the term settled to cover both fulfilled and rejected.

//? Combining multiple promises
//? Sometimes, you need all the promises to be fulfilled, but they don't depend on each other.

//? Try in the web browser
// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

//? If we try the same code with a badly formed URL, like this:

//? Try in web browser
// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

//? Then we can expect the catch() handler to run, and we should see something like:
// Failed to fetch: TypeError: Failed to fetch

//? Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one.
//? Note that in this case we can't predict which fetch request will complete first.

//? Try in web browser
// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

//? Async and Await

//?The async keyword gives you a simpler way to work with asynchronous promise-based code.
// async function myFunction() {
// This is an async function
// }

// async function fetchProducts() {
//   try {
// after this line, our function will wait for the `fetch()` call to be settled
// the `fetch()` call will either return a Response or throw an error
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
// after this line, our function will wait for the `response.json()` call to be settled
// the `response.json()` call will either return the parsed JSON object or throw an error
//     const data = await response.json();
//     console.log(data[0].name);
//   }
//   catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();

//? Note though that async functions always return a promise, so you can't do something like:

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const promise = fetchProducts();
// console.log(promise[0].name); // "promise" is a Promise object, so this will not work

//? Instead, you'd need to do something like:

// async function fetchProducts() {
//   try {
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   }
//   catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const promise = fetchProducts();
// promise.then((data) => console.log(data[0].name));

//? Also, note that you can only use await inside an async function,
//? unless your code is in a JavaScript module. That means you can't do this in a normal script:

// try {
// using await outside an async function is only allowed in a module
//   const response = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data[0].name);
// } catch (error) {
//   console.error(`Could not get products: ${error}`);
// }

//? How to implement a promise-based API
//? Implementing an alarm() API
//? wrapping setTimeout()

// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up friend(Himansu)!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

//? The Promise() constructor

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

//? Using the alarm() API

// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => (output.textContent = message))
//     .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
// });

//? Using async and await with the alarm() API

// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", async () => {
//   try {
//     const message = await alarm(name.value, delay.value);
//     output.textContent = message;
//   } catch (error) {
//     output.textContent = `Couldn't set alarm: ${error}`;
//   }
// });

//? Introducing workers
//? Using web workers
//?  The synchronous prime generator

function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
