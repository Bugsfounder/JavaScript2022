console.log("JavaScript Generators Tutorial");

function* numbersGen() {
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while (true) {
        yield i++;
        // yield (i++).toString();
    }
}

const numGen = numbersGen();
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(numGen.next().value);
