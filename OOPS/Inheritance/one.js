class Parent {
    p_Assets = 239999
    getQualities () {
        console.log("Parent class method")
    }
}
class child extends Parent{
    Assets = 455555
    get_more_Assets(){
        console.log("Child class method")
    }
}
let c1 = new child();
console.log(c1.p_Assets)
console.log(c1.Assets)
c1.getQualities()
c1.get_more_Assets()