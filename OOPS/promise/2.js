let a = new Promise ((resolve, reject)=>{
    let b = false;
    if(b){
        resolve("working like a pro")
    }else {
        reject("not wornig at all")
    }
})
a.then((err)=>{console.log(err)}).
catch((message)=>{
    console.log(message)
})