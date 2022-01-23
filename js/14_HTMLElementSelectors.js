console.log("JavaScript HTML Element Selectors Tutorial");

/*
ELEMENT SELECTORS:-
1. SINGLE ELEMENT SELECTOR. 
2. MULTI ELEMENT SELECTOR.
*/

// 1. SINGLE ELEMENT SELECTOR.
let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Manisha is a good girl";
element.innerHTML = "<h2>Manisha is a good girl</h2>";
// console.log(element);
// console.log(element.innerHTML); // GET INNER HTML AS STRING 
// console.log(typeof element.innerHTML);
// console.log(element.innerText);

let sel = document.querySelector('#first'); // ID SELECTOR
sel = document.querySelector('.child'); // CLASS SELECTOR
sel = document.querySelector('h1'); // ELEMENT SELECTOR RETURNS FIRST ELEMENT
sel = document.querySelector('div'); // ELEMENT SELECTOR RETURNS FIRST ELEMENT
sel.style.color = 'green';
// console.log(sel);


// 2. MULTI ELEMENT SELECTOR.
// let elements = document.getElementsByClassName('child');
// elements = document.getElementsByClassName('container');
elements = document.getElementsByTagName('div');
// console.log(elements[0].getElementsByClassName('child'));
console.log(elements);

Array.from(elements).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
})