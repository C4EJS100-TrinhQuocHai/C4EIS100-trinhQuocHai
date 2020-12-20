function show(){
   let ketQua= document.getElementById('name').value;
  var x= document.getElementById('result').innerHTML=` kết quả bạn chọn là:${ketQua}`;
  let num =Math.floor(Math.random() * 11);
  if(ketQua==num){
      alert("Bạn đã trúng thưởng vì đã chọn đúng!");
  }else alert(`Bạn đã chọn sai! Kết quả đúng là ${num}`);
}
