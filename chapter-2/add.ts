let number1 = document.getElementById('num1')! as HTMLInputElement;
let number2 = document.getElementById('num2')! as HTMLInputElement;


let addButton = document.getElementById('add')


function addNums(number1:number, number2:number) {
    return number1 + number2
}

addButton?.addEventListener('click', function () {
    let result = addNums(+number1.value, +number2.value)
    let resElement = document.getElementById("result")! as HTMLParagraphElement
    resElement.textContent = String(result)
})