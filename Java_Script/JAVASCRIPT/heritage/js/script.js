import Person from "./Person.js";
import Employee from "./Employee.js";
import Programmer from "./Programmer.js";

let p1 = new Person("Thierry", 23);
console.log(p1);
p1.present()

let e1 = new Employee("Jacques", 54, 500000);
console.log(e1);
e1.present()

let warris = new Programmer("Warris", 52, 5000000, ["HTML", "CSS", "JS"]);
console.log(warris);
warris.present()

