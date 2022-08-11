const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

// checks object construction
test("constructs the object", () => {
    const intern = new Intern("Mateus", "1", "hey@", "UNC")

    expect(intern.school).toBe("UNC")
})

// checks methods
test("gets intern role", () => {
    const intern = new Intern("Mateus", "1", "hey@", "UNC");

    expect(intern.getRole()).toBe("Intern")
})

test("gets intern's school", () => {
    const intern = new Intern("Mateus", "1", "hey@", "UNC");

    expect(intern.getSchool()).toBe("UNC")
})