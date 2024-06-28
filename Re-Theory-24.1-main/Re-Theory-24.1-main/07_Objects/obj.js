// * objects-ის შექმნა

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  isEmployed: true,
  sayHello: function () {
    console.log('Hello');
  },
};

// ერთნაირი სახელი არ შგვიძლია დავარქვათ
const person2 = {
  firstName: 'Max',
  lastName: 'Smith',
  age: 30,
  isEmployed: true,
};

console.log(person.firstName); // John
console.log(person['lastName']); // Smith
console.log(person.age); // 25
console.log(person.isEmployed); // true

console.log(person2.firstName); // Max
console.log(person2.lastName); // Smith
console.log(person2.age); // 30
console.log(person2.isEmployed); // true

person.sayHello(); // Hello

//* shecvla
console.log(person);
person.firstName = 'newname';
console.log(person);

//* ხალი ველის დამატება
person.newField = 'newField';
console.log(person);

//* ველის წაშლა
delete person.newField;
console.log(person);

//* obj inside obj

const person3 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  isEmployed: true,
  address: {
    city: 'Tbilisi',
    street: 'Agmashenebeli',
    number: 1,
  },
};

console.log(person3.address.city); // Tbilisi
console.log(person3.address.street); // Agmashenebeli
console.log(person3.address.number); // 1

// we cant dublicate obj

const originaliSaxeli = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  isEmployed: true,
  address: {
    city: 'Tbilisi',
    street: 'Agmashenebeli',
    number: 1,
  },
};

const dakopirebuli = originaliSaxeli;

console.log(originaliSaxeli === dakopirebuli); // true

originaliSaxeli.firstName = 'Max';

console.log(dakopirebuli.firstName); // Max

// to copy obj we can use Object.assign

const originaliSaxeli2 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  isEmployed: true,
  address: {
    city: 'Tbilisi',
    street: 'Agmashenebeli',
    number: 1,
  },
};

const dakopirebuli2 = Object.assign({}, originaliSaxeli2);

console.log(originaliSaxeli2 === dakopirebuli2); // false

originaliSaxeli2.firstName = 'Max';

console.log(dakopirebuli2.firstName); // John

// ან შეგვიძლია გამოვიყენოთ spread operator

const originaliSaxeli3 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  isEmployed: true,
  address: {
    city: 'Tbilisi',
    street: 'Agmashenebeli',
    number: 1,
  },
};

const dakopirebuli3 = { ...originaliSaxeli3 };

console.log(originaliSaxeli3 === dakopirebuli3); // false

originaliSaxeli3.firstName = 'Max';

console.log(dakopirebuli3.firstName); // John
