


const prenom = window.prompt("Quel est votre prénom ?");
const salutation = " salut ";
const nom = window.prompt("Quel est votre nom de famille ?")
const texte = "cette année vous avez ";
const anneeDeNaissance = window.prompt("Quel est votre année de naissance ? ");
const anneeEncour = window.prompt("Mettez l'année en cours");

const year = (anneeEncour - anneeDeNaissance) + ' ans';
const salu_hello = salutation + prenom +' '+ nom + ' ! ' + texte;
console.log( salu_hello + year );

document.write( salu_hello + year);
