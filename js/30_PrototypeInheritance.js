console.log("JavaScript Prototype Inheritance Tutorial");

const proto = {
    slogan: function () {
        console.log("Manisha is a Genius Girl");
    },
    changeName: function (newName) {
        return this.name = newName;
    }
}

// THIS CREATES OBJECT --> FIRST SYNTAX 
const manisha = Object.create(proto);
manisha.name = "Manisha";
manisha.role = "Programmer";
manisha.language = "JavaScript";

manisha.changeName("Kaushal");
// console.log(manisha);

// THIS ALSO CREATES OBJECT --> SECOND SYNTAX 
const newManisha = Object.create(proto, {
    name: { value: "Manisha", writable: true },
    role: { value: "Programmer" },
    language: { value: "JavaScript" }
});

newManisha.changeName("Mahi");
// console.log(newManisha);

// Employee Constructor 
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// SLOGAN 
Employee.prototype.slogan = function () {
    return `Manisha is a Genius Girl. Regards, ${this.name}`;
}

// CREATE AN OBJECT FROM THIS CONSTRUCTOR NOW
let manishaNew = new Employee('Manisha', 5000000000000, 5)
// console.log(manishaNew);
console.log(manishaNew.slogan());

// PROGRAMMER
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// INHERIT THE PROTOTYPE 
Programmer.prototype = Object.create(Employee.prototype);

// MANUALLY SET THE CONSTRUCTOR
Programmer.prototype.constructor = Employee;

let kaushal = new Programmer('Kaushal', 3454344, 34, 'JavaScript');
console.log(kaushal);


// QUICK QUIZ:-
// CREATE A FLOUR OBJECT AND INHERIT IT BY CAKE 
function Flour(quantity) {
    this.quantity = quantity;
}

Flour.prototype.Create = function (name) {
    return `I am creating ${name}`;
}

function Cake(FlourQuantity, CreamQuantity) {
    Flour.call(FlourQuantity);
    this.CreamQuantity = CreamQuantity;
}

Cake.prototype = Object.create(Flour.prototype);
Cake.prototype.constructor = Flour;

let flour = new Flour(100);
console.log(flour.Create('Bread'));

let cake = new Cake(100, 50);
console.log(cake.Create('cake'));