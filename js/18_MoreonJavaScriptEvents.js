console.log("JavaScript More on JavaScript Events Tutorial");

let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

function func1(event) {
    console.log("Thanks", event);
    event.preventDefault();
}

function func2(event) {
    console.log("Thanks its a double click", event);
    event.preventDefault();
}

function func3(event) {
    console.log("Thanks its Mouse Down", event);
    event.preventDefault();
}

// document.querySelector('.no').addEventListener('mouseenter', () => {
//     console.log("Mouse Entered in no class");
// })

// document.querySelector('.no').addEventListener('mouseleave', () => {
//     console.log("Mouse leaved the no class");
// });

document.querySelector('.container').addEventListener('mousemove', (e) => {
    console.log(e.offsetX);
    console.log(e.offsetY);
    // document.body.style.backgroundColor = '#27004b';
    // document.body.style.color = 'white';
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX + e.offsetY})`;
    document.body.style.color = `rgb(${e.offsetY},${e.offsetX},${e.offsetX * e.offsetY})`;
    console.log("Mouse moving on the no class");
});