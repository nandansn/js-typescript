var RTOL;
(function (RTOL) {
    RTOL[RTOL["ADMIN"] = 0] = "ADMIN";
    RTOL[RTOL["AUTHOR"] = 1] = "AUTHOR";
})(RTOL || (RTOL = {}));
var DAYS;
(function (DAYS) {
    DAYS[DAYS["SUNDAY"] = 1] = "SUNDAY";
    DAYS[DAYS["MONDAY"] = 2] = "MONDAY";
    DAYS[DAYS["TUESDAY"] = 3] = "TUESDAY";
    DAYS[DAYS["WEDNESDAY"] = 4] = "WEDNESDAY";
    DAYS[DAYS["THURSDAY"] = 5] = "THURSDAY";
    DAYS[DAYS["FRIDAY"] = 6] = "FRIDAY";
    DAYS[DAYS["SATURDAY"] = 7] = "SATURDAY";
})(DAYS || (DAYS = {}));
var nannda = { name: 'kumar', age: 12 };
nannda = 'nanda';
console.log(nannda);
var add = function (a, b) {
    console.log(a + b);
};
var minus = function (a, b) {
    console.log(a - b);
    return a - b;
};
function calc(num1, num2, cb) {
    cb(num1, num2);
}
calc(10, 12, add);
calc(12, 10, minus);
