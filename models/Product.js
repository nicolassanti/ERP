const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
    rubro:String,
    subRubro:String,
    codPLU: Number,
    codMedida: Number,
    codProveedor:Number,
    codTipo: Number,
    codSeccion: Number,
    codScanner: Number,
    codSProveedor:Number,
    descripcion: { type: String, uppercase: true },
    valorMedida:Number,
    codPLUEnvase:Number,
    ftieneEnvase:Boolean,
    fesEnvase:Boolean,
    fesCombo:Boolean,
    fbajaLogica:Boolean,
    foto:String,
    montoCosto: Number,
    montoII: Number,
    porcBonif: Number,
    fechaUltActividad: {type: Date},
    codIVA: Number,
    codRecDes: Number,
    tipoImpInt: Number,
    fImpIntFijo:Boolean,
    stockCantidad: Number,
    stockCombo: Number,
    fcontPrecio:Boolean,
    fPrecioEnDolar:Boolean,
    codGrupoImp: Number,
    stockMin:Number,
    cantReposicion:Number,
    UxB:Number,
    condIVA: Number,
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
