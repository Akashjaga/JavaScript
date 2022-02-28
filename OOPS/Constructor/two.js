class student {
    constructor(){
        console.log("displays only once")
    }
    Attendance(){
        console.log("100% Attendance");
    }
}
let a1=new student()
console.log(a1.Attendance())
let a2=new student
console.log(a1.Attendance())