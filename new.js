"use strict";

// Functions are values that can be stored into a variable.

// defining a function
function logger() {
  console.log("My name is Shruti");
}

//calling/running/invoking function
logger();
logger();
logger();
logger();
logger();

// Within the parentheses of a function, we specify parameters
// Parameters are like variables; specific to a function. They get defined when we call the function.
// In the example below, apples and oranges are two parameters, they represent the input data of this function.
// The parameters (apples, oranges) will get defined when the function foodProcessor() is called.
// return keyword returns any value from the function
// Here, juice is the result of running the function.

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// The actual values for the parameters (apples, oranges) used when calling/invoking a function are called arguments.
// When writing/defining a function parameters are like variables. They are placeholders for data that needs to be filled in later when calling the function.
// The specific values/arguments passed when calling the function are then assigned to the parameters.
// Here, apples are 5, and oranges are 0.
// Juice is returned from invoking the function foodProcessor(5, 0). But we need to store value of the returned function in a variable.
// console.log(appleJuice) = console.log(foodProcessor(5, 0))

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);
// console.log(foodProcessor(5, 0));

const appleOrangeJuice = foodProcessor(3, 2);
console.log(appleOrangeJuice);

// Function Declaration - because we use function keyword to declare a function

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

//Above function can also be written as:
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const currentAge = calcAge1(1991);
console.log(currentAge);

// Function Expression - function without a name, is stored in a variable.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

//Difference between Function Declaration and Function Expression
// Function Declaration can be called before they are defined in the code.
// Example below:

// const currentAge = calcAge1(1991);
// console.log(currentAge);

// function calcAge1(birthYear){
//    return 2037 - birthYear;
// }

// Does not work the same way for Function Expression.

// Arrow Functions

const calcAge3 = (birthYear) => 2037 - birthYear;
// With arrow function the value is returned automatically, without explicity writing the return keyword, works only with single line of code.
// we call the function :

const age3 = calcAge3(1992);
console.log(age3);

const yearsUntillRetirement = (birthYear) => {
  //Here, there is still a single parameter thats birthYear.
  // curly braces are used to define more line of code;
  const age = 2037 - birthYear; // For multiple line of code return keyword needs to be written.
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntillRetirement(1991));

// Arrow function with multiple parameters

// const yearsUntillRetirements = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntillRetirements(1991, "Jonas"));
// console.log(yearsUntillRetirements(1980, "Bob"));

// Functions calling other functions

