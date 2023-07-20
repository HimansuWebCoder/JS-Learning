//? Arrays
//? Creating arrays
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping);

// const fruits = ["Mango", "Orange", "Lichi", "Apple"];
// fruits;

//

// const think = ["positive", "negative", "neutral"];
// console.log(think);

//

// const array = ["Truck", "Car", "Bus", "Bike", "Auto", "Aeroplane"];
// array;

//

// const sequence = [1, 1, 2, 3, 5, 8, 14];
// const random = ['tree', 254, [0, 1, 2]];
// sequence;
// random;

//

// const numbers = [1,2,3,4,5,5,6,3,2];
// numbers;
// const random = ["panasa", "Amba", [1, 2, 3], true, false];
// random;

// const negatives = ["frustration", "depression", "anxiety"];
// negatives;
// console.log(negatives);

//

//? Finding the length of an array
//? length
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping.length)

// const fruits = ["mango", "banana", "apple", "lichi"];
// console.log(fruits.length);

// const life = ["Growth", "Down", "Learning", "Stoping"];
// console.log(life.length)

// const img = ["img1", "img2", "img3", "img4"];
// const imageLength = img.length;
// imageLength;

// const myarr = ["India", "China", "Pakistan","Russia"];
// console.log(myarr.length);
// const myarrLength = myarr.length;
// myarrLength;

//

// const journey = ["Data Entry", "Coding", "Programming"]
// console.log(journey.length);

//

//? Accessing and Modifying array items
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping[0]);

// const myFood = ["ChickenRoll", "EggRoll", "Chaomin", "chocolate Icecream"];
// console.log(myFood[0]);
// myFood[0] = "Maggie";
// console.log(myFood[0]);


// const food = ["Bread", "Milk", "chhese", "noodles"];
// console.log(food[0]);
// console.log(food[1]);
// console.log(food[2]);
// console.log(food[3]);
// console.log(food[4]);

// const vegetables = ["Potato", "tomato", "brinjal", "onion"];
// console.log(vegetables[0]);
// console.log(vegetables[1]);
// console.log(vegetables[2]);
// console.log(vegetables[3]);
// console.log(vegetables[4]);
// const vegetable1 = vegetables[0];
// const vegetable2 = vegetables[1];
// const vegetable3 = vegetables[2];
// const vegetable4 = vegetables[3];
// vegetable1;
// vegetable2;
// vegetable3;
// vegetable4;


//

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// shopping[0] = 'tahini';
// console.log(shopping);

// const food = ["noodles", "Chaomin"];
// food[0] = "Milk";
// console.log(food);
// food[1] = "Horlicks";
// console.log(food);
// food[2] = "noodles";
// console.log(food);
// food[3] = "Chaomin";
// console.log(food);
// food[4] = "hey! hey! I eat food.";
// console.log(food);

// const fruits = ["Mango", "Lichi", "Orange"];
// fruits[0] = "Apple";
// fruits;
// fruits[1] = "Guava";
// fruits;

// What is the result of this fruits listed array items
// const fruits = ["Mango", "Lichi", "Orange"];
// fruits.push("PineApple");
// console.log(fruits.at(-2));



//

//? Finding the index of items in an array
//? indexOf();
// const birds = ['Parrot', 'Falcon', 'Owl'];
// console.log(birds.indexOf('Owl'));
// console.log(birds.indexOf('Rabbit'));

// const web = ["Internet", "ICP", "IP", "TCP", "HTTP"];
// console.log(web.indexOf("Internet"));
// console.log(web.indexOf("HTTP"));
// console.log(web.indexOf("IP"))

// const fruits = ["Mango","Guava", "Banana", "Orange"];
// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("Guava"));
// console.log(fruits.indexOf("Banana"));
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf(" "));

// const vegetables = ["Potato", "Brinjal", "onion", "Carrot"];
// console.log(vegetables.indexOf("Brinjal"));
// const onionIndex = vegetables.indexOf("onion");
// onionIndex;

//

//? Adding items
//? push(), Add items in last position;
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities);
// cities.push('Bradford', 'Brighton');
// console.log(cities);

// const fruits = ["Banana", "Apple", "Guava", "Lichi", "Orange"];
// fruits.push("PineApple");
// fruits;
// fruits.push("Grapes");
// fruits;
// fruits.push("ratten Mango");
// fruits;

// const gods = [];
// gods.push("Brahma", "Bishnu", "Shiva");
// gods;

const arra1 = ["a", "b", "c"];
arra1.forEach(element => console.log(element + "hello"));


const fruits = ["Mango", "Orange", "Lichi"];
fruits.forEach(elem => console.log(elem + " " + 12));
//

// const cities = ['Manchester', 'Liverpool'];
// const newLength = cities.push('Bristol');
// console.log(cities);
// console.log(newLength);

// const animals = ["Cat", "Dog", "Tiger", "Elephant"];
// const FavouritAnimals = animals.push("Panda");
// animals;
// FavouritAnimals;

