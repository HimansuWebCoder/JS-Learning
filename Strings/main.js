//? Strings the basics
//* Creating a string
// const string = "The revolution will not be televised.";
// string;

// const myString = "Hii! I am a string.";
// myString;

// const greeting = "Hii! nice to meet you Himansu.";
// greeting;

// let cars = "TATA Cars is high in demand";
// cars;

// let ztmCourse = "ZTM course is best for learn high in demand skill and hired as soon as possible ASAP";
// ztmCourse;

//

// const yourName = "My Name is Himansu";
// yourName;

//

// const fruits = "My Favourite fruit is Mango";
// fruits;

//

// const cars = "TATA, Maruti are my favourite company";
// cars;

//

// const $javascript = "Javascript is my favourite language";
// $javascript;

//

// const Dream = "Everyone live like heaven people.";
// Dream;

//

// const fruits = "fruits are the life of a positive heart.";
// fruits;

//

// const children = "Childrens are the god's child.";
// children;

//

// const badString1 = This is a test; //wrong
// const badString2 = 'This is a test; //wrong
// const badString3 = This is a test'; //wrong

//

//* work if :-
// const string = "I am a programmer";
// const badString = string;
// badString;

// const myString = "I am a String!";
// const string = myString;
// string;

// const myCars = "TATA Nano";
// const yourCars = myCars;
// yourCars;

// const book = "Think and Grow Rich";
// const favBook = book;
// favBook;

// const fruits = "We are fruits.";
// const newFruits = fruits;
// newFruits;

//

// const flower = "I am a flower tagar";
// const flowerSpeech = flower;
// flowerSpeech;

// const animals = "I am a tiger";
// const badAnimals = animals;
// badAnimals;

//

// const tech = " The tech is more powerful in future";
// const newTech = tech;
// newTech;

// const dress = "I have a new cloth";
// const newDress = dress;
// dress;

// const feelings = "Love Anger Kindness Eager";
// const myFeelings = feelings;
// myFeelings;

//

// const names = "the name is the powerful words that exist for identity.";
// const newNames = names;
// newNames;

// const deepWork = "Deep Work is the effective work in today's economy";
// const myDeepWork = deepWork;
// myDeepWork;

//

//* Single quotes ('') vs. Double quotes ("")
// const sgl = 'Single quotes.';
// const dbl = "Double quote";
// sgl;
// dbl;

// const rima = "How are you?";
// const himansu = "how about you?";
// rima;
// himansu;

// const rinky = 'how about you?';
// const sipu = 'How are you?';
// rinky;
// sipu;

//

// const himansu = 'Hello I am himansu';
// himansu;
// const rinky = "hello I am rinky";
// rinky;

//

// const badQuotes = 'What on earth?";

// const sglDbl = 'Would you eat a "fish supper"?';
// const dblSgl = "I'm feeling blue.";
// sglDbl;
// dblSgl;

// const feelings = "would you feels 'better'?";
// const reply = "yes I feels always 'fine and better'.";
// feelings;
// reply;

//

// const talk = 'Hey how are you doing "working"?';
// const reply = "Yes I'm doing.";
// talk;
// reply;

//

// const bigmouth = 'I've got no right to take my place..'; // wrong

//? Escaping characters in a string
// const bigmouth = 'I\'ve got no right to take my place..';
// bigmouth;

// const programming = 'I've learned programming'; //wrong;
// const programming = 'I\'ve learned programming';
// programming;

// const greeting = "I\'ve got greet from my friend";
// greeting;

//

// const speech = 'I\'ve got no right to take my place..';
// speech;

//

// const ask = 'Hii! I\'m himansu.';
// ask;

//

//? Concatenating Strings
// const greeting =`Hello`; // it is a string like normal string Template literal

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// joined;

// const world = `the world is very beautiful`;
// const man = `Yes the world is very beautifyl and very attractive.`;
// const joinedFeeling = `${man}${man}`;
// joinedFeeling;

// const animal = `tiger`;
// const bird = `peacock`;
// const forestAnimals = `${animal} and ${bird} are lives in forest.`;
// forestAnimals;

// const book = `Think and Grow Rich`;
// const writing = `Notebook`;
// const both = `${book} and ${writing}`;
// both;

// const friend1 = "Rama";
// const friend2 = "Shyam";
// const friends = `${friend1} and ${friend2} are both friends.`;
// friends

//

// const fruits = "Mango";
// const flower = "Gendu";
// const joinedthis = `${fruits} ${flower}`;
// joinedthis;

