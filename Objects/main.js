//? Object
//? Object Basics

// empty object
// const person = {};
// person;

// const fruits = {};
// fruits;

// const human = {};
// human;

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// person.name;
// person.name[0];
// person.age;
// person.bio();
// "Bob Smith is 32 years old."
// person.introduceSelf();
// "Hi! I'm Bob."

// console.log(person.name);
// console.log(person.name[0])
// console.log(person.age);
// console.log(person.bio());
// console.log(person.introduceSelf());

// const fruits = {
// 	category : ["odisha", "Utter Pradesh", "Bihar"],
// 	color : "white",
// 	explain : function () {
// 		console.log(`${this.category[0]} and ${this.color} and also ${this.category[2]}.`)
// 	},
// 	market : ["Bhubaneswar", "Cuttuck", "Dhenkanal", "Baleswar"],
// 	place : function () {
// 		console.log(`${this.market[0]}, ${this.market[2]}`)
// 	},
// }

// console.log(fruits.category);
// console.log(fruits.category[0]);
// console.log(fruits.category[1]);
// console.log(fruits.category[2]);
// console.log(fruits.color);
// console.log(fruits.explain());
// console.log(fruits.market);
// console.log(fruits.place());

//? Rule for Objects
// const objectName = {
//   member1Name: member1Value,
//   member2Name: member2Value,
//   member3Name: member3Value,
// };

//? Instead of bio: function () we can write bio(). Like this:

// const person = {
// 	name: ["Bob", "Smith"],
// 	age: 32,
// 	bio() {
// 	  console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
// 	},
// 	introduceSelf() {
// 	  console.log(`Hi! I'm ${this.name[0]}.`);
// 	},
//   };

// const fruits = {
// 	category : ["odisha", "Utter Pradesh", "Bihar"],
// 	color : "white",
// 	explain() {
// 		console.log(`${this.category[0]} and ${this.color} and also ${this.category[2]}.`)
// 	},
// 	market : ["Bhubaneswar", "Cuttuck", "Dhenkanal", "Baleswar"],
// 	place() {
// 		console.log(`${this.market[0]}, ${this.market[2]}`)
// 	},
// }
// console.log(fruits.explain())
// console.log(fruits.place())

//? An object like this is referred to as an object literal

//? Dot notation access object's properties using this
// person.age;
// person.bio();

//? Object as object properties

// const person = {
// 	name: ["Bob", "Smith"],
//   };

//  to

// const person = {
//   name: {
//     first: "Bob",
//     last: "Smith",
//   },
// …
// };

//   person.name.first; for chrome console
// person.name.last; for chrome console
// console.log(person.name.first);
// console.log(person.name.last);

// name[0];
// name[1];
// console.log(name[0]);
// console.log(name[1])

// to

// name.first;
// name.last;
// console.log(person.name.first);
// console.log(person.name.last)

// const fruits = {
//     category : {
// 		category1 : "Odisha",
// 		category2 : "Utter Pradesh",
// 	},
// 	colorname : {
// 		color1 : "White",
// 		color2 : "Blue",
// 		color3 : "Yellow"
// 	},
// 	color() {
// 		console.log(`${this.colorname.color1} ${this.colorname.color3}`)
// 	},
// };

// console.log(fruits.category.category1);
// console.log(fruits.category.category2);
// console.log(fruits.colorname);
// console.log(fruits.color())

//? Bracket notation

// person.age;
// person.name.first;

// instead use this

// person["age"];
// person["name"]["first"];
// console.log(person["age"]);
// console.log(person["name"]["first"]);
// console.log(person["name"]["last"]);

// const fruits = {
// 	name : {
// 		name1 : "Mango",
// 		name2 : "Orange",
// 		name3 : "Lichi",
// 	},
// 	colorname : {
// 		color1 : "White",
// 		color2 : "Blue",
// 		color3 : "Yellow",
// 	},
// 	explain() {
// 		console.log(`${this.name.name1} & ${this.colorname.color1}`)
// 	},
// }
// console.log(fruits.name);
// console.log(fruits.name.name1);
// console.log(fruits.explain());

//? Associative Arrays

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
// };

