

let Nombre1 = Number(window.prompt("Entrer un premier nombre "));
while( isNaN(Nombre1)){
    Nombre1 = Number(window.prompt("entre un nombre stp"));
}
let operateur = window.prompt("Entrer l'opérateur '➕' '➖' '✖' '➗' ");
let Nombre2 = Number(window.prompt("Entrer un deuxième nombre"));
while(isNaN(Nombre2)){
    Nombre2 = window.prompt("entre un second nombre stp");
}

if( (isNaN(Nombre1)) || (isNaN(Nombre2))){
    console.log("Imbécile ! est ce que tu vois bien ce qui a été demandé  ? ");
    document.write("Imbécile ! est ce que tu vois bien ce qui a été demandé  ?");
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
document.write(Nombre1 + " " + operateur + " " + Nombre2 + " " + "=" + " " + resultat)