/**
 * Calculawrite
 */
/**
 * Créer ici le projet « Calculaprompt ».
 */
let Nombre1 = Number(window.prompt("Entrer un premier nombre "));
while(isNaN(Nombre1)){
    Nombre1 = Number(window.prompt("Veuillez entrer un nombre svp"));
}

let operateur =  window.prompt("Entrer l'opérateur '➕' '➖' '(X, . , * )' '(/,➗)' ");

while(operateur !== "*" && 
      operateur !== "." && 
      operateur !== "x" && 
      operateur !== "+" && 
      operateur !== "-" && 
      operateur !== "/" && 
      operateur !== "÷"){
        
        window.prompt("Veuillez renseigner un opérateur svp")
}

let Nombre2 = Number(window.prompt("Entrer un deuxième nombre"));

while(isNaN(Nombre2)){
    Nombre2 = Number(window.prompt("Veuillez entrer un second  nombre svp"));
}


 if ( operateur === "*" ||
      operateur === "." ||
      operateur === "x" ){
      result = Nombre1 * Nombre2;
      console.log(Nombre1, operateur, Nombre2, "=", result);
 };

if (operateur === "+"){
    result = Nombre1 + Nombre2;
    console.log(Nombre1, operateur, Nombre2, "=", result);
};

if (operateur === "-"){
    result = Nombre1 - Nombre2;
    console.log(Nombre1, operateur, Nombre2, "=", result);
};

if (operateur === "/"){
    result = Nombre1 / Nombre2;
    console.log(Nombre1, operateur, Nombre2, "=", result);
};





// if( (isNaN(Nombre1)) || (isNaN(Nombre2))){
//     console.log("Imbécile ! est ce que tu vois bien ce qui a été demandé  ? ");
//     document.write("Imbécile ! est ce que tu vois bien ce qui a été demandé")
// }
// document.write(Nombre1, operateur,  Nombre2, '= ', result)
