const obj = { color: "red" };

const spread = { ...obj, color: "yellow" };
spread; // { color: 'yellow' }
console.log(spread.color); // 'yellow' // create a new obj
console.log(obj.color); // 'red' // root obj not change immutable

const spread2 = { ...obj };
spread2; // { color: 'red' };

const spread3 = { ...obj, str: "string", color: [1, 2, 3] };
spread3; // {color: [1, 2, 3], str: "string"};

const arr = { fruit: "mango"};
const arr2 = {...arr};
console.log(arr2); // 
