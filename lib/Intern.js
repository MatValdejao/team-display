const Employee = require("./Employee")

// Intern class extended from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        // ensure all parameters provided
        if (!school) {
            throw new Error("Invalid params!")
        }

        this.school = school
    }

    // create methods
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern

