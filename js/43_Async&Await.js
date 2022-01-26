console.log("JavaScript Async/Await Tutorial");


const manisha = async () => 'manisha';

// console.log("Before calling manisha()");
// let myName = manisha();
// console.log("After calling manisha()");
// console.log("Name: ", myName);
// console.log("Last Line of this js file");

const getData = async () => {
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const data = await response.json();
    console.log('users resolve');

    return data;
}

console.log("Before calling manisha()");
let users = getData();
console.log("After calling manisha()");
users.then(data => console.log(data));
console.log("Last Line of this js file");