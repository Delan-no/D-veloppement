"use strict";
// function fusion <T> (a: T[], b: T[]): T[]{
//     return a.concat(b);
// }
// let c = fusion(['a','b', 'c'], ['d','e']);
// console.log(c);
class Queue {
    constructor() {
        this.arr = [];
    }
    push(tab) {
        this.arr.push(tab);
        return this.arr;
    }
    pop() {
        return this.arr[0];
    }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());
let queueArray = new Queue();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop());
