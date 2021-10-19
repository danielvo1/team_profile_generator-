const { expect } = require("@jest/globals");
const Employee = require("/Users/danielvo/Desktop/team_profile_generator-/lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })


});