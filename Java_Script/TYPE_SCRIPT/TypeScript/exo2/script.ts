/**
 Types de variables        
 -number: Les nombres, qu'ils soient entiers ou à virgule 
 -string: représente les chîne de caractères
 -boolean: représente les valeurs booléennes, c-a-d true ou false
 -array: représente un tableau contenant des éléments du même type
 -object:représente tout type d'objet
 -null: réprensente la valeur "null"
 -undefined: représente la valeur" undifined"

  Types de variables TS
  -any : represente un type non spécifié ou dynamique.
  -unknown:représente un élément dont on ne connaiît pas le type
  -enum: représente un ensemble de valeurs nommées 
  -tuple: représente un tableau avec un nombre fixe  d'éléments de types différents
 */
// const enum Status {
//     PAID = 'payé',
//     PENDING = 'pending',
//     DENIED = 'denied'
// }


// let x ;

// function verify() {
//     if (true) {
//         x = Status.PAID;
//     }
// };

type UserType = {
    fname: string,
    lname: string,
    age: number
};

let user: UserType = {fname: "John", lname:"Doe", age: 24}
console.log(user);

// type Rectangle = {
//     height: number,
//     width: number
// }

// let rectangle : Rectangle = {height:35, width:50};
// console.log(rectangle.height);

interface Animal {
    name: string,
    specie: string,
    legs: number
};

const animal: Animal ={
    name: "Booba",
    specie: "Ours",
    legs: 4    
};
console.log(animal);

interface Car {
    year: number,
    color: string,
};

const car: Car ={
    year: 2022,
    color: "black"
};




interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  console.log(coloredRectangle);
  