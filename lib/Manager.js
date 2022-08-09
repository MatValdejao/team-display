const Employee = require("./Employee")

class Manager {
    constructor(officeNumber) {
        if (!officeNumber) {
            throw new Error("invalid params")
        }

        this.officeNumber = officeNumber
    }

    getRole() {
        return "manager"
    }
}

module.exports = Manager