"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
let products = [];
MockProducts_1.MockDetails.forEach((detail) => {
    let id = detail.id;
    let delivery = MockProducts_1.MockDelivery.find(delivery => delivery.id == id);
    console.log(delivery.delivery);
    products.push(new Product_1.Product(detail, delivery.delivery));
});
// Affichez que les produits dont l'option est "spécial"
let specialProducts = products.filter(product => product.option === MockProducts_1.Delivery.Special);
console.log(specialProducts);
// console.log(products);
