"use strict";

// exemples de type number
let x: number = 5;
const pi: number = 3.14;
let hex: number = 0xf00d; // hexadeculak
let bin: number = 0b0001; // binaire
let salire

// type string
let color: string = "blue";

// boolean
let isFree: boolean = false;

//array

let arr: number[] = [1, 2, 3] ; // array constitué number
let str: string[] = ['a', 'b', 'c']; // array constitué de string
let arr2: [string, number] = ['a', 2];
console.log(arr2);

// Type de retour de fonction 

function add (a :number , b: number) : number{
    return a + b
}
console.log(add(3,8));

function sayHello() :void {
    console.log("hello !");
    
}
sayHello()
