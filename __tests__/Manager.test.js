const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

// checks object construction
test("constructs manager object", () => {
    const manager = new Manager("Mateus", "1", "hey$", "312")

    expect(manager.officeNumber).toBe("312")
})

// checks methods
test("gets manager role", () => {
    const manager = new Manager("Mateus", "1", "hey$", "312");

    expect(manager.getRole()).toBe("Manager")
})