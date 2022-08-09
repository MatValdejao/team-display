 const Employee = require("./Employee")

class Engineer {
    constructor(github) {
        if (!github) {
            throw new Error("invalid params")
        }

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