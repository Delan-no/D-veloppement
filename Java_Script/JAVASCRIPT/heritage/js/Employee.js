'use strict';

import Person from "./Person.js";
// Employee étend (hérite des propriétés et méthodes) de Person
/**
 * On dit désormais que Employee hérite de Person.
 * On dit également que Employee est un enfant de Person.
 * On dit également que Person est un Parent de Employee.
 */
class Employee extends Person {
    constructor(name, age, salary){

        console.log(`Appel du constructeur Employee. Création de l'Emoployee ${name} crée avec succes`);
        super(name, age) // Appel du consturcteur du parent avec deux arguments

        this.salary = salary;

        console.log(`Employee ${name} crée avec succès`)

    }


}
export default Employee