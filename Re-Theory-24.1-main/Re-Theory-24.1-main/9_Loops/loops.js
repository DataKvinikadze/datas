// ! while loop

let num = 0;

while (num < 5) {
  // ფრჩხილებში ვწერთ მნიშვნელობას booleaნ-ს სანამ num ნაკლებია 5-ზე, ანუ num < 5 = true-ს ქვემოთ დაწერილი კოდი შესრულდება.
  console.log(num);
  num++;
  // იმისთვის რომ არ მივიღოთ Infinity loop, რაც ნიშნავს რომ პროგრამა იმუშავებს და არ გაითიშება არასდროს. რაც ცუდია და გამოიწვევს პრობლემას. ამისთვის იყენებენ "ჩამკეტს" რომელიც ყოველჯერზე ზრდის num-ის მნიშვნელობას და ჩვენ მიერ ფრჩხილებში ჩაწერილი ფუნქცია გარკვეული რაოდენობის შემდეგ გახდება false.
}

// example 2

let number = 0;

while (number < 5 || number === 5) {
  console.log(number);
  number = number + 1;
}

// exmaple 3
// !Difference do while and while

let weather = true;
while (weather === false) {
  console.log('good weather');
}

// -------------------
// მცირე განსხვავება ფრჩხილებში არსებული კოდი რომც false-იყოს ერთხელ შეასრულებს დასაწყისში კოდს.
do {
  console.log('good weather');
} while (weather === false);

// example 4
let i = 0;
let array = [1, 2, 3, 4, 5];

while (i < array.length) {
  console.log(array[i]);
  i++;
}

// ! For loop

// example 1

for (let i = 0; i < 5; i++) {
  /*
  1. ვქმნით ცვლადს რომელიც ამ შემთხვევაში არის 0
  2. ვწერთ ქმედებას რომელიც სანამ true იქნება იქამდე იმუშავებს ჩვენი კოდი.
  3. "ჩამკეტი" რომელიც ყოველ ჯერზე ცვლის ჩვენ მიერ შექმნილი ცვლადის მნიშვნელობას რადგან კოდი სამუდამოდ არ გაგრძელდეს
  booleaნ-ს სანამ i ნაკლებია 5-ზე, ანუ i < 5 = true-ს ქვემოთ დაწერილი კოდი შესრულდება.
 */
  console.log(i);
}

// example 2

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// example 3 inner loop

let numbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers2.length; i++) {
  for (let j = 0; j < numbers2.length; j++) {
    console.log(numbers2[j]);
  }
}

// TODO for Each

//Example 1

const numbers44 = [1, 2, 3, 4, 5];

numbers44.forEach(function (element) {
  console.log(element);
});

//Example 2

const numbers22 = [1, 2, 3, 4, 5];

numbers22.forEach(function (element, index) {
  console.log(`Index: ${index}, Element: ${element}`);
});

//Example 3

const numbers3 = [1, 2, 3, 4, 5];

function printElement(element, index, array) {
  console.log(`Index: ${index}, Element: ${element}`);
  console.log(array);
}

numbers3.forEach(printElement);

console.log('-------------------');

//Example 4 double numbers

const numbers4 = [1, 2, 3, 4, 5];

function doubleElement(element, index, array) {
  array[index] = element * 2;
}

numbers4.forEach(doubleElement);

console.log(numbers4);

// Example 5 triple numbers

const numbers5 = [1, 2, 3, 4, 5];

numbers5.forEach(function (element, index, array) {
  array[index] = element * 3;
});
