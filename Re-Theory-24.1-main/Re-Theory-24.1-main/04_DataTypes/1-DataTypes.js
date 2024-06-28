// *String

let name = 'John Doe';
console.log(typeof name); // "string"

// *Number

let age = 25;
console.log(typeof age); // "number"

// *BigInt

/* 
BigInt არის Data ტიპი JavaScript-ში, რომელიც გამოიყენება დიდი ზომის რიცხვების შესანახად, რომელიც Number ტიპის ცვლადის მოცულობას აღემატება. JavaScript-ში, Number ტიპის მაქსიმალური ზომა არის 2^53 - 1. BigInt გამოიყენება რიცხვებისთვის, რომლებიც აღემატებიან ამ ზომას, და არ აქვს ზღვარი.

BigInt ტიპის ცვლადი იქმნება რიცხვის ბოლოში n სიმბოლოს დამატებით, მაგალითად:

ეს გამოიყენება ფინანსურ ანალიზში, კრიპტოგრაფიაში და სხვა სფეროებში, სადაც საჭიროა ზუსტი და დიდი რიცხვების მუშაობა.
*/
let largeNumber = 1234567890123456789012345678901234567890n;
console.log(typeof largeNumber); // "bigint"

// *Boolean

let isAdult = true;
console.log(typeof isAdult); // "boolean"

// *Undefined

let job;
console.log(typeof job); // "undefined"

// *Null (typeof null will return "object" due to a historical JavaScript bug)
let salary = null;
console.log(typeof salary); // "object"

// *Object
let person = {
  name: 'John Doe',
  age: 25,
};
console.log(typeof person); // "object"

// *Array (Arrays are technically objects in JavaScript)

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object"

// *Function (Functions are technically objects in JavaScript)

function greet() {
  console.log('Hello, world*');
}
console.log(typeof greet); // "function"

// *Date (Dates are technically objects in JavaScript)
let now = new Date();
console.log(typeof now); // "object"
