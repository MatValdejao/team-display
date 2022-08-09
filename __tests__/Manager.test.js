const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

test("constructs manager object", () => {
    const manager = new Manager("312")

    expect(manager.officeNumber).toBe("312")
})

test("gets manager role", () => {
    const manager = new Manager("123")

    expect(manager.getRole()).toBe("manager")
})