const Employee = require("./Employee")

class Intern{
    constructor(school) {
        if (!school) {
            throw new Error("Invalid params")
        }

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