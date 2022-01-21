console.log("JavaScript Type Conversion and Type Coercion Tutorial");


// *************** TYPE CONVERSION *************** 
// ==> String() Function
// NUMBER TO STRING CONVERSION
let myVar = String(34);
console.log(myVar, (typeof myVar));

// BOOLEAN TO STRING CONVERSION
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

// DATE TO STRING CONVERSION 
let date = String(new Date());
console.log(date, (typeof date));

// ARRAY TO STRING CONVERSION 
// let arr = [12, 43, 23, 43, 23, 23];
let arr = String([12, 43, 23, 43, 23, 23]);
console.log(arr, arr.length, (typeof arr));

console.log('\n');
// ==> toString() Function
// NUMBER TO STRING CONVERSION
let myVar2 = 34
console.log(myVar2.toString(), (typeof myVar2));

// BOOLEAN TO STRING CONVERSION
let booleanVar2 = String(true);
console.log(booleanVar2, (typeof booleanVar2));

// DATE TO STRING CONVERSION 
let date2 = new Date();
console.log(date2.toString(), (typeof date2));

// ARRAY TO STRING CONVERSION 
// let arr = [12, 43, 23, 43, 23, 23];
let arr2 = [12, 43, 23, 43, 23, 23];
console.log(arr2.toString(), arr2.length, (typeof arr2));

// ==> Number() Function
// STRING TO NUMBER CONVERSION
let str = Number('3453');
str = Number('34a53');      // NOT A NUMBER
str = Number(false);        // RETURN 0
str = Number(true);         // RETURN 1
console.log(str, (typeof str));

// ARRAY TO NUMBER CONVERSION
str = Number([12, 43, 564, 23, 90]); // NOT A NUMBER
console.log(str, (typeof str)); // NOT A NUMBER

// ==> parseInt() Function
// STRING TO NUMBER CONVERSION
// let number = parseInt("34");
number = parseInt("34.5433");        // 34
// number = Number("34.5433");       // 34.5433
console.log(number, (typeof number));

// ==> parseFloat(string) Function
let numberN = parseFloat('34.5433')
console.log(numberN, (typeof numberN));

// ==> toFixed() Function
let numberNF = parseFloat('234.54232');
console.log(numberNF.toFixed(), (typeof numberNF));  // RETURNS 234
console.log(numberNF.toFixed(1), (typeof numberNF)); // RETURNS 234.5
console.log(numberNF.toFixed(2), (typeof numberNF)); // RETURNS 234.54
console.log(numberNF.toFixed(3), (typeof numberNF)); // RETURNS 234.542
console.log(numberNF.toFixed(4), (typeof numberNF)); // RETURNS 234.5423
console.log(numberNF.toFixed(5), (typeof numberNF)); // RETURNS 234.54232

// *************** TYPE COERCION *************** 
// let mystr = "698";
let mystr = Number("698");
let mynum = 34;
let s = mystr + mynum
console.log(s, typeof s);