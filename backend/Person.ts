export class Person {
  private _name: string;
  private _mondayAvailability: boolean[];
  private _tuesdayAvailability: boolean[];
  private _wednesdayAvailability: boolean[];
  private _thursdayAvailability: boolean[];
  private _fridayAvailability: boolean[];
  private _team: string;

  constructor(name: string, team: string) {
    this._name = name;
    this._team = team;
    this._mondayAvailability = new Array<boolean>(10);
    this._tuesdayAvailability = new Array<boolean>(10);
    this._wednesdayAvailability = new Array<boolean>(10);
    this._thursdayAvailability = new Array<boolean>(10);
    this._fridayAvailability = new Array<boolean>(10);

    for (let i = 0; i < 10; i++) {
      this._mondayAvailability[i] = false;
      this._tuesdayAvailability[i] = false;
      this._wednesdayAvailability[i] = false;
      this._thursdayAvailability[i] = false;
      this._fridayAvailability[i] = false;
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
}
