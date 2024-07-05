// Constructor function for creating book objects
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // Adding a method to return a description of the book
    this.getDescription = function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    };
}

// Creating a book object using the constructor function
const book = new Book("Computer Architecture", "Er.Rajiv Chopra", 1960);

// Calling the method and logging the result
console.log(book.getDescription());