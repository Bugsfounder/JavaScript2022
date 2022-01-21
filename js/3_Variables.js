console.log("JavaScript Variables Tutorial");

// THERE ARE THREE TYPE OF VARIABLES IN JAVASCRIPT
// 1. var
// 2. let
// 3. const 

var myName = "Manisha";
var language;
var marks = 34;
// language = "JavaScript";
console.log(myName, language, marks);

// RULES FOR CREATING VARIABLES IN JAVASCRIPT
// 1. CANNOT START WITH NUMBERS
// 2. CAN START WITH LETTER, _ OR $
// 3. ARE CASE SENSITIVE 

var city = 'Delhi';
var _city = "Delhi";
var $city = "Delhi";
// var 2city = "Delhi"; // error
// var ^city = "Delhi"; // error
console.log(city);
const ownerName = 'Manisha';
city = 'Mumbai'; // CORRECT
// ownerName = "Hari Ram"; //Assignment to constant variable ==> error

// const fruit; // Missing initializer in const declaration ==> error
const fruit = "Mango"; // CORRECT
console.log(fruit);

{
    let city = "Ram Pur";
    city = 'Kolkata';
    console.log(city);
}

console.log(city);

const arr1 = [12, 4, 5, 23, 2, 3, 2];
arr1.push(89);
arr1[0] = 2
console.log(arr1);

/* Most Common Programming Case Types:
    1. camelCase
    2. kebab-case
    3. snake_case
    4. PascalCase
*/