'use strict';

import Admin from "./Admin.js";
import User from "./User.js";


let metho = new User("Délanno", "KOTCHO", "Stage");
console.log(metho.fullName());
console.log(metho.job);
metho.job = "Employe";

console.log(metho)


let metho1 = new Admin("Luc", "dansou", "programmer", "true");
console.log(metho1.canEditArticles());
console.log(metho1.rigth);
metho1.rigth = "False";

console.log(metho1);