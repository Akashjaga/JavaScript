class Employee {
    tax=28;
}
class Private_Employee extends Employee{
    constructor(Sid, Sname, SQuali){
        super()
        this.S_id=Sid;
        this.S_name=Sname;
        this.S_Quali=SQuali;
    }
}
 let a = new Private_Employee(01, "Akash", "BE")
 console.log(a)
