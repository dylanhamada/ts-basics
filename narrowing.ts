// When using unions, we can use a technique called "narrowing" to ensure that our function receives the proper argument types
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

// An interesting and unfortunate accident of JavaScript development is that null is considered an object when subjected to the typeof operator
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    for (const s of strs) {
      // 'strs' is possibly 'null'
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

// In JavaScript, a truthy value is one that is not falsy, which corresponds to values like (0, NaN, "", 0n, null, and undefined)
// Therefore, the if statement in the following function is trying to evaluate a truthy value
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

// We can leverage truthy values to guard against values that are null or undefined, like in our printAll function
function printAllV2(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}

// TypeScript also uses equality checks like ===, ~==, ==, and ~= to narrow types
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// Using the looser equality checks, checking whether something == null not only checks if a value is specifically null, it also checks whether it's potentially undefined
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'
    container.value *= factor;
  }
}

// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the 'in' operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// Optional properties will exist in both sides for narrowing. For example, a human could both swim and fly and should show up in both sides of the in check
type FishV2 = { swim: () => void };
type BirdV2 = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function moveV2(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal;
  } else {
    animal;
  }
}

// JavaScript has an operator, instanceof, for checking whether or not a value is an 'instance' of another value
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// The declared type of a variable matters when a variable is reassigned
let n = Math.random() < 0.5 ? 10 : 'hello world';

n = 1;

// Impermissible, because n was declared either a number of string, and TypeScript implicitly recognizes that
// n = true;

// A user-defined guard takes the form of a function whose return type is a type predicate
// pet is Fish is the type predicate, and takes the form parametername is Type, where parameterName must be the name of a parameter from the current function signature
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible
// Both calls to 'swim' and 'fly' are now okay
// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }
