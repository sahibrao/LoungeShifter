import { Person } from "./backend/Person";
import { Club } from "./backend/Club";

// Create a new Club

const club = new Club();

// Create 50 instances with respective availability
for (let i = 1; i <= 50; i++) {
  const person = new Person(`Person${i}`, `Team${i}`);
  const availability = new Array(5).fill(false);
  availability[i - 1] = true; // Set the respective availability value to true
  person.setTotalAvailability([availability]);
  club.addMember(person);
}

club.logMemberNames();

club.checkValidTimetable();
