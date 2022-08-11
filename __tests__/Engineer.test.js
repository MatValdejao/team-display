const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// checks for object construction 
test("constructs engineer object", () => {
    const engineer = new Engineer("Mateus", "1", "hey$", "davegit");

    expect(engineer.github).toBe("davegit")
})

// checks methods functionality
test("gets github username", () => {
    const engineer = new Engineer("Mateus", "1", "hey$", "davegit");

    expect(engineer.getGithub()).toBe("davegit")
})

test("gets employee company role", () => {
    const engineer = new Engineer("Mateus", "1", "hey$", "davegit");

    expect(engineer.getRole()).toBe("Engineer")
})
