'use strict';

class Product {
    private _name: string;
    protected _ref: number = 10000;

    constructor(name: string) {
        this._name = name; // setter assigne une valeur à l'attribut name
    }

    // setter
    set name(name: string) {
        this._name = name;
    };

    set ref(ref) {
        this._ref = ref
    };

    // getter afficher une valeur dans le code courant
    get name(): string {
        return this._name;
    };

    get ref(): number {
        return this._ref
    };
    // instance de la classe
    let bike = new Product("Super Bike");
    console.log(bike.name); // afficher Super Bike

    let boke = new Product ("");
    console.log(boke.ref);
    
}