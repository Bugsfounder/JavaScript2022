console.log("JavaScript Arrays and Objects Tutorial");

// ARRAYS
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 23, [1, 2, 3]];

const arr = new Array(23, 123, 21, "Orange");
console.log(arr);
// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[0] = "Manisha";
let arrElement = arr[0];
// console.log('element:', arrElement);
// console.log(arr);

let value = marks.indexOf(34)
console.log(value);

// MUTATING AND MODIFYING AN ARRAYS
// marks.push(100); // INSERT DATA AT THE END IF THE ARRAY
// marks.unshift(99);  // INSERT DATA AT FIRST INDEX OF THE ARRAY
// marks.pop() // REMOVE AN ELEMENT FROM END OF THE ARRAY
// marks.shift() // REMOVE AN ELEMENT AT FIRST INDEX OF THE ARRAY
// marks.splice(1, 3);
// marks.reverse();
// let marks2 = [12, 43, 54, 34];
// console.log(marks);
// marks = marks.concat(marks2);
// console.log(marks);


// OBJECTS
let myObj = {
    name: "Manisha",
    "last name": "Kumari",
    target: "Success",
    isActive: true,
    targetsNum: [1, 2, 12, 43, 12],
    targets: {
        first: "Web Developer",
        second: "Software Developer",
        third: "Android Developer",
        forth: "Machine Learning",
        fifth: "Operating System Developer",
        sixth: "Artificial Intelligence"
    }
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj['last name']);
console.log(myObj['target']);