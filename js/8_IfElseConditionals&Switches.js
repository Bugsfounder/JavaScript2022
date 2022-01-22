console.log("JavaScript If Else Conditionals & Switches Tutorial");

const age = 40;
let vari = 12;
let doesDrive = true;

// if (age == 19) {
//     console.log("Age is 19");
// } else if (age === 65) {
//     console.log("Age is 65");
// }
// else {
//     console.log("Age is not 19");
// }

// if (age != 19) {
//     console.log("Age is Not 19");
// }
// if (age !== 65) {
//     console.log("Age is not 65");
// }
// else {
//     console.log("Age is not 19");
// }

// console.log(typeof vari);
// if (typeof vari !== 'undefined') {
//     console.log("Vari is defined", vari);
// }
// if (typeof vari === 'undefined') {
//     console.log("Vari is Not Defined");
// }

// if (doesDrive || age > 18) {
//     console.log("You can Drive");
// } else {
//     console.log("You cannot Drive");
// }

// QUICK QUIZ SOLUTION:
// let programmingLanguage = true;
// let logicBuilding = true;
// let patience = true;
// let isProgrammer = false;
// if ((logicBuilding) && (patience) && (programmingLanguage)) {
//     isProgrammer = true;
//     console.log("You are a Programmer");
// } else {
//     isProgrammer = false;
//     console.log("You are not a Programmer");
// }


// TERNARY OPERATORS ==> ? = if, : = else
// console.log(age === 45 ? "Your age is 45" : "Your age is not 45");

// SWITCH CASE STATEMENTS 
switch (age) {
    case 20:
        console.log("Your age is 20");
        break;
    case 30:
        console.log("Your age is 30");
        break;
    case 40:
        console.log("Your age is 40");
        break;
    default:
        console.log("Not Match");
        break;

}