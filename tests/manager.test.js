const Manager = require("../lib/Manager");

// TEST: Is the role 'Manager'
test("getRole() should return 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Hannah", 1, "hannah@hannah.com", 123);
    expect(e.getRole()).toBe(testValue);
});