// const books = ["Think and Grown Rich", "You can sell", "The personal MBA"];
// const myBooks = books.push("you can win");
// books;
// myBooks;

//

//? unshift(), Add items in 1st position;
// const cities = ['Manchester', 'Liverpool'];
// cities.unshift('Edinburgh');
// console.log(cities);

// const techThings = ["Keyboard", "mouse", "Headphone"];
// techThings.unshift("CPU");
// techThings;

// const fruits = ["Mango", "Orange", "Banana"];
// fruits.unshift("Lemon");
// fruits;

// const food = ["noodles", "Maggie"];
// const myFood = food.unshift("Milk");
// food;

// const dress = ["Jeans", "T-shirt"];
// const myDress = dress.unshift("Polo Dress");
// dress;

//

//? Removing items
//? pop() remove last item
// const cities = ['delhi', 'bhubaneswar'];
// cities.pop();
// console.log(cities);

// const vehicle = ["Car", "Bike", "Scutter", "Bus"];
// vehicle.pop();
// vehicle;
// vehicle.pop();
// vehicle;
// vehicle.pop();
// vehicle;
// vehicle.pop();
// vehicle;

// const friends = ["Asima", "Badal", "Mamali", "priyanka"];
// console.log(friends.pop());
// friends;
// friends.pop();
// friends;
// friends.pop();
// friends;
// friends.pop();
// friends;

//

// const cities = ['delhi', 'pune'];
// const removedCity = cities.pop();
// console.log(removedCity);

// const fruits = ["Mango", "Orange", "Guava", "Apple", "Lichi"];
// const removeFruits1 = fruits.pop();
// removeFruits1;
// fruits;

// const removeFruits2 = fruits.pop();
// removeFruits2;
// fruits;

// const removeFruits3 = fruits.pop();
// removeFruits3;
// fruits;

// const removeFruits4 = fruits.pop();
// removeFruits4;
// fruits;

// const removeFruits5 = fruits.pop();
// removeFruits5;
// fruits;

//

//? shift() remove 1st item
// const cities = ['delhi', 'pune'];
// cities.shift();
// console.log(cities);

// const fruits = ["Mango", "Orange", "Guava","Lichi"];
// fruits.shift();
// fruits;
// fruits.shift();
// fruits;
// fruits.shift();
// fruits;
// fruits.shift();
// fruits;

// const fruits = ["Mango", "Orange", "Guava", "Lichi"];
// const fruitRemove0 = fruits.shift();
// fruitRemove0;
// fruits;
// const fruitRemove1 = fruits.shift();
// fruitRemove1;
// fruits;
// const fruitRemove2 = fruits.shift();
// fruitRemove2;
// fruits;
// const fruitRemove3 = fruits.shift();
// fruitRemove3;
// fruits;

//

//? splice() remove item using indexOf
// const cities = ['pune', 'delhi', 'mumbai', 'bihar'];
// const index = cities.indexOf('delhi');
// if (index !== -1) {
// 	cities.splice(index, 1);
// }
// console.log(cities);

// const fruits = ["Mango", "Orange", "Guava", "Grapes"];
// const index = fruits.indexOf("Orange");
// if (index !== -1) {
// 	fruits.splice(index, 1);
// }
// fruits;

// const food = ["Lichi", "Orange", "Grapes"];
// const indexFood = food.indexOf("Lichi");
// if (indexFood !== -1) {
// 	food.splice(indexFood,1);
// }
// food;

//

// const cities = ['pune', 'delhi', 'mumbai', 'bihar'];
// const index = cities.indexOf('delhi');
// if (index !== -1) {
// 	cities.splice(index, 2);
// }
// console.log(cities);

//

//? Accessing every item
//? for...of
// const birds = ['Parrot', 'crow', 'Owl'];

// for (const bird of birds) {
// 	console.log(bird);
// }

// const fruits = ["Mango", "Orange", "Guava", "Apple"];
// for (const fruit of fruits) {
// 	console.log(fruit);
// }

// const vegetables = ["Potato", "Brinjal", "Onion", "Carrot"];
// for (const item of vegetables) {
// 	console.log(item);
// }

//

//? map()
// function double(number) {
// 	return number * 2;
// }
// const numbers = [5, 2, 7, 6];
// const doubled = numbers.map(double);
// console.log(doubled);

// function triple(number) {
// 	return number * 3;
// }
// const numbers = [2,3,4,15,64];
// const tripled = numbers.map(triple);
// console.log(tripled)

// function fname(fruits) {
// 	return fruits += " Hello!";
// }
// const fruit = ["Mango", "Orange", "Lichi"];
// const myFruits =  fruit.map(fname);
// console.log(myFruits);

// function toupper(name) {
// 	return name.toUpperCase();
// }
// const myname = ["Himansu", "Naik"];
// const mine = myname.map(toupper);
// mine;

// function tolower(name) {
// 	return name.toLowerCase();
// }
// const yourname = ["RINKY", "NAIK"];
// const yours = yourname.map(tolower);
// yours

