// exercise 1

let userInput = prompt("Please enter your num : ");
// let uinput = parseInt(userInput)
const num =Math.floor(Math.random() * 100);
console.log(num);
let turn = 0;

while (userInput != num ){
    if ( userInput > num){
    userInput =   prompt("number is greater , please choose low digit: ");
    }
    if ( userInput < num){
          userInput = prompt("number is low , please choose high digit: ");
    }
     
    turn++
}

const score = 100 - turn;
console.log(`you guessed this numer and score is  ${score} in ${turn} TURNS`)


// exercise 2
const ageconf = (age) => {
    return age > 18 ? true : false;
}
// console.log(age);
let runagain = true;

while (runagain) {
let userInputt = prompt("Please enter your age : ");
let age = parseInt(userInputt);

if (ageconf(age)) {
    alert("Ohh yes, you can drive ");
} else {
    alert("Ohh no, you can't drive ");
}
runagain = confirm("Do you want to play again?");
}


// exercise 3
const ageconf = (age) => {
    return age > 18 ? true : false;
}
// console.log(age);
let runagain = true;

while (runagain) {

let userInputt = prompt("Please enter your age : ");
let age = parseInt(userInputt);
 
if(age<0){
    console.error("please enter valid age");
       break;
}

if (ageconf(age)) {
    alert("Ohh yes, you can drive ");
} else {
    alert("Ohh no, you can't drive ");
}
runagain = confirm("Do you want to play again?");
}


// exercise 4
const ageconf = (age) => {
    return age > 18 ? true : false;
}
// console.log(age);
let runagain = true;

while (runagain) {

let userInputt = prompt("Please enter your age : ");
let age = parseInt(userInputt);
 
if(age<0){
    console.error("please enter valid age");
       break;
}
if(age = 4){
    window.href ="https://google.com";
    break;
}

if (ageconf(age)) {
    alert("Ohh yes, you can drive ");
} else {
    alert("Ohh no, you can't drive ");
}
runagain = confirm("Do you want to play again?");
}
