const {Schema , model }=require('mongoose')

const productSchema = new Schema({
    codInt: Number,
    codProv: Number,
    descProducto: String,
    rubro: String,
    negocio: String,
    subrubro: String,
    coste: Number,
    unidad: String,
    cantidad_disponible: Number,
    atributos: String,
    ubicación: String,
    almacen: String,
    proveedor: String,
    costoRep: Number,

 },{
     timestamp: true,
     versionKey:false
 })


 module.exports=model('Product',productSchema)