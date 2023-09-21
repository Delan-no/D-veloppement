"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
let products = [];
for (let i = 0; i < MockProducts_1.MockDetails.length; i++) {
    for (let a = 0; a < MockProducts_1.MockDelivery.length; a++) {
        if (MockProducts_1.MockDetails[i].id === MockProducts_1.MockDelivery[a].id) {
            products.push(new Product_1.Product(MockProducts_1.MockDetails[i], MockProducts_1.MockDelivery[a].delivery));
        }
    }
}
;
// let prod: Array<Product<Details, Delivery>> = [];
// for (let j = 0; j < products.length; j++) {
//     if (products[j].option === Delivery.Special) {
//         prod.push(products[j])
//     }
// }
// console.log(prod); 
let special = products.filter((el) => el.option === MockProducts_1.Delivery.Special);
console.log("********** SPECIAL  - PRODUCTS ***********");
console.log(special);
