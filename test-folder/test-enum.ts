enum RTOL  {
    ADMIN = 0,
    AUTHOR = 1,
}

enum DAYS {
    SUNDAY = 1,
    MONDAY = 2,
    TUESDAY = 3,
    WEDNESDAY = 4,
    THURSDAY = 5,
    FRIDAY = 6,
    SATURDAY = 7,
}

type Person = { name: string; age: number } | string

let nannda : Person = {name:'kumar',age:12}
nannda = 'nanda'

console.log(nannda);

let add = function (a:number, b:number) {
    console.log(a+b);
    
}

let minus = function (a:number, b:number) {
    console.log(a-b);
    return a-b;
    
}

function calc(num1: number, num2: number, cb: (a: number, b: number) => void) {
    cb(num1, num2)
}


calc(10,12, add)
calc(12,10, minus)
