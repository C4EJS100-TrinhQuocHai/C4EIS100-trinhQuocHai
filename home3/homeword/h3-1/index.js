// cach 1
let a = 5;
let b = 6;
console.log ([a,b]);
[a,b] = [b,a];
console.log ([a,b]);
// cach 2
let a = 5;
let b = 6;
let temp;
temp = a;
a = b;
b = temp;
console.log([a,b]);