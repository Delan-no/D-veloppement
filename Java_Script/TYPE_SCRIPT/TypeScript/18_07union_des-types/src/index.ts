// Union des Types ( | )
// function add(a:number | string, b:number | string): number {
//     if (typeof a === "string" && typeof b === "string") {
//         return parseInt(a) + parseInt(b);
//     }else if (typeof a === "number" && typeof b === "number") {
//         return a + b
//     } 
//     return -1
// }
// console.log(add("Délanno", 3));

// type Rectangle = {
//     x:number,
//     y:number
// }

// type Circle = {
//     cx: number,
//     xy: number
// };

// type Shape = Rectangle | Circle

// let shape: Shape  = {
//     x: 23,
//     y: 59
// }
// console.log(shape);


// type User =  {
//     readonly id? : number, // id est optionnel. Il est en lecture seule
//     fname : string,
//     lname : string,
//     age? : number // age est optionel
// }
// let u: User = {
//     id : 1,
//     fname : "John",
//     lname : "Doe",
//     age : 25,
// };
// u.id = 23;

// console.log(u)



// Classes en TypeScript
/**
 * public:(défaut) permet l'accès à la propriété de partout
 * private: ne permet l'accès que dans la classe
 * protected: permet l'accès dans la classe et dans les enfants de la classe
 */
class Person {
    constructor(
        protected fname: string,
        protected lname: string,

    ) { };
    getFullName(): string {
        return `${this.fname} ${this.lname}`
    }
};

class Programer extends Person {

    constructor(
        fname: string,
        lname: string,
        private languages: string[]
    ) {
        super(fname, lname);
    }
    getLanguages():string {
        return `${this.fname} ${this.lname} maitrise les languagess ${this.languages.join(", ")}`
}
}

const p1 = new Person("John", "Doe");
console.log(p1.getFullName());

let codeur1 = new Programer("Jack", "Berger", ["HTML","CSS", "JS", "TYPE SCRIPT"]);

console.log(codeur1.getFullName());
console.log(codeur1.getLanguages());

let para = document.getElementById("para");

// TYPE  GENERIQUES

// function générique
function test<T>(arg:T ): T {
    return arg;
}
test<number> (5);
test<string> ("Hello");