var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Type annotations come after the variable name
var obj = { x: 0 };
// In most cases, type annotations are not needed when declaring variables
var myName = 'Alice';
// Type annotations go after parameter names when defining functions
function sayHi(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
// Function return type can also be annotated, after the parameter list
// Return type annotation not usually needed because TypeScript will infer its type based on return statements
function getFavoriteNumber() {
    return 26;
}
// A function that returns a promise can be annotated
function getFavoriteNum() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 26];
        });
    });
}
// Contextual typing means that TypeScript can determine the parameter types of a function based on where it's called
var names = ['Alice', 'Bob', 'Eve'];
// The parameter s is inferred to have a type of string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// This also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Types can be combined in a "union", like this function that can take strings or numbers as arguments
function printId(id) {
    console.log('Your ID is: ' + id);
}
// If a value is of a "union" type, we can work with it by using narrowing
function printIdV2(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// Narrowing when a parameter is a union between a string array and a string
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler ' + x);
    }
}
// If every member in a union has a property in common, we can use it without narrowing
// This function accepts either an array of numbers or a string, which can both be passed to the slice method
function getFirstThree(x) {
    return x.slice(0, 3);
}
// The alias can be used anywhere a type usually could
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printCoordV2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
// A type assertion lets us specify a more specific type
var myCanvas = document.getElementById('main_canvas');
// Angle bracket syntax is also acceptable
var myCanvasV2 = document.getElementById('main_canvas');
// Types can be declared literally, that is, they can have more than a generic type, but a literal type
// Literal types aren't super useful on their own, because a variable that can only have one value isn't great
var x = 'hello';
// But combined via unions, they can be useful as a way of accepting a certain set of known values
function printText(s, alignment) {
    // ...
}
function configure(x) {
    // ...
}
