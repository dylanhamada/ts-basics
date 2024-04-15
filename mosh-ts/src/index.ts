// create a new tsconfig.json file with the following command
// tsc --init

// in tsconfig.json, the "target" property should be set to whatever ECMASCRIPT standard is needed
// the "rootDir" property should reference the target source folder for .ts files to be compiled
// the "outDir" property should reference the target output folder for .js files to be compiled from TypeScript
// typing the command tsc in the terminal will compile all TypeScript files in the main directory to JavaScript files

// annotate the variable type
let age: number = 20;

// if we don't annotate our variable, the TypeScript compiler will still know it should be a specific variable 
// type as long as it's been initialized with a value
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

// if we don't annotate our variable and don't initialize it with a value, the TypeScript compiler will 
// declare it as type 'any'
// if we use variables of type any, we defeat the purpose of using TypeScript in the first place,
// so we should explicitly annotate or set the variables types 
let level;

// changing the "noImplicitAny" property in tsconfig.json to false will allow declaring implicit
// variable types of "any", but this defeats the purpose of TypeScript and should be avoided

// we can annotate an array type
// we can leave out the annotation if our array is declared with just one variable type as its elements
let numbers: number[] = [1, 2, 3];
// both are valid and the TypeScript compiler will know both are number arrays
let ints = [9, 8, 7];
// TypeScript works with VSCode's Intellisense to autocomplete array methods if the TypeScript compiler
// knows what array type we're working with
numbers.forEach(n => n.valueOf);

// TypeScript has a new array type called a "tuple", in which the array length is defined and each
// element is defined with a specific variable type
let user: [number, string] = [1, 'Dylan'];
// TypeScript knows what each array element variable type is, and Intellisense will autocomplete as needed
user[0].toFixed;
// So far, there is an issue where a tuple array can have an element added with .push() and it will not
// trigger a TypeScript compiler error

// enums are another TypeScript variable type that groups related constants together
// if the variable types are numbers, we only need to declare the type of the first enum, and TypeScript
// will automatically generate the others
// if the variable types are strings or other variable types, we need to explicitly declare them
enum Size { Small = 1, Medium, Large };
// we access the value of an enum the following way
let mySize: Size = Size.Medium;