const bcrypt = require ('bcryptjs')
let user = {name:'Akash', pass:'sonu@12345'}

let salt = bcrypt.genSaltSync(10)
let new_password = bcrypt.hashSync(user.pass, salt)

let new_user = {...user, pass:new_password}
console.log(new_user)

let flag = bcrypt.compareSync('sonu@1235', new_user.pass)
flag?console.log('correct password'): console.log('incorrect password')