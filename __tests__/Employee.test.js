const Employee = require("../lib/Employee");

test("creates an employee object", () => {
	const employee = new Employee("Dave", "dave@email.com", 123);

	expect(employee.name).toBe("Dave");
    expect(employee.email).toBe("dave@email.com");
    expect(employee.id).toBe(123);
});

test("gets employee name", () => {
    const employee = new Employee("Dave", "dave@email.com", 123);

    expect(employee.getName()).toBe("Dave")
})


test("gets employee email", () => {
    const employee = new Employee("Dave", "dave@email.com", 123);

    expect(employee.getEmail()).toBe("dave@email.com")
})

test("gets employee id number", () => {
    const employee = new Employee("Dave", "dave@email.com", 123);

    expect(employee.getId()).toBe(123)
})

test("gets employee role", () => {
    const employee = new Employee("Dave", "dave@email.com", 123)

    expect(employee.getRole()).toBe("Employee")

})