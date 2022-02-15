function iden (a){
    var first = a[0];
    for (num of a){ 
        if (num != first) {
            return false;
        }
    }
    return true;
}
let result = iden([22, 22, 22, 22])
console.log(result);