// function tostring(fruits) {
// 	return fruits.toString();
// }
// const myFruits = ["Mango", "Orange", "lichi", "Banana", "Apple"];
// const favFruits = myFruits.map(tostring);
// favFruits;
// myFruits;

// I can't understand why this not works so I can solve this in near future

// function fruits(fruitName) {
// 	return fruitName.toString();
// }
// const myfruits = ["mango", "Orange", "apple", "lichi"];
// const yourfruits = myfruits.map(fruits);
// yourfruits;

// function fruits(fruitName) {
//   return fruitName.length;
// }
// const myfruits = ["Mango", "Lichi", "apple", "PineApple"];
// const favFruits = myfruits.map(fruits);
// favFruits;

// function names(vehicles) {
// 	return vehicles.length;
// }
// const vehicle = ["truck", "bus", "car", "bike"];
// const myvehicle = vehicle.map(names)
// myvehicle;

//

//? filter()
// function isLong(city) {
// 	return city.length > 5;
// }
// const cities = ['London', 'India', 'Pune', 'Mumbai'];
// const longer = cities.filter(isLong);
// console.log(longer);

// function fruit(number) {
// 	return number.length > 5;
// }
// const fruits = ["Mango", "Orange", "Lichi", "Grapes"];
// const myfruits = fruits.filter(fruit);
// console.log(myfruits);

// function car(vehicle) {
// 	return vehicle.length > 5;
// }
// const cars = ["TATA", "Maruti", "BMW", "Honda", "Hyundai"];
// const mycar = cars.filter(car);
// console.log(mycar);

// function color(name) {
// 	return name.length < 6;
// }
// const colors = ["Yellow", "Green", "Black", "White"];
// const mycolors = colors.filter(color);
// console.log(mycolors);

// function callName(pname) {
// 	return pname !== pname.toUpperCase();
// }
// const names = ["himansu", "RINKU", "urbasi", "SIPU", "sondhya"];
// const filtername = names.filter(callName);
// filtername;

// yahoo! I did it my own filter function cheel!

// function callName(pname) {
//    return pname !== pname.toLowerCase();
// }
// const names = ["HIMANSU", "sipu", "MAMUNI", "sandhya", "URBASI"];
// const filterName = names.filter(callName);
// filterName;

//

//? Converting between strings & arrays
// ? split()
// const data = "pune, mumbai, bihar, delhi, punjab, odisha";
// split it at each comma:
// const cities = data.split(",");
// cities;
// console.log(cities.length);
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[cities.length - 1]);
// console.log(cities[cities.length-2]);
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[3]);
// console.log(cities.length-2);
// console.log(cities.length-1);
// console.log(cities.length-3);

// const vegetables = "potato, onion, carrot, brinjal";
// const veg = vegetables.split(",");
// veg;

// console.log(veg.length);
// console.log(veg[0]);
// console.log(veg[1]);
// const veg1 = veg[0];
// const veg2 = veg[1];
// veg1;
// veg2;

// const myfriends = "Chinu, Badal, Sibu, Sarbeswar";
// console.log(myfriends.split(","))

//

//? join()
// const commaSeparated = cities.join(',');
// commaSeparated;

// const food = ["noodle", "Maggie", "Milk"];
// const separatedFood = food.join(",");
// separatedFood;

// const myfood = "milk, biscuits, milk, honey, noodles";
// const foody = myfood.split(",")
// foody;

// const myfood = ["Milk", "biscuits", "Milk", "honey", "noodles"];
// const foody = myfood.join(" ");
// const foody = myfood.join("-");
// const foody = myfood.join(":");
// const foody = myfood.join(",");
// const foody = myfood.join(" = ");
// const foody = myfood.join(" @");
// foody;

// const myfriends = ["chinu", "mamali", "Asima", "Raja", "Lulu", "Badal", "priyanka", "Krushna"];
// console.log(myfriends.join(" : "));
// const joinfriends = myfriends.join(" # ");
// joinfriends;

// const defaultSeparated = cities.join();
// defaultSeparated;

//

// const anotherSeparatedDefault = cities.join("");
// anotherSeparatedDefault;

//

//? toString()
// const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
// console.log(dogNames.toString());

// const fruits = ["Mango", "Orange", "Lichi"];
// console.log(fruits.toString());
// const myFruits = fruits.toString();
// myFruits;

// const vehicles = ["Truck", "bus", "Car"];
// console.log(vehicles.toString());

// const MNC = ["Google", "Facebook", "Microsoft", "Uber"];
// console.log(MNC.toString());
// MNC;

//

// const names = ["Himansu", "Naik", "rinky", "Nayak", "Papuni", "Panda"];
// console.log(names.toString());

// const friends = ["Chinu", "Sibu", "Lulu", "Raja"];
// console.log(friends.toString())
// const stringFriends = friends.toString();
// stringFriends;
//

//? Active Learning: Printing those products
//? Active Learning: Top 5 searches
//? Silly story generator assessment
//? These are in MDN read and understand
