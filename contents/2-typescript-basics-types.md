## Core Types

### number
- 1
- 5.3
- -10

- all numbers, no differentiation between integeres or floats

### string
- all text values
- 'Hi'
- "Hi"
- `Hi`
### boolean
- true
- false

- no "truthy" or "falsy" values


### TypeScript Vs JavaScript

- JS uses dynamic types - resolved at runtime
- TS uses static types = resolved during compile time


### Important: Type Casing
- In TypeScript, you work with types like string or number all the times.

***Important: It is string and number (etc.), NOT String, Number etc.***

- The core primitive types in TypeScript are all lowercase!

### working with numbers, boolean, string



### Type Assignment and Type Inference

- TS understands the type after colon, but js won't understand it

- example function add(n1:number, n2:number, showResult:boolean, phrase:string)



> let number1 = 5
> let number1:number;
> number1 = 5
> number1 = 'nanda' // compilation error


### Object Types

- {age:30}
- Any JS object, more specific types are possible.

- how sample object type look like

> const person = {
    name:"nanda",
    age:42
}

- corresponding TS object type look like below, key-type pairs

const person : {
    name:string;
    age:number
}


- if you want you can declare the object type like below

const person : {
    name:string;
    age:number
}

- or you can define like below,

const person = {
    name:"nanda",
    age:42
}

### Nested Objects & Types
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.



