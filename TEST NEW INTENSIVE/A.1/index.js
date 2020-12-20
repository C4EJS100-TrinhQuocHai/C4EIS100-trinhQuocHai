function findOppositeNumber(n,inputNumber) {
    let kiemTra =  n/2;
    if(inputNumber<kiemTra){
        console.log(inputNumber+n/2);
    }else{
        console.log(inputNumber-n/2);
    }
    return;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));
console.log(findOppositeNumber(20, 5));
