const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id, email, github) {
        // Pulls from Employee.js
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };

};

module.exports = Engineer;

