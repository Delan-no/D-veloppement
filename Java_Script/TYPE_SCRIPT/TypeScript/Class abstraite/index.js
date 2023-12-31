"use strict";
class Forme {
    afficher() {
        console.log("je suis une forme géométrique");
    }
}
class Rectangle extends Forme {
    calculerSurface() {
        return this.longueur * this.largeur;
    }
    constructor(longueur, largeur) {
        super();
        this.longueur = longueur;
        this.largeur = largeur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return 2 * Math.PI * this.rayon * this.rayon;
    }
}
class Triangle extends Forme {
    constructor(base, hauteur) {
        super();
        this.base = base;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return 0.5 * this.base * this.hauteur;
    }
}
let rect = new Rectangle(2, 5);
rect.afficher();
console.log(rect.calculerSurface());
