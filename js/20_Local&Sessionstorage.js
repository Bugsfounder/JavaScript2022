console.log("JavaScript Local & Session storage Tutorial");

let impArray = ['adrak', 'pyaaj', 'bhindi'];
let impObj = {
    name: "Manisha",
    language: "Python",
    isActive: true
};

// ==> LOCALSTORAGE - NEVER CLEAR LOCALSTORAGE UNLESS WE DON'T RUN localstorage.clear() <==
// ADD A KEY VALUE PAIR INSIDE LOCALSTORAGE 
localStorage.setItem("name2", "Kaushal");
localStorage.setItem("myName", "Manisha");
localStorage.setItem("impArray", JSON.stringify(impArray)); // INSERTING ARRAY IN LOCALSTORAGE
localStorage.setItem("impObj", JSON.stringify(impObj)); // INSERTING OBJECT IN LOCALSTORAGE

// CLEARS THE ENTIRE LOCALSTORAGE 
// localStorage.clear();

// CLEAR A PARTICULAR KEY-VALUE PAIR FORM LOCALSTORAGE
localStorage.removeItem('name');

// RETRIEVE AN ITEM FROM THE LOCALSTORAGE
let myName = localStorage.getItem('myName');
let myArray = JSON.parse(localStorage.getItem('impArray')); // RETRIEVING ARRAY FROM LOCALSTORAGE
let myObj = JSON.parse(localStorage.getItem('impObj')); // RETRIEVING OBJECT FROM LOCALSTORAGE

console.log("NAME:", myName);
console.log("ARRAY:", myArray);
console.log("OBJECT:", myObj);

// ==> SESSION STORAGE - AUTOMATICALLY CLEARS ALL DATA FROM SESSION STORAGE WHEN RESTART THE BROWSER <==
sessionStorage.setItem("session_name2", "s_Kaushal");
sessionStorage.setItem("session_myName", "s_Manisha");
sessionStorage.setItem("session_impArray", JSON.stringify(impArray)); // INSERTING ARRAY IN SESSION STORAGE
sessionStorage.setItem("session_impObj", JSON.stringify(impObj)); // INSERTING OBJECT IN SESSION STORAGE
