"use strict";
// implicit
let greet = function (name) {
    console.log(`${name} welcome to Hostfully`);
};
greet('nanda');
// explicit
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
// optional parameters
let calc = (a, b, action) => {
    if (action === 'add') {
        return a + b;
    }
    return a + b + 7;
};
console.log(calc(2, 3));
console.log(calc(1, 2, 'add'));
// default parameters
let div = (a, b = 1) => {
    return a / b;
};
console.log(div(2));
console.log(div(2, 4));
