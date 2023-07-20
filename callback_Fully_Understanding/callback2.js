// function step1(number, callback) {
//   const result = number + 1;
//   callback(result);
// }

// function step2(number, callback) {
//   const result = number + 2;
//   callback(result);
// }

// function step3(number, callback) {
//   const result = number + 3;
//   callback(result);
// }

// function allSteps() {
//   step1(0, (result1) => {
//     console.log(`${result1}`);
//   });
//   step2(1, (result2) => {
//     console.log(`result: ${result2}`);
//   });
//   step3(3, (result) => {
//     console.log(`${result}`);
//   });
// }

// function allSteps() {
//   step1(1, (call) => {
//     step2(1, (call2) => {
//       step3(1, (call3) => {
//         console.log(`Result:${call3} `);
//       });
//     });
//   });
// }

// allSteps();

// function part1(x, operation) {
//   const multiply = x * x;
//   operation(multiply);
// }

// function part2(y, operation) {
//   const add = y + y;
//   operation(add);
// }

// function part3(z, operation) {
//   const divide = z / z;
//   operation(divide);
// }

// function part4(a, operation) {
//   const subtraction = a + a;
//   operation(subtraction);
// }

// function part5(b, operation) {
//   const subtraction = b + b;
//   operation(subtraction);
// }

// function part6(c, operation) {
//   const subtraction = c + c;
//   operation(subtraction);
// }

// function all() {
//   part1(2, (step) => {
//     console.log(`Result:${step}`);
//     part2(3, (step2) => {
//       console.log(`Result:${step2}`);
//       part3(2, (step3) => {
//         console.log(`Resutl:${step3}`);
//         part4(4, (step4) => {
//           console.log(`Result:${step4}`);
//           part5(2, (step5) => {
//             console.log(`Result:${step5}`);
//             part6(4, (step6) => {
//               console.log(`Result:${step6}`);
//             });
//           });
//         });
//       });
//     });
//   });
// }

// function all() {
//   part1(2, (step) => {
//     console.log(`Result:${step}`);
//     part2(step, (step2) => {
//       console.log(`Result:${step2}`);
//       part3(step2, (step3) => {
//         console.log(`Resutl:${step3}`);
//         part4(step3, (step4) => {
//           console.log(`Result:${step4}`);
//           part5(step4, (step5) => {
//             console.log(`Result:${step5}`);
//             part6(step5, (step6) => {
//               console.log(`Result:${step6}`);
//             });
//           });
//         });
//       });
//     });
//   });
// }

// all();

// const hello = (event) => {
//   console.log("hello how are you?");
// };

// hello();

// function sum(x, y, callback, callback2) {
//   const result = x + y + 2;
//   const result2 = x * y ** y;
//   callback(result);
//   callback2(result2);
// }

// function allsum() {
//   sum(
//     3,
//     3,
//     (greet) => {
//       console.log(`${greet}`);
//     },
//     (greet2) => {
//       console.log(`${greet2}`);
//     }
//   );
// }

// allsum();

// function fruit(x, callback) {
//   const fruits = "Hii!" + x;
//   callback(fruits);
// }

// function fruit1(y, callback) {
//   const fruits1 = "hello!" + y;
//   callback(fruits1);
// }
// function fruit2(z, callback) {
//   const fruits2 = "how are you!" + z;
//   callback(fruits2);
// }

// function allFruits() {
//   fruit("mango", (one) => {
//     fruit1(one, (two) => {
//       fruit2(two, (three) => {
//         console.log(`${three}`);
//       })
//     })
//   })
// }

// function allFruits() {
//   fruit("mango", (one) => {
//     console.log(one);
//     fruit1(one, (two) => {
//       console.log(two);
//       fruit2(two, (three) => {
//         console.log(three)
//         console.log(`${three}`);
//       })
//     })
//   })
// }

// function allFruits() {
//   fruit("mango", (one) => {
//     console.log(one);
//     fruit1("Orange", (two) => {
//       console.log(two);
//       fruit2("Lichi", (three) => {
//         console.log(three);
// console.log(`${three}`);
//       });
//     });
//   });
// }

// function allFruits() {
//   fruit("mango", (one) => {
//     fruit1("Orange", (two) => {
//       fruit2("Lichi", (three) => {
//         console.log(`${one} ${two} ${three}`);
//       });
//     });
//   });
// }

// allFruits();

// const para = document.querySelectorAll("p");
const para = document.querySelector("p");

function animal1(food, callback) {
  const tiger = "Tiger's food is" + " " + food;
  callback(tiger);
}

function animal2(food, callback) {
  const cow = "cow's food is" + " " + food;
  callback(cow);
}

function animal2(food, callback) {
  const rabbit = "rabbit's food is" + " " + food;
  callback(rabbit);
}

function animal3(food, callback) {
  const elephant = "elephant's food is" + " " + food;
  callback(elephant);
}

function animal4(food, callback) {
  const zebra = "zebra's food is" + " " + food;
  callback(zebra);
}

function animal5(food, callback) {
  const fox = "fox's food is" + " " + food;
  callback(fox);
}

function allFood() {
  animal1("meat", (meat) => {
    // para.forEach((item) => {
    // item.textContent += meat;
    // });

    // console.log(meat);
    animal2("grass", (grass) => {
      // para.forEach((item2) => {
      // item2.textContent += ` ${grass}`;
      // });

      animal3("rice", (rice) => {
        // para.forEach((item3) => {
        // item3.textContent += ` ${rice}`;
        // });

        //
        animal4("leaf", (leaf) => {
          // para.forEach((item4) => {
          // item4.textContent += ` ${leaf}`;
          // });

          //
          animal5("meats", (meats) => {
            // para.forEach((item5) => {
            //   item5.textContent += ` ${meats} ${leaf} ${rice} ${grass} ${meat}`;
            // })
            // para.textContent = ` ${meats} ${leaf} ${rice} ${grass} ${meat}`;
            console.log(` ${meats} ${leaf} ${rice} ${grass} ${meat}`);
            //
          });
        });
      });
    });
  });
}

allFood();
