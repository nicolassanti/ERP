const {Schema , model }=require('mongoose')

const suplierSchema = new Schema({
    suplierName: {type:String,uppercase:true},
    address: {type:String,uppercase:true},
    acount: {type:String,uppercase:true},
    amount: Number,
    balance: Number,

 },{
     timestamp: true,
     versionKey:false
 })


 module.exports=model('Suplier',suplierSchema)