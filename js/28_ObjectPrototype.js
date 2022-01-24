console.log("JavaScript Object Prototype Tutorial");

// OBJET LITERALS : Object.prototype
let obj = {
    name: "Manisha",
    channel: "Jocefyneroot",
    address: "Moon"
};

function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.getNameCapital = function () {
    return this.name.toUpperCase();
}

Obj.prototype.nameChangeCase = function (caseName) {
    if (caseName.toLowerCase() === 'lower') {
        return this.name = this.name.toLowerCase();
    } else if (caseName.toLowerCase() === 'upper') {
        return this.name = this.name.toUpperCase();
    } else {
        return "Enter lower of upper";
    }
}

Obj.prototype.setName = function (newName) {
    return this.name = newName;
}

let obj2 = new Obj('Manisha');

console.log(obj2);
console.log(obj2.setName('Kaushal'));
console.log(obj2.nameChangeCase('lower'));
console.log(obj2.nameChangeCase('upper'));