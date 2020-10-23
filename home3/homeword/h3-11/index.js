let n = prompt('Enter a sequence of names');
let a = n.split(',');
let soLe =[];
for (let i=0; i<a.length; i++) {
    if (a[i] % 2 == 1)
        soLe.push(a[i]);
    
}
alert(`${a} => ${soLe}`);