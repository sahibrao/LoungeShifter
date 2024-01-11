import { Person } from "./Person.js";

export class Club {
  private _members: Person[];

  constructor() {
    this._members = [];
  }

  // Method to add a person to the team
  addMember(person: Person): void {
    this._members.push(person);
  }

  // Method to get all members of the team
  get members(): Person[] {
    return this._members;
  }

  // Method to remove a person by name
  removeMember(name: string): void {
    this._members = this._members.filter((member) => member.name !== name);
  }

  // Method to log names of all team members
  logMemberNames(): void {
    const memberNames = this._members.map((member) => member.name);
    console.log("Team Member Names:", memberNames.join(", "));
  }

  // Todo functions

  // TODO: Main function
  // given a list of people and their timetables, give a list of people for each timeslot
  createTimetable(people: Person[]): String[] {
    // initial assumption, each shift needs one Person
    let allMondayAvailability: boolean[][];
    for (let i = 0; i < this._members.length; i++) {}
    return [];
  }

  // given every Person's timetables, return true if two distinct people can work each shift
  checkValidTimetable(): boolean {
    // need an Array of some sorts to check off people that have not been used
    const available: Person[] = [...this._members];

    // 5 days of the week, 10 timeslots
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 10; k++) {
        // loop through the people and find if their availability is true for
        for (const member of available) {
          console.log(member.name);

          if (member.totalAvailability[i][k] == true) {
            // TODO: need delete member function
          }
        }
      }
    }
    return true;
  }
}
