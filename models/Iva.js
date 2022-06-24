const { Schema, model } = require("mongoose");

const ivaSchema = new Schema(
  {
    //CodigoIVA	PorcIVA	Codigo_FE	CodigoAlt
    codIVA: { type: Number, required: true },
    porcIVA: { type: String, lowercase: true, required: true },
    codFE: { type: String, lowercase: true, required: true },
    codAlt: { type: String, uppercase: true, required: true},
  },
  {
    timestamp: true,
    versionKey: false,
    collection: "iva"
  }
);

module.exports = model("Iva", ivaSchema);
