const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!school) {
            throw new Error("Invalid params")
        }

        super(name, id, email)

        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "intern"
    }
}

module.exports = Intern

