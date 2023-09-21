"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Décorateur de Classe 
let BugReport = class BugReport {
    constructor(t) {
        this.type = "Rapport";
        this.title = t;
    }
};
BugReport = __decorate([
    sealed
], BugReport);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let obj = new BugReport("Pas d'accès internet");
console.log(obj.title);
