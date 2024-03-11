"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, team) {
        this._name = name;
        this._team = team;
        this.shifts = 0;
        this.totalAvailability = new Array(5)
            .fill([])
            .map(function () { return new Array(5).fill(false); });
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
