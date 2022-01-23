console.log("JavaScript Events & Event Object Tutorial");

let heading = document.getElementById('heading').addEventListener('click', (e) => {
    let variable;
    console.log("Clicked on heading");
    variable = e.target;
    variable = e.target.id;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList).forEach(element => console.log(element));
    // variable = Array.forEach(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href = '//codewithharry.com';
})