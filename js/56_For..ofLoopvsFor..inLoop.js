console.log("JavaScript For.. of Loop vs For.. in Loop (When to use which?) Tutorial");

//******************** FOR IN LOOPS ********************
console.log('******************** FOR IN LOOPS ********************');
let people = ['harry', 'manisha', 'kaushal', 'mahi', 'aryan', 'bharat'];

// TRADITIONAL FOR LOOP
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

let obj = {
    name: "Manisha",
    language: "JavaScript",
    framework: "ReactJS"
};

// console.log(obj);

// ITERATING AN OBJECT USING TRADITIONAL FOR LOOP
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// ITERATING AN OBJECT USING for-in LOOP
for (key in obj) {
    // console.log(key, obj.key); // NOT WORKING 
    console.log(key, obj[key]);
}

// WE CAN USE for-in LOOP FOR ITERATE STRING ALSO
let str = "Manisha is a Genius Girl";
for (char in str) {
    console.log(str[char]);
}

// QUICK QUIZ:- USE TRADITIONAL FOR LOOP FOR ITERATING THE SAME STRING STR
// SOLUTION:-
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);
// }


//******************** FOR OF LOOPS ********************
console.log('******************** FOR OF LOOPS ********************');
people = ['harry', 'manisha', 'kaushal', 'mahi', 'aryan', 'bharat'];
for (let name of people) {
    console.log(name);
}

for (let char of str) {
    console.log(char);
}