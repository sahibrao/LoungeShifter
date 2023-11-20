"use strict";
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
    return Club;
}());
exports.Club = Club;
