type stringOrNumber = string | number
type personObjt = { name: string, age: number, email: string }

let addText = (a: stringOrNumber, b: stringOrNumber) => {
    console.log(a, b);
}

let display = (p: personObjt) => {
    console.log(p.name, p.age, p.email);

}


display({ name: 'nanda', age: 43, email: 'abcde@gmail.com' })