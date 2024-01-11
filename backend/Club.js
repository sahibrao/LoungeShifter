"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
var Club = /** @class */ (function () {
    function Club() {
        this._members = [];
    }
    // Method to add a person to the team
    Club.prototype.addMember = function (person) {
        this._members.push(person);
    };
    Object.defineProperty(Club.prototype, "members", {
        // Method to get all members of the team
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    // Method to remove a person by name
    Club.prototype.removeMember = function (name) {
        this._members = this._members.filter(function (member) { return member.name !== name; });
    };
    // Method to log names of all team members
    Club.prototype.logMemberNames = function () {
        var memberNames = this._members.map(function (member) { return member.name; });
        console.log("Team Member Names:", memberNames.join(", "));
    };
    // Todo functions
    // TODO: Main function
    // given a list of people and their timetables, give a list of people for each timeslot
    Club.prototype.createTimetable = function (people) {
        // initial assumption, each shift needs one Person
        var allMondayAvailability;
        for (var i = 0; i < this._members.length; i++) { }
        return [];
    };
    // given every Person's timetables, return true if two distinct people can work each shift
    Club.prototype.checkValidTimetable = function () {
        // need an Array of some sorts to check off people that have not been used
        var available = __spreadArray([], this._members, true);
        // 5 days of the week, 10 timeslots
        for (var i = 0; i < 4; i++) {
            for (var k = 0; k < 10; k++) {
                // loop through the people and find if their availability is true for
                for (var _i = 0, available_1 = available; _i < available_1.length; _i++) {
                    var member = available_1[_i];
                    console.log(member.name);
                    if (member.totalAvailability[i][k] == true) {
                        // TODO: need delete member function
                    }
                }
            }
        }
        return true;
    };
    return Club;
}());
exports.Club = Club;
