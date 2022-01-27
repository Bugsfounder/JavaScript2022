console.log("JavaScript Sets Tutorial");

// SET STORE UNIQE VALUES
let mySet = new Set(); // INITIALIZE AN EMPTY SET
console.log("The set Looks Like", mySet);

// ADDING VALUES TO THIS SET
mySet.add('Manisha');
mySet.add('Kaushal');
mySet.add("Manisha");
mySet.add(234);
mySet.add({ name: "Manisha" });
mySet.add([1, 2, 3, 4, 5, 6, 7, 8]);
mySet.add(false);
mySet.add(undefined);
mySet.add(null);

console.log("The set looks like this now: ", mySet);

// YOU CAN ALSO DO IT LIKE THIS
mySet = new Set(["Manisha", "Kaushal", "Manisha", 234, { name: "Manisha" }, [1, 2, 3, 4, 5, 6, 7, 8], false, undefined, null, true, "END"])

console.log("The set looks like this now: ", mySet);

// GET SIZE OF SET
console.log(mySet.size);

console.log(mySet.has('Manisha'));      // TRUE
console.log(mySet.has('manisha'));      // FALSE
console.log(mySet.has('Manisha123'));   // FALSE

// REMOVE PARTICULAR INTRY FROM THE SET
console.log("Before Removing");
console.log("The set looks like this now: ", mySet);

mySet.delete('Manisha');

console.log("After Removing");
console.log("The set looks like this now: ", mySet);

// ITERATING AN SET
for (let item of mySet) {
    console.log(item);
}

mySet.forEach(element => {
    console.log(element);
});


// QUICK QUIZ: CAN YOU USE Array.from(mySet); TO CONVERT SET INTO AN ARRAY?
// ANSWER: TRUE, SOLUTION BELOW
let myArray = Array.from(mySet);
console.log(myArray);