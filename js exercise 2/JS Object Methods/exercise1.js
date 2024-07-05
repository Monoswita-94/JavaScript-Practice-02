// Creating the book object
const book = {
    title: "Computer Organization & Architecture",
    author: "William Stallings",
    year: 2006,
    // Adding a method to return a string with the book's title and author
    getBookInfo: function() {
        return `${this.title} by ${this.author}`;
    }
};

// Calling the method and logging the result
console.log(book.getBookInfo());