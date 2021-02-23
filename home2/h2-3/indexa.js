function showName() {
    let a= document.getElementById('name').value;
    let b= document.getElementById('address').value;
    document.getElementById('fullName').innerHTML=`hello: ${a}`;
    document.getElementById('city').innerHTML=`thanh pho cua ban la:${b}`;
}
