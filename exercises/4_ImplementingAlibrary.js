console.log('JavaScript Implementing a library class - Exercise 4');


/*
CREATE A CLASS LIBRARY AND IMPLEMENT THE FOLLOWING:-

==> CONSTRUCTOR DESCRIPTION
    Constructor must take the book list as an argument

==> METHODS TO DEFINE:-
1.  getBookList();
2.  issueBook(bookName, userName);
3.  returnBook(bookName, userName);
*/

class Library {

    issuedBooks = {};

    constructor(bookList) {
        this.bookList = bookList;
    }

    getBookList() {
        console.log("These are the books Available in Library:- ");
        this.bookList.forEach((element, index) => {
            console.log(`${index + 1}. ${element}`);
        });
    }

    issueBook(bookName, userName) {
        for (let index = 0; index < this.bookList.length; index++) {
            const element = this.bookList[index];
            if (this.issuedBooks[userName] === bookName) {
                console.log(`${bookName} was already issued by ${userName}`);
                break;
            } else if (element.toLowerCase() === bookName.toLowerCase() && !(this.issuedBooks[userName] === bookName)) {
                this.issuedBooks[userName.toLowerCase()] = bookName;
                this.bookList.splice(index, 1);
                let issuedBookLocalStorage = [];
                issuedBookLocalStorage.push({ userName: userName.toLowerCase(), bookName: bookName.toLowerCase() })
                localStorage.setItem('issuedBook', JSON.stringify(issuedBookLocalStorage));
                console.log(`Successfully Issued ${bookName} Book by ${userName}`);
                break;
            }
        };
    }

    returnBook(bookName, userName) {
        if (this.issuedBooks[userName.toLowerCase()] === bookName.toLowerCase()) {
            let locBook = JSON.parse(localStorage.getItem('issuedBook'));
            delete this.issuedBooks[userName.toLowerCase()];
            locBook.forEach((element, index) => {
                if (element.bookName === bookName.toLowerCase()) {
                    locBook.splice(index, 1);
                }
            });
            localStorage.setItem('issuedBook', JSON.stringify(locBook))
            console.log(`${bookName} is Successfully Returned from ${userName}`);
        } else {
            console.log("Something is wrong this Book is not issued. check spelling and try again");
        }
    }

}

let bookList = ['clean code', 'the pragmatic programmer', 'introduction algorithm', 'code complete', 'programming pearls', 'design patterns', 'structure and interpretation', 'cracking the code interview', 'the c', 'effective java'];

let manisha = new Library(bookList);
// manisha.getBookList()

manisha.issueBook('clean code', "manisha");
manisha.issueBook('the pragmatic programmer', "kaushal");
manisha.returnBook('clean code', "manisha");
