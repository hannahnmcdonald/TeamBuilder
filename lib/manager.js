// Pulls from Employee class is Employee.js
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id, email, officeNumber) {
        // Pulls from Employee.js
        super (name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    };

};

module.exports = Manager;