// function logProperty(propertyName) {
//   console.log(person[propertyName]);
// }

//   logProperty("name");
// ["Bob", "Smith"]
//   logProperty("age");
// 32

// const veg = {
// 	name : ["Potato", "Tomato"],
// 	cost : "20 rupees/kg",
// };

// function property(propNames) {
// 	console.log(veg[propNames])
// }
// property("name");
// property("cost");

// const animals = {
// 	names : ["Dog", "Elephant", "Cat", "Tiger", "Tigress", "Zebra"],
// 	place : ["Jungle", "Home", "Water"],
// 	indName() {
// 		console.log(`${this.names[0]} ${this.names[1]}`)
// 	},
// 	dwelling() {
// 		console.log(`${this.place[1]} ${this.place[0]}`)
// 	},
// };
// console.log(animals.names);
// console.log(animals.place);
// console.log(animals.indName());
// console.log(animals.dwelling());

//? Setting object members // you can update value of objects

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
// };

// person.age = 45;
// person["name"]["last"] = "Himansu";

// person.age;
// person["name"]["last"];
// console.log(person.age);
// console.log(person["name"]["last"]);

// const food = {
// 	name : ["chocolate", "Biscuits", "Bread"],
// 	brand : "Amul",
// 	location : {
// 		city : ["Bhubaneswar", "Mumbai", "Rajasthan", "UtterPradesh"],
// 	}
// };
// food.brand = "ParlG";
// console.log(food.brand);
// food["name"] = "Sweet";
// console.log(food.name);
// console.log(food);
// food["name"]["last"] = "ParleG";
// console.log(food["name"]["last"])
// console.log(food);
// food["name"]["first"] = "Ladu";
// food["location"]["city"] = "Odisha";
// food["location"]["city"]["anothercity"] = "Odisha";
// console.log(food["location"]);

// const fruits = {
// 	name : ["mango", "orange"],
// 	age : 20,
// };

// fruits.age = 50;
// fruits["name"]["first"] = "Lichi";
// console.log(fruits["name"]["first"])

// const fruits = {
// 	name : ["mango", "orange", "Lichi", "Brinjal"],
// }
// fruits["name"]["first"] = "Tomato";
// console.log(fruits["name"]["first"]);
// console.log(fruits["name"]);

// const veg = {
// 	category : "mraket",
// 	cost : "$20 dollar",
// 	place : ["bhubaneswar", "cuttuck", "Dhenkanal"],
// };

// console.log(veg.category);
// veg["category"] = "Grocery store";
// console.log(veg.category);
// console.log(veg.place);
// veg["place"]["last"] = "Baleswar";
// console.log(veg["place"]["last"])

//? you can also create completely new members

// person["eyes"] = "Himansu";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };

// person["eyes"];
// person.farewell();
// ("Bye everybody!");
// console.log(person["eyes"]);

// const person = {
// 	type : "fat",
// 	age : 45,
// };
// person["place"] = "Bhubaneswar";
// person.foody = () => {
// 	console.log("Hello Fatto Bhai")
// };
// person.animals = function () {
// 	console.log("I love the nature animals.")
// };
// console.log(person.place);
// console.log(person["place"]);
// person.foody();
// person.animals();
// console.log(person);

// const food = {
//   name: "Chocolate",
// };
// food["brand"] = "Amulcool";
// console.log(food["brand"])
// console.log(food.brand);
// console.log(food)

// const veg = {
// 	name : "veg",
// }

// veg["fresh"] = "Tomato";
// veg.vegetables = () => {
//   console.log("hello!");
// };
// console.log(veg["fresh"]);
// console.log(veg);

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

// person[myDataName] = myDataValue;

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// console.log(person[myDataName]);
// person.height;
// console.log(person.height);

// const ourDog = {
// 	"name": "Camper",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["everything!"]
//   };

//   ourDog.name = "Happy Camper";
//   console.log(ourDog.name);
//   console.log(ourDog["name"]);
//   console.log(ourDog);

// const myDog = {
// 	"name": "Coder",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["freeCodeCamp Campers"]
//   };
// myDog.name = "Happy Coder";
// console.log(myDog.name)
// myDog["name"] = "Programmer and coder";
// console.log(myDog["name"]);

