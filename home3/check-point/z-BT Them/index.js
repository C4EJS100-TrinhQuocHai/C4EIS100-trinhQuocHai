let n = prompt('Enter the number of elements');
let arr = [];
    for (let i = 0; i < n; i++) 
    {
    arr.push(prompt('Enter no.' + `${i}` +':'));
    }
    console.log(arr);
// a
newArr=arr.sort(function(a, b){return a - b});
console.log(newArr);
// b 