//

// const boy = "Hello mahindra!";
// const car = "Hii!";
// const mixed = `${boy} ${car}`;
// mixed;

//

//? Concatenation in context
// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
// }
// button.addEventListener("click", greet);

// const button = document.querySelector("button");

// function call() {
//   const name = prompt("What is your job?");
//   alert(`is this ${name}, enjoyable for you!`);
// }
// button.addEventListener("mouseover", call);

//

//? Concatenation using "+"
// const greeting = "Hello";
// const name = "Himansu";
// console.log(greeting + " " + name);

// const fruit1 = "Mango";
// const fruit2 = "Orange";
// const bothFruits = "fruit1" + " " + "fruit2";
// bothFruits;

//

// const tag = "#Himansu";
// const viral = "#Himansu Programmer";
// console.log(tag + " " + viral);

//

// const flower = "Tagar";
// const Vegetable = "Brinjal";
// console.log(flower + " " + Vegetable);

//

//? Using Template literal
// const greeting = "Hello";
// const name = "Himansu";
// console.log(`${greeting},${name}`);

// const flower = "Suryamukhi";
// const flower1 = "Sunflower";
// const bothFlower = `${flower} and ${flower1} both are flowers.`;
// bothFlower;

//

// const ramesh = "Hello Himansu";
// const himansu = "Hii!";
// console.log(`${ramesh} ${himansu}`);

//

// const lulu = "Hii friends!";
// const friends = "Hii!";
// console.log(`${lulu} ${friends}`);

//

//? Numbers vs. Strings
// const name = "Front ";
// const number = 232;
// console.log(`${name}${number}`);

// const yourName = "Himansu";
// const number = 200;
// console.log(`${yourName} ${number}`);

//

// const flower = "Tagar";
// const number = "100";
// console.log(`${flower} ${number}`);

//

//? Number() string to number convert
// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

// const numberString = "2000";
// console.log(typeof numberString);
// const pureNumber = Number(numberString);
// console.log(typeof pureNumber);

// const myNumberString = "200";
// const mypureNumber = Number(myNumberString);
// console.log(myNumberString);
// console.log(typeof myNumberString);
// console.log(mypureNumber);
// console.log(typeof mypureNumber);

//

// const myNumber = "298";
// const mynewNumber = Number(myNumber);
// console.log(typeof mynewNumber);

//

//? toString().
// const myNum2 = 123;
// const myString2 = myNum2.toString();
// console.log(typeof myString2);

// const myNumber = 234;
// console.log(typeof myNumber);
// const myString = myNumber.toString();
// console.log(typeof myString);

// const number = 123;
// const numberString = number.toString();
// console.log(number);
// console.log(numberString);
// console.log(typeof number);
// console.log(typeof numberString);

//

// const myNum3 = 287;
// const myString3 = myNum3.toString();
// console.log(typeof myString3);

//

// const myNum4 = 1200;
// const myString4 = myNum4.toString();
// console.log(typeof myString4)

//

//? Including expressions in strings

// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score / highestScore)* 100}%.`;
// output;

// const book =  "Think and Grow Rich";
// const star = 5;
// const speech = `I highly recommended to read ${book}, It is ${star} star rating.`;
// speech;

// const sweet = "Sweet is very bad for excessive consuming!";
// const advice = "avoid it as much as possible it helps brain to speed up";
// const speak = `${sweet} ${advice}`;
// speak;

//

// const bird = "Fly the bird";
// const birdscore = 10;
// const highbirdScore = 20;
// const outputbird = `I like the bird ${bird}. I gave it a score of ${(birdscore / highbirdScore)* 100}%.`;
// outputbird

//

// ? Multiline Strings
// const output = `I like the song. I gave it a score of 90%.`;
// output;

// const Learnig = `I like learning. I want to grow with this.`;
// Learnig;

//

//? using (\n)
// const output = "I like the song. \nI gave it a score of 90%.";
// output;
// console.log(output);

// const fruits = "I love fruits. \n but I hate this a little in bad seasons.";
// fruits;
// console.log(fruits);
//

// const myoutput = "I love do programming. \nI gave my 201% to it for learning and building.";
// myoutput;

//

//? Useful String Methods
//? Strings as Objects
// const string = 'This is my string';

//

//? Finding the lenght of a string
// const browserType = 'mozilla';
// console.log(browserType.length);

// const book = "think and grow rich";
// console.log(book.length);

