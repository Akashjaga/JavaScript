const bcrypt = require ('bcryptjs')
let user = {name:"Akash", email:'akashjagadish22@gmail.com', pass:'123456'}

let salt=bcrypt.genSaltSync(10);
let new_pass=bcrypt.hashSync(user.email, salt)
let new_email=bcrypt.hashSync(user.pass, salt)
let new_user= {...user, pass:new_pass, email:new_email}

console.log(new_user)

let flag= bcrypt.compareSync('1223456', new_user.pass)
flag?console.log('pass'):console.log('fail')