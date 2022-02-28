class Parent {
    MName="Akash"
    Get_More_Name () {
        console.log("Ash")
    }
}
class Child extends Parent{
    Name="Sonu"
    Get_name () {
        console.log("son")
    }
}
let a= new Child ();
console.log(a)
a.Get_name()
a.Get_More_Name()