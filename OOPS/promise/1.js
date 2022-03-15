let q = (success, failure)=>{
    let a = false;
    if(a){
    success("okay")
    }
    else {
        failure ("not okay")
    }
}
q((message)=>{
    console.log(message)
},
(err)=>{
    console.error(err)
}
)