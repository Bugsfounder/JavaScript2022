console.log('JavaScript Asynchronous Programming Tutorial');

setTimeout(() => {

    for (let i = 0; i < 4445; i++) {
        const element = i;
        console.log("This is Index Number: " + element);
    }

}, 100);

console.log("done printing...");