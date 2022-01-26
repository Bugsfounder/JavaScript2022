console.log("JavaScript Callback Functions Tutorial");

// PRETEND THAT THIS RESPONSE IS COMING FROM THE SERVER
const students = [
    { name: "Manisha", subject: "JavaScript" },
    { name: "Kaushal", subject: "Python" }
];

function enrollStudents(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log("Student Enrolled Successfully", student);
        callback();
    }, 3000);

}

function getStudents() {
    setTimeout(() => {
        let str = '';
        students.forEach((student, index) => {
            str += `<li style="list-style: none;"><b>${index + 1}. Name:</b> ${student.name}, <b>Subject:</b> ${student.subject}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("All Student Populated Successfully");
    }, 1000);
}


let stdObj = {
    name: "Mahi",
    subject: "C"
};

enrollStudents(stdObj, getStudents);
// getStudents();