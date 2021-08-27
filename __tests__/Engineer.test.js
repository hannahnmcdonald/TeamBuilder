const Engineer = require("../lib/Engineer");

// TEST: Is the role 'Engineer'
test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Hannah", 2, "hannah@hannah.com", "hannah");
    expect(e.getRole()).toBe(testValue);
});

// TEST: can getGithub() return the entered github username?
test("Can getGithub() return the entered github username?", () => {
    const testValue = "hannah";
    const e = new Engineer("Hannah", 2, "hannah@hannah.com", "hannah");
    expect(e.getGithub()).toBe(testValue);
});

// TEST: Can getEmail() return the entered email address?
test("Can getEmail() return the entered email address?", () => {
    const testValue = "hannah@hannah.com";
    const e = new Engineer("Hannah", 2, "hannah@hannah.com", "hannah");
    expect(e.getEmail()).toBe(testValue);
});

// TEST: Can getId() return the entered ID #
test("Can getEmail() return the entered ID #", () => {
    const testValue = 1;
    const e = new Engineer("Hannah", 1, "hannah@hannah.com", "hannah");
    expect(e.getId()).toBe(testValue);
});