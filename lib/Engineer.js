const Employee = require("./Employee")

// engineer class extends employee 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // use employee super class
        super(name, id, email);
        
        // ensure all parameters were placed (other three are checked in Employee)
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