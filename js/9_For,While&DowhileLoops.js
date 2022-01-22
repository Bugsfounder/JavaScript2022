console.log("JavaScript For, While & Do while Loops Tutorial");

/*
GENERAL LOOPS IN PROGRAMMING LANGUAGES:
    1. FOR LOOP
    2. WHILE LOOP
    3. DO-WHILE LOOP
*/
// let a = 34;
// a += 1;
// a++;
// console.log(a);
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }

// do {
//     console.log(k);
//     k++;
// } while (k < 10);

// WHAT IS THE RESULT OF THIS LOOP ==> DANGER
// let k = 0;
// while (k < 10) {
//     console.log(k + 1);
//     k += 1-1;
// }
// WHAT IS THE RESULT OF THIS LOOP
// do {
//     if (m === 5) {
//         continue;
//     }
//     console.log(m);
//     m += 1;
// } while (m < 10);
// console.log("Done");

// BREAK AND CONTINUE STATEMENTS
let m = 0;

// BREAK
// do {
//     if (m === 5) {
//         break;
//     }
//     console.log(m);
//     m += 1;
// } while (m < 10);
// console.log('Done');

// CONTINUE
// do {
//     if (m === 5) {
//         m += 1
//         continue;
//     }
//     console.log(m);
//     m += 1;
// } while (m < 10);
// console.log("Done");

let arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(element => {
//     console.log(element);
// });
arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

let obj = {
    name: "Manisha",
    language: "JavaScript",
    experienced: true,
    os: "Kali Linux"
}

for (let key in obj) {
    console.log(key + ": ", obj[key]);
}