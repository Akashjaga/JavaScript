const bcrypt = require ('bcryptjs')
let user = {name:'Sonu', email:'sonu@gmail.com', password:"Sonu", cc:'123456677899', cc_pin:'2231'}

let salt = bcrypt.genSaltSync(10)
let new_password = bcrypt.hashSync(user.password, salt)
let new_email = bcrypt.hashSync(user.email, salt)
let new_cc = bcrypt.hashSync(user.cc, salt)
let new_cc_pin = bcrypt.hashSync(user.cc_pin, salt)

let new_user = {...user, password:new_password, email:new_email, cc:new_cc, cc_pin:new_cc_pin}
console.log(new_user)

let flag = bcrypt.compareSync('sonu@gmail.com', new_user.email)
flag?console.log('Email is matching'): console.log('email is not matching')
