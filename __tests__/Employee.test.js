const Employee = require("../lib/Employee");

// TEST: if it is an object
test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
});

// TEST: if getId() returns the inputed ID
test("getId() should return the inputed ID", () => {
    const testValue = 1;
    const e = new Employee("Hannah", 1, "hannah@hannah.com");
    expect(e.getId()).toBe(testValue);
});

// TEST:if getRole() returns the role
test("if getRole() returns the role", () => {
    const testValue = "Employee";
    const e = new Employee("Hannah", 1, "hannah@hannah.com");
    expect(e.getRole()).toBe(testValue);
});

// TEST: Can getName() retrieve the name inputed?
test("Can getName() retrieve the name inputed?", () => {
    const testValue = "Hannah";
    const e = new Employee("Hannah", 1, "hannah@hannah.com");
    expect(e.getName()).toBe(testValue);
});

