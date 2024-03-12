"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./backend/Person");
var Club_1 = require("./backend/Club");
// Create a new Club
var club = new Club_1.Club();
// Create 50 instances with respective availability
for (var i = 1; i <= 50; i++) {
    var person = new Person_1.Person("Person".concat(i), "Team".concat(i));
    var availability = new Array(5).fill(false);
    availability[i - 1] = true; // Set the respective availability value to true
    person.setTotalAvailability([availability]);
    club.addMember(person);
}
club.logMemberNames();
club.checkValidTimetable();
