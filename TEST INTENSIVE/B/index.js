let num;
let dem=0;
let A = document.getElementById("myNumber");
A.addEventListener('keyup',()=>{
    return A.value;
})
let quaySo=document.getElementById("quaySo");
quaySo.addEventListener('click',()=>{
    num=Math.floor(Math.random() * 11 ); 
    dem++;
    if(A.value == num){
        alert("Bạn đã trúng thưởng vì đã chọn đúng!");
    }
    else alert(`Bạn đã chọn sai! Kết quả đúng là ${num}`);
    if(dem == 3){
        alert(`Game over`);
    }
})
