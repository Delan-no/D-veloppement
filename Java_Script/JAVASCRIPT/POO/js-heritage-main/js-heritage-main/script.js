'use strict';

import Admin from "./Admin.js";
import User from "./User.js";


let metho = new User();
console.log(metho.fullName("Délanno", "KOTCHO"));



let metho1 = new Admin();
console.log(metho1.canEditArticles());