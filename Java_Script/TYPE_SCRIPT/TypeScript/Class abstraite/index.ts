
abstract class Forme {
    afficher() {
        console.log("je suis une forme géométrique");
    }

    abstract calculerSurface(): number
}

class Rectangle extends Forme {
    calculerSurface(): number {
        return this.longueur * this.largeur;
    }
    constructor(
        public longueur: number,
        public largeur: number
    ) {
        super()
     }

 
}

class Cercle extends Forme {
    constructor(
        public rayon: number
    ) {
        super()
     }

    calculerSurface(): number {
        return 2 * Math.PI * this.rayon * this.rayon;
    }   
}

class Triangle extends Forme {
    constructor(
        public base: number,
        public hauteur: number
        
    ) {
        super()
     }

    calculerSurface(): number {
        return 0.5 * this.base * this.hauteur;
    }
}

let rect = new Rectangle(2 ,5);
rect.afficher();

console.log(rect.calculerSurface());
