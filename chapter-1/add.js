var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addBtn = document.getElementById('add');
var add = function (num1, num2) { return num1 + num2; };
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
