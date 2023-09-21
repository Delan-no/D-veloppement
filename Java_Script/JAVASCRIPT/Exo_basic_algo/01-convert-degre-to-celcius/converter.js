"use strict"

let Celsius = prompt("Veuillez entrer la valeur que vous voulez convertir")
function convertCtoF (Celsius){
    let fahrenheit;
    fahrenheit = Celsius * 9/5 + 32
    return fahrenheit;
}
 console.log(convertCtoF(Celsius));
 document.write("La valeur à convertir est : " + Celsius + " " + "Et la convertion donne : " + " " + convertCtoF(Celsius) )