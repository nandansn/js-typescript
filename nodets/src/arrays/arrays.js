"use strict";
let stocks = ['oracle', 'apple', 'google']; // implicit
let mobiles = []; // need to decfine the empty array or initialize array
let addMobile = (mobile) => {
    mobiles.push(mobile);
};
let displayMobile = () => {
    mobiles.forEach((m) => console.log(m));
};
addMobile('apple');
addMobile('');
addMobile('google');
addMobile(' ');
displayMobile();
let mixedArray = [1, 'k', true]; // mixed array
let mixedArray2 = [];
mixedArray2.push(true);
mixedArray2[1] = 'nanda';
mixedArray2.push(123);
console.log(mixedArray2);
mobiles = ['a', 'b'];
