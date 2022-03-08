let user = {
    id : 101,
    Name : "Akash",
    Salary : 32000,
    email:"akashjaga@tcs.com"
}
let b = {
    location:["Bang", "Delhi", "Pune"],
    mob:9845404728
}
let c = {...user,...b}
console.log(c);