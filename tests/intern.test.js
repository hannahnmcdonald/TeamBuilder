const Intern = require("../lib/Intern");

// TEST: Is the role 'Intern'
test("getRole() should return 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Hannah", 3, "hannah@hannah.com", "hannah tech");
    expect(e.getRole()).toBe(testValue);
});

// TEST: Can getEmail() return the entered email address?
test("Can getEmail() return the entered email address?", () => {
    const testValue = "hannah@hannah.com";
    const e = new Intern("Hannah", 3, "hannah@hannah.com", "hannah");
    expect(e.getEmail()).toBe(testValue);
});

// TEST: Can getSchool() return the entered school name?
test("Can getSchool() return the entered school name?", () => {
    const testValue = "hannah tech";
    const e = new Intern("Hannah", 3, "hannah@hannah.com", "hannah tech");
    expect(e.getSchool()).toBe(testValue);
});

// TEST: Can getId() return the entered ID #
test("Can getEmail() return the entered ID #", () => {
    const testValue = 1;
    const e = new Intern("Hannah", 1, "hannah@hannah.com", "hannah tech");
    expect(e.getId()).toBe(testValue);
});