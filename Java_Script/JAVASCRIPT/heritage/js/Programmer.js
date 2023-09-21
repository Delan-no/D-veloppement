'use strict';

import Employee from "./Employee.js";

class Programmer extends Employee {
    constructor(name, age, salary, language){
        console.log(`Appel du constructeur Programmer. Création du Programmer ${name} crée avec succes`);

        super(name, age, salary)
        this.language = language;

        console.log(`Programmer ${name} crée avec succès`)
    }
}
export default Programmer