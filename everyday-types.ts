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

// Types can be combined in a "union", like this function that can take strings or numbers as arguments
function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}

// If a value is of a "union" type, we can work with it by using narrowing
function printIdV2(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Narrowing when a parameter is a union between a string array and a string
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '));
  } else {
    console.log('Welcome lone traveler ' + x);
  }
}

// If every member in a union has a property in common, we can use it without narrowing
// This function accepts either an array of numbers or a string, which can both be passed to the slice method
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// A type alias is a name for any type, that can be reused
type Point = {
  x: number;
  y: number;
};

// The alias can be used anywhere a type usually could
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// A type alias can be used for any type, not just an object type
// For example, a union type
type ID = number | string;

// An interface declaration is another way to name an object  type
interface PointV2 {
  x: number;
  y: number;
}

function printCoordV2(pt: PointV2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// The difference between an alias and an interface is that an interface can be reopened and new fields added
interface Window {
  title: string;
}

interface Window {
  ts: number;
}

// A type assertion lets us specify a more specific type
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// Angle bracket syntax is also acceptable
const myCanvasV2 = <HTMLCanvasElement>document.getElementById('main_canvas');

// Types can be declared literally, that is, they can have more than a generic type, but a literal type
// Literal types aren't super useful on their own, because a variable that can only have one value isn't great
let x: 'hello' = 'hello';

// But combined via unions, they can be useful as a way of accepting a certain set of known values
function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}

// Literal types can be combined with non-literal types
interface Options {
  width: number;
}

function configure(x: Options | 'auto') {
  // ...
}
