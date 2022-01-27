console.log("JavaScript Symbols Tutorial");

// SYMBOL
const sym1 = Symbol("My Identifier");
const sym2 = Symbol("My Identifier");

// console.log(sym1);
// console.log(typeof sym1);

console.log(sym1 === sym2);

const a = "This is";
const b = "This is";
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);
console.log(true === true);

const k1 = Symbol('Identifier for');
const k2 = Symbol('Identifier for k2');

const myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Manisha";
myObj['name'] = "Good Object";

console.log(myObj);
// console.log(myObj.k1); // Not Allowed 
console.log(myObj[k1]);
console.log(myObj[k2]);

// SYMBOLS ARE IGNORED IN for-in LOOPS
for (key in myObj) {
    console.log("Inside loop: ", key, myObj[key]);
}

console.log(JSON.stringify(myObj));