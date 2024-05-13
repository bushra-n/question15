// Task 15
let guestarr:string []= ["Munazzah","Maliha","Tehmina","Rabia"];
let canNotAttend :string = "Maliha";

console.log(canNotAttend + " ", "can not attend the dinner")

let newGuest:string = "Ammar and Adina";

guestarr[guestarr.indexOf (canNotAttend)] = newGuest
 
console.log(guestarr)
guestarr.map ((items) => console.log (`Dear ${items}, You are cordially invited to the diiner.`));


