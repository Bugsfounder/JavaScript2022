console.log("JavaScript Regular Expressions & related functions Tutorial");

let reg = /manisha/; // THIS IS A REGULAR EXPRESSION LITERAL IN JAVASCRIPT
// FLAGS
reg = /manisha/g; // g MEANS GLOBAL 
// reg = /manisha/i; // i MEANS CASE INSENSITIVE
// reg = /manisha/ig; // ig MEANS GLOBAL AND CASE INSENSITIVE ALSO


// console.log(reg);
// console.log(reg.source);


// FUNCTIONS TO MATCH EXPRESSION
let str = "manisha is a genius girl and manisha is also a good girl.";

// 1. exec(); // THIS WILL RETURN ARRAY FOR MATCH OR NULL FOR NO MATCH

let result = reg.exec(str);
// console.log(result);
// result = reg.exec(str);
// console.log(result); ---> WE CAN USE MULTIPLE exec() WITH GLOBAL FLAG

if (result) {
    // console.log(result);
    // console.log(result.index);
    // console.log(result.input);
}


// 2. test() ==> RETURNS TRUE OR FALSE
// result = reg.test(str);
// console.log(result);


// 3. match(); // IT RETURNS THE ARRAY OF RESULTS OR NULL
// result = reg.match(str);  // wrong syntax
// result = str.match(reg); // write syntax
// console.log(result);

// 4. search() // RETURNS INDEX OF FIRST MATCH OR -1
result = str.match(reg);  // wrong syntax
result = str.search(reg); // write syntax
console.log(result);

// 5. replace() --> RETURNS NEW STRING WITH ALL REPLACEMENTS (IF NO GLOBAL FLAG IS GIVEN IN REGEX THEN ONLY FIRST MATCH WILL REPLACED)
result = str.replace(reg, 'Mahi');
console.log(result);
