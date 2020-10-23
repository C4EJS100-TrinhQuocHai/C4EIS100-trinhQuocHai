// tim so nho nhat
let a = prompt('Enter a squence of numbers');
let b = a.split(',').map(b => +b); 
let soNhoNhat= Math.min(...b);
console.log(soNhoNhat);
