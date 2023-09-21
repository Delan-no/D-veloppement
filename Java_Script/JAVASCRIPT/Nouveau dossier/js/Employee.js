'use strict';

import Person from "./Person.js";
// Employee étend (hérite des propriétés et méthodes) de Person
/**
 * On dit désormais que Employee hérite de Person.
 * On dit également que Employee est un enfant de Person.
 * On dit également que Person est un Parent de Employee.
 */
class Employee extends Person {
    #salary
    constructor(name, age, salary) {
        super(name, age) // Appel du consturcteur du parent avec deux arguments
        this.#salary = salary;
    }

    get salary() {
        return this.#salary
    }

    // mutateur | setteur
    set salary(newSalary) {
        this.#salary = newSalary
    }


}
export default Employee