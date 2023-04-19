let car = {
    brand:'audi',
    model:'q7',
    price: 10000000
}


console.log(car);
console.log(car.brand);

// car.engine = 'ff', no new properties allowed


// re-assign


car = {
    brand:'audig',
    price: 100,
    model:'q7',
}


let student : {
    name:string,
    age:number,
    grade:number,
    display: () => void
}


student = {
    name: 'Student',
    age:10,
    grade:10,
    display: function () {
        console.log(this.name, this.age, this.grade)
    }
}


student.display()

// how to declare object, using inerfaces

interface IPerson {
    fname: string,
    lname: string,
    age: number,
    display: () => void
}


let person:IPerson = {
    fname: "g",
    lname: "k",
    age: 0,
    display: function (): void {
        console.log(this.fname, this.lname, this.age);
        
    }
}