function cutFruitSlices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const appleSlices = cutFruitSlices(apples);
  const orangeSlices = cutFruitSlices(oranges);

  const juice = `Juice with ${appleSlices} apple slices and ${orangeSlices} orange slices.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//Practicing Functions
//return keyword enables return statement which is used to output a value from the fucntion.
// return also immediately terminates the functions execution.

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsToRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// yearsToRetire(1995, "Wolf");

// console.log(yearsToRetire(1970, "Bobby"));
//   const yearsForRetirement = `${firstName} has ${numYears} years to retire.`;

// JavaScript Fundamentals - Part 2
//Challenge 01

const calcAverage = (score1, score2, score3) => {
  const avgScore = (score1 + score2 + score3) / 3;
  return avgScore;
};

let dolphinsAvgScore = calcAverage(44, 23, 71);
let koalasAvgScore = calcAverage(65, 54, 49);

const checkWinner = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvgScore} vs. ${koalasAvgScore})`);
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas win (${koalasAvgScore} vs. ${dolphinsAvgScore})`);
  } else {
    console.log(`No team wins`);
  }
};

checkWinner(dolphinsAvgScore, koalasAvgScore);

dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);

checkWinner(dolphinsAvgScore, koalasAvgScore);

// Array Exercise :

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// Note: we cannot do calcAge(Years)
// Because birthYear expects a single value. Whereas, years is an Array with multiple values.
// But selecting an item with its index value will enable us to select an item at a time.

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1])); // to select last value/item in this case 2018

// we could also assign it to a new Array. Meaning we can also place function calls in an array as they are expressions.

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Array Methods - These are built-in functions that work with Arrays.

// push() : adds new/specified elements to the end of an array, and returns the new length of an array.

const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
console.log(friends);

// unshift() : adds new/specified elements to the beginning/start of an array, and returns the new length of an array.

friends.unshift("John");
console.log(friends);

// pop() : Removes last element from the Array / Removes element from the end of an array. Does not require an argument. It returns the removed element.

friends.pop();
console.log(friends);
// to remove more than 1 element from the end of an array:
// friends.pop();
// friends.pop();

// shift() : Removes first element from an Array / Removes element from the beginning/start of an array. Returns removed element.

friends.shift();
console.log(friends);

// indexOf() : Returns the index at which element is located in an Array.

console.log(friends.indexOf("Steven")); //  1

// if we check for an element thats not in the array, it returns index of -1 in some browsers, and in some browsers it doesn't log anything.

// console.log(friends.indexOf("Bob")); // -1

// ES6 method instead of indexOf ----- includes():

// includes() : It returns true if element is present in an array or returns false in case its not. It uses strict equality for this check (does not do type coercion).

console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false

// challenge 02 :

const bills = [125, 555, 44];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

console.log(calcTip(100));

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const totalPrice = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalPrice);

// Objects - Data Structures.
// Objects we define with  key : value pairs
// key is the variable name - assigned to a value, value can be any kind of data type.

const jonas = {
  // Object-literal syntax
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
};

// For retrieving elements from Objects :
// Method 1
// To retrieve lastName
console.log(jonas.lastName);

// Method 2
console.log(jonas["lastName"]);
// we don't necessarily have to write a string, we can compute it from some operation.
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// Example 2 for Retrieving elements from Objects through bracket[] notation.

const interestedIn = prompt(
  "What would you like to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  // document.getElementById("resolved").innerHTML = jonas[interestedIn];
  prompt(jonas[interestedIn]);
  console.log(jonas[interestedIn]);
} else {
  alert(
    "Wrong Request! Choose between firstName, lastName, age, job, and friends"
  );
}

// To add new properties to an Object :

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// Write - "Jonas has 3 friends, and his best friend is called Michael"

jonas[
  "about"
] = `${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`;
// jonas.firstName + " has " + friends.length + " friends, and his best friend is called " + friends[0];
// NOTE: We can use string template literals for objects as well.
console.log(jonas["about"]);
console.log(jonas);

// Object Methods
// Object can store different kinds of data types, arrays, other objects, and also, functions

const jonasNew = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // version -1

  // calcAges : function(birthYear){
  //   return 2037 - birthYear;
  // }

  // version -2
  // calcAges : function(){  // this - keyword enables us to select a property from the object itself, we don't have to add birthYear as a parameter.
  //   return 2037 - this.birthYear; // As birthYear is already mentioned, with calcAges function expression we can retrieve 1991 with: this.birthYear
  // }

  // version -3 --
  // for heavy computations, we can calculate age once and store it in the object, then retrieve the age as a property from the object
  // we can also use this keyword to store a new property
  calcAges: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonasNew.calcAges()); // For version 3, calculates the age once.
console.log(jonas.age);
console.log(jonas.age); // with this we can retrieve the stored age property as many times as we like. Without multiple computations.
console.log(jonas.age);

// console.log(jonasNew.calcAges(1992));
// console.log(jonasNew["calcAges"](1994));

// Challenge - write "Jonas is a 46 year old teacher, and he has a driver's license"

const jonasNewInfo = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAges: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    // this.driverLicense = this.hasDriversLicense ? "a" : "no";
    // this.summary = `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.driverLicense} driver's license`
    this.summary = `${this.firstName} is a ${this.calcAges()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;

    return this.summary;
  },
};

// console.log(jonasNewInfo.calcAges());
console.log(jonasNewInfo.getSummary());

// challenge 3

const markInfo = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

const johnInfo = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};

console.log(markInfo.calcBMI());
console.log(johnInfo.calcBMI());

const checkHigherBMI =
  markInfo.calcBMI() > johnInfo.calcBMI()
    ? console.log(
        `${markInfo.firstName} ${markInfo.lastName}'s BMI (${markInfo.markBMI}) is higher than ${johnInfo.firstName} ${johnInfo.lastName}'s (${johnInfo.johnBMI}))`
      )
    : console.log(
        `${johnInfo.firstName} ${johnInfo.lastName}'s BMI (${johnInfo.johnBMI}) is higher than ${markInfo.firstName} ${markInfo.lastName}'s (${markInfo.markBMI}))`
      );

// for loops
// for loop keeps running until the condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep}`);
}

// for loop SYNTAX - Breakdown:

// let rep = 1; --- Initial value of the counter. Here we have to use "let" variable because this counter will later be updated by for loop
// rep <= 10; --- logical condition. In this example, it says that the loop will be executed until the rep counter is less than or equal to 10.
// rep++ --- Updates/increases the counter by 1 after each iteration. If you dont mention this, it will create an infinite loop.
//////////// The condition continue to remain TRUE if the counter remains at 1. We want the counter to stop when it reaches 10.

