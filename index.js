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
