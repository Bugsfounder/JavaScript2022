console.log("JavaScript Promises Basics, Promise.then() & Promise.catch() Tutorial");

/*
Promise: Best Video on Promises 
-resolve
-reject
-pending
*/

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: Your Promise has been resolved");
                resolve();
            } else {
                console.log("Function: Your promise has been rejected");
                reject("Sorry Not Fulfilled");
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log('Manisha: Thanks for Resolving');
}).catch(function (error) {
    console.log("Manisha: Very bad Bro", error);
});

