console.log("JavaScript Strings: Properties, Methods & Template Literals Tutorial");

const myName = "Manisha";
const greeting = "Good Morning";
console.log(greeting + ' ' + myName);

let html;
html = '<h1>This is Heading</h1>' +
    '<p>This is my Para</p>';

html = html.concat('this' + ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[0]);
console.log(html.indexOf('i'));
console.log(html.indexOf('is'));
console.log(html.indexOf('this'));
console.log(html.indexOf('h1'));
console.log(html.lastIndexOf('h1'));
console.log(html.lastIndexOf('i'));
console.log(html.lastIndexOf('i'));
console.log(html.charAt(13));
console.log(html.endsWith('str2'));
console.log(html.startsWith('str2'));
console.log(html.includes('str2'));
console.log(html.includes('manisha'));
console.log(html.substring(0, 4));
console.log(html.slice(0, 4));
console.log(html.split(' '));
console.log(html.replace('This', 'the'));

let fruit1 = "Orange";
let fruit2 = "Apple";
let str = `This is ${fruit1} and This is ${fruit2}`;

let myHtml = `Hello ${myName}
    <h1>${greeting} ${myName}</h1>
`;
console.log(myHtml);

document.body.innerHTML = myHtml;

// Quick Quiz Solution:-  
let chName = "CodeWithHarry";
let nameH = "Harry Bhai";
let quizHtml = `
    <h1>Hello ${nameH}</h1>
    <p> This is the best channel on Youtube to Learn Coding</p>
    <h3>Visit: <a href="https://www.codewithharry.com/"><strong style="color:blue;">#${chName}</strong></a></h3>

`;
document.body.innerHTML = quizHtml;