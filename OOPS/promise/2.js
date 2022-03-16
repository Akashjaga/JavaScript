let table = new Promise ((resolve, reject)=>{
let a = true
if(a){
    resolve("good morning")
} else {
    reject ("good night")
}
})

table.then((message)=>{
    console.log(message)
})
.catch((err)=>{
    console.log(err)
})