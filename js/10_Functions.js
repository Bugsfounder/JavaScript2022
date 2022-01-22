console.log("JavaScript Functions Tutorial");

function greet(name, thank = "Thank You") {
    let msg = `Happy Birthday ${name},\nHow I With I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}`;
    return msg;
}

// YOU CAN STORE FUNCTION INSIDE A VARIABLE
const myGreet = function (name, thank = "Thank You") {
    let msg = `Happy Birthday ${name},\nHow I With I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}`;
    return msg;
}

let myName = "Manisha";
let myName2 = "Kaushal";

// let val = myGreet(myName);
// let val = greet(myName, "Thanks a lot!");
// console.log(val);

const myObj = {
    name: "Manisha",
    game: function () {
        return "GTA 5";
    }
}

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj.game());

let arr = [function () { console.log("Inside Array"); }, 12, 43, 23];
let myFunc = arr[0];
// myFunc();


// SCOPES
// var i = 10;
// let i = 10;
{
    let i = 10;
    // var i = 10;
    console.log(i);
}

console.log(i);

function ui(name) {
    // var i = 9;
    // i = 9;
    // let i = 9;
    i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("Manisha"), i);