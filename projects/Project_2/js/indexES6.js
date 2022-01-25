console.log("JavaScript Project 2: Building a College Library Website Using ES6 Classes");

/* TODO 
    1. STORE ALL THE DATA TO THE LOCALSTORAGE 
    2. GIVE ANOTHER COLUMN AS AN OPTION TO DELETE THE BOOK
    3. ADD A SCROLL BAR TO THE VIEW
*/

class Book {
    constructor(bookName, author, type) {
        this.bookName = bookName;
        this.author = author;
        this.type = type;
    }
}


class Display {
    // IMPLEMENT THE SHOW FUNCTION TO SHOW WARNING MESSAGES AND SUCCESS MESSAGES
    show(type, msg) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>Message:</strong> ${msg}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`

        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }

    add(bookObj) {
        if (this.validate(bookObj)) {
            this.showData();
        }
    }


    // IMPLEMENT THE CLEAR FUNCTION
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    // IMPLEMENT THE VALIDATE FUNCTION
    validate(bookObj) {
        if (bookObj.bookName.length < 3 && bookObj.author < 3) {
            return false;
        } else {
            return true;
        }

    }


    // IMPLEMENT THE SHOW DATA FUNCTION 
    showData() {
        let books = localStorage.getItem('books');
        let tableBody = document.getElementById('tableBody');
        let uiString = ``;

        if (books === null || books === '[]') {
            let noBooks = document.getElementById('noBooks');
            noBooks.innerText = "No Books To Display";
        } else {
            noBooks.innerText = "Your Books";
            entireTable.style.display = 'display: inline-table';
            let booksArray = JSON.parse(books);
            booksArray.forEach((element, index) => {
                uiString += `<tr>
                            <td >${index + 1}</td>
                            <td>${element.bookName}</td>
                            <td>${element.author}</td>
                            <td>${element.type}</td>
                            <td>
                                <button class="btn btn-sm btn-danger delete" onClick="display.delete(${index})">Delete</button>
                            </td>
                        </tr>`
            });
        }
        tableBody.innerHTML = uiString;
    }


    // IMPLEMENT THE SAVE DATA FUNCTION TO SAVE BOOKS TO LOCALSTORAGE
    saveData(bookObj) {
        let books = localStorage.getItem('books');
        let booksArray;
        let newBook = {
            bookName: bookObj.bookName,
            author: bookObj.author,
            type: bookObj.type
        };

        if (books === null) {
            booksArray = []
        } else {
            booksArray = JSON.parse(books);
        }

        booksArray.push(newBook);
        if (this.validate(bookObj)) {
            localStorage.setItem('books', JSON.stringify(booksArray));
        }
    }

    // IMPLEMENT THE DELETE FUNCTION 
    delete(index) {
        let booksArray;
        let books = localStorage.getItem('books');
        if (books == null) {
            booksArray = [];
        } else {
            booksArray = JSON.parse(books)
        }
        booksArray.splice(index, 1)
        localStorage.setItem('books', JSON.stringify(booksArray));
        this.showData();
    }
}

// ADD SUBMIT EVENT LISTENER TO FORM id='libraryForm'
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let computerProgramming = document.getElementById('computerProgramming');
    let fiction = document.getElementById('fiction');
    let science = document.getElementById('science');
    let type;

    if (computerProgramming.checked) {
        type = computerProgramming.value;
    } else if (fiction.checked) {
        type = fiction.value;
    } else if (science.checked) {
        type = science.value;
    }

    let book = new Book(bookName, author, type);

    let display = new Display();
    display.saveData(book);


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', `${book.bookName} Book has been Added Successfully`);
    } else {
        // SHOW ERROR TO THE USER
        display.show('danger', "Enter Valid Inputs");
    }
}

let display = new Display();
display.showData();