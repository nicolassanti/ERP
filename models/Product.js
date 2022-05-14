const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    codInt: Number,
    codProv: Number,
    descProducto: { type: String, uppercase: true },
    rubro: { type: String, uppercase: true },
    negocio: { type: String, uppercase: true },
    subrubro: { type: String, uppercase: true },
    unidad: { type: String, uppercase: true },
    atributos: { type: String, uppercase: true },
    ubicación: { type: String, uppercase: true },
    almacen: { type: String, uppercase: true },
    proveedor: [
      {
        name: { type: String, uppercase: true },
        precio: { type: Number, default: 0 },
      },
    ],
    cantidad_disponible: Number,
    costoRep: Number,
    precioVenta: Number,
    rent: { type: Number, default: 0.3 },
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
