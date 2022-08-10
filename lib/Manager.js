const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
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