console.log('JavaScript ES6 Classes and Inheritance Tutorial');


class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `Manisha is a Genius Girl. Regards ${this.name}`
    }

    joiningYear() {
        let date = new Date().getFullYear();
        return date - this.experience;
    }

    // IF U DON'T WANT YOUR FUNCTION WILL LIE FROM THIS OBJECT THAN USE STATIC KEYWORD
    static add(a, b) {
        return a + b;
    }
}

// let manisha = new Employee('Manisha', 12, 'first');
// console.log(manisha);
// console.log(manisha.slogan());
// console.log(manisha.joiningYear());

console.log(Employee.add(23, 54)); // USING STATIC METHOD


// INHERITANCE
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.github = github;
    }

    favoriteLanguage() {
        if (this.language.toLowerCase() == 'python') {
            return "Python";
        } else {
            return "JavaScript";
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

let kaushal = new Programmer("Kaushal", 12, 1, "JavaScript", 'https://github.com/Bugsfounder');
console.log(kaushal);
console.log(kaushal.favoriteLanguage());
console.log(Programmer.multiply(12, 2));


