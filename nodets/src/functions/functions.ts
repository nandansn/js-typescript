// implicit

let greet = function (name: string) {
    console.log(`${name} welcome to Hostfully`);

}

greet('nanda')


// explicit
let add: Function

add = (a: number, b: number): number => {
    return a + b
}

console.log(add(2, 3));


// optional parameters
let calc = (a: number, b: number, action?: string): number => {
    if (action === 'add') {
        return a + b
    }
    return a + b + 7
}


console.log(calc(2, 3));
console.log(calc(1, 2, 'add'));


// default parameters
let div = (a: number, b: number = 1): number => {
    return a / b
}

console.log(div(2));
console.log(div(2, 4));


