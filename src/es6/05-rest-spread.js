// arrays destructuring

let fruits = ['apple', 'banana', 'orange', 'mango']; // array
let [a, b] = fruits; // destructuring
console.log(a, b);  // apple banana los dos primeros elementos del array

// objects destructuring
let user = { username: 'oscar', age: 32 }; // object
let { username, age } = user; // destructuring
console.log(username, age); // oscar 32

// spread operator
let person = { name: 'oscar', age: 32 }; // object
let country = 'CO'; // string

let data = { ...person, country }; // spread operator
console.log(data); // { name: 'oscar', age: 32, country: 'CO' }

// rest
function sum(num, ...values){ // rest
    console.log(values); // [ 2, 3, 4, 5 ]
    console.log(num + values[0]); // 3
    return num + values[0]; // 3
}

sum(1, 2, 3, 4, 5);