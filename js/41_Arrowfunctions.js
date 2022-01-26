console.log("JavaScript Arrow Functions Tutorial");

// ARROW FUNCTIONS 

// CREATING A REGULAR FUNCTION
// const manisha = function () {
//     console.log('This is the best Person ever');
// }

// CREATING AN ARROW FUNCTION
const manisha = () => {
    console.log("This is the best person ever");
}

// manisha(); 

// FUNCTION RETURNING SOMETHING
// const greet = function () {
//     return "Good Morning!";
// }

// ONE LINERS DO NOT REQUIRES BRACES{}/return
// const greet = () => "Good Morning!";

// RETURNING AN OBJECT 
// const greet = () => ({ name: "Manisha" });

// IF FUNCTION HAS ONLY ONE PARAMETER THEN DO NOT REQUIRES PARENTHESES
// const greet = name => `Good Morning ${name}!`;

// IF FUNCTION HAS MORE THAN ONE PARAMETER THEN IT REQUIRES PARENTHESES
const greet = (name, ending) => `Good Morning ${name}! ${ending}`;



// console.log(greet());
// console.log(greet('Manisha'));
console.log(greet('Manisha', 'bye'));
