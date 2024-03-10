"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
var Club = /** @class */ (function () {
    function Club() {
        this.pairing = new Map();
        this._members = [];
        this.minimumMembers = 25;
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
    Club.prototype.setMinimumMembers = function (members) {
        this.minimumMembers = members;
    };
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
    Club.prototype.findPerson = function (peopleFree) {
        var minShifts = 100;
        var minIndex = 0;
        for (var index = 0; index < peopleFree.length; index++) {
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
    };
    // given every Person's timetables, return true if two distinct people can work each shift
    // return false;
    Club.prototype.checkValidTimetable = function () {
        // need an Array of some sorts to check off people that have not been used
        // const available: Person[] = [...this._members];
        if (this._members.length < this.minimumMembers) {
            return false;
        }
        var pairSlot = new Map();
        for (var day = 0; day < 4; day++) {
            for (var hour = 0; hour < 4; day++) {
                var peopleFree = [];
                // see which members are free at given time slot
                for (var _i = 0, _a = this._members; _i < _a.length; _i++) {
                    var member = _a[_i];
                    if (member.free(day, hour)) {
                        peopleFree.push(member);
                    }
                }
                if (peopleFree.length < 2) {
                    throw new Error("2 People not available at Day ${day} Hour ${hour}");
                }
                pairSlot.set([day, hour], [this.findPerson(peopleFree), this.findPerson(peopleFree)]);
            }
        }
        this.pairing = pairSlot;
        return true;
    };
    return Club;
}());
exports.Club = Club;
