console.log("JavaScript Drag & Drop Elements Tutorial");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag Start Has been Triggered");
    e.target.className += ' hold';

    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log("Drag End Has been Triggered");
    e.target.className = 'imgBox';

});

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("dragover Has been Triggered");

    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("dragenter Has been Triggered");
        e.target.className += ' dashed'

    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("dragleave Has been Triggered");
        e.target.className = 'whiteBox'

    });

    whiteBox.addEventListener('drop', (e) => {
        console.log("drop Has been Triggered");
        e.target.append(imgBox);
    });
}