// Most used application of for__loop is to loop through an ARRAY !

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"], // Array is also an Object
  true,
];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   // Reading from jonasArray
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // Filling/Updating info in types array from jonasArray
//   types[i] = typeof jonasArray[i];

//   //Another way for Filling/Updating info in types array from jonasArray
//   types.push(typeof jonasArray[i]); // we use push() method as we want the data-types to be added to the end of an Array.
// }

// console.log(types);

// To create a new array based on the values of one original array
// In the above example we create a separate array called types which will contain data-types for all the elements stored inside jonasArray

// 1) Outside the for__loop we create an empty array ---- const types = [];
// 2) We use the for__loop created to read data from jonasArray -- this is because as types array is based on jonasArray it will have same length.
// 3) Here we write:  types[i] = typeof jonasArray[i];
// types[i] = typeof jonasArray[i]; -- this says that, types Array[at position i] = typeOf(data type of the element) in jonasArray[at position i]
// Here, i is the index positions of the Arrays.
// And it will continue to run the same number of times as jonasArray.

// Example 2 -- Calculate ages based on birthYears.

const birthYears = [1990, 1967, 2002, 2010, 2018];

const ageNew = [];

for (let i = 0; i < birthYears.length; i++) {
  ageNew.push(2037 - birthYears[i]);
}

console.log(ageNew);

// for__loop ----- continue and break statement
// continue statement - exit the current iteration of the loop and continue to the next one.
// break statement - completely terminate the whole loop.

// Example based on jonasArray -- Only print elements that are "strings" to the array --- use continue statement

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue; // if typeof of the current element in not a "string" exit the iteration and go to the next one.

  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Example 2 - jonasArray --- Terminate loop after NUMBER is found
// basically, dont log elements once the loop iterates an element thats a number.

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break; // if typeof of the current element is number terminate the whole loop completely.

  console.log(jonasArray[i], typeof jonasArray[i]); // Therefore, this logs - Jonas string and Schmedtmann string.
  // Because next element in the jonasArray is a number (2037-1991)
}

// Looping Backwards - Loop over an array backwards

// Example based on jonasArray

// earlier we looped from index of 0 : i = 0 // 0, 1, 2, 3, 4...
// now we want to loop backwards, meaning from the last element in the array until loop reaches index of 0 //  ... 4, 3, 2, 1, 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// break down ---
// let i = jonasArray.length - 1; ---- counter starts from last element in the Array.
// i >= 0; ----- logical condition, continue to iterate until counter reaches the index of 0.
// i-- // decrease the counter by 1, starting from index of the last element in the array until it reaches element positioned at index 0.

// Loop inside of a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

const todaysRoutine = [
  "Jumping Jacks",
  "Squats",
  "Lunges",
  "Burpees",
  "Mountain Climbers",
];

for (let i = 0; i < todaysRoutine.length; i++) {
  console.log(`------ Starting with ${todaysRoutine[i]}`);

  for (let j = 1; j < 6; j++) {
    console.log(`${todaysRoutine[i]} ${j}`);
  }
}

// while__loop --- In while loop, we can only specify a logical condition:

// Example

