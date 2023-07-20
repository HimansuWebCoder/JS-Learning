const para = document.querySelector("p");

function step(x, callback) {
	const number = x + 1;
	callback(number);
}


function step2(y, callback) {
	const number2 = y + 5;
	callback(number2);
}

// function all() {
// 	step(2, (aka) => {
// 		para.textContent = aka;
// 		step2(3, (aka2) => {
// 			para.textContent = aka2 + aka;
// 		})
// 	})
// }

function all() {
	step(3, (aka) => {
		step2(aka, (aka2) => {
			para.textContent = `Result full step is: ${aka2}, step2 is ${aka}`;
		})
	})
}

all();
