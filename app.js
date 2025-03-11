// conditional statement
// if statement

// if(condition){
//  lines of codes}

//

if (true) {
  console.log("Hello world");
}

// age >=18  18+ you are eligible to vote

const age = 18;
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "hjdgjd00i";

// write and if statement that logos the

if (password.length >= 9) {
  console.log("password is strong");
}

// if else statement

if (true) {
  console.log("Hello class");
} else {
  console.log("class wor");
}

if (password.length >= 9) {
  console.log("password is strong");
} else {
  console.log("password is weak");
}

let balance = 20000;
let amount = 4000;

if (amount <= balance) {
  console.log("Transaction succesful");
} else {
  console.log("insufficient funds");
}

const userpin = 9008;
const enteredpin = 9009;

if (userpin == enteredpin) {
  console.log("PIN IS CORRECT");
} else {
  console.log("PIN IS INCORRECT");
}

const email = "emmadexter50@gmail.com";

if (email.includes("@")) {
  console.log("EMAIL IS VALID");
} else {
  console.log("EMAIL IS NOT VALID");
}

const examscore = 50;
const examlimit = 50;

if (examscore >= examlimit) {
  console.log("Exam passed");
} else {
  console.log("Exam failed");
}

const number = 10;
if (number > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

const num1 = 10;
const num2 = 5;
if (num1 > num2) {
  console.log(`Num1 ${num1} is greater than num2 ${num2}`);
} else {
  console.log(`Num1 ${num1} is greater than num2 ${num2}`);
}

let pnumber = 10;

if (pnumber % 2 === 0) {
  console.log(`${pnumber} is EVEN`);
} else {
  console.log(`${pnumber} is Odd`);
}

const purchaseAmount = 600;

if (purchaseAmount > 100) {
  console.log("You have a Discount");
} else {
  console.log("buy more");
}

const averageA = (54 + 56 + 78) / 3;
const averageB = (67 + 60 + 82) / 3;

console.log(`Team A has an average score of ${averageA}`);

console.log(`Team B has an average score of ${averageB}`);

if (averageA > averageB) {
  console.log("Team A wins");
} else {
  console.log("Team B wins");
}

let timeOfDay = 16;
if (timeOfDay > 10 && timeOfDay <= 16) {
  console.log("you should be in class");
} else {
  console.log("Be at home");
}
