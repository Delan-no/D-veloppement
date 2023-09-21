import Person from "./Person.js";
import Employee from "./Employee.js";
import Programmer from "./Programmer.js";

let p = new Person("Thierry", 23);
let e = new Employee("Jacques", 54, 500000);
let warris = new Programmer("Warris", 52, 5000000, ["HTML", "CSS", "JS"]);

console.log(p.name);
console.log(p.age);
console.log(e.salary);
console.log(warris.language);


