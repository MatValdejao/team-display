const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (!officeNumber) {
            throw new Error("invalid params")
        }

        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getRole() {
        return "manager"
    }
}

module.exports = Manager