"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Club_1 = require("../backend/Club");
const Person_1 = require("../backend/Person");
describe("Inefficient Members", () => {
    const club = new Club_1.Club();
    const person1 = new Person_1.Person("Alice", "Team A");
    test("Empty Club", () => {
        expect(club.checkValidTimetable()).toBe(false);
    });
    club.addMember(person1);
    test("Only 1 Member", () => {
        expect(club.checkValidTimetable()).toBe(false);
    });
});
// describe("Math Functions", () => {
//   test("adds 1 + 2 to equal 3", () => {
//     expect(3).toBe(3);
//   });
//   test("subtracts 2 from 5 to equal 3", () => {
//     expect(3).toBe(3);
//   });
// });
