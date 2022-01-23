console.log('JavaScript Creating, Removing & Replacing Elements Tutorial');
let element = document.createElement('li');

// CREATING AN ELEMENT AND INSERTING IN DOM
// ADD CLASS TO LI ELEMENT
element.className = 'childul';
// ADD ID TO LI ELEMENT
element.id = 'createLi';
// SET ATTRIBUTE TO LI ELEMENT
element.setAttribute('title', 'myTitle')
// INSERTING VALUE INSIDE LI
// element.innerText = '<b>HELLO I AM CREATED USING JAVASCRIPT</b>'; // it insert as it don't parse html
// element.innerHTML = '<b>HELLO I AM CREATED USING JAVASCRIPT</b>'; // it parse html and insert bold text
// WE USE .createTextNode INSTEAD OF .innerText and .innerHTML;
let node = document.createTextNode('This is the node inserted using javascript'); // CREATING A TEXT NODE 
element.appendChild(node); // INSERTING CREATED NODE TO DOM

// GETTING UL FROM DOM WHERE WE APPEND LI ELEMENT THAT WE CREATED USING JAVASCRIPT
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

// REPLACING AN ELEMENT IN DOM
let element2 = document.createElement('h3');
element2.id = 'element2';
element2.className = 'element2';
let node2 = document.createTextNode('This is Replaced Text');
element2.appendChild(node2);
element.replaceWith(element2);

let myUl = document.getElementById('myUl');
myUl.replaceChild(element, document.getElementById('fUl')); // REPLACING
myUl.removeChild(document.getElementById('lUl')); // REMOVING
let pr = element2.getAttribute('id');
pr = element2.getAttribute('class');
pr = element2.hasAttribute('class'); // TRUE
pr = element2.hasAttribute('href');  // FALSE
element2.removeAttribute('class'); // REMOVE ATTRIBUTE
element2.setAttribute('class', 'element2Again');
console.log(element2);
console.log(pr);

