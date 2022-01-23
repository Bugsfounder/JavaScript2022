console.log("JavaScript Creating, Removing & Replacing Elements Tutorial Quick Quiz Solution");

// QUESTION
// CREATE A HEADING ELEMENT WITH TEXT AS "gO TO CODEWITHHARRY" AND CREATE AN ANCHOR (a) TAG OUTSIDE OT WITH href = "https://codewithharry.com";

let heading = document.createElement('h1');
let anchor = document.createElement('a');
let headingNode = document.createTextNode('Go to CodeWithHarry');
heading.appendChild(headingNode);
anchor.setAttribute('target', "_blank");
anchor.setAttribute('href', 'https://codewithharry.com');
anchor.appendChild(heading);

let container = document.querySelector('.quickQuizSolution');
container.appendChild(anchor);

