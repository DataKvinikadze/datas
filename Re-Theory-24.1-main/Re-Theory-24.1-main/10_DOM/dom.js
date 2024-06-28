// Todo მაგალითი 1

const htmlElement = document.documentElement;

const headElement = document.head;

const bodyElement = document.body;

console.log(htmlElement); // აბრუნებს დოკუმენტის ელემენტს
console.log(headElement); // აბრუნებს დოკუმენტის head-ს
console.log(bodyElement); // აბრუნებს დოკუმენტის body-ს

// Todo მაგალითი 2 -

const bodyElement2 = document.body;

const firstChild = bodyElement2.firstElementChild;
const lastChild = bodyElement2.lastElementChild;

console.log(firstChild); // აბრუნებს პირველ ელემენტს
console.log(lastChild); // აბრუნებს ბოლო ელემენტს

// TODO მაგალითი 3

// querySelector

const element = document.querySelector('.container');

console.log(element); // აბრუნებს ელემენტს რომელსაც აქვს კლასი container

const elementTwo = document.querySelectorAll('li');

console.log(elementTwo); // აბრუნებს ყველა li ელემენტს

const elementTree = document.querySelector('.container>h1');

console.log(elementTree); // აბრუნებს ელემენტს რომელსაც აქვს კლასი container და შვილი ელემენტი h1

const elementFour = document.querySelector('#uniqueId');

console.log(elementFour); // აბრუნებს ელემენტს რომელსაც აქვს id uniqueId

// TODO მაგალითი 4 -
// querySelectorAll

const elementTwo2 = document.querySelectorAll('li');

console.log(elementTwo2[1]); // აბრუნებს მეორე li ელემენტს

// TODO მაგალითი 5

// getElementById

const elementFive = document.getElementById('uniqueId');

console.log(elementFive); // აბრუნებს ელემენტს რომელსაც აქვს id uniqueId

// TODO მაგალითი 6

// getElementsBytagName   elemetns - ს- უნდა

const elementSix = document.getElementsByTagName('li');

console.log(elementSix); // აბრუნებს ყველა li ელემენტს

// TODO მაგალითი 7

// getElementsByClassName წერტილის გარეშე

const elementSeven = document.getElementsByClassName('container');

console.log(elementSeven); // აბრუნებს ყველა ელემენტს რომელსაც აქვს კლასი container

// TODO მაგალითი 9
// innerHtml

const elementTen = document.querySelector('.container');
console.log(elementTen);

console.log(elementTen.innerHTML);

elementTen.innerHTML = '<h1>Changed</h1>';

// !Example

const info = document.querySelector('.info');

let first_name = 'John';
let last_name = 'smith';

info.innerHTML = `<span>${first_name} ${last_name}</span>`;

// TODO მაგალითი 10

//textContent

const elementEleven = document.querySelector('.container');

console.log(elementEleven.textContent);

elementEleven.textContent = '<h1>textContent</h1>'; //  კოდს ვერ ხედავს პირდაპირ აღიქვამს ტექსტად,

console.log(elementEleven.textContent);

// TODO მაგალითი 11

//createElement

const newElement = document.createElement('div');

console.log(newElement);

newElement.textContent = 'before element';

//before

const container = document.querySelector('.container');

container.before(newElement);

//after

const newElement2 = document.createElement('div');

newElement2.textContent = 'after element';

container.after(newElement2);

//prepend

const newElement3 = document.createElement('div');

newElement3.textContent = 'prepend element';

container.prepend(newElement3);

//append

const newElement4 = document.createElement('div');

newElement4.textContent = 'append element';

container.append(newElement4);

//remove

newElement.remove();

// TODO მაგალითი 12

//classname

const containerTwo = document.querySelector('.containerTwo');

containerTwo.className = 'dwada'; // გადააწერს კლასს

console.log(containerTwo);

//classList

containerTwo.classList.add('new-class'); // დაამატებს კლასს

containerTwo.classList.remove('new-class'); // წაშლის კლასს

containerTwo.classList.toggle('new-class'); // გადააწერს კლასს

console.log(containerTwo.classList.contains('new-class')); // შეამოწმებს კლასს // true false

// TODO მაგალითი 13

//style

const elementThirteen = document.querySelector('.container');

elementThirteen.style.backgroundColor = 'red';

elementThirteen.style.color = 'white';

elementThirteen.style.padding = '10px';

elementThirteen.style.margin = '10px';

elementThirteen.style.border = '1px solid black';

elementThirteen.style.borderRadius = '10px';

elementThirteen.style.textAlign = 'center';

elementThirteen.style.fontSize = '20px';

elementThirteen.style.fontWeight = 'bold';

// reset style

elementThirteen.style.backgroundColor = '';

//css text

elementThirteen.style.cssText =
  'background-color: red; color: white; padding: 10px; margin: 10px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; font-weight: bold;';

// უარყოფითი მხარეა რომ მთლიანად წაშლის, ანუ გადააწერს რაც იქამდე იყო სტილები და არ დაამატებს ახალს.

// TODO მაგალითი 14

// mouse events

const elementFourteen = document.querySelector('.container');

elementFourteen.addEventListener('click', function () {
  console.log('click');
});

elementFourteen.addEventListener('dblclick', function () {
  console.log('dblclick');
});

elementFourteen.addEventListener('mouseover', function () {
  console.log('mouseover');
});

elementFourteen.addEventListener('mouseout', function () {
  console.log('mouseout');
});

elementFourteen.addEventListener('mousemove', function () {
  console.log('mousemove');
});

// TODO მაგალითი 15

// key events
document.addEventListener('keydown', function (event) {
  console.log(`Key "${event.key}" was pressed`);
});

// TODO მაგალითი 16

// link href input value

const link = document.querySelector('.link');

console.log(link.href);

const input = document.querySelector('.input');

console.log(input.value);

console.dir(input);

console.dir(link);

// const inputElement = document.querySelector('.input');

// inputElement.addEventListener('input', function () {
//   console.log(inputElement.value);
// });