// const feeling = "Love";
// console.log(feeling.length);

// const fruits = "Mango";
// const fruitsLength = fruits.length;
// console.log(fruitsLength);

// const animals = "Elephant";
// console.log(animals.length);

//

// const bird = "peacock";
// console.log(bird.length);

//

// const flower = "Haragaura";
// console.log(flower.length);

//

// const vehicle = "Tata maruti"; //* this include empty space also count this js
// console.log(vehicle.length)

//

// const ourHouse = "Our house is very bearutiful inside not outside";
// console.log(ourHouse.length)

//

//? Retrieving a specific string character
// const browserType = 'mozilla';
// console.log(browserType[0]);
// console.log(browserType[browserType.length-1]);

// const book = "Think and grow rich";
// console.log(book[0]);
// console.log(book[1]);
// console.log(book[2]);
// console.log(book[3]);
// console.log(book[4]);
// console.log(book[book.length-1]);
// console.log(book[book.length-2]);
// console.log(book[book.length-3]);
// console.log(book[book.length-4]);
// console.log(book[book.length-5]);
// console.log(book[book.length-6]);

// const Learn = "Programming";
// console.log(Learn[0]);
// console.log(Learn[1]);
// const retLearn = Learn[0];
// const retLearn1 = Learn[1];
// console.log(retLearn);
// console.log(retLearn1);

//

// const bird = "Parrot";
// console.log(bird[0]);
// console.log(bird[1]);
// console.log(bird[2]);
// console.log(bird[3]);
// console.log(bird[4]);
// console.log(bird[5]);
// console.log(bird[bird.length-1]);
// console.log(bird[bird.length-2]);
// console.log(bird[bird.length-3]);
// console.log(bird[bird.length-4]);
// console.log(bird[bird.length-5]);
// console.log(bird[bird.length-6])

//

//? Testing if a string contains a substring
// ?includes()
// const browserType = 'mozilla';
// if (browserType.includes('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

// const animals = "Tiger fox Elephant Deer";
// console.log(animals.includes("fox"));
// console.log(animals.includes("Lion"));

// const Learning = "Learning never stops growth.";
// console.log(Learning.includes("never"));
// console.log(Learning.includes("mango"));
// console.log(Learning.includes("a"));
// const includesLearn = Learning.includes("never");
// const includesLearn1 = Learning.includes("stops");
// const includesLearn2 = Learning.includes("Mango");
// const includesLearn3 = Learning.includes("a");
// includesLearn;
// includesLearn1;
// includesLearn2;
// includesLearn3;

//

// const flower = "flower is the beautiful creation by God.";
// flower.includes("is");
// console.log(flower.includes("is"))
// console.log(flower.includes("flower"));
// console.log(flower.includes("no"));
// console.log(flower.includes("himansu"));
// console.log(flower.includes("god"));
// console.log(flower.includes("God"));

//

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//

//? startsWith()
// const browserType = 'mozilla';

// if (browserType.startsWith('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

// const fruits = "Mango Orange Lichi";
// console.log(fruits.startsWith("Mango"));
// console.log(fruits.startsWith("M"));
// console.log(fruits.startsWith("Orange"));
// console.log(fruits.startsWith("O"));

// const fruits = "Mango is a fruit.";
// console.log(fruits.startsWith("Mango"));
// console.log(fruits.startsWith("M"));
// console.log(fruits.startsWith("a"));
// console.log(fruits.startsWith("is"));
// const fruits1 = fruits.startsWith("M");
// const fruits2 = fruits.startsWith("is");
// const fruits3 = fruits.startsWith("Mango");
// fruits1;
// fruits2;
// fruits3;

// const fruits = "Mango Orange Lichi";
// console.log(fruits.endsWith("Lichi"));
// console.log(fruits.endsWith("i"));
// console.log(fruits.endsWith("Orange"));

//

// const learning = "Learning is the beautiful and amazing journey in our life.";
// console.log(learning.startsWith("Learning"));
// console.log(learning.startsWith("is"));
// console.log(learning.startsWith("Learning is"));
// console.log(learning.startsWith("amazing"));

//

// const browserType = 'mozilla';

// if (browserType.endsWith('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

//

// const programming = "Programming is the only thing when start you starts to how to think.";
// console.log(programming.endsWith("think"))
// console.log(programming.endsWith("think."));

//

//? Finding the position of a substring in a string
//? indexOf()
// const tagline = 'MDN - Resources for developer, by developers';
// console.log(tagline.indexOf('developers'))
// console.log(tagline.indexOf('x'));
// because x is not present in string

