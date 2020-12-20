function merge2String(s1,s2) {
    value = Math.min(s1.length, s2.length);
    chuoiNew = "";
    for (let i = 0; i < value; i++) {
        chuoiNew += s1[i] + s2[i];
    }
    if (s1.length > s2.length) {
        chuoiNew += s1.substring(value);// hoán đổi 2 vị trí
    }
    else if (s1.length < s2.length) {
        chuoiNew += s2.substring(value);
    }
    return chuoiNew;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));