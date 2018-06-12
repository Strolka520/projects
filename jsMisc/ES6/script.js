// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var ag5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicense5(passedTest) {
	if(passedTest){
		var firstName = 'John';
		var yearOfBirth = 1990;

		
	}
	console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {

	let firstName;
	const yearOfBirth = 1990;

	if(passedTest){
		firstName = 'John';
	
	}
	console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicense6(true);






var i = 23;

for (var i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);
*/

/*
///////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function () {
	var c = 3;
})();
//console.log(c);
*/


/*
///////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
	return 2016 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + 
	'. He was born in ' + yearOfBirth + 
	'. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and today he is ${calcAge(yearOfBirth)} years old.`)


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

/*
///////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5 
var ages5 = years.map(function(el) {
	return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/



///////////////////////////////
// Lecture: Arrow functions 2


// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click',
		function() {
			var str = 'This is box number ' + self.position +
			' and it is ' + self.color;
			alert(str);
		});
	}
}
// box5.clickMe();



// ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {

		document.querySelector('.green').addEventListener('click',
		() => {
			var str = 'This is box number ' + this.position +
			' and it is ' + this.color;
			alert(str);
		});
	}
}
// box6.clickMe();


/*
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {

		document.querySelector('.green').addEventListener('click',
		() => {
			var str = 'This is box number ' + this.position +
			' and it is ' + this.color;
			alert(str);
		});
	}
}
box66.clickMe();
*/


/*
// ES5
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

	var arr = friends.map(function(el){
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);



// ES6
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends6 = function(friends) {

	let arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/


/////////////////////////////////////////////////////
// Lecture: Destructuring

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

/*
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/



//////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});



// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); 
*/
/*
// ES5
for(var i = 0; i < boxesArr5.length; i++){

	if(boxesArr5[i].className === 'box blue'){
		continue;
	} 

	boxesArr5[i].textContent = 'I changed to blue!';

}
*/

/*
// ES6
for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changed to blue!';
}
*/

/*
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
	return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);


// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/*
////////////////////////////////////
// Lecture: Spread operator
function addFourAges (a, b, c , d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


////////////////////////////////////////////////////////
// Lecture: Rest parameters

/*
// ES5
function isFullAge5() {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2018 - cur) >= 18);
	});
}


//isFullAge5(1990, 2002, 1965);
//isFullAge5(1990, 2002, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
	years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAge6(1990, 2002, 1965, 2016, 1987);
*/

/*
// ES5
function isFullAge5(limit) {

	var argsArr = Array.prototype.slice.call(arguments, 1);

	argsArr.forEach(function(cur) {
		console.log((2018 - cur) >= limit);
	});
}


//isFullAge5(21, 1990, 2002, 1965);
//isFullAge5(1990, 2002, 1965, 2016, 1987);


//ES6
function isFullAge6(limit,...years) {
	years.forEach(cur => console.log((2018 - cur) >= limit));
}

isFullAge6(16, 1990, 2002, 1965, 2016, 1987);
*/



////////////////////////////////////////////////
// Lecture: Default parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'american' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}


// ES6
function SmithPerson(fistName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;	
}
var john = new SmithPerson ('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/



////////////////////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the lastest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);


if(question.has(4)) {
	//question.delete(4);
	//console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`))


for (let [key, value] of question.entries()) {
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/



/////////////////////////////////////////////////////
// Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear - yearOfBirth;
	console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');



//ES6
class Person6 {
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		var age = new Date().getFullYear - yearOfBirth;
		console.log(age);		
	}
	static greeting() {
		console.log('Hey there!');
	}
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();