// for__loop for comparison
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetion ${rep}`);
// }

// while__loop to achieve same results as above mentioned for__loop:

let rep = 1; // starting counter is specified outside the while loop.

while (rep <= 10) {
  // while loop runs/iterates until the specified condition is true.
  console.log(`Lifting weights repetion ${rep}`);
  rep++; // Counter increment is mentioned after stating the output of the while loop.
}
// NOTE: Usually we won't use while__loop if we need a counter.
// Above example was for comparison the two types of loops.

//// while__loop does not really need a counter.
//// while__loop only requires a condition, which needs to stay TRUE for it to keep running.
//// when we dont know how many times the counter should run, we use while__loop.

/// while__loop ----Example: continue to roll a dice untill we roll 6

// Math.random() - creates number between 0 and 1 (Not including 1)
// We then multiply it by 6 - this gives us random decimal numbers
// Math.truch removes the decimal part, giving us whole numbers between 0 to 5.
// When we add 1, we get numbers between 1 to 6;

let dice = Math.trunc(Math.random() * 6 + 1); // This creates only one random number.

while (dice !== 6) {
  console.log(`You rolled a ${dice}`); // Therefore, the code until here generates a single dice value; if its NOT 6, the loop will run forever.
  dice = Math.trunc(Math.random() * 6 + 1); // To generate new dice values, we have to reassign dice value, at the end of each iteration.
  if (dice === 6) {
    console.log("Loop is about to end..."); // Checks if new generated number is 6, If yes, it logs -> Loop is about to end...
  }
}

// Further breakdown of the above code:

// 1) let dice = Math.trunc(Math.random() * 6 + 1); ---- generates a random dice number.
// 2) while(dice !== 6) ---- we check if the number generated above is 6
// 3) If the number generated in not 6, we enter the loop. Which then because of console.log(`You rolled a ${dice}`); logs ---- You rolled a 2,
// 4) Next reassign the dice value to generate new random number -> dice = Math.trunc(Math.random() * 6 + 1); inside the while__loop;

// Challenge 04

const billValue = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipValue = [];
const totalBill = [];

const arr = [];

for (let i = 0; i < billValue.length; i++) {
  const calcTips = (billValue) =>
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

  tipValue.push(calcTips(billValue[i]));
  totalBill.push(billValue[i] + tipValue[i]);

  console.log(i, tipValue[i], totalBill[i]);

  function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];               // sum = current value of sum + arr received as an input at the current position
      sum += arr[i];
    }
    return sum / arr.length;
  }

  console.log(calcAverage(totalBill));
  console.log(calcAverage(tipValue));
}

// (Section 5--- Udemy) Challenge 01 :
//Given an array of forecasted maximum temperatures, the thermometer displays a
//string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
//days ... 21ºC in 2 days ... 23ºC in 3 days ..."

//Your tasks:
//1. Create a function 'printForecast' which takes in an array 'arr' and logs a
//string like the above to the console. Try it with both test datasets.
//2. Use the problem-solving framework: Understand the problem and break it up
//into sub-problems!

//Test data:
//Data 1: [17, 21, 23]
//Data 2: [12, 5, -5, 0, 4].

const degree = "\u00B0";

const tempData1 = [17, 21, 23];
const tempData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}${degree}C in ${i + 1} days ... `; // str += `${arr[i]}${degree}C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(tempData1);
printForecast(tempData2);

// Challenge 01 : ChatGPT Solutions ->

// Solution using a for loop
function printForecast1(arr) {
  let forecast = "... ";
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(forecast);
}

// Example usage

printForecast1(tempData1);
printForecast1(tempData2);

// Alternative Approach using map and join()
// A more functional way using map(): --- 🔹 Why use map()? It transforms each element and join() merges everything into a string.

function printForecast2(arr) {
  const forecast = arr
    .map((temp, i) => `${temp}ºC in ${i + 1} days`)
    .join(" ... ");
  console.log("... " + forecast + " ...");
}

// Example usage
printForecast2(tempData1);
printForecast2(tempData2);

// Using a while Loop --- 🔹 Why use while? It's useful if you need flexibility, like stopping early based on a condition.

function printForecast3(arr) {
  let forecast = "... ";
  let i = 0;
  while (i < arr.length) {
    forecast += `${arr[i]}ºC in ${i + 1} days ... `;
    i++;
  }
  console.log(forecast);
}

printForecast3(tempData1);
printForecast3(tempData2);

//  Using reduce() --- Why use reduce()? It accumulates values in a single pass, making it efficient for building a string.

function printForecast4(arr) {
  const forecast = arr.reduce(
    (acc, temp, i) => acc + `${temp}ºC in ${i + 1} days ... `,
    "... "
  );
  console.log(forecast);
}

printForecast4(tempData1);
printForecast4(tempData2);

//  Using forEach() --- 🔹 Why use forEach()? It simplifies iteration without needing to manage an index manually.

function printForecast5(arr) {
  let forecast = "... ";
  arr.forEach((temp, i) => {
    forecast += `${temp}ºC in ${i + 1} days ... `;
  });
  console.log(forecast);
}

printForecast5(tempData1);
printForecast5(tempData2);

//  Using Template Literals with join() --- Why use join()? It avoids manual string concatenation, making it more readable.

function printForecast6(arr) {
  console.log(
    "... " +
      arr.map((temp, i) => `${temp}ºC in ${i + 1} days`).join(" ... ") +
      " ..."
  );
}

printForecast6(tempData1);
printForecast6(tempData2);

// Using Recursion (Advanced) --- 🔹 Why use recursion? It's useful when avoiding explicit loops and is good for problems requiring breaking down tasks.

function printForecast7(arr, i = 0, result = "... ") {
  if (i >= arr.length) {
    console.log(result);
    return;
  }
  printForecast7(arr, i + 1, result + `${arr[i]}ºC in ${i + 1} days ... `);
}

printForecast7(tempData1);
printForecast7(tempData2);

// (Section 5--- Udemy) Challenge 02 :

// Build a time tracking application for freelancers.
// You need a function that receives daily work hours for a certain week, and returns:
// --- Total hours worked
// --- Avg daily hours
// --- Day with most hours worked
// --- Number of days worked
// --- Whether week was full-time (worked for 35hours or more)

