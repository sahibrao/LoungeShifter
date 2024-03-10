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
    // console.log(person1.mondayAvailability);
    expect(club.checkValidTimetable()).toBe(false);
  });
});

describe("Valid Timetable", () => {
  let club: Club;
  let person1: Person;
  let person2: Person;

  beforeEach(() => {
    club = new Club();
    person1 = new Person("Alice", "Team A");
    person2 = new Person("Bob", "Team B");
  });

  test("Everyone with full availablity", () => {
    for (let i = 0; i < 50; i++) {
      club.addMember(person1);
    }
    expect(club.checkValidTimetable()).toBe(true);
  });

  test("Everyone with specific timeslot in-order", () => {
    // Create and add 50 different members to the club
    for (let i = 1; i <= 50; i++) {
      const member = new Person(`Member${i}`, `Team${i}`);
      club.addMember(member);
    }
    // TODO: Change member timelots

    expect(club.checkValidTimetable()).toBe(true);
  });

  test("Everyone with different but valid timeslot", () => {
    // Create and add 50 different members to the club
    for (let i = 1; i <= 50; i++) {
      const member = new Person(`Member${i}`, `Team${i}`);
      club.addMember(member);
    }
    // TODO: Change member timelots

    expect(club.checkValidTimetable()).toBe(true);
  });
});

// TODO testing for findPerson function
