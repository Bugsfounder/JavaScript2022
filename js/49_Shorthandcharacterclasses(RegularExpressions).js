console.log("JavaScript Shorthand character classes (Regular Expressions) Tutorial");

let regex = /\war/;     // WORD CHARACTER - _ OR ALPHABET OR ALPHA NUMERIC (NUMBERS)
regex = /\w+rry/;       // \w+ MEANS ONE OR MORE THAN ONE WORD CHARACTER
regex = /\Wrry/;        // \W MEANS ONE NON WORD CHARACTER. EX:- @,#,%,^,&
regex = /\W+rry/;       // \W+ MEANS ONE OR MORE THAN ONE NON WORD CHARACTER. EX:- @,#,%,^,&
regex = /\W+bhai/;      // \W+ MEANS ONE OR MORE THAN ONE NON WORD CHARACTER. EX:- @,#,%,^,&
regex = /\d999/;        // \d MEANS DIGIT
regex = /\d+999/;       // \d+ MEANS ONE OR MORE THAN ONE DIGIT
regex = /\D999/;        // \D MEANS ONE NONE DIGIT
regex = /\D+999/;       // \D+ MEANS ONE OR MORE THAN ONE NONE DIGIT
regex = /\D+999/;       // \D+ MEANS ONE OR MORE THAN ONE NONE DIGIT
regex = /\ska number/;  // \s+ ONE WHITE SPACE
regex = /\s+ka number/; // \s+ ONE OR MORE THAN WHITE SPACE
regex = /\Ska number/;  // \S ONE NON-WHITE SPACE
regex = /\S+ka number/; // \S+ ONE OR MORE THAN ONE NON-WHITE SPACE
regex = /@##%&rry\b/;       // \b WORD BOUNDARY

// ASSERTIONS
regex = /h(?=a)/;
regex = /h(?!a)/;

let str = 'harry bhai';
str = 'haererererrry bhai';
str = '@rry bhai';
str = '@#$ #%rry bhai';
str = '@##$%^&rry $$$#@bhai';
str = '@##$%^&rry $$$#@bhai 8999999999';
str = '@##$%^&rry $$$#@bhai 89999y99999';
str = '@##$%^&rry $$$#@bhai 89999harry99999';
str = '@##$%^&rry $$$#@bhai harry ka number 89999harry99999';
str = '@##$%^&rry $$$#@bhai harry \tka number 89999harry99999';
str = '@##$%^&rry $$$#@bhai harry      ka number 89999harry99999';
str = '@##$%^&rry $$$#@bhai harryAka number 89999harry99999';
str = '@##%&rry $$$#@bhai hyrryAka number 89999harry99999';

let result = regex.exec(str);
console.log("The result of exec is: ", result);

if (regex.test(str)) {
    console.log(`The string: "${str}" matches the expression: "${regex}"`);
} else {
    console.log(`The string: "${str}" does not matches the expression: "${regex}"`);
}