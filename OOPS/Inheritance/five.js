class Test{
get_bal = 30000
constructor (d,e) {
    this.Num4=d
    this.Num5=e
}
}
class Tested extends Test{
    constructor (a,b,c,d,e) {
        super (d, e)
        this.Num1=a
        this.Num2=b
        this.Num3=c
       }
}
let c1= new Tested (01, 02, 03, 04, 05)
console.log(c1)
