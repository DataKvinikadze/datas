// !სტრინგების შექმნის გზები.

// Single Quotes:
let greeting = 'Hello, world!';

// Double Quotes:
let message = 'This is a string enclosed in double quotes.';

// Backticks for Template Literals:
let name = 'John';
let age = 30;
let info = `My name is ${name} and I am ${age} years old.`;

// !მეთოდები.

// !Length

// #1
let str = 'Hello, world!';
let length = str.length;
console.log(length); // Output: 13

// #2

let emptyStr = '';
let emptyLength = emptyStr.length;
console.log(emptyLength); // Output: 0

// #3

let unicodeStr = '😊🌟';
let unicodeLength = unicodeStr.length;
console.log(unicodeLength); // Output: 2 (ერთი ემოცია ითვლება ერთი სიმბოლოდ)

// #4
let whitespaceStr = '  Hello  ';
let whitespaceLength = whitespaceStr.length;
console.log(whitespaceLength); // Output: 9 (გამოყენებული სფეისების რაოდენობაც ითვლება)

// #5
let str1 = 'Hello';
let str2 = 'world';
let combinedLength = str1.length + str2.length;
console.log(combinedLength);

// #6

let texts = 'abc123';
let textLength = 6;
let meetsRequirement = texts.length >= textLength;
console.log(meetsRequirement); // Output: true (password has 6 or more characters)

// #7

let str7 = 'Hello, world!';

str7[length - 1]; // Output: '!'
str7[length]; // Output: undefined
str7[99]; // Output: undefined

//! uppercase, lowercase

// #1
let up = 'hello, world!';
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: "HELLO, WORLD!"

// #2
let low = 'HELLO, WORLD!';
let lowerCaseStr = low.toLowerCase();
console.log(lowerCaseStr); // Output: "hello, world!"

//! lastIndexOf indexOf

// #1
let strr = 'Hello, world!';
let index1 = strr.indexOf('o'); // აბრუნებს პირველის ინდექსს რომელშიც "o" არის
console.log(index1); // Output: 4

// #2

let strr2 = 'Hello, world!';
let index2 = strr2.lastIndexOf('o'); // აბრუნებს ბოლო ინდექსს რომელშიც "o" არის
console.log(index2); // Output: 8

// #3

let sstr = 'Hello, world!';
let index3 = sstr.indexOf('world'); //  აბრუნებს პირველის ინდექსს რომელშიც "world" არის
console.log(index3); // Output: 7

// #4
let sttr = 'Hello, world!';
let index4 = sttr.indexOf('W'); // აბრუნებს -1 რადგან  სიმბოლო "W" ვერ მოიძებნა
console.log(index4); // Output: -1

let index5 = sttr.toLowerCase().indexOf('W'.toLowerCase()); // აბრუნებს 7 რადგან სიმბოლო "W" მოიძებნა

console.log(index5); // Output: 7

// #5

let str10 = 'Hello, world!';
let index7 = str10.indexOf('o', 5); // Starts searching from index 5, returns the index of the next occurrence of "o"

console.log(index7); // Output: 7

// #6

let str12 = 'Hello, world!';
let index12 = str12.lastIndexOf('o'); // Returns the index of the last occurrence of "o"
console.log(index12); // Output: 8

// #7
const test = 'hello world';
const test2 = test.indexOf('');
console.log(test2);

// #8
const test3 = 'hello world undefined';
const test4 = test3.indexOf();
console.log(test4); // Output: if we have undefined

//! Slice

let sliceStr = 'Hello, world!';
let slicedStr1 = sliceStr.slice(7); // ამოჭრის სიმბოლოებს ინდექსიდან 7-დან საბოლოო სიმბოლომდე
console.log(slicedStr1); // Output: "world!"

let slicedStr2 = sliceStr.slice(0, 5); // Extracts characters from index 0 to index 4 (exclusive)
console.log(slicedStr2); // Output: "Hello"

let slicedStr3 = sliceStr.slice(-6); // Extracts last 6 characters of the string
console.log(slicedStr3); // Output: "world!"

let slicedStr4 = sliceStr.slice(7, -1); // Extracts characters from index 7 to second-to-last character
console.log(slicedStr4); // Output: "world"

// !include

// #1
let includeStr = 'Hello, world!';
let containsWorld = includeStr.includes('world');
console.log(containsWorld); // Output: true

// #2

let includeStr2 = 'Hello, world!';
let containsHELLO = includeStr2.includes('HELLO');
console.log(containsHELLO); // Output: false (because the check is case-sensitive)

// #3

let includeStr3 = 'Hello, world!';
if (includeStr3.includes('world')) {
  console.log("The string contains 'world'.");
} else {
  console.log("The string does not contain 'world'.");
}

// let containsHELLO = includeStr2.includes('HELLO', 5);  (search starts from index 5)

// თასქი შევამოწმოთ აქვს თუ არა სფეისი გამოყენებული
// Prompt the user to enter a string
let userInput4 = prompt('Please enter a string:');

// Check if the user input includes a space
if (userInput4 && userInput4.includes(' ')) {
  // If the user input includes a space, display a message
  alert('The input string contains a space.');
} else if (userInput4) {
  // If the user input is not empty and does not contain a space, display the input
  alert('Your input: ' + userInput4);
}

//! startwith / endwith
// 1

let strrrr = 'Hello, world!';
let startsWithHello = strrrr.startsWith('Hello');
console.log(startsWithHello); // Output: true

// 2

let strrr = 'Hello, world!';
let startsWithComma = strrr.startsWith(',', 5); // Check if the substring starts from index 5
console.log(startsWithComma); // Output: true

// 3

let wsstr2 = 'Hello, world!';
let endsWithWorld = wsstr2.endsWith('world!');
console.log(endsWithWorld); // Output: true

// 4
let wsstr = 'Hello, world!';
let endsWithComma = wsstr.endsWith(',', 5); // mexute elementi mtavrdeba
console.log(endsWithComma); // Output: true

//! concat:

// გვჭირდება 2 ცვლადი,

let pirveli = 'hello';
let meore = 'world';
let greeting2 = pirveli.concat(meore); // Output: "Hello, world!hello world"
// let greeting2 = pirveli.concat(meore,meore,meore);
console.log(greeting2);

greeting = pirveli.concat(' ', meore); // Output: "Hello, world!"

// !repeat

console.log('abc'.repeat(3));

console.log('hello'.repeat(2));

let str1111 = 'Hello ';
let repeatedStr = str1111.repeat(3);
console.log(repeatedStr); // Output: "Hello Hello Hello "

// -1 არ იმუშავებს

// !trim

str = '   Hello, world!   ';
let trimmedStartStr = str.trimStart();
console.log(trimmedStartStr); // Output: "Hello, world!   "

//2

str = '   Hello, world!   ';
let trimmedEndStr = str.trimEnd();
console.log(trimmedEndStr); // Output: "   Hello, world!"

//3
str = '   Hello, world!   ';
trimmedStr = str.trimStart().trimEnd();
console.log(trimmedStr); // Output: "Hello, world!"

//4

let s1tr = `
Hello, 
world!
`;
let t1rimmedStr = s1tr.trim();
console.log(t1rimmedStr); // Output: "Hello, \nworld!"

//! replace

let strdw = 'Hello, world!';
let replacedStr = strdw.replace('world', 'everyone');
console.log(replacedStr); // Output: "Hello, everyone!"
