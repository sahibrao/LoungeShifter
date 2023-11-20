import { Person } from "./backend/Person";
import { Club } from "./backend/Club";

// Create a new Club

const club1 = new Club();

// Create three Person objects
const person1 = new Person("Alice", "Team A");
const person2 = new Person("Bob", "Team B");
const person3 = new Person("Charlie", "Team C");

person1.mondayAvailability = [true, false, true, false, true];
person2.tuesdayAvailability = [false, true, false, true, false];
person3.wednesdayAvailability = [true, true, true, true, true];

club1.addMember(person1);
club1.addMember(person2);

console.log("Person 1:", person1.name);
// console.log("Person 2:", person2);
// console.log("Person 3:", person3);

club1.logMemberNames();
