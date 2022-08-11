// Employee class (used as parent to others)
class Employee {
    constructor(name, email, idNumber) {
        // checkes whether parameters are included
        if (!name || !email || !idNumber) {
            throw new Error("Invalid params!")
        }

        this.name = name
        this.email = email
        this.id = idNumber
    }

    // add all methods
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee