const bcrypt = require ('bcryptjs')
let user = {name:'Akash', email:'akashjaga22@gmail.com', password:'qwertyyy'}
 let salt = bcrypt.genSaltSync(10)
 let new_password=bcrypt.hashSync(user.password, salt)

 console.log(user)
 let new_user={...user, password:new_password}
 console.log(new_user)

 let flag = bcrypt.compareSync("qwertyy", new_user.password)
 flag?console.log('Success') : console.log('Failed')