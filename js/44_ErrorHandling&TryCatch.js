console.log("JavaScript Error Handling & Try Catch Tutorial");

// PRETEND THIS IS COMING FROM THE SERVER AS RESPONSE
let a = "Harry Bhai";
a = undefined;

if (a != undefined) {
    throw new Error('This is not undefined');
} else {
    console.log("This is undefined");
}

try {
    // sdfasdfasdfasfasdfasdfsadfasdf
    console.log("We are inside Try block");
    functionCall();
} catch (error) {
    console.log("Are your Okay?", error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Thanks for using my website hope you enjoyed here");
}