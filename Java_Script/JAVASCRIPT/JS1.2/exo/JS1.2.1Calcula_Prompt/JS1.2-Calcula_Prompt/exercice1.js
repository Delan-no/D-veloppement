/**
 * Créer ici le projet « Calculaprompt ».
 */

// MON PROPRE CODE
/*const Nombre1 = Number(window.prompt("Entrer un premier nombre"));
const operateur = window.prompt("Entrer l'opérateur")
const Nombre2 = Number(window.prompt("Entrer un deuxième nombre"));
    if (operateur === '*'){
    result = Nombre1 * Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '+'){
    result = Nombre1 + Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '-'){
    result = Nombre1 - Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '/'){
    result = Nombre1 / Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };
document.write(Nombre1, operateur,  Nombre2, '= ', result);
*/

// CORRECTION
const num1 = Number(window.prompt("Nombre 1:"));
const op = window.prompt("Opérateur (+, -, *, /):");
const num2 =Number(window.prompt("Nombre 1:"));

if (op === '*'){
    console.log(num1, op, num2, '= ',(num1 * num2));
    };

    if (op === '+'){
    console.log(num1, op, num2, '= ', (num1 + num2));
    };

    if (op === '-'){
    console.log(num1, op, num2, '= ', (num1 - num2));
    };

    if (op === '/'){
    console.log(num1, op, num2, '= ', (num1 / num2));
    };
    // document.write(num1, op, num2, '=')