let a = prompt('Enter a squence of numbers');
let b = a.split(',').map(b => +b)
let sum=0;
for (let i=0; i<b.length; i++){
    sum += b[i];
}
   

alert(sum);
