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


### Array type

In TypeScript, arrays can be declared with a specific type for the elements they contain. Here's an example:

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

const names: string[] = ['Alice', 'Bob', 'Charlie'];
console.log(names); // ['Alice', 'Bob', 'Charlie']

const mixed: (number | string)[] = [1, 'Alice', 2, 'Bob'];
console.log(mixed); // [1, 'Alice', 2, 'Bob']

In this example, three arrays are declared using the const keyword. The type of the elements in each array is specified using a type annotation in square brackets. The type annotations number[], string[], and (number | string)[] declare that the arrays contain elements of type number, string, and either number or string, respectively.

The elements of each array are assigned using an array literal, which is a list of values enclosed in square brackets. The elements in the numbers array are all of type number, the elements in the names array are all of type string, and the elements in the mixed array are either of type number or type string.

Note that, in TypeScript, the type of an array is a subtype of the Array type, so you can use methods like push, pop, and slice on arrays declared with a type annotation.

### tuples

In TypeScript, a tuple is a fixed-length array that can contain elements of different types. 


const person: [string, number, boolean] = ['John Doe', 30, true];
console.log(person); // ['John Doe', 30, true]

const name = person[0];
const age = person[1];
const isEmployed = person[2];
console.log(name, age, isEmployed); // John Doe 30 true

In this example, a tuple person is declared using a type annotation [string, number, boolean], which specifies that the tuple contains three elements of types string, number, and boolean, in that order. The elements of the tuple are assigned using an array literal, which is a list of values enclosed in square brackets.

You can access the elements of a tuple using index notation, just like with arrays. In this example, the variables name, age, and isEmployed are assigned the values of the first, second, and third elements of the person tuple, respectively.

Tuples are useful when you want to represent a collection of values with a specific, fixed length and structure. For example, you might use a tuple to represent a point in 2D space with [x: number, y: number], or to represent a person's name and age with [name: string, age: number].



### enum type

In TypeScript, you can use enumerated types to define a set of named constant values. 

enum Color {
  Red,
  Green,
  Blue
}

let favoriteColor: Color = Color.Green;


In this example, an enumerated type named Color is declared, with named constant values for red, green, and blue. A variable favoriteColor is declared with the type Color, and assigned the value of Color.Green.

You can use the values of an enumerated type in switch statements, just like in other programming languages:

switch (favoriteColor) {
  case Color.Red:
    console.log('Red is my favorite color');
    break;
  case Color.Green:
    console.log('Green is my favorite color');
    break;
  case Color.Blue:
    console.log('Blue is my favorite color');
    break;
}


In this example, a switch statement is used to display a message based on the value of favoriteColor. If favoriteColor is Color.Green, the message 'Green is my favorite color' will be displayed.


### any

In TypeScript, the any data type is a special type that can represent any type of value. When you use the any data type, you're telling TypeScript that you don't know or don't care about the type of a value, and that you don't want TypeScript to check or enforce any type restrictions on that value.

Here's an example of using the any data type:

let myData: any;

myData = 42;
console.log(myData); // 42

myData = 'Hello, World!';
console.log(myData); // 'Hello, World!'

myData = [1, 2, 3];
console.log(myData); // [1, 2, 3]

Using the any data type can make your code more flexible, but it can also make it more difficult to write reliable and maintainable code. That's because when you use the any data type, you're giving up the benefits of type checking and type safety that TypeScript provides. So, it's generally recommended to use the any data type only when you have a good reason to do so, and to use more specific and well-defined types whenever possible.




### Union Types

In TypeScript, union types are a way of specifying that a value can have one of several types. A union type is created by combining multiple types using the pipe (|) symbol.

let myData: string | number;

myData = 42;
console.log(myData); // 42

myData = 'Hello, World!';
console.log(myData); // 'Hello, World!'

With union types, TypeScript can provide type checking and type safety, even when the type of a value is not known in advance. For example, you can use union types in type assertions, type guards, and type-based conditionals, just like with any other type in TypeScript.

Using union types can make your code more flexible and more robust, by allowing you to express complex type relationships and constraints in a clear and concise way. However, like any other feature in TypeScript, you should use union types only when you have a good reason to do so, and you should use them in a way that makes your code readable, maintainable, and bug-free.

### Literal Types

Literal types are a type of data in TypeScript that represent specific values. They can be defined using string, numeric, or boolean literals. For example, in TypeScript, the type "hello" is a literal type that represents the value "hello" only. Literal types are useful for creating more restrictive type definitions that can increase code safety and readability.

let favoriteColor: "red" | "blue" | "green";
favoriteColor = "red"; // okay
favoriteColor = "purple"; // error, 'purple' is not a member of the literal type '"red" | "blue" | "green"'

In this example, the type "red" | "blue" | "green" is a union of literal types that represents only the values "red", "blue", or "green". Assigning any other value to the variable favoriteColor would result in a type error. This can be useful when you want to limit the set of acceptable values for a certain variable.

### Type Aliases and Object Types:

Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
To:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

### Function return types and void

In TypeScript, the return type of a function can be specified using a type annotation. If a function returns a value, you can specify the type of the value that will be returned. If a function does not return a value, you can use the void type.

Here's an example of a function with a return type:

function getName(): string {
  return "John Doe";
}

Here's an example of a function with a void return type:

function printName(name: string): void {
  console.log(name);
}

### Functions as types

In TypeScript, a function can be used as the return type of another function. This means that you can return a function as the result of a function. Here's an example:

function createAdder(x: number): (y: number) => number {
  return function(y: number) {
    return x + y;
  };
}

let add5 = createAdder(5);
console.log(add5(3)); // Output: 8

In this example, the function createAdder takes a single argument x of type number and returns a function that takes a single argument y of type number and returns a value of type number. The returned function can then be assigned to a variable, in this case add5, which can be used to add 5 to another number.

This can be useful when you want to create functions that can be customized in some way, for example by setting a default value for one of the arguments. By returning a function, you can create a new function with specific behavior, while still allowing the caller to customize that behavior by calling the returned function with different arguments.

### Function types and call backs


### the unknown type

The "unknown" type in TypeScript represents a type that is unknown at compile time. The unknown type is a type-safe alternative to the any type, as variables of type unknown cannot be assigned or accessed without a type check or type assertion first.

Here's an example of using the unknown type:

let data: unknown;
data = 42;

if (typeof data === 'number') {
  let result = data * 2;
  console.log(result); // Output: 84
}


In this example, the variable data is declared with a type of unknown, and its value is assigned to 42. Before accessing the value of data, a type check is performed using the typeof operator, which ensures that data is of type number. If the type check is successful, the value of data is multiplied by 2 and logged to the console.

The unknown type is useful when working with data that may be of an unknown type at compile time, but you want to ensure type safety when using the data. By using unknown, you can perform type checks and type assertions to narrow down the type before using the data.

### the never type

The never type in TypeScript represents a value that never occurs. Variables of type never are typically used to represent the return type of a function that always throws an error or never returns normally.

Here's an example of using the never type:

function error(message: string): never {
  throw new Error(message);
}

try {
  error('Something went wrong');
} catch (e) {
  console.error(e.message); // Output: Something went wrong
}

In this example, the error function is declared with a return type of never, and it always throws an error with the specified message. When the error function is called, an exception is thrown and caught in a try-catch block, where the error message is logged to the console.

The never type is useful when you want to enforce that a function should never return normally, and instead always throw an error or halt the program in some other way. By declaring a function with a return type of never, you can ensure that the function is used correctly and that its behavior is clear to other developers who use the function.
