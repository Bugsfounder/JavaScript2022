console.log("JavaScript Callback Functions Tutorial");

// PRETEND THAT THIS RESPONSE IS COMING FROM THE SERVER
const students = [
    { name: "Manisha", subject: "JavaScript" },
    { name: "Kaushal", subject: "Python" }
];

function enrollStudents(student) {
    return new Promise(function (response, reject) {
        setTimeout(() => {
            students.push(student);
            let error = false;
            if (!error) {
                response();
            } else {
                reject();
            }
        }, 3000);
    });
}

function getStudents() {
    setTimeout(() => {
        let str = '';
        students.forEach((student, index) => {
            str += `<li style="list-style: none;"><b>${index + 1}. Name:</b> ${student.name}, <b>Subject:</b> ${student.subject}</li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}


let stdObj = {
    name: "Mahi",
    subject: "C"
};

getStudents();

enrollStudents(stdObj)
    .then(function () { getStudents(); })
    .catch(function () { console.log("Promise Rejected"); });


// function inside then is ran as - resolve();
// function inside catch is ran as - reject();