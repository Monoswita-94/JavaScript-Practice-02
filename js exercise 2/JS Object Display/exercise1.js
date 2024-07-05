function listProperties(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let result = "";

    for (let i = 0; i < keys.length; i++) {
        result += `${keys[i]}: ${values[i]}\n`;
    }

    return result;
}

// Example object
const person = {
    firstName: "Monoswita Shome",
    lastName: "Prapa",
    age: 23,
   Birthdate: "7th February"
    
};

// Calling the function and logging the result
console.log(listProperties(person));