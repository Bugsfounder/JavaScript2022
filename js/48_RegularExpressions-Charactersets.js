console.log("JavaScript Regular Expressions - Character sets Tutorial");

/* REGULAR EXPRESSION:-
1. BASIC FUNCTIONS.
2. METACHARACTER SYMBOLS.
3. CHARACTER SETS.
*/

// 3. CHARACTER SETS - WE USE SQUARE BRACKETS FOR CHARACTER SETS []
// const regex = /^h/i;

let regex = /h[ryu]rry/; // CAN BE AN r, y OR u
regex = /h[a-z]rry/; // CAN BE AN ANY CHARACTER FROM A TO Z
regex = /h[^ryu]rry/; // CANNOT BE AN r, y OR u
regex = /h[^ryu]rr[yu]/; // CANNOT BE AN r, y OR u AND CAN BE y OR u
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // WE CAN HAVE AS MANY CHARACTER SETS AS WE WANT

// 4. QUANTIFIERS  -  WE USE CURLY BRACES FOR QUANTIFIERS {}
regex = /har{2}y/; // r CAN BE OCCURRED EXACTLY TWO TIMES
regex = /har{0, 2}y/; // r CAN BE OCCURRED 0 TO 2 (0, 1 OR 2) TIMES 

// 5. GROUPINGS -  WE USE PARENTHESES FOR GROUPINGS ()
regex = /(har){2}/;
regex = /(har){2}([0-9]r){3}/;

// const string = "hArr45 Bhai";
// const string = "harharry Bhai";
const string = "harhar1r2r3ry Bhai";

let result = regex.exec(string);
console.log(`Result from exec is: `, result);

if (regex.test(string)) {
    console.log(`The string ${string} matches the expression ${regex}`);
} else {
    console.log(`The string ${string} does no matches the expression ${regex}`);
}