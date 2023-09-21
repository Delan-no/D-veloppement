'use strict';
class Product {
    constructor(name) {
        this._ref = 10000;
        this._name = name; // setter assigne une valeur à l'attribut name
    }
    // setter
    set name(name) {
        this._name = name;
    }
    ;
    set ref(ref) {
        this._ref = ref;
    }
    ;
    // getter afficher une valeur dans le code courant
    get name() {
        return this._name;
    }
    ;
    get ref() {
        return this._ref;
    }
    ;
}
// instance de la classe
let bike = new Product("Super Bike");
console.log(bike.name); // afficher Super Bike
let boke = new Product("");
console.log(boke.ref);
