console.log("JavaScript Iterators Tutorial");

function FruitsIterator(data) {
    let nextIndex = 0;
    // THIS WILL RETURN AN OBJECT
    return {
        next: function () {
            if (nextIndex < data.length) {
                // WE WILL RETURN BELOW OBJECT
                return {
                    value: data[nextIndex++],
                    done: false
                }
            } else {
                // WE WILL RETURN BELOW OBJECT WITH ONLY DONE
                return {
                    done: true
                }
            }
        }
    }
}

const myIterator = data => {
    let nextIndex = 0;
    return () => {
        if (nextIndex < data.length) {
            return data[nextIndex++];
        } else {
            return 'No more data to iterate';
        }
    }
}

const myIteratorWithIndex = data => {
    let nextIndex = 0;
    return () => {
        if (nextIndex < data.length) {
            return {
                index: nextIndex,
                value: data[nextIndex++]
            };
        } else {
            return {
                index: undefined,
                value: undefined
            };
        }
    }
}


const MyFruitsIterator = data => {
    let nextIndex = 0;
    return {
        next: () => {
            if (nextIndex < data.length) {
                return {
                    value: data[nextIndex],
                    index: nextIndex++,
                    done: false,
                }

            } else {
                return {
                    done: true
                }
            }

        },
        previous: () => {
            if (nextIndex < data.length && nextIndex >= 1) {
                return {
                    index: nextIndex--,
                    value: data[nextIndex],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }

}

const myArray = ['Apples', "Banana", "Graps", "Litchi", "Mangos", "Oranges"];
console.log("My Array is: ", myArray);

// USING THE ITERATOR
let fruits2 = myIterator(myArray);
// console.log(fruits2());
// console.log(fruits2());
// console.log(fruits2());
// console.log(fruits2());
// console.log(fruits2());
// console.log(fruits2());
// console.log(fruits2());

let fruits3 = myIteratorWithIndex(myArray);
// console.log(fruits3());
// console.log(fruits3());
// console.log(fruits3());
// console.log(fruits3());
// console.log(fruits3());
// console.log(fruits3());
// console.log(fruits3());

let fruits = FruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);


let myFruits = MyFruitsIterator(myArray);
// console.log(myFruits.next());
// console.log(myFruits.next());
// console.log(myFruits.next());
// console.log(myFruits.next());
// console.log(myFruits.previous());
// console.log(myFruits.previous());
// console.log(myFruits.previous());
// console.log(myFruits.previous());

