console.log("JavaScript Maps Tutorial");

// Maps in JavaScript: WE CAN USE ANY TYPE OF KEY OR VALUES 

const myMap = new Map();

const key1 = 'myStr', key2 = [], key3 = {}, key4 = () => { };

// SETTING MAP VALUES
myMap.set(key1, 'This is a String');
myMap.set(key2, 'This is an Empty Array');
myMap.set(key3, 'This is an Empty Object');
myMap.set(key4, 'This is an Empty Function');

console.log(myMap);

// GETTING THE VALUES FORM A MAP
console.log(myMap.get(key1));
console.log(myMap.get(key2));

// GET THE SIZE OF THE MAP
console.log(myMap.size);

// YOU CAN LOOP USING for-of LOOOP TO GET KEYS AND VALUES OF MAP
for (let [key, value] of myMap) {
    console.log(key, value);
}

// GET ONLY KEYS
for (let key of myMap.keys()) {
    console.log(key);
}

// GET ONLY VALUES
for (let value of myMap.values()) {
    console.log(value);
}

// YOU CAN LOOP THROUGH A MAP USING FOR EACH LOOP
myMap.forEach((value, key) => {
    console.log(key, value);
});

// YOU CAN CONVERT A MAP INTO AN ARRAY
let myArray = Array.from(myMap);
console.log(myArray);

// YOU CAN CONVERT MAP'S KEYS INTO AN ARRAY
let myKeysArray = Array.from(myMap.keys());
console.log(myKeysArray);

// YOU CAN CONVERT MAP'S VALUES INTO AN ARRAY
let myValuesArray = Array.from(myMap.values());
console.log(myValuesArray);