const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
    unNegocio:String,
    sector:String,
    rubro:String,
    subRubro:String,
    codPLU: Number,
    codMedida: Number,
    codProveedor:Number,
    codTipo: Number,
    codSeccion: Number,
    codEAN: Number,
    codSProveedor:Number,
    descripcion: { type: String, uppercase: true },
    valorMedida:Number,
    codPLUEnvase:Number,
    ftieneEnvase:{type: Boolean,default: false},
    fesEnvase:{type: Boolean,default: false},
    fesCombo:{type: Boolean,default: false},
    fbajaLogica:{type: Boolean,default: false},
    imgURL:String,
    montoCosto: Number,
    moneda:String,
    tipoCbio:String,
    margen1:Number,
    margen2:Number,
    margen3:Number,
          //  montoII: Number,
          //  porcBonif: Number,
          //  fechaUltActividad: {type: Date},
    codIVA: Number,
            // codRecDes: Number,
            // tipoImpInt: Number,
            // fImpIntFijo:{type: Boolean,default: false},
    stockCantidad: Number,
    stockCombo: Number,
    fcontPrecio:{type: Boolean,default: false},
    fPrecioEnDolar:{type: Boolean,default: false},
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
