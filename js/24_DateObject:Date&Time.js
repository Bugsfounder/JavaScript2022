console.log("JavaScript Date Object: Date & Time Tutorial");

let today = new Date();
// console.log(typeof today);

let otherDate = new Date('8-4-2020 04:10:32');
otherDate = new Date('09/14/2021 12:10:32');
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
otherDate.setDate(23)
console.log(otherDate);
