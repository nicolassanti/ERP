const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
  unNegocio:String,
  sector:String,
  rubro:String,
  subRubro:String,
  codPLU: Number,
  codProveedor:Number,
  codEAN: Number,
  codMedPpal: Number,
  cantMedPpal: Number,
  codMedSec: Number,
  cantMedSec: Number,
  codTipo: Number,
  descripcion: { type: String, uppercase: true },
  cantStock:Number,
  codNomProveedor:Number,
  codPLUEnvase:Number,
  imgURL:String,
  montoCosto: Number,
  moneda:String,
  tipoCbio:Number,
  margen1:Number,
  margen2:Number,
  margen3:Number,
  porcIVA: Number,
  condIVA: String,
  stockCombo: Number,
  stockMin:Number,
  cantReposicion:Number,
  ftieneEnvase:{type: Boolean,default: false},
  fesEnvase:{type: Boolean,default: false},
  fesCombo:{type: Boolean,default: false},
  fcontPrecio:{type: Boolean,default: false},
  fPrecioEnDolar:{type: Boolean,default: false},
  fbajaLogica:{type: Boolean,default: false},
//  montoII: Number,
//  porcBonif: Number,
//  fechaUltActividad: {type: Date},
// codRecDes: Number,
// tipoImpInt: Number,
// fImpIntFijo:{type: Boolean,default: false},
//codGrupoImp: Number,
//UxB:Number,
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

productSchema.methods.salePrice = function calcSalePrice() {
  this.costoRep = this.proveedor.precio;
  this.precioVenta = (1 + this.rent) * costoRep;
};

module.exports = model("Product", productSchema);
