'use strict';

class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    //accesseur | getteur
    get name() {
        // console.log("Appelle du getteur")
        return this.#name;
    }

      // mutateur | setteur
      set name (newName){
        this.#name = newName
    }


    //accesseur | getteur
    get age() {
        // console.log("Appelle du getteur")
        return this.#age;
    }

    // mutateur | setteur
    set age (newAge){
        this.#age = newAge
    }
    present() {
        console.log(`On m'appelle ${this.#name} et j'ai ${this.#age} ans.`);
    }
}
export default Person