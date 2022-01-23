console.log("JavaScript Children, Parent & Traversing the DOM Tutorial");

let no = document.querySelector('.no');
let container = document.querySelector('.container');
let nodeName = container.childNodes[0].nodeName;
nodeName = container.childNodes[1].nodeName;
nodeName = container.childNodes[3].nodeName;
let nodeType = container.childNodes[1].nodeType;
nodeType = container.childNodes[0].nodeType;
nodeType = container.childNodes[2].nodeType;
// console.log(container.childNodes);
// console.log(container.children);

/*
==> NODE TYPES LISTS <==
1. ELEMENT
2. ATTRIBUTE
3. TEXT NODE
8. COMMENT
9. DOCUMENT
10.DOCTYPE
*/
// console.log(nodeName);
// console.log(nodeType);

container = document.querySelector('div.container');
// console.log(container.childNodes); // I DON'T USE .childNodes BECAUSE IT TAKES TEXT, COMMENTS AND NEWLINES ETC SO WE USE .children INSTEAD OF .childNodes
console.log(container.children);
console.log(container.children[1].children);
console.log(container.children[1].children[0].children);

console.log(container.firstChild); // IT RETURNS TEXT BECAUSE IT TRAVERSE THROUGH .childNodes 

console.log(container.firstElementChild); // IT RETURN h1

// YOU CAN GET LAST ELEMENT CHILD OR LAST CHILD LIKE THIS
console.log(container.lastChild);
console.log(container.lastElementChild);

// COUNT NUMBER OF CHILD ELEMENTS 
console.log(container.childElementCount);

// GET SIBLINGS AND PARENTS
console.log(container.firstElementChild.parentElement); // accessing the parent element
console.log(container.firstElementChild.nextSibling); // accessing the next node sibling
console.log(container.firstElementChild.nextElementSibling); // accessing the next element sibling
console.log(container.firstElementChild.nextElementSibling.nextElementSibling); // accessing the sibling of next element sibling




