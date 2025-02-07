/*

alert("Hello");
[1, 2].forEach(alert);

alert("Hello")
[1,2].forEach(alert);

//code is incorrect because it is missing semicolon after the alert("Hello").
                         This reads as alert("Hello")[1,2].forEach(alert); Thise executes Hello alert but shows error for [1,2]

let name = "John";
let admin = name;
alert(admin);

Above code can also be written as:

let admin, name;

name = "John";
admin = name;
alert(admin)

let age = prompt("How old are you?", "");

alert(`You are ${age} years old!`);

let name = prompt("What is your name?", "");
alert(`${name} is your name!`);
alert(name);

let str = "123";
alert(typeof str);

let num = Number(str);
alert(num);

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

function multiply(num1,num2) {
let result = num1*num2;
return result;
}

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}
let sum = add(5, 10);
console.log(sum);

function addNumbers(a, b) {
    let result = a + b;
    return result;
}
let newResult = addNumbers(5,20);
console.log(newResult);

document.querySelector("html").addEventListener("click", function() {
    alert("Stop Poking Mee!!!!");

});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "Images/roman-hnydin-aZHOOdE9bjQ-unsplash.jpg") {
    myImage.setAttribute(
      "src",
      "Images/alexander-andrews-mEdKuPYJe1I-unsplash.jpg"
    );
  } else if (mySrc === "Images/alexander-andrews-mEdKuPYJe1I-unsplash.jpg") {
    myImage.setAttribute(
      "src",
      "Images/paulina-herpel-kRMFE0Gfx8U-unsplash.jpg"
    );
  } else {
    myImage.setAttribute("src", "Images/roman-hnydin-aZHOOdE9bjQ-unsplash.jpg");
  }
});

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a);
alert(c);

1. 1 ("10")
2. 1 (-1)
3. 1
4. "2" (2)
5. "6" (6)
6. 9px ("9px")
7. $9 ("$45")
8. "2" (2)
9. NaN
10. 5 (" -9 5")
11. undefined (-14)
12. 1
13. undefined (NaN)
14. NaN (-2)

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); //  +a, +b converts string to a number

1. true
2. false
3. false (true, as it is a string it makes a dictionary comparison, where "2" comes before "1")
4. true
5. false
6. false
7. false

let officialName = prompt("What is the 'offcial' name of JavaScript?", "");

if(officialName === "ECMAScript"){
    alert("Right!");
} else {
    alert("You don't know? 'ECMAScript'!");
}

let officialName = prompt("What is the 'offcial' name of JavaScript?", "");
let correctAnswer = (officialName === "ECMAScript") ?  alert("Right!") : alert("You don't know? 'ECMAScript'!");

let value = prompt("Give me a number!");

   if(value > 0){
    alert(1);

   }else if(value < 0){
    alert(-1);

   }else alert(0);

let result = (a + b < 4) ? "Below" : "Over";

let message = (login == "Employee") ? "Hello" :
(login == "Director") ? "Greetings" :
(login == "") ? "No login" :
"";

let age;

if(age >= 14 && age <= 90){

}

if!(age >= 14 && age <= 90){
}

if(age < 14 || age > 90)

alert(first) runs, alert(third) executes
1. -1
2. 0
3. 1

let visitor = "Admin";

let checkLogin = prompt("Who's there?", "");

if (checkLogin === visitor) {

  let correctPassword = prompt("Enter Your Password");

  if (correctPassword === "The Master"){
    alert("Welcome");

  } else if ((correctPassword === "")||(correctPassword === null)) {
    alert("Canceled");

  } else alert ("Wrong Password");
  
  
} 
 else if ((checkLogin === "") || (checkLogin === null)){
  alert("Canceled");
}
else alert("I don't know you!");
 


const addTaskButton = document.querySelector("#addTaskButton"); //button used for add tasks
const taskList = document.querySelector("#taskList"); // where list of tasks are add (<ol> or <ul>)
const taskInput = document.querySelector("#taskInput");

*/

const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// markWeight = 95;
// markHeight = 1.88;
// markBMI = markWeight/markHeight ** 2;
// console.log(markBMI);

// johnWeight = 85;
// johnHeight = 1.76;
// johnBMI = johnWeight/johnHeight ** 2;
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's`);
}

const hasDriversLicesnce = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicesnce && !hasGoodVision);

const age = 20;

if (age >= 20 && age < 30) {
  console.log(
    "Your age is more than or equal to 20 years but less than 30 years"
  );
} else if (age >= !20 && age < 30) {
  console.log("Your age is less than or equal to 20 years");
}

//Challenge 03

const avgScoreDolphins = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 110) / 3;

if (avgScoreDolphins > avgScoreKoalas) {
  console.log(
    "Dolphins win this game, their average score is higher than Koalas"
  );
} else if (avgScoreDolphins < avgScoreKoalas) {
  console.log(
    "Koalas win this game, their average score is higher than Dolphins"
  );
} else console.log("Its a draw! Both teams have the same average score!");

const bonusAvg = 100;
const bonusAvgDolphins = (97 + 112 + 101) / 3;
const bonusAvgKoalas = (109 + 95 + 123) / 3;

console.log(bonusAvgDolphins, bonusAvgKoalas);

if (bonusAvgDolphins > bonusAvgKoalas && bonusAvgDolphins >= bonusAvg) {
  console.log("Dolphins Win!");
} else if (bonusAvgDolphins < bonusAvgKoalas && bonusAvgKoalas >= bonusAvg) {
  console.log("Koalas Win!");
} else if (bonusAvgDolphins === bonusAvgKoalas && bonusAvg) {
  console.log("Its a tie, need a rematch!");
} else {
  console.log("No team wins the trophy!");
}

const day = "Thursday";

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}

//Above example using switch statement

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}


// Conditional (Ternary) Operator can be used to conditionally declare variables.
// Can be used in string template literals unlike the if statements.

const newAge = 16;

// newAge >= 18 ? console.log("I like to drink wine") : 
// console.log("I like to drink water!");

// const drink = newAge >= 18 ? "wine" : "water";
// console.log(drink);

console.log(`I like to drink ${newAge >= 18 ? "wine" : "water"}`);


//Challenge 04
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)



