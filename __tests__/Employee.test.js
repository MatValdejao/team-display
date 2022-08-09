const Employee = require("../lib/Employee");

test("creates an employee object", () => {
	const employee = new Employee("Dave", "dave@email.com", 123);

	expect(employee.name).toBe("Dave");
    expect(employee.email).toBe("dave@email.com");
    expect(employee.id).toBe(123);
});
