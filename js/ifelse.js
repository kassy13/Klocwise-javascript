// if (condition that must return a boolean) {
//     // code to be executed when the condition is true
// }else {
//     // code to be executed when the condition is false
// }

const age = 16;
if (age >= 18) {
    console.log("You can start driving");
} else {
    console.log(" You are too young to drive");
}

const names = "";
if (names) {
    console.log(" This is empty from the if block");
} else {
    console.log(" This is empty from the else block ");
}

let weatherMessage;
const isSunny = false;
if (isSunny) {
    weatherMessage = "It's a sunny day";
} else {
    weatherMessage = "It's not a sunny day";
}
console.log(weatherMessage);

// If else else if statements syntax
// if (condition1) {
//     // Code to execute if condition1 is true
// } else if (condition2) {
//     // Code to execute if condition2 is true
// } else {
//     // Code to execute if both condition1 and condition2 are false
// }

const myFavouriteAnimal = "monkeys";

if (myFavouriteAnimal === "Dogs") {
    console.log("Dogs are my favourite animal");
} else if (myFavouriteAnimal === "cats") {
    console.log("Cats are great");
} else if (myFavouriteAnimal === "monkeys") {
    console.log("monkies are great ");
} else {
    console.log("I have never heard about that animal");
}

// Switch statements
// syntax
// switch (expression) {
//     case value1:
//         //code to be executed if expression ===value 1
//         break;
//     case value2:
//         //code to be executed if expression ===value 2
//         break;
//     default:
//     //code to be executed if none of the above cases match
// }

switch (myFavouriteAnimal) {
    case "cats":
        console.log("cats are great but not my favourite");
        break;
    case "dogs":
        console.log("dogs are great but also not my favourite");
        break;
    case "monkeys":
        console.log("This is my favourite");
        break;
    default:
        console.log('i have never heard about that animal');
}
