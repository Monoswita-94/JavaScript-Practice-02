// Creating the person object
const person = {
    firstName: "Monoswita",
    lastName: "Shome",
    // Adding a method to return the person's full name
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Calling the method and logging the result
console.log(person.getFullName());