const timeData = [7.5, 8, 6.5, 0, 8.5, 5, 0];

const timeTracker = function (hrs) {
  let daysWorked;
  let totalHours = 0;
  let maxHours = hrs[0];
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (let i = 0; i < hrs.length; i++) {
    const dailyHours = hrs[i];
    totalHours += hrs[i];

    if (dailyHours === 0) {
      continue;
    }

    if (dailyHours !== 0) {
      if (dailyHours > maxHours) maxHours = dailyHours;
    }
  }

  const maxDay = daysOfTheWeek[hrs.indexOf(maxHours)];
  const weeklyHours = totalHours >= 35;
  daysWorked = hrs.filter((elements) => elements > 0);
  const numDaysWorked = daysWorked.length;
  const avgDailyHours = parseFloat((totalHours / hrs.length).toFixed(1));

  // return `Freelancer has worked for ${numDaysWorked} days last week with a total of ${totalHours} hours, and an average of ${avgDailyHours} hours per day. Freelancer worked most on a day with ${maxHours} hours, this was ${weeklyHours} week`;
  return {
    totalHoursWorked: `${totalHours} hours`,
    dailyAvgHours: `${avgDailyHours} hours`,
    dayWithMostHours: `${maxDay} with ${maxHours} hours`,
    numOfDaysWorked: `${numDaysWorked} days`,
    isFullTime: `${weeklyHours}`,
  };
};

console.log(timeTracker(timeData));

/// Solution by ChatGPT
/// Option 1
function analyzeWorkWeek(workHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Calculate total hours worked
  let totalHours = workHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours (rounded to one decimal)
  let avgDailyHours = parseFloat((totalHours / workHours.length).toFixed(1));

  // Find the day with most hours worked
  let maxHours = Math.max(...workHours);
  let maxDay = daysOfWeek[workHours.indexOf(maxHours)];

  // Count the number of days worked (days with more than 0 hours)
  let daysWorked = workHours.filter((hours) => hours > 0).length;

  // Determine if it was a full-time week (35 hours or more)
  let isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

console.log(analyzeWorkWeek(timeData));

// Explanation:

// Total hours worked: Sum of all hours in the array.
// Avg daily hours: Total hours divided by 7, rounded to one decimal.
// Day with most hours worked: Finds the max value and maps it to the weekday.
// Number of days worked: Counts days with hours greater than 0.
// Full-time week check: If total hours are 35 or more, returns true.

/// Option 2 Using For Loop

function analyzeWorkWeek(workHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let totalHours = 0;
  let maxHours = 0;
  let maxDay = "";
  let daysWorked = 0;

  for (let i = 0; i < workHours.length; i++) {
    totalHours += workHours[i];
    if (workHours[i] > maxHours) {
      maxHours = workHours[i];
      maxDay = daysOfWeek[i];
    }
    if (workHours[i] > 0) {
      daysWorked++;
    }
  }

  let avgDailyHours = parseFloat((totalHours / workHours.length).toFixed(1));
  let isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}
console.log(analyzeWorkWeek(timeData));

/// Option 3 -- Using Map and Reduce

function analyzeWorkWeekAlternative(workHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let totalHours = workHours.reduce((sum, hours) => sum + hours, 0);
  let avgDailyHours = parseFloat((totalHours / workHours.length).toFixed(1));
  let maxHours = Math.max(...workHours);
  let maxDay = daysOfWeek[workHours.indexOf(maxHours)];
  let daysWorked = workHours
    .map((hours) => (hours > 0 ? 1 : 0))
    .reduce((sum, val) => sum + val, 0);
  let isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

console.log(analyzeWorkWeekAlternative(timeData));

/// Option 4 -- Using forEach

function analyzeWorkWeekForEach(workHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let totalHours = 0;
  let maxHours = 0;
  let maxDay = "";
  let daysWorked = 0;

  workHours.forEach((hours, index) => {
    totalHours += hours;
    if (hours > maxHours) {
      maxHours = hours;
      maxDay = daysOfWeek[index];
    }
    if (hours > 0) {
      daysWorked++;
    }
  });

  let avgDailyHours = parseFloat((totalHours / workHours.length).toFixed(1));
  let isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

console.log(analyzeWorkWeekForEach(timeData));

// javascript.info ---  Loops
// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

const promptUser = prompt("Enter a number!");

let i;
do {
  i = prompt("Enter a number greater than 100?", 0);
} while (i <= 100 && i);

// Output Prime Numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // a prime
}
