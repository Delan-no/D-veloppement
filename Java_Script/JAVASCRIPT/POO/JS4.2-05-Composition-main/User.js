'use strict';

class User {
    #job;
    #age;
    constructor(name, firstName, job = null, age) {
        this.name = name;
        this.firstname = firstName;
        this.#job = job;
        this.#age = age;
    }

    // accesseur et getteur pour job
    get job() {
        return this.#job
    }
    set job(newJob) {
        this.#job = newJob
    }
    // accesseur et getteur pour age
    get age() {
        return this.#age.getAge()
    }
    set age(newAge) {
        this.#age = newAge
    }
}



class Age {
    #age
    constructor(age) {
        this.#age = age;

    }

    getAge() {

            // 1ère méthode
        if (typeof this.#age === "number" && this.#age >= 10 && this.#age <= 150){
            this.#age = this.#age;
        } else {
            this.#age = null
        } return this.#age

        // if (typeof this.#age === "number") {
        //     if (this.#age >= 10 && this.#age <= 150) {
        //         this.#age = this.#age;
        //     }else{
        //         this.#age = null;
        //     }
        // }else{
        //     this.#age = null
        // }

        // return this.#age
    }
}




export { User, Age }