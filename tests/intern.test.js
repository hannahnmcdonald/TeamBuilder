const Intern = require("../lib/Intern");

// TEST: Is the role 'Intern'
test("getRole() should return 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Hannah", 1, "hannah@hannah.com", 123, "university");
    expect(e.getRole()).toBe(testValue);
});