const Employee = require("./Employee")

// manager extends from employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        // ensure all parameters are provided 
        if (!officeNumber) {
            throw new Error("Invalid params")
        }

        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager