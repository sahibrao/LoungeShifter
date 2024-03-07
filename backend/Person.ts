export class Person {
  private _name: string;
  private _mondayAvailability: boolean[];
  private _tuesdayAvailability: boolean[];
  private _wednesdayAvailability: boolean[];
  private _thursdayAvailability: boolean[];
  private _fridayAvailability: boolean[];
  public totalAvailability: boolean[][];

  private _team: string;

  constructor(name: string, team: string) {
    this._name = name;
    this._team = team;

    // 10 values; 12-1230, 1230-1, .... , 430-5
    this._mondayAvailability = new Array<boolean>(10);
    this._tuesdayAvailability = new Array<boolean>(10);
    this._wednesdayAvailability = new Array<boolean>(10);
    this._thursdayAvailability = new Array<boolean>(10);
    this._fridayAvailability = new Array<boolean>(10);
    this.totalAvailability = new Array(5)
      .fill([])
      .map(() => new Array(10).fill(true)); // should be false

    for (let i = 0; i < 10; i++) {
      this._mondayAvailability[i] = true;
      this._tuesdayAvailability[i] = true;
      this._wednesdayAvailability[i] = true;
      this._thursdayAvailability[i] = true;
      this._fridayAvailability[i] = true;
    }
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

  get mondayAvailability(): boolean[] {
    return this._mondayAvailability;
  }

  set mondayAvailability(value: boolean[]) {
    this._mondayAvailability = value;
  }

  get tuesdayAvailability(): boolean[] {
    return this._tuesdayAvailability;
  }

  set tuesdayAvailability(value: boolean[]) {
    this._tuesdayAvailability = value;
  }

  get wednesdayAvailability(): boolean[] {
    return this._wednesdayAvailability;
  }

  set wednesdayAvailability(value: boolean[]) {
    this._wednesdayAvailability = value;
  }

  get thursdayAvailability(): boolean[] {
    return this._thursdayAvailability;
  }

  set thursdayAvailability(value: boolean[]) {
    this._thursdayAvailability = value;
  }

  get fridayAvailability(): boolean[] {
    return this._fridayAvailability;
  }

  set fridayAvailability(value: boolean[]) {
    this._fridayAvailability = value;
  }

  // get totalAvailability(): boolean[] {
  //   return this.totalAvailability;
  // }
}
