let num1 = document.getElementById('num1') ! as HTMLInputElement
let num2 = document.getElementById('num2') ! as HTMLInputElement

let addBtn = document.getElementById('add') 


let add = (num1:number, num2:number) => { return num1 + num2 }

addBtn?.addEventListener('click',() => {
     console.log(add(+num1.value, +num2.value));
     
})



