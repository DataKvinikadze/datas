//* მასივი

// *მასივების შექმნა
let fruits = ['Apple', 'Banana', 'Cherry'];
let emptyArray = []; // ცარიელი მასივი

// *ელემენტებზე წვდომა მასივში
console.log(fruits[0]); // გამოიტანს: Apple

// *მასივში ელემენტების შეცვლა
fruits[1] = 'Blueberry';
console.log(fruits); // გამოიტანს: ['Apple', 'Blueberry', 'Cherry']

// *push(): ახალი ელემენტების დამატება მასივის ბოლოში და აბრუნებს ახალი სიგრძეს.
fruits.push('Durian');
console.log(fruits); // გამოიტანს: ['Apple', 'Blueberry', 'Cherry', 'Durian']

// *pop(): ამოშლის ბოლო ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.
let last = fruits.pop();
console.log(last); // გამოიტანს: Durian
console.log(fruits); // გამოიტანს: ['Apple', 'Blueberry', 'Cherry']

// *shift(): ამოშლის პირველ ელემენტს მასივიდან და აბრუნებს ამ ელემენტს.
let first = fruits.shift();
console.log(first); // გამოიტანს: Apple
console.log(fruits); // გამოიტანს: ['Blueberry', 'Cherry']

// *unshift(): ახალი ელემენტების დამატება მასივის დასაწყისში და აბრუნებს ახალ სიგრძეს.
fruits.unshift('Elderberry');
console.log(fruits); // გამოიტანს: ['Elderberry', 'Blueberry', 'Cherry']

// *splice(): დაამატებს/ამოშლის ელემენტებს მასივიდან.
fruits.splice(1, 0, 'Fig', 'Grape');
console.log(fruits); // გამოიტანს: ['Elderberry', 'Fig', 'Grape', 'Blueberry', 'Cherry']

// *slice(): არჩევს მასივის ნაწილს და აბრუნებს ახალ მასივს.
let citrus = fruits.slice(1, 3);
console.log(citrus); // გამოიტანს: ['Fig', 'Grape']

// *join(): შეაერთებს მასივის ყველა ელემენტს სტრინგში.
let allFruits = fruits.join(', ');
console.log(allFruits); // გამოიტანს: Elderberry, Fig, Grape, Blueberry, Cherry

// *მატრიცებთან მუშაობა.

// შექმნა
let matrix2 = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

// მატრიცის ელემენტებზე წვდომა
console.log(matrix2[0][0]); // გამოიტანს: 10
console.log(matrix2[1][1]); // გამოიტანს: 14
console.log(matrix2[2][2]); // გამოიტანს: 18

// მატრიცის მოდიფიკაცია
matrix2[0][1] = 20; // შეცვლა
console.log(matrix2); // გამოიტანს შეცვლილ მატრიცას

// მატრიცის დამატება
matrix2.push([19, 20, 21]); // ახალი რიგის დამატება
console.log(matrix2); // გამოიტანს დამატებული რიგით მატრიცას

// მატრიცის წაშლა
matrix2.pop(); // ბოლო რიგის წაშლა
console.log(matrix2); // გამოიტანს წაშლილი რიგით მატრიცას

// *მასივის შემოწმება
console.log(Array.isArray(fruits)); // true თუ fruits არის მასივი
console.log(Array.isArray('Apple')); // false

// *მასივის სიგრძე

console.log(fruits.length); // გამოიტანს: 3  , დავიმახსოვორთ: lenght-ის ათვლა იწყება 1-დან ხოლო მასივის ინდექსაცია 0-დან
