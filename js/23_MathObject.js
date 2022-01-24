console.log("JavaScript Math Object Tutorial");
let x = 3;
let y = 6;

let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;


// EXPLORING THE MATH OBJECT
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.5);
z = Math.ceil(5.5);
z = Math.floor(-5.1);
z = Math.abs(-5); // NEGATIVE VALUES INTO POSITIVE VALUES
z = Math.sqrt(49); // NEGATIVE VALUES INTO POSITIVE VALUES
z = Math.pow(2, 4); // NEGATIVE VALUES INTO POSITIVE VALUES
z = Math.min(2, 4, 23, 543, 23, 23, 23, 23, 23); // NEGATIVE VALUES INTO POSITIVE VALUES
z = Math.max(2, 4, 23, 543, 23, 23, 23, 23, 23); // NEGATIVE VALUES INTO POSITIVE VALUES
/* 
a = (0,1)
a100 = a*100 = (0, 100)
a10_100 = 10+a*(100 - 10)

a=10
Formula for 10 to 100 random numbers:
10 + a*(100-10)
= 10 + 100a - 10a
= 10 + 100(0,1) - 10(0,1)
= 10 + (0,100) - (0,10)
= 10 + (0,90)
= (10,100)
Hence proved...😁
*/

z = Math.random() * 100; // RANDOM NUMBERS BETWEEN 0 TO 100
z = Math.round(Math.random() * (100 - 50) + 50);

console.log(z);


// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3
// -4
