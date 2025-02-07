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

  getSummary: function() {
    // this.driverLicense = this.hasDriversLicense ? "a" : "no";
    // this.summary = `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.driverLicense} driver's license`
    this.summary = `${this.firstName} is a ${this.calcAges()} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`

    return this.summary
  }

};


// console.log(jonasNewInfo.calcAges());
console.log(jonasNewInfo.getSummary());


// challenge 3 

const markInfo = {
  firstName : "Mark",
  lastName : "Miller",
  mass : 78,
  height : 1.69,

  calcBMI : function() {
    this.markBMI = this.mass / this.height**2;
    return this.markBMI;
  }
}


const johnInfo = {
  firstName : "John",
  lastName : "Smith",
  mass : 92,
  height : 1.95,

  calcBMI : function() {
    this.johnBMI = this.mass / this.height**2;
    return this.johnBMI;
  }
}

console.log(markInfo.calcBMI());
console.log(johnInfo.calcBMI());

const checkHigherBMI = (markInfo.calcBMI() > johnInfo.calcBMI()) ? console.log(`${markInfo.firstName} ${markInfo.lastName}'s BMI (${markInfo.markBMI}) is higher than ${johnInfo.firstName} ${johnInfo.lastName}'s (${johnInfo.johnBMI}))`) :
console.log(`${johnInfo.firstName} ${johnInfo.lastName}'s BMI (${johnInfo.johnBMI}) is higher than ${markInfo.firstName} ${markInfo.lastName}'s (${markInfo.markBMI}))`)