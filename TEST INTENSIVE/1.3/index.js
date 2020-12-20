
function findOppositeNumber(a,b) {
    let step =  a/2;
    if(b<step){
        console.log(b+a/2);
    }else{
        console.log(b-a/2);
    }
    return;
}

console.log(findOppositeNumber(20, 2));
console.log(findOppositeNumber(10, 6));