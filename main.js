"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./backend/Person");
var Club_1 = require("./backend/Club");
// Create a new Club
var club1 = new Club_1.Club();
// Create three Person objects
var person1 = new Person_1.Person("Alice", "Team A");
var person2 = new Person_1.Person("Bob", "Team B");
var person3 = new Person_1.Person("Charlie", "Team C");
person1.mondayAvailability = [true, false, true, false, true];
person2.tuesdayAvailability = [false, true, false, true, false];
person3.wednesdayAvailability = [true, true, true, true, true];
club1.addMember(person1);
club1.addMember(person2);
console.log("Person 1:", person1.name);
// console.log("Person 2:", person2);
// console.log("Person 3:", person3);
club1.logMemberNames();
