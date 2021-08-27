const Engineer = require("../lib/Engineer");

// TEST: Is the role 'Engineer'
test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Hannah", 1, "hannah@hannah.com", "hannah");
    expect(e.getRole()).toBe(testValue);
});
