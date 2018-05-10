// Lecture: variables
/*
var name = 'John';

console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



// Lecture: variables 2
// var name = 'John';
// var age = 26;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + 
// 	' is a ' + age + ' year old ' + job + '. ' +
// 	'Is he married? ' + isMarried);

// age = 'thirty six';
// job = 'driver';

// console.log(name + 
// 	' is a ' + age + ' year old ' + job + '. ' +
// 	'Is he married? ' + isMarried);

// var lastName = prompt('What is the last name?');
// console.log(lastName);



// Lecture: operatiors
// var now = 2016;
// var birthYear = now - 26;

// birthYear = now - 26 * 2;

// console.log(birthYear);

// var ageJohn = ageMark = (3 + 5) * 4 - 6;

// ageJohn++;
// ageMark *= 2;
// ageMark = ageMark * 2;

// console.log(ageJohn);
// console.log(ageMark);



////////////////////////////////////////
// Lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'no';

// if (isMarried === 'yes'){
// 	console.log(name + ' is married!');
// } else {
// 	console.log(name + ' will hopefully marry soon!');
// }

// isMarried = false

// if(isMarried){
// 	console.log('YES!')
// } else {
// 	console.log('NO!');
// }

// if (23 === "23"){
// 	console.log('Something to print');
// }


////////////////////////////////////////
// Lecture: boolean logic and switch

// var age = 20;
// if (age < 20) {
// 	console.log('John is a teenager');
// } else if (age >= 20 && age < 30){
// 	console.log('John is a young man');
// } else {
// 	console.log ('John is a man.');
// }

// var job = 'teacher';

// job = prompt('What does John do?');

// switch (job) {
// 	case 'teacher':
// 		console.log('John teaches kids.');
// 		break;
// 	case 'driver':
// 		console.log('John drives a cab');
// 		break;
// 	case 'cop':
// 		console.log('John helps fight crime');
// 		break;
// 	default:
// 		console.log('John does something else.');
// }


////////////////////////////////////////////
// CODING CHALLENGE 1

var height1 = 170;
var height2 = 172;
var height3 = 171;
var age1 = 29;
var age2 = 26;
var age3 = 25;

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;
var score3 = height3 + 5 * age3;

if (score1 > score2 && score1 > score3){
	console.log('P1 wins the game! Points are ' + score1);
} else if (score2 > score1 && score2 > score3){
	console.log('P2 wins the game! Points are ' + score2);
} else if (score3 > score1 && score3 > score2){
	console.log('P3 wins the game! Points are ' + score3);
} else {
	console.log('It\'s a draw. Points are all ' + score1);
}