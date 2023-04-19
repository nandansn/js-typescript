"use strict";
let firstName;
let age;
let isAdult;
firstName = 'nanda';
age = 43;
isAdult = true;
let city = 'erode'; // implicit type declaration
console.log(firstName, age, isAdult, city);
let data = (fName, age, isAdult, city) => {
    console.log(fName, age, isAdult, city);
};
data(firstName, age, isAdult, city);
