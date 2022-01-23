// Exercise 1
// YOU HAVE TO CREATE A VARIABLE WHICH IS A STRING CONTAINING THE TEXT WHICH IS A LINK YOU ARE INTERESTED IN.
// YOU HAVE TO FETCH ALL THE LINK FROM A GIVEN PAGE WHICH CONTAINS THIS TEXT
// javascript 
// codewithharry.com 

let links = document.links;
let filteredLink = [];
for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes('javascript')) {
        filteredLink.push(links[i].href);
    }
}
console.log(filteredLink);