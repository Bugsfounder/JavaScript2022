console.log("JavaScript Object Literals, Constructors and Object Oriented Tutorial");

// OBJECT LITERALS FOR CREATING OBJECTS
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function () {
        console.log("car is running.....");
    }
}

// WE HAVE ALREADY SEEN CONSTRUCTORS LIKE THESE:-
// new Date();
// new Array();

// CREATING A CONSTRUCTORS FOR CARS
function generalCar(givenSpeed, givenName) {
    this.topSpeed = givenSpeed;
    this.name = givenName;
    this.run = function () {
        console.log(`${this.name} is running...`);
    };
    this.analyze = function () {
        console.log(`This is car slower by ${200 - this.topSpeed} Km/H than Murcedes`);
    };
}


let n = new generalCar(98, 'Maruti 800');
console.log(n);

