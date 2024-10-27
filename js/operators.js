// Arithmetic Operators
// Addition, subtraction, multiplication, divison,modulus,Exponentiation

const addition = 2 + 3;
const modulus = 8 % 3;
const exponentiation = 3 ** 3;

// Assignment operators
// =, +=, -=, /=, *=, %=, **=
let x = 5;
let y = 10;
let z = "5"
console.log(x += y);
console.log(x);

// x += y equivalent to x = x + y;
// y += x , y = y + x

// comparison operators
// ==, ===, > < >= ,<= , !=, !==

console.log(5 == '5'); //true
console.log(5 === "5"); //false
console.log(6 > 5); //true
console.log(5 > 5); //false
console.log(4 != '4');//false
console.log(4 !== '4');//true

console.log(typeof ('5')); //string
console.log(typeof (true)); //boolean
console.log(typeof (3));

// Unary operators mainly used to convert values to numbers which is represented using the plus sign (+)
console.log(typeof (+'3'));

// Increment and decrement (++ , --)
let a = 5;
let b = 5
//prefix
let result = ++a;
console.log(result); //6

//postfix
let result2 = b++
console.log(result2);

// Classwork 
console.log(23 - 50 * 3 ** 3); // 23 - 50 * 27 , 23 - 1350 , -1327
console.log((23 - 50) * 3 ** 3); // -27 *3**3 , -27 * 27
console.log(23 - 50 + 3 ** 3 / 40); // 
console.log(23 - (50 * 3 ** 3) / 40);

// Type coercion
//javascript does the conversion for us

console.log(5 + 15); //20
//concatination : it joins both values for us
console.log('5' + 15); //515
console.log("Good" + " " + "morning");
//template literals /string
console.log(`This is a string from template string ${40 - 39} ${addition}`);

console.log('10' / 10);
console.log('somtoo' / 10);

console.log("3" * "5");

//Type conversion : it simply means that we are are doing the conversion ourselves 

console.log(typeof (String(true)));
console.log(String(4));

console.log(Number('4'));
console.log(Number(true));//1
//Falsy values include these empty string, zero, Not a number, undefined, null
console.log(Boolean("")); //false
console.log(Boolean(0));//false
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(1));
console.log(Boolean('hello'));


// Logical operators

const hasDriversLiscense = true;
const isOfDrinkingAge = false;
const isEligible = false

console.log(hasDriversLiscense && !isOfDrinkingAge);//true

console.log(!isEligible || hasDriversLiscense); //true


// Assignment 

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

// BMI Formular mass/height**2 or mass/height * height 
const BmiMark = markMass / markHeight ** 2;
const BmiJohn = johnMass / (johnHeight * johnHeight);
console.log(BmiMark, BmiJohn);
console.log(BmiMark > BmiJohn);


