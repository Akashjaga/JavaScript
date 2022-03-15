let d = (a, b) => {
    return a*b
}
function add  (a, b, d) {
    return d (a, b)
}
let r1 = add( 2, 4, d)
console.log(r1)