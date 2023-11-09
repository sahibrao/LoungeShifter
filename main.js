"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./backend/Person");
// Create three Person objects
var person1 = new Person_1.Person("Alice", "Team A");
var person2 = new Person_1.Person("Bob", "Team B");
var person3 = new Person_1.Person("Charlie", "Team C");
// You can set availability for each person as needed
person1.mondayAvailability = [true, false, true, false, true];
person2.tuesdayAvailability = [false, true, false, true, false];
person3.wednesdayAvailability = [true, true, true, true, true];
// Display information about the persons
console.log("Person 1:", person1);
// console.log("Person 2:", person2);
// console.log("Person 3:", person3);
// Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
