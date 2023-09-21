/** 
function decorateur(target: Function) {
    console.log("appel du décorateur");
    
}

@decorateur
class User {
    constructor() {
        console.log("Constructeur de User...");
        
    }
}
*/
/**
function logClass(target: any){
    console.log(`Classe ${target.name} a été décorée`);
    
};

@logClass
class MaClass {
    constructor() {
        console.log("Instance de MaClasse crééz");
    }
} 
*/

// Décorateur de Classe 
@sealed
class BugReport {
    type ="Rapport";
    title: string;
    constructor(t: string){
        this.title = t;
    }
}

function sealed (constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    
}
let obj = new BugReport("Pas d'accès internet")
console.log(obj.title);
