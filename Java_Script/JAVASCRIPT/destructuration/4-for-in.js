"use strict"

const students = [
    "Oswald",
    "Emile",
    "Martin",
    "Délanno",
    "Sam-Rod",
    "Charcre-Bailse",
    "Le Roux",
    "Euloge",
    "Faris",
    "Axel",
    "Régis",
    "Alid",
    "Erfero",
    "Nicole",
    "Wilfrid",
    "Théophile",
    "Johannes",
    "Posidius",
    "Gabriel",
    "Odéric"
]

// 1ère méthode
// for (let i = 0; i < students.length; i++){
//     const element = students[i];
//     console.log(element);   
// }

// 2ème méthode
// students.forEach(student => {
//     console.log(student)
// })

// 3ème méthode
/**
 * for...in : permet de parcourir les propriétés / indices d'un objet/tableau
 
for (let indice in tableau){}
for (let propriete in objet){}

for...of: permet de parcourir les valeurs d'un tableau ou d'un objet
 */

//parcour des indices du tableau "student"
for (let i in students) {
    console.log(students[i]);
}

//parcour des valeurs du tableau "student"
/**
for (const student of students) {
    console.log(student);
}
*/

let obj = {
    fname: "John",
    lname: "Doe",
    age: 98
}

for (let prop in obj) {
    console.log(obj[prop]);
}

for (let character of "bonjour") {
    console.log(character);
}