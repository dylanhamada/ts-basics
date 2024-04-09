// When using unions, we can use a technique called "narrowing" to ensure that our function receives the proper argument types
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }
    return padding + input;
}
// An interesting and unfortunate accident of JavaScript development is that null is considered an object when subjected to the typeof operator
function printAll(strs) {
    if (typeof strs === 'object') {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            // 'strs' is possibly 'null'
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
// In JavaScript, a truthy value is one that is not falsy, which corresponds to values like (0, NaN, "", 0n, null, and undefined)
// Therefore, the if statement in the following function is trying to evaluate a truthy value
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's here. :(";
}
// We can leverage truthy values to guard against values that are null or undefined, like in our printAll function
function printAllV2(strs) {
    if (strs && typeof strs === 'object') {
        for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
            var s = strs_2[_i];
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
}
// TypeScript also uses equality checks like ===, ~==, ==, and ~= to narrow types
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'
        container.value *= factor;
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function moveV2(animal) {
    if ('swim' in animal) {
        animal;
    }
    else {
        animal;
    }
}
// JavaScript has an operator, instanceof, for checking whether or not a value is an 'instance' of another value
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// The declared type of a variable matters when a variable is reassigned
var n = Math.random() < 0.5 ? 10 : 'hello world';
n = 1;
// Impermissible, because n was declared either a number of string, and TypeScript implicitly recognizes that
// n = true;
// A user-defined guard takes the form of a function whose return type is a type predicate
// pet is Fish is the type predicate, and takes the form parametername is Type, where parameterName must be the name of a parameter from the current function signature
function isFish(pet) {
    return pet.swim !== undefined;
}
// Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible
// Both calls to 'swim' and 'fly' are now okay
// let pet = getSmallPet();
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }
