const {Schema , model }=require('mongoose')

const userSchema = new Schema({
    user: String,
    mail: String,
    passWrd: String,
    rol: String,

 },{
     timestamp: true,
     versionKey:false
 })


 module.exports=model('User',userSchema)