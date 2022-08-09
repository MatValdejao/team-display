const Employee = require("../lib/Employee");

test("creates an enemy object", () => {
	const employee = new Employee("Dave", "dave@email.com");

	expect(employee.name).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
});
