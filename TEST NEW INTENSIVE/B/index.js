let luotQuay=0;
function show(){
    let ketQua= document.getElementById('name').value;
   var x= document.getElementById('result').innerHTML=` Số bạn chọn là :  ${ketQua}`;
   let num =Math.floor(Math.random() * 10 + 1);
   luotQuay++;
   if(ketQua==num){
       alert("Bạn đã trúng thưởng vì đã chọn đúng!");
   }else alert(`Bạn đã chọn sai! Kết quả đúng là ${num}`);
   if(luotQuay == 3){
    alert(' Bạn đã hết lượt quay.Xin cảm ơn !');
}
 }

 