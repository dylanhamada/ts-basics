// Type annotations come after the variable name
let obj: any = { x: 0 };

// In most cases, type annotations are not needed when declaring variables
let myName = 'Alice';

// Type annotations go after parameter names when defining functions
function sayHi(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

// Function return type can also be annotated, after the parameter list
// Return type annotation not usually needed because TypeScript will infer its type based on return statements
function getFavoriteNumber(): number {
  return 26;
}

// A function that returns a promise can be annotated
async function getFavoriteNum(): Promise<number> {
  return 26;
}

// Contextual typing means that TypeScript can determine the parameter types of a function based on where it's called
const names = ['Alice', 'Bob', 'Eve'];

// The parameter s is inferred to have a type of string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// This also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
