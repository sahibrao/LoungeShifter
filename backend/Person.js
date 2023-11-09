"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, team) {
        this._name = name;
        this._team = team;
        this._mondayAvailability = new Array(10);
        this._tuesdayAvailability = new Array(10);
        this._wednesdayAvailability = new Array(10);
        this._thursdayAvailability = new Array(10);
        this._fridayAvailability = new Array(10);
        for (let i = 0; i < 10; i++) {
            this._mondayAvailability[i] = false;
            this._tuesdayAvailability[i] = false;
            this._wednesdayAvailability[i] = false;
            this._thursdayAvailability[i] = false;
            this._fridayAvailability[i] = false;
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get team() {
        return this._team;
    }
    set team(value) {
        this._team = value;
    }
    get mondayAvailability() {
        return this._mondayAvailability;
    }
    set mondayAvailability(value) {
        this._mondayAvailability = value;
    }
    get tuesdayAvailability() {
        return this._tuesdayAvailability;
    }
    set tuesdayAvailability(value) {
        this._tuesdayAvailability = value;
    }
    get wednesdayAvailability() {
        return this._wednesdayAvailability;
    }
    set wednesdayAvailability(value) {
        this._wednesdayAvailability = value;
    }
    get thursdayAvailability() {
        return this._thursdayAvailability;
    }
    set thursdayAvailability(value) {
        this._thursdayAvailability = value;
    }
    get fridayAvailability() {
        return this._fridayAvailability;
    }
    set fridayAvailability(value) {
        this._fridayAvailability = value;
    }
}
exports.Person = Person;
