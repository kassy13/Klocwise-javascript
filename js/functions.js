// Function declarations 
// syntax
// function nameOfFunction (parameters ) {
//     //code to be executed when the function is called or invoked
// }

function logger() {
    console.log(' hello world');
    console.log(' hello world again');
    console.log('1. boil water');
    console.log('2. cook pasta');
}
logger() //this is how you call or initiate a function
logger();

// Parameters are like dummy values that are passed into a function 
function greet(name = 'dear') {
    console.log(`Good evening ${name}`);
}
greet('onyedikachim');
greet('Eliezer');
greet();
greet('chimzigam');

// The return keyword in functions

//All function must have a return statement and when you dont provide a return statement javascript will automatically return undefined for you

calcAge(1990) //Hoisting : simply means that you can call or use your function declaration before declaring it 

function calcAge(birthYear) {
    console.log(2024 - birthYear); //this just logs to the console the age of the person and we cant use that for anyting
    return 2024 - birthYear // it brings out the age of the person from the function so you can use that anywhere in your code

}
calcAge(1988) //36

if (calcAge(1988) >= 18) {
    console.log('This person is an adult');
} else {
    console.log('This person is not yet an adult');
}

// Functions with different parameters 

function calcAvg(a, b, c) {

    return (a + b + c) / 3;

}

const result = calcAvg(2, 3, 5);
const result2 = calcAvg(4, 5, 6)
console.log(result, result2);

// Function expressions 
//first thing about function expressions is that you will be creating an anonymous function and then be storing that functon inside a variable

// synax 
// const NameOfVariable = function (parameters) {
//     // code to be executed
// }

const calcAvg2 = function (a = 1, b = 1, c = 1) {
    return (a + b + c) / 3
}
const result3 = calcAvg2(2, 3, 5);
console.log(result3);

// Arrow functions
// syntax
// const arrow = (parameters) => {
//     return 'anything'
// }

const calcAvg3 = (a, b, c) => {
    return (a + b + c) / 3
}
const result4 = calcAvg3(2, 3, 4);
console.log(result4)