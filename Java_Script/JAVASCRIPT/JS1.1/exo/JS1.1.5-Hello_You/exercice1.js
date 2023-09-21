/**
 * Créer ici le projet « Hello You ».
 */


const hello = window.prompt("Quel est votre prénom");
const salutation = " salut ";

const annee = "cette année tu as ";
const age = window.prompt("Quel est ton année de naissance ? ");
console.log( salutation + hello + '!' + annee + age );
const currentYear = 2023 ;
console.log( salutation + hello + '!' + annee + (  currentYear - age) );

alert("")