/*
let b = [10, 5, 15, 35];

console.log(b[0]);

console.log(b[1] + b[3]);

let a = [];

a[0] = 88;
a[1] = 45;
a[2] = 9;

console.log(a);

b.push(22);

b[b.length] = 17;

console.log(b);
*/

debugger;

let b   = [3, 10, 5, 15, 35, 22, 17];
let sum = 0;

for (let i = 0; i < b.length; i++) {
    sum += b[i];    
}

console.log(sum);
