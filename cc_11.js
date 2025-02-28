// Task 1 - Creating a Book Class
class Book { // define class
    constructor(title, author, isbn, copies) { // set up constructor and variables
        this.title = title
        this.author = author
        this.isbn = isbn
        this.copies = copies
    }
    getDetails() { // function to log details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }
    updateCopies(quantity) { // function to update quantity of copies
        return this.copies += quantity
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5) // new instance of a book
console.log(book1.getDetails()) // log details

book1.updateCopies(-1) // take away one copy
console.log(book1.getDetails()) // log details 

// Task 2 - Creating a Borrower Class
class Borrower { // define class
    constructor(name, borrowerId) { // set up constructor and variables
        this.name = name
        this.borrowerId = borrowerId
        this.borrowedBooks = []
    }
    borrowBook(book) { // function to add book to array of borrowed books
        this.borrowedBooks.push(book)
    }
    returnBook(book) { // function to take away book from array of borrowed books
        let index = this.borrowedBooks.indexOf(book)
        if (index > -1) {
        this.borrowedBooks.splice(index,1)
        }
        else {
            return `This book is not currently being borrowed.`
        }
    }
}

const borrower1 = new Borrower("Alice Johnson", 201) // new instance of borrower
borrower1.borrowBook("The Great Gatsby") // borrower 1 borrows the great gatsby
console.log(borrower1.borrowedBooks) // log results

borrower1.returnBook("The Great Gatsby") // borrower 1 returns the great gatsby
console.log(borrower1.borrowedBooks) // log results

// Task 3 - Creating a Library Class
class Library { // create class
    constructor() { // set up constructor, no variables
        this.books = [] // empty array of books in the library
        this.borrowers = [] // empty array of borrowers in the library
    }
    addBook(book) { // function to add book to array of books in the library
        this.books.push(book)
    }
    addBorrower(borrower) { // function to add borrower to array of borrowers in the library
        this.borrowers.push(borrower)
    }
    listBooks() { // function to list out all books in the library
        this.books.forEach(book => console.log(book.getDetails()))
    }
// Task 4 - Implementing Book Borrowing
    lendBook(borrowerId, isbn) { // function to lend a book based on borrower ID and book ISBN
        const lendbook = this.books.find(book => book.isbn === isbn) // find book in array
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId) // find borrower in array
        if (lendbook && lendbook.copies > 0) { // ensure the book exists and has more than zero copies in stock
            lendbook.updateCopies(-1) // take away 1 copy for borrower
            borrower.borrowBook(lendbook.title) // add book title to list of books borrowed by borrower
        }
        else { // error message if criteria is not met
            return `Book is not able to be borrowed at this time.`
        }
    }
// Task 5 - Implementing Book Returns
    returnBook(borrowerId, isbn) { // function to return a book based on borrower ID and book ISBN
        const returnBook = this.books.find(book => book.isbn === isbn) // find book in array
        const returner = this.borrowers.find(borrower => borrower.borrowerId === borrowerId) // find borrower in array
        returnBook.updateCopies(1) // add borrowed copy back to library inventory 
        returner.returnBook(returnBook.title) // take book off list of borrowed books for borrower
    }
}
// Task 3 Outputs
const library = new Library() // new instance of library
library.addBook(book1) // add book to library's book array
library.listBooks() // log results

// Task 4 Outputs
library.addBorrower(borrower1) // add borrower to library's borrower array
library.lendBook(201, 123456) // lend book with ISBN 123456 to person with borrower ID 201
console.log(book1.getDetails()) // log details of book
console.log(borrower1.borrowedBooks) // log details of borrower

// Task 5 Outputs
library.returnBook(201, 123456) // return book with ISBN 123456 from person with borrower ID 201
console.log(book1.getDetails()) // log details of book
console.log(borrower1.borrowedBooks) // log details of borrower