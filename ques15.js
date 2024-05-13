"use strict";
// Task 15
let guestarr = ["Munazzah", "Maliha", "Tehmina", "Rabia"];
let canNotAttend = "Maliha";
console.log(canNotAttend + " ", "can not attend the dinner");
let newGuest = "Ammar and Adina";
guestarr[guestarr.indexOf(canNotAttend)] = newGuest;
console.log(guestarr);
guestarr.map((items) => console.log(`Dear ${items}, You are cordially invited to the diiner.`));
