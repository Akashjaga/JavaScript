const bcrypt = require('bcryptjs')

let user = { cc: "444455556666777", name: "Rahul", email: "rahul@gmail.com", password: "123abc" }


let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt);

console.log(user)
let new_User = { ...user, password: new_Password }
console.log(new_User)