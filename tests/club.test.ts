import { Club } from "../backend/Club";
import { Person } from "../backend/Person";

describe("Inefficient Members", () => {
  let club: Club;
  let person1: Person;
  let person2: Person;

  beforeEach(() => {
    club = new Club();
    person1 = new Person("Alice", "Team A");
    person2 = new Person("Bob", "Team B");
  });

  test("Empty Club", () => {
    expect(club.checkValidTimetable()).toBe(false);
  });

  test("Only 1 Member", () => {
    club.addMember(person1);
    expect(club.checkValidTimetable()).toBe(false);
  });

  test("1 Member Below Minimum", () => {
    club.addMember(person1);
    club.addMember(person2);
    club.setMinimumMembers(3);
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
