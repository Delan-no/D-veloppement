"use strict";
/**
 * L'opérateur spread (...) en JavaScript permet de copier rapidement tout ou une partie d'un tableau | bojet dans un autre tableau|objet
 */
const arr1 = [1, 2, 3];
console.log(...arr1);

const arr2 = [4, 5, 6];
console.log(...arr2);

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [...arr1, ...arr2]
console.log(arr4);

const arr5 = [7, 8, 9, ...arr2, ...arr1]
console.log(arr5);


// Copie d'un tableau
let arr = [[1, 2, 3], 4, 5, 6];
let arr6 = [...arr[0]];
console.log(arr6);


let a = "azerty";
let b = "qwerty"
let obj ={
    a : b,
    b : b
}; //ES5
console.log({obj});


let obj2 ={a, b} // ES6;
console.log({obj2});


console.log({..."bonjour"});

//rest parameter 
function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
add(2 ,3 , 4, 5, 6 ,7)

