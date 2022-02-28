class Demo {
    emp_id=200002121
    constructor (email, amount){
        this.Email=email
        this.amount=amount
    }

}
class Student extends Demo {
    constructor (id, name, email, amount) {
        super(email, amount)
        this.Id=id
        this.Name=name
    }
}
let a = new Student(101, "Akash", "Akashjaga22@gmal.com", 20000)
console.log(a)