class Add {
    constructor(e,f){
        this.Num4=e
        this.Num5=f
    }
}
class Sub extends Add {
    constructor(b,c,d,e,f){
        super(e,f)
        this.Num1=b
        this.Num2=c
        this.Num3=d
    }
}
let a =new Sub (101, 102, 103, 104, 105)
console.log(a)