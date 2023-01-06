var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var addButton = document.getElementById('add');
function addNums(number1, number2) {
    return number1 + number2;
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', function () {
    var result = addNums(+number1.value, +number2.value);
    var resElement = document.getElementById("result");
    resElement.textContent = String(result);
});
