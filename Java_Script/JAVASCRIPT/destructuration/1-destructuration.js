
"use strict";
/**
 * Destructuration sur les tableaux
 */
const notes = [17, 14, 12, 13];
// syntaxe ES5
// const nicole = notes[0];
// const erfero = notes[1];
// const oderic = notes[2];
// const martin = notes[3]

// sybtaxe ES6
const notes2 = [17, 14, 12, 13];

const [nicole, erfero, , martin] = notes;

console.log(nicole);  //  17
console.log(erfero);  //  14
console.log();  //  12
console.log(martin);  //  13

/**
 * Destructuration sur les objets
 */
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 24
}

// ES5
// const firstname = person.firstname;
// const lastname = person.lastname;
// const age = person.age;

// const { firstname, age, lastname } = person; //ES6
const { firstname:fn, age:a, lastname:ln } = person; //ES6
console.log(fn);
console.log(ln);