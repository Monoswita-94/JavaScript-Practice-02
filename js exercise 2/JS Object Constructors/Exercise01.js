// Constructor function for creating book objects
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Creating two book objects using the constructor function
const book1 = new Book("Computer Organization & Architecture", "William Stallings", 2006);
const book2 = new Book("Algorithms", "Thomas H Cormen", 1949);

// Logging the book objects to the console
console.log(book1);
console.log(book2);