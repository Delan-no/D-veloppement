
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special";


import { Product } from "./Product";
import { MockDetails, MockDelivery, Details, Delivery } from "./data/MockProducts";

let products: Array<Product<Details, Delivery>> = [];

for (let i = 0; i < MockDetails.length; i++) {
   for (let a = 0; a < MockDelivery.length; a++) {
    if (MockDetails[i].id === MockDelivery[a].id) {
        products.push(new Product(MockDetails[i], MockDelivery[a].delivery))
    }
   }                 
};

// let prod: Array<Product<Details, Delivery>> = [];

// for (let j = 0; j < products.length; j++) {
//     if (products[j].option === Delivery.Special) {
//         prod.push(products[j])
//     }
// }
// console.log(prod); 
let special = products.filter((el) => el.option === Delivery.Special);
console.log("********** SPECIAL  - PRODUCTS ***********");

console.log(special)