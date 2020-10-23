let n = prompt('Enter a sequence of names');
let a = n.split(',');
let name = [];
for (let i = 0; i<a.length; i++)
{
    name.push('<' + a[i] +'>');
}
alert( `${a} => ${name}`);