// const books = "Think and grow rich";
// console.log(books.indexOf("and"));
// console.log(books.indexOf("Think"));
// console.log(books.indexOf("ink"));

// const fruits = "Mango is my favourite fruits.";
// console.log(fruits.indexOf("is"));
// const indexFruits = fruits.indexOf("my");
// indexFruits;
// const indexFruits1 = fruits.indexOf("is");
// indexFruits1;
// const indexFruits2 = fruits.indexOf("Mango");
// indexFruits2;
// const indexFruits3 = fruits.indexOf("a");
// indexFruits3;

// const myName = "Himansu is a programmer";
// console.log(myName.indexOf("a"));
// console.log(myName.indexOf("is"));
// console.log(myName.indexOf("programmer"));
// console.log(myName.indexOf("x"));
// console.log(myName.indexOf("HIMANSU"));

//

// const tagline = "MDN - Resources for developer, by developers";
// const firstOccurrence = tagline.indexOf("developers");
// const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

// console.log(firstOccurrence);
// console.log(secondOccurrence);

//

// const school = "Our kamarda school is my past childhood study place.";
// const firstSchool = school.indexOf("kamarda");
// const secondSchool = school.indexOf("study", firstSchool);

// console.log(firstSchool);
// console.log(secondSchool);

//

//? Extracting a substring from a string
//? slice()
// const browserType = 'mozilla';
// console.log(browserType.slice(1,4));
// first include but not last
// console.log(browserType.slice(2));

// const country = "India is the worlds most population country";
// console.log(country.slice(0,5));
// console.log(country.slice(6, 8));

// const animals = "Elephant is a Animals.";
// console.log(animals.slice(0,8));
// console.log(animals.slice(8,11));
// console.log(animals.slice(9,11));
// const sliceAnimals = animals.slice(0,8);
// sliceAnimals;
// const sliceAnimals1 = animals.slice(8,11);
// sliceAnimals1;
// const sliceAnimals2 = animals.slice(12,13);
// sliceAnimals2;

//

// const animal = "Elephant";
// console.log(animal.slice(0,1));
// console.log(animal.slice(0,4));
// console.log(animal.slice(2));
// console.log(animal.slice(0,8));

//

//? Changing case
//? toUpperCase()
//? toLowerCase()
// const radData = 'My NaMe Is MuD';
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());

// const fruits = "mango";
// const fruits = "MANGO";
// console.log(fruits.toUpperCase());
// const upperFruits = fruits.toUpperCase();
// upperFruits;
// console.log(fruits.toLowerCase())
// const lowerFruits = fruits.toLowerCase();
// lowerFruits;

//

// const city = "Dhenkanal";
// console.log(city.toUpperCase());
// console.log(city.toLowerCase());

//

//? Updating parts of a string
//? replace()
// const browserType = 'mozilla';
// const updated = browserType.replace('moz', 'van');

// const fruits = "Mango is a vegetable.";
// console.log(fruits.replace("vegetable", "Fruit"));
// const replaceFruits = fruits.replace("vegetable", "fruit");
// replaceFruits;

// console.log(updated);
// console.log(browserType);

//

// const bird = "Peacock is my fav bird";
// const birdUpdate = bird.replace('Peacock', "Parrot");
// console.log(birdUpdate);

//

// const vehicle = "Maruti is my fav car";
// const newUpdateCar = vehicle.replace("Maruti", "TATA");
// console.log(newUpdateCar);

//

// const greet = "Hello himansu how are you?";
// const updateGreet = greet.replace("him", "Aka");
// console.log(updateGreet);

//

// let browserType = 'mozilla';
// browserType = browserType.replace('moz', 'van');

// console.log(browserType);

//

//?replaceAll()
// let quote = "To be or not to be";
// quote = quote.replaceAll("be", "code");

// console.log(quote);

// const fruits = "Mango is a tasty fruits and it is tasty always.";
// console.log(fruits.replaceAll("tasty", "sweet"));
// const anotherFruits = fruits.replaceAll("is", "can");
// anotherFruits;

//

// let greet = "Hello guys All, how are you All!";
// greet = greet.replaceAll("All", "makka");

// console.log(greet)

//

//? Active Learning Examples
//? Filtering greeting messages
//? Fixing capitalization
//? Making new strings from old parts
// Test your skills: String
//? All above in MDN DOCS
//? Read and see those

