const Manager = require("../lib/Manager");

// TEST: Is the role 'Manager'
test("getRole() should return 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Hannah", 1, "hannah@hannah.com", 123);
    expect(e.getRole()).toBe(testValue);
});

// TEST: Can getEmail() return the entered email address?
test("Can getEmail() return the entered email address?", () => {
    const testValue = "hannah@hannah.com";
    const e = new Manager("Hannah", 1, "hannah@hannah.com", 123);
    expect(e.getEmail()).toBe(testValue);
});

// TEST: Can getId() return the entered ID #
test("Can getEmail() return the entered ID #", () => {
    const testValue = 1;
    const e = new Manager("Hannah", 1, "hannah@hannah.com", 123);
    expect(e.getId()).toBe(testValue);
});

// TEST: Can getOfficeNumber() return the entered office #
test("Can getEmail() return the entered office #", () => {
    const testValue = 123;
    const e = new Manager("Hannah", 1, "hannah@hannah.com", 123);
    expect(e.getOfficeNumber()).toBe(testValue);
});