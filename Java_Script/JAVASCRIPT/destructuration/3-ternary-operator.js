"use strict";

/**
 * Fonction qui vérifie si un nombre est positif ou négatif
 * @param {number} num 
 * @return true | false
 */
function isPositive(num) {
    // if (num >= 0) {
    //     return true;
    // }else{
    //     return false
    // } ES5

    // (condition) ? "valeur à retourner si vrai" : "valeur dsi faux" // ES6
    // let result = num >= 0 ? true : false;
    // return result;


    let result = num >= 0 ? `${num} est positif` : `${num} est négatif`;
    return result;
}
console.log(isPositive(-3));