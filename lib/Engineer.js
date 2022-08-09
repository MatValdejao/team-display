 const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github) {
        if (!github) {
            throw new Error("invalid params")
        }
        super(name, id, email)

        this.github = github
    }
    
    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer