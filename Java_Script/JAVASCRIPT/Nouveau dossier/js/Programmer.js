'use strict';

import Employee from "./Employee.js";

class Programmer extends Employee {
    #language
    constructor(name, age, salary, language){

        super(name, age, salary)
        this.#language = language;
    }

    get language(){
        return this.#language
    }

    set language(newLanguage){
        this.#language = newLanguage
    }
}
export default Programmer