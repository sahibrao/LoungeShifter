export class Person {
  private _name: string;
  private totalAvailability: boolean[][];
  public shifts: number;

  private _team: string;

  constructor(name: string, team: string) {
    this._name = name;
    this._team = team;
    this.shifts = 0;

    this.totalAvailability = new Array(5)
      .fill([])
      .map(() => new Array(5).fill(false));
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get team(): string {
    return this._team;
  }

  set team(value: string) {
    this._team = value;
  }

  get getTotalAvailability(): boolean[][] {
    return this.totalAvailability;
  }

  setTotalAvailability(value: boolean[][]) {
    this.totalAvailability = value;
  }

  free(day: number, hour: number): boolean {
    return true;
  }
}
