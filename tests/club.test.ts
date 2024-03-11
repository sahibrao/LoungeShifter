import { Club } from "../backend/Club";
import { Person } from "../backend/Person";

// describe("Inefficient Members", () => {
//   let club: Club;
//   let person1: Person;
//   let person2: Person;

//   beforeEach(() => {
//     club = new Club();
//     person1 = new Person("Alice", "Team A");
//     person2 = new Person("Bob", "Team B");
//   });

//   it("Empty Club", () => {
//     expect(club.checkValidTimetable()).toBe(false);
//   });

//   it("Only 1 Member", () => {
//     club.addMember(person1);
//     expect(club.checkValidTimetable()).toBe(false);
//   });

//   it("1 Member Below Minimum", () => {
//     club.addMember(person1);
//     club.addMember(person2);
//     club.setMinimumMembers(3);
//     // console.log(person1.mondayAvailability);
//     expect(club.checkValidTimetable()).toBe(false);
//   });
// });

// describe("Valid Timetable", () => {
//   let club: Club;
//   let person1: Person;
//   let person2: Person;

//   beforeEach(() => {
//     club = new Club();
//     person1 = new Person("Alice", "Team A");
//     person2 = new Person("Bob", "Team B");
//   });

//   it("Everyone with full availablity", () => {
//     for (let i = 0; i < 50; i++) {
//       club.addMember(person1);
//     }
//     expect(club.checkValidTimetable()).toBe(true);
//   });

//   it("Everyone with specific timeslot in-order", () => {
//     // Create and add 50 different members to the club
//     for (let i = 1; i <= 50; i++) {
//       const member = new Person(`Member${i}`, `Team${i}`);
//       club.addMember(member);
//     }
//     // TODO: Change member timelots

//     expect(club.checkValidTimetable()).toBe(true);
//   });

//   it("Everyone with different but valid timeslot", () => {
//     // Create and add 50 different members to the club
//     for (let i = 1; i <= 50; i++) {
//       const member = new Person(`Member${i}`, `Team${i}`);
//       club.addMember(member);
//     }
//     // TODO: Change member timelots

//     expect(club.checkValidTimetable()).toBe(true);
//   });
// });

// TODO testing for findPerson function
describe("findPerson", () => {
  let club: Club;

  beforeEach(() => {
    club = new Club();
  });

  it("should return the first person with 0 shifts", () => {
    const people = [
      new Person("Alice", "Team A"),
      new Person("Bob", "Team B"),
      new Person("Charlie", "Team A"),
      new Person("David", "Team B"),
    ];
    people[0].shifts = 0;
    expect(club.findPerson(people)).toEqual(people[0]);
  });

  it("should return the person with the lowest shifts", () => {
    const people = [
      new Person("Alice", "Team A"),
      new Person("Bob", "Team B"),
      new Person("Charlie", "Team A"),
      new Person("David", "Team B"),
    ];
    people[0].shifts = 2;
    people[1].shifts = 1;
    people[2].shifts = 3;
    people[3].shifts = 0;
    expect(club.findPerson(people)).toEqual(people[3]);
  });

  it("should update shifts count correctly", () => {
    const people = [
      new Person("Alice", "Team A"),
      new Person("Bob", "Team B"),
      new Person("Charlie", "Team A"),
      new Person("David", "Team B"),
    ];
    people[0].shifts = 2;
    people[1].shifts = 1;
    people[2].shifts = 3;
    people[3].shifts = 0;
    const person = club.findPerson(people);
    expect(person.shifts).toEqual(1);
  });
});
