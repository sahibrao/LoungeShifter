import { Person } from "./backend/Person";
import { Club } from "./backend/Club";

// Create a new Club

const club1 = new Club();

// Create three Person objects
const person1 = new Person("Alice", "Team A");
const person2 = new Person("Bob", "Team B");
const person3 = new Person("Charlie", "Team C");

person1.setTotalAvailability([
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
  [true, false, true, false, true],
]);

club1.addMember(person1);

console.log("Person 1:", person1.name);
console.log(person1.getTotalAvailability);
// console.log("Person 2:", person2);
// console.log("Person 3:", person3);

club1.checkValidTimetable();
