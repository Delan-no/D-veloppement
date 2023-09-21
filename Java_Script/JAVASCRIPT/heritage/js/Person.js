'use strict';

class Person {
    constructor(name, age){
        console.log(`Appel du constructeur Person. Création de la Person ${name} crée avec succes`);
        this.name = name;
        this.age = age;
        console.log(`Person ${name} crée avec succès`);
    }  

     present () {
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
}
export default Person