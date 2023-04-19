"use strict";
let car = {
    brand: 'audi',
    model: 'q7',
    price: 10000000
};
console.log(car);
console.log(car.brand);
// car.engine = 'ff', no new properties allowed
// re-assign
car = {
    brand: 'audig',
    price: 100,
    model: 'q7',
};
let student;
student = {
    name: 'Student',
    age: 10,
    grade: 10,
    display: function () {
        console.log(this.name, this.age, this.grade);
    }
};
student.display();
let person = {
    fname: "g",
    lname: "k",
    age: 0,
    display: function () {
        console.log(this.fname, this.lname, this.age);
    }
};
