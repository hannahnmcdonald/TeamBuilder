const Employee = require("../lib/Employee");

// TEST: if it is an object
test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
});
