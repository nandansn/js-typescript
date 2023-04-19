let firstName: string
let age: number
let isAdult: boolean


firstName = 'nanda'
age = 43
isAdult = true

let city = 'erode' // implicit type declaration


console.log(firstName, age, isAdult, city)


let data = (fName:string, age:number, isAdult:boolean, city:string) => { 
    console.log(fName, age, isAdult, city); 
}


data(firstName, age, isAdult, city)