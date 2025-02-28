// Task 1 - Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.copies = copies
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }
    updateCopies(quantity) {
        return this.copies += quantity
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5)
console.log(book1.getDetails())

book1.updateCopies(-1)
console.log(book1.getDetails());

// Task 2 - Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name
        this.borrowerId = borrowerId
        this.borrowedBooks = []
    }
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }
    returnBook(book) {
        let index = this.borrowedBooks.indexOf(book)
        if (index > -1) {
        this.borrowedBooks.splice(index,1)
        }
        else {
            return `This book is not currently being borrowed.`
        }
    }
}

const borrower1 = new Borrower("Alice Johnson", 201)
borrower1.borrowBook("The Great Gatsby")
console.log(borrower1.borrowedBooks)

borrower1.returnBook("The Great Gatsby")
console.log(borrower1.borrowedBooks)

// Task 3 - Creating a Library Class
class Library {
    constructor() {
        this.books = []
        this.borrowers = []
    }
    addBook(book) {
        this.books.push(book)
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower)
    }
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()))
    }
// Task 4 - Implementing Book Borrowing
    lendBook(borrowerId, isbn) {
        const lendbook = this.books.find(book => book.isbn === isbn)
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId)
        if (lendbook && lendbook.copies > 0) {
            lendbook.updateCopies(-1)
            borrower.borrowBook(lendbook.title)
        }
        else {
            return `Book is not able to be borrowed at this time.`
        }
    }
// Task 5 - Implementing Book Returns
    returnBook(borrowerId, isbn) {
        const returnBook = this.books.find(book => book.isbn === isbn)
        const returner = this.borrowers.find(borrower => borrower.borrowerId === borrowerId)
        returnBook.updateCopies(1)
        returner.returnBook(returnBook.title)
    }
}
const library = new Library()
library.addBook(book1)
library.listBooks()

library.addBorrower(borrower1)
library.lendBook(201, 123456)
console.log(book1.getDetails())
console.log(borrower1.borrowedBooks)

library.returnBook(201, 123456)
console.log(book1.getDetails())
console.log(borrower1.borrowedBooks)