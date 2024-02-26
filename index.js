// exercise 1

let userInput = prompt("Please enter your num : ");
// let uinput = parseInt(userInput)
const num = Math.floor(Math.random() * 100);
console.log(num);
let turn = 0;

while (userInput != num) {
    if (userInput > num) {
        userInput = prompt("number is greater , please choose low digit: ");
    }
    if (userInput < num) {
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

    if (age < 0) {
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

    if (age < 0) {
        console.error("please enter valid age");
        break;
    }
    if (age = 4) {
        window.href = "https://google.com";
        break;
    }

    if (ageconf(age)) {
        alert("Ohh yes, you can drive ");
    } else {
        alert("Ohh no, you can't drive ");
    }
    runagain = confirm("Do you want to play again?");
}



// rock , paper sciere game exercisw 
alert("please enter rock,paper,scier");
let user = prompt("Please enter your choice: ");

let roboIndex = Math.floor(Math.random() * 3);
let roboChoicearr = ["rock", "paper", "scier"];
let roboChoice = roboChoicearr[roboIndex]
console.log(roboChoice);
var userconfrm = false;
while (userconfrm == false) {
    if (user == roboChoice) {
        console.log("its tie");
    }
    else if (user == "rock" && roboChoice == "scier" || user == "paper" && roboChoice == "rock" || user == "scier" && roboChoice == "paper") {
        console.log("you win");
    } else {
        console.log("computer win");
    }
    userconfrm = confirm("do you want to play again");
}



// callback 

// For those who need more clearance can look at the below callback function

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}


function calculate(x, y, operation) {
    return operation(x, y);
}


// In the first console.log, you are calling calculate with the numbers 10 and 5 and passing the add function as the operation. Therefore, it calculates add(10, 5) which results in 15.

// In the second console.log, you are calling calculate again with the numbers 10 and 5, but this time passing the divide function as the operation. Therefore, it calculates divide(10, 5) which results in 2.

console.log(calculate(10, 5, add));

console.log(calculate(10, 5, divide));




// promise with then catch 

function getData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const success = Math.random() < 0.5; // 50% chance of success

            if (success) {
                resolve("Data successfully retrieved!");
            } else {
                reject(new Error("Failed to retrieve data."));
            }
        }, 1000); // Simulating a delay of 1 second
    });
}

// Using the promise with then and catch
getData()
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
