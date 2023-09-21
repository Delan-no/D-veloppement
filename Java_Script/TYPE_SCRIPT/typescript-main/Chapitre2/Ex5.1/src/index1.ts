// function fusion <T> (a: T[], b: T[]): T[]{
//     return a.concat(b);
// }
// let c = fusion(['a','b', 'c'], ['d','e']);
// console.log(c);




class Queue <T> {
    arr: T[] = [];

    push(tab:T): T[]{
        this.arr.push(tab);
        return this.arr;
    }

    pop() : T {
        return this.arr[0]
    }
}
let queue = new Queue <number> ();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());

let queueArray = new Queue<Array<number>>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop());

