console.log("JavaScript Creating Editable Div Using JavaScript: Exercise 2");

/*
==> QUESTION DESCRIPTION:- 

YOU HAVE TO CREATE A DIV AND INJECT IT INTO THE PAGE WHICH CONTAINS A HEADING.
WHENEVER SOMEONE CLICKS ON THE DIV, IT SHOULD BE CONVERTED INTO AN EDITABLE ITEM. WHENEVER USER CLICK AWAY (BLUR) EVENT INVOKED. AND SAVE THE NOTE INTO THE LOCAL STORAGE.
*/



// INITIALIZING HTML ELEMENTS THAT REQUIRES 
let ul = document.createElement('ul');
let li = document.createElement('li');
let editBtn = document.createElement('button');
let input = document.createElement('input');

let editableDiv = document.getElementById('editableDiv'); // GETTING DIV FROM DOM
let demoText = document.createTextNode("Click Here to Add A Note"); // CREATING TEXT NODE TO INSERT AS BUTTON TEXT 

// SETTING ATTRIBUTES 
editBtn.setAttribute('id', 'editBtn');
editBtn.setAttribute('class', 'editBtn');
ul.setAttribute('id', 'notes');

// APPENDING CREATED ELEMENTS INTO ITS CORRECT PLACE
editBtn.appendChild(demoText);
editableDiv.appendChild(editBtn);

// ADDING EVENT LISTENERS ON HTML ELEMENTS
editBtn.addEventListener('click', createNote);
input.addEventListener('onblur', addNote);

onStart();

// CREATING A NOTE COUNT VARIABLE AND INSERT IT INTO LOCALSTORAGE
let noteCount = JSON.stringify(1);
localStorage.setItem('noteCount', noteCount);

// FUNCTION TO CREATE NOTE
function createNote(event) {
    let input = document.createElement('input');
    console.log("Clicked on createdNote");
    input.setAttribute('type', 'text');
    editableDiv.appendChild(input);
    input.setAttribute('onblur', "addNote()");
}

// FUNCTION TO ADD NOTE
function addNote() {
    let myInput = document.querySelector('input');
    if (!myInput.hasAttribute('onblur')) {
        let myText = myInput.value;
        let allNotes = [];
        let li = document.createElement('li');
        li.setAttribute('class', 'note');

        if (localStorage.notes) {
            allNotes = JSON.parse(localStorage.notes);
            allNotes.push(myText);
            li.innerText = `${JSON.parse(localStorage.notes).length + 1}. ${myText}`;
            localStorage.setItem(`notes`, JSON.stringify(allNotes));
        } else {
            allNotes.push(myText);
            li.innerText = `${1}. ${myText}`;
            localStorage.setItem(`notes`, JSON.stringify(allNotes));
        }

        ul.appendChild(li);
        editableDiv.appendChild(ul);
        JSON.parse(noteCount);
        localStorage.setItem('noteCount', JSON.stringify(noteCount++));
    }

}

function onStart() {
    console.log("I am on onStart Function");
    if (localStorage.notes) {
        let notes = localStorage.notes;
        let notesArr = JSON.parse(notes);
        for (let i = 0; i < notesArr.length; i++) {
            let li = document.createElement('li');
            li.setAttribute('class', 'note');
            li.innerText = `${i + 1}. ${notesArr[i]}`;
            ul.appendChild(li);
            editableDiv.appendChild(ul);
        }
    } else {
        console.log("I am on onStart Function");
        let li = document.createElement('li');
        li.setAttribute('class', 'note');
        li.innerText = `No Notes to Show`;
        ul.appendChild(li);
        editableDiv.appendChild(ul);
    }

}


function update() {
    let note = document.getElementsByClassName('note')

    Array.from(note).forEach(element => {
        element.addEventListener('click', (event) => {
            let text = event.target.innerText;
            let input = document.createElement('input');
            input.setAttribute('onblur', "addNote()");
            input.setAttribute('type', 'text');
            input.setAttribute('value', text);
            input.setAttribute('id', 'myInput');
            ul.replaceChild(input, event.target);

            document.querySelector('#myInput').addEventListener('blur', (event) => {
                let notes = JSON.parse(localStorage.notes);

                let li = document.createElement('li');
                let newText = event.target.value;
                li.setAttribute('class', 'note');
                li.innerText = newText;
                ul.replaceChild(li, event.target);

                notes.forEach(element => {
                    if (element === text) {
                        element = newText;
                    }
                });

                localStorage.setItem('notes', JSON.stringify(notes));
                console.log(notes);
                console.log(text);
                console.log(newText);
                console.log(localStorage.notes);
            });



            console.log(text);
        });

    }

    )
}


// update();