//? Add New Properties to a JavaScript Object

// const ourDog = {
// 	"name": "Camper",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["everything!"]
//   };

//   ourDog.bark = "bow-wow";
//   ourDog["bark"] = "bow-wow";
//   console.log(ourDog.bark);
//   console.log(ourDog["bark"]);

// const ourCat = {
// 	"name": "Tommy",
// 	"legs" : 4,
// 	"tails": 1,
// 	"friends": ["everything!"]
// };

// ourCat.name = "mia-mia";
// ourCat["name"] = "mia mia";
// console.log(ourCat.name);
// console.log(ourCat);

// const myDog = {
// 	"name": "Happy Coder",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark = "woof";
//   console.log(myDog.name);
//   console.log(myDog.bark);

//? Delete Properties from a JavaScript Object

// const ourDog = {
// 	"name": "Camper",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["everything!"],
// 	"bark": "bow-wow"
//   };

//   delete ourDog.bark;
//   console.log(ourDog.bark)

// const myDog = {
// 	"name": "Happy Coder",
// 	"legs": 4,
// 	"tails": 1,
// 	"friends": ["freeCodeCamp Campers"],
// 	"bark": "woof"
//   };

//   delete myDog.legs;
//   console.log(myDog.legs);

//? Using Objects for Lookups

// const article = {
// 	"title": "How to create objects in JavaScript",
// 	"link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
// 	"author": "Kaashan Hussain",
// 	"language": "JavaScript",
// 	"tags": "TECHNOLOGY",
// 	"createdAt": "NOVEMBER 28, 2018"
//   };

//   const articleAuthor = article["author"];
//   const articleLink = article["link"];

//   const value = "title";
//   const valueLookup = article[value];
//   console.log(articleAuthor);
//   console.log(articleLink);
//   console.log(valueLookup);

// the above solution here below

//? what is 'this'?

// introduceSelf() {
// 	console.log(`Hi! I'm ${this.name[0]}.`);
//   }

// in this case 'this' is equivalent to person

// const person1 = {
// 	name: "Chris",
// 	introduceSelf() {
// 	  console.log(`Hi! I'm ${this.name}.`);
// 	},
//   };

//   const person2 = {
// 	name: "Deepti",
// 	introduceSelf() {
// 	  console.log(`Hi! I'm ${this.name}.`);
// 	},
//   };

//   console.log(person1.introduceSelf())
// person1.introduceSelf();
// person2.introduceSelf()

//? it will be essential when we start using constructors to create more than one object

//? Introducing Constructors
//? we can create multiple object

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// const salva = createPerson("Salva");
// salva.name;
// salva.introduceSelf();
// ("Hi! I'm Salva.");

// function food(names) {
//   const obj = {};
//   obj.names = names;
//   obj.explain = function () {
//     console.log(`Hi! I'm ${this.names}.`);
//   };
//   return obj;
// }

// const item = food("Chocolate");
// item.names;
// item.explain();

// const frankie = createPerson("Frankie");
// frankie.name;
// frankie.introduceSelf();
// "Hi! I'm Frankie."

// function Fruits(name) {
// 	const obj = {};
// 	obj.name = name;
// 	obj.fruitsintro = function() {
// 		console.log(`Hi! I'm ${this.name}.`);
// 	};
// 	return obj;
// }

// const myFruits = Fruits("Mango");
// myFruits.name;
// console.log(myFruits.name);
// myFruits.fruitsintro;
// console.log(myFruits.fruitsintro());

// function food(city) {
// 	const cities = {};
// 	cities.city = city;
// 	cities.explain = function () {
// 		console.log(`Tasty food find in ${this.city}.`);
// 	};
// 	return cities;
// }

// const foodcities = food("Bhubaneswar");
// foodcities.city;
// foodcities.explain();
// console.log(foodcities.city);

// function computer(tech) {
// 	const computers = {};
// 	computers.tech = tech;
// 	computers.details = function () {
// 		console.log(`computers are needs ${this.tech} very well!`);
// 	};
// 	return computers;
// }

// const newComputers = computer("Programming and Coding");
// newComputers.tech;
// newComputers.details();
// console.log(newComputers.tech);

// function hima(calling) {
// 	const calls = {};
// 	calls.calling = calling;
// 	calls.freinds = "hellow friends";
// 	calls.phone = "Ring";
// 	calls.greet = function() {
// 		console.log(`Hii ${this.calling}.`);
// 	};
// 	return calls;
// }
// const myCalls = hima("Himansu");
// console.log(myCalls.calling)
// console.log(myCalls.freinds);
// console.log(myCalls.phone);
// myCalls.greet();

//? Constructors, by convention, start with a capital letter and are named for the type of object

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }

//? To call Person() as a constructor, we use new:

// const salva = new Person("Salva");
// salva.name;
// salva.introduceSelf();
// const myName = new Person("Himansu");
// myName.name;
// console.log(myName.name);
// myName.introduceSelf();
// "Hi! I'm Salva."

// const frankie = new Person("Frankie");
// frankie.name;
// frankie.introduceSelf();
// "Hi! I'm Frankie."

//? You've been using objects all along

// when you used string methods like:
// myString.split(",");

// When you accessed the document object model using lines like this:
// const myDiv = document.createElement("div");
// const myVideo = document.querySelector("video");

// const myNotification = new Notification("Hello!");

// Objects let us keep the information safely locked away in their own package, out of harm's way.

//? Object Prototypes
//? Prototypes are the mechanism by which JavaScript objects inherit features from one another
//? Prototype chain

// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid
// console.log(myObject.greet())
// try in console myObject.
// myObject.toString(); // "[object Object]"
// console.log(myObject.toString());

//? What are these extra properties, and where do they come from?
//? Every object in JavaScript has a built-in property, which is called its prototype
//? The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain

//? prototype for myObject?
// Object.getPrototypeOf(myObject); // Object { }
// console.log(Object.getPrototypeOf(myObject));

//? The prototype of an object is not always Object.prototype. Try this

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null

//? Shadowing Properties
// What happens if you define a property in an object,
//  when a property with the same name is defined in the object's prototype? Let's see:

// const myDate = new Date(1999, 03, 5);
// console.log(myDate.getYear()); // 95
// console.log(myDate.getMonth());
// console.log(myDate.getDay());

// myDate.getYear = function () {
//   console.log("something else!");
// };

// myDate.getYear(); // 'something else!'

//? Setting a prototype
// two ways
// 1 - Object.create()
// 2 - constructors

//? Using Object.create()
// The Object.create() method creates a new object and allows you to specify an object that will be
//  used as the new object's prototype.
// Here's an example:

// const personPrototype = {
// 	greet() {
// 	  console.log("hello!");
// 	},
//   };

//   const carl = Object.create(personPrototype);
//   carl.greet(); // hello!

// const food = {
// 	call() {
// 		console.log("Hii!");
// 	},
// };
// const foody = Object.create(food);
// foody.call();

// const fastfood = [
// 	{
// 		items : ["Panipuri", "Bara", "Bolder", "Nasta"]
// 	}
// ]
// const myfood = Object.create(fastfood);
// console.log(myfood[0]["items"]);

//? Using constructors

// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
// };

// function Person(name) {
//   this.name = name;
// }

//   Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

//   const reuben = new Person("Reuben");
// reuben.greet(); // hello, my name is Reuben!

//? Own Properties
// const irma = new Person("Irma");

// console.log(Object.hasOwn(irma, "name")); // true
// console.log(Object.hasOwn(irma, "greet")); // false

// const hima = new Person("hima");
// console.log(Object.hasOwn(hima, "name"));

//? Object oriented programming
//? Classes and Instances

// Professor class could be written like this:

// class Professor
//     properties
//         name
//         teaches
//     methods
//         grade(paper)
//         introduceSelf()

// Each concrete professor we create is called an instance of the Professor class.
// The process of creating an instance is performed by a special function called a constructor.

// Generally, the constructor is written out as part of the class definition,
//  and it usually has the same name as the class itself:

// class Professor
//     properties
//         name
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()

// keyword new to signal that a constructor is being called.

// walsh = new Professor("Walsh", "Psychology");
// lillian = new Professor("Lillian", "Poetry");

// walsh.teaches; // 'Psychology'
// walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

// lillian.teaches; // 'Poetry'
// lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

//? Inheritance

// class Student
//     properties
//         name
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()

// class Person
//     properties
//         name
//     constructor
//         Person(name)
//     methods
//         introduceSelf()

// class Professor : extends Person
//     properties
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()

// class Student : extends Person
//     properties
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()

// walsh = new Professor("Walsh", "Psychology");
// walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

// summers = new Student("Summers", 1);
// summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

// pratt = new Person("Pratt");
// pratt.introduceSelf(); // 'My name is Pratt.'

//? Encapsulation

// Keeping an object's internal state private,
// and generally making a clear division between its public interface and its private internal state, is called encapsulation.

// if (student.year > 1) {
// allow the student into the class
//   }

// class Student : extends Person
//     properties
//        year
//     constructor
//         Student(name, year)
//     methods
//        introduceSelf()
//        canStudyArchery() { return this.year > 1 }

// if (student.canStudyArchery()) {
// allow the student into the class
//   }

// class Student : extends Person
//     properties
//        private year
//     constructor
//         Student(name, year)
//     methods
//        introduceSelf()
//        canStudyArchery() { return this.year > 1 }

// student = new Student('Weber', 1)
// student.year // error: 'year' is a private property of Student

//? Classes in Javascript
//? Classes and constructors

// class Person {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// const giles = new Person("Giles");

// giles.introduceSelf(); // Hi! I'm Giles

// console.log(giles.introduceSelf());

// class Fruits {
// 	name;

// 	constructor(name) {
// 		this.name = name;
// 	}

// 	greet() {
// 		console.log(`Hi! I'm ${this.name}`);
// 	}
// }

// const greeting = new Fruits("Mango");
// greeting.greet();

//? name; declaration is optional: you could omit it

// class flowers {
//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// const flower = new flowers("Gendu");
// flower.introduceSelf();

// class fruits {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSlef() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// const fruit = new fruits("Mango");

// fruit.introduceSlef();

//? You could also initialize the property to a default value when you declare it, with a line like name = '';.

// class car {
//   name = "";

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }
// const carName = new car("Honda");
// carName.introduceSelf();

//? Omitting constructors
//? If you don't need to do any special initialization, you can omit the constructor,
//? and a default constructor will be generated for you:

// class Animal {
//   sleep() {
//     console.log("zzzzzzz");
//   }
// }

// const spot = new Animal();

// spot.sleep(); // 'zzzzzzz'

// class nickName {
//   call() {
//     console.log(" Papuni");
//   }
// }

// const cuteName = new nickName();
// cuteName.call();

//? Inheritance
// We use the extends keyword to say that this class inherits from another class.

// class Professor extends Person {
//   teaches;

//   constructor(name, teaches) {
//     super(name);
//     this.teaches = teaches;
//   }

//   introduceSelf() {
//     console.log(
//       `My name is ${this.name}, and I will be your ${this.teaches} professor.`
//     );
//   }

//   grade(paper) {
//     const grade = Math.floor(Math.random() * (5 - 1) + 1);
//     console.log(grade);
//   }
// }

// const walsh = new Professor("Walsh", "Psychology");
// walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

// walsh.grade("my paper"); // some random grade

//? Encapsulation
// In this class declaration, #year is a private data property

// class Student extends Person {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//   }

//   canStudyArchery() {
//     return this.#year > 1;
//   }
// }

// const summers = new Student("Summers", 2);

// summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
// summers.canStudyArchery(); // true

// summers.#year; // SyntaxError

//? Private Methods
// private data properties, their names start with #
// they can only be called by the object's own methods:

// class Example {
//   somePublicMethod() {
//     this.#somePrivateMethod();
//   }

//   #somePrivateMethod() {
//     console.log("You called me?");
//   }
// }

// const myExample = new Example();

// myExample.somePublicMethod(); // 'You called me?'

// myExample.#somePrivateMethod(); // SyntaxError
