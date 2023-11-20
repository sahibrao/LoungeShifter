"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, team) {
        this._name = name;
        this._team = team;
        this._mondayAvailability = new Array(10);
        this._tuesdayAvailability = new Array(10);
        this._wednesdayAvailability = new Array(10);
        this._thursdayAvailability = new Array(10);
        this._fridayAvailability = new Array(10);
        for (var i = 0; i < 10; i++) {
            this._mondayAvailability[i] = false;
            this._tuesdayAvailability[i] = false;
            this._wednesdayAvailability[i] = false;
            this._thursdayAvailability[i] = false;
            this._fridayAvailability[i] = false;
        }
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
    Object.defineProperty(Person.prototype, "mondayAvailability", {
        get: function () {
            return this._mondayAvailability;
        },
        set: function (value) {
            this._mondayAvailability = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "tuesdayAvailability", {
        get: function () {
            return this._tuesdayAvailability;
        },
        set: function (value) {
            this._tuesdayAvailability = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "wednesdayAvailability", {
        get: function () {
            return this._wednesdayAvailability;
        },
        set: function (value) {
            this._wednesdayAvailability = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "thursdayAvailability", {
        get: function () {
            return this._thursdayAvailability;
        },
        set: function (value) {
            this._thursdayAvailability = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fridayAvailability", {
        get: function () {
            return this._fridayAvailability;
        },
        set: function (value) {
            this._fridayAvailability = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
