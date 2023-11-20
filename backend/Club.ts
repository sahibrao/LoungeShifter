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
}
