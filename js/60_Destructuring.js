console.log("JavaScript Destructuring Tutorial");

let a, b, c, d;
a, b = [12, 43];

[a, b, c, ...d] = [12, 43434, 34, 34, 34, 34, 34, 23, 34, 34];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({ a, b, c, ...d } = { a: 12, b: 32, c: 43, d: 65, e: 65, f: 87 });

console.log(a, b, c, d);

const fruits = ['Apple', "Banana", "Litchi", "Mango", "Papaya"];
[a, b, c, ...d] = fruits;

console.log(a, b, c, d);

const laptop = {
    model: "Lenovo",
    age: '10 Years',
    gender: "Female",
    net: 12345,
    start: () => "Started....."
};

const { model, age, gender, net, start } = laptop;

console.log('model:', model);
console.log('age:', age);
console.log('gender:', gender);
console.log('net:', net);
console.log('start:', start());
