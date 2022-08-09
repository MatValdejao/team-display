const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

test("constructs the object", () => {
    const intern = new Intern("UNC")

    expect(intern.school).toBe("UNC")
})


test("gets intern role", () => {
    const intern = new Intern("UNC")

    expect(intern.getRole()).toBe("intern")
})

test("gets intern's school", () => {
    const intern = new Intern("UNC")

    expect(intern.getSchool()).toBe("UNC")
})