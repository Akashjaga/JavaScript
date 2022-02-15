function maxval (a){
var max = a[0];
for (var i = 1; i<= a.length-1; i++){
    if (a[i]>= max){
        max=a[i]
    }
}
return max;
}
let result = maxval([100, 300, 1500, 600, 900])
console.log(result)