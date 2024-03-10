"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, team) {
        this._name = name;
        this._team = team;
        this.shifts = 0;
        // 10 values; 12-1230, 1230-1, .... , 430-5
        // this._mondayAvailability = new Array<boolean>(10);
        // this._tuesdayAvailability = new Array<boolean>(10);
        // this._wednesdayAvailability = new Array<boolean>(10);
        // this._thursdayAvailability = new Array<boolean>(10);
        // this._fridayAvailability = new Array<boolean>(10);
        this.totalAvailability = new Array(5)
            .fill([])
            .map(function () { return new Array(5).fill(false); });
        // for (let i = 0; i < 10; i++) {
        //   this._mondayAvailability[i] = true;
        //   this._tuesdayAvailability[i] = true;
        //   this._wednesdayAvailability[i] = true;
        //   this._thursdayAvailability[i] = true;
        //   this._fridayAvailability[i] = true;
        // }
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "team", {
        get: function () {
            return this._team;
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getTotalAvailability", {
        // get mondayAvailability(): boolean[] {
        //   return this._mondayAvailability;
        // }
        // set mondayAvailability(value: boolean[]) {
        //   this._mondayAvailability = value;
        // }
        // get tuesdayAvailability(): boolean[] {
        //   return this._tuesdayAvailability;
        // }
        // set tuesdayAvailability(value: boolean[]) {
        //   this._tuesdayAvailability = value;
        // }
        // get wednesdayAvailability(): boolean[] {
        //   return this._wednesdayAvailability;
        // }
        // set wednesdayAvailability(value: boolean[]) {
        //   this._wednesdayAvailability = value;
        // }
        // get thursdayAvailability(): boolean[] {
        //   return this._thursdayAvailability;
        // }
        // set thursdayAvailability(value: boolean[]) {
        //   this._thursdayAvailability = value;
        // }
        // get fridayAvailability(): boolean[] {
        //   return this._fridayAvailability;
        // }
        // set fridayAvailability(value: boolean[]) {
        //   this._fridayAvailability = value;
        // }
        get: function () {
            return this.totalAvailability;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.setTotalAvailability = function (value) {
        this.totalAvailability = value;
    };
    Person.prototype.free = function (day, hour) {
        return true;
    };
    return Person;
}());
exports.Person = Person;
