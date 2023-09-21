/**
 * Calculawrite
 */
/**
 * Créer ici le projet « Calculaprompt ».
 */
const Nombre1 = Number(window.prompt("Entrer un premier nombre "));
const operateur = window.prompt("Entrer l'opérateur '➕' '➖' '✖' '➗' ")
const Nombre2 = Number(window.prompt("Entrer un deuxième nombre"));

console.log(isNaN(Nombre1));
console.log(isNaN(Nombre2));

if( (isNaN(Nombre1)) || (isNaN(Nombre2))){
    console.log("Imbécile ! est ce que tu vois bien ce qui a été demandé  ? ")
}else {
    switch(operateur){
        case("+"):
            resultat = Nombre1 + Nombre2 ;
            break;
        case("-"):
            resultat = Nombre1 - Nombre2 ;
            break;
        case("*"):
            resultat = Nombre1 * Nombre2 ;
            break;
        case("/"):
            resultat = Nombre1 / Nombre2 ;
            break;
        default:
            console.log("L'opérateur entré n'est pas pris en compte")
    }
    console.log(Nombre1 + " " + operateur + " " + Nombre2 + " " + "=" + " " + resultat);
}





// document.write(Nombre1, operateur,  Nombre2, "=", resultat)