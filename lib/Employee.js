class Employee {
    constructor(name, email, idNumber) {
        if (!name || !email) {
            throw new Error("Invalid params!")
        }

        this.name = name
        this.email = email
        this.id = idNumber
    }
}

module.exports = Employee