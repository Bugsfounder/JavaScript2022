console.log("Hello");

showNotes();

// IF USER ADDS A NOTE, ADD IT TO HTE LOCALSTORAGE
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', (e) => {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';

    showNotes();
});

// function to show notes form localstorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach((element, index) => {
        html += ` 
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id=${index} onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });

    let notesElement = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = "No Notes to Display"
    }
}

// function to delete note
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        esObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let searchQuery = document.getElementById('searchQuery');
searchQuery.addEventListener('input', () => {
    inputValue = searchQuery.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(element => {
        let cardText = element.querySelector('p').innerText;

        if (cardText.includes(inputValue)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});


/*
FURTHER FEATURES:
1. ADD TITLE
2. MARK A NOTE AS IMPORTANT
3. SEPARATE NOTES BY USER
4. SYNC AND HOST TO A WEB SERVER
*/