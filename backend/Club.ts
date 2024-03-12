import { Person } from "./Person.js";

export class Club {
  private _members: Person[];
  private minimumMembers: number;
  public pairing = new Map<[number, number], [Person, Person]>();

  constructor() {
    this._members = [];
    this.minimumMembers = 25;
  }

  // Method to add a person to the team
  addMember(person: Person): void {
    this._members.push(person);
  }

  // Method to get all members of the team
  get members(): Person[] {
    return this._members;
  }

  setMinimumMembers(members: number) {
    this.minimumMembers = members;
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

  findPerson(peopleFree: Person[]): Person {
    let minShifts: number = 100;
    let minIndex = 0;

    for (let index = 0; index < peopleFree.length; index++) {
      if (peopleFree[index].shifts == 0) {
        peopleFree[index].shifts = 1;
        return peopleFree[index];
      }

      if (peopleFree[index].shifts < minShifts) {
        minShifts = peopleFree[index].shifts;
        minIndex = index;
      }
    }
    peopleFree[minIndex].shifts++;
    return peopleFree[minIndex];
  }

  // given every Person's timetables, return true if two distinct people can work each shift
  // return false;
  checkValidTimetable(): boolean {
    // need an Array of some sorts to check off people that have not been used
    // const available: Person[] = [...this._members];
    if (this._members.length < this.minimumMembers) {
      return false;
    }

    const pairSlot = new Map<[number, number], [Person, Person]>();

    for (let day = 0; day < 5; day++) {
      for (let hour = 0; hour < 5; hour++) {
        const peopleFree: Person[] = [];

        // see which members are free at given time slot
        for (const member of this._members) {
          if (member.free(day, hour)) {
            peopleFree.push(member);
          }
        }

        if (peopleFree.length < 2) {
          throw new Error("2 People not available at Day ${day} Hour ${hour}");
        }
        console.log(day, hour);
        pairSlot.set(
          [day, hour],
          [this.findPerson(peopleFree), this.findPerson(peopleFree)]
        );
      }
    }
    this.pairing = pairSlot;
    // console.log(pairSlot);
    return true;
  }
}
