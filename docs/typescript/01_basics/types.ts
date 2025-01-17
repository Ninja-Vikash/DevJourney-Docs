// There are 3 primitive types in TypeScript: number, string, and boolean

let myNumber: number = 3;
let myString: string = "Docs.dev";
let myBoolean: boolean = true;

// myNumber = function(){}

// We can assign type of any variable:
// 1. Explicitly
// 2. Implicitly

// impicit
let newVariable = 3;

newVariable = Number(false);

console.log(newVariable);

// explicit
// let username: number;

// -------------------------------------------

let username: string = "vikash";
let userAge: number = 21;
let isLoggedIn: boolean = true;

// there are few special types

let value: any = true;
value = 1;

value = "vikash";

let customer: unknown;

customer = "vikash";
customer = true;
customer = 134;

let channel: never; // This variable can never have a value assigned to it.