// A function type expression in which the parameter is a function that has no return value and itself takes a string as an argument
function greeter(fn: (a: string) => void) {
  fn('Hello World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// We can also use a type alias to name a function type
type GreetFunction = (a: string) => void;
function greeterV2(fn: GreetFunction) {
  // ...
}

// In JavaScript, functions can have properties in addition to being callable
// However, function type expression syntax doesn't allow for declaring properties
// If we want to describe something callable with properties, we can write a call signature in an object type
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = 'default description';

doSomething(myFunc);

// JavaScript functions can also be invoked with the new operator
// TypeScript refers to these as constructors because they usually create a new object
// You can write a construct signature by adding the new keyword in front of a call signature
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

// Some objects, like JavaScript's Date object, can be called with or without new
// You can combine call and construct signatures in the same type arbitrarily
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

// In TypeScript, generics are used when we want to describe a correspondence between two values
// We do this by declaring a type parameter in the function signature
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// Sometimes, we want to relate two values, but can only operate on a certain subset of values
// In this case, we can use a constraint to limit the kinds of types that a type parameter can accept
// Here's a function that returns the longer of two values
// We need a length property that's a number, and constrain the type parameter to that type by writing an extends clause
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// TypeScript can usually infer the intended type arguments in a generic call, but not always
// For example, a function to combine two arrays
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Normally, it would be an error to call this function with mismatched arrays
const arr = combine([1, 2, 3], ['hello']);

// If you intended to do this, however, you could manually specify Type
const arr2 = combine<string | number>([1, 2, 3], ['hello']);
