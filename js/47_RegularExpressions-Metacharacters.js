console.log("JavaScript Regular Expressions - Metacharacters Tutorial");

let regex = /manisha/;
// LETS LOOK INTO SOME META CHARACTER SYMBOLS 
//  ^string --->  ^ STARTS WITH 
//  string$ --->  $ ENDS WITH 
//  str.ng  --->  . ANY ONE CHARACTER
//  str*ng  --->  * ANY 0 OR MORE THAN ONE CHARACTER
//  stri?ng? --->  ? i IS OPTIONAL IN THIS STRING
//  str\*ing --->  \ SCAPE SEQUENCE CHARACTER

regex = /^mani/; // STARTS WITH 
regex = /isha$/;        // ENDS WITH 
regex = /man.sha/;      // MATCHES ANY ONE CHARACTERS
regex = /m*nisha/;      // MATCHES ANY 0 OR MORE CHARACTERS
regex = /ma?nishaK?/;   // ? AFTER CHARACTER MEANS THAT CHARACTER IS OPTIONAL
regex = /ma\*nisha/;    // \ SCAPE SEQUENCE CHARACTER

let string = "ma*nisha is good girl and manisha is a genius girl also. TO manisha";

let result = regex.exec(string);
console.log("The result form exec is:", result);

if (regex.test(string)) {
    console.log(`The string ${string} matches the expression ${regex.source}`, true);
} else {
    console.log(`The string ${string} does not match the expression ${regex.source}`, false);
}
