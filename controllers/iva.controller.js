const Iva = require("../models/Iva");
const bcryptjs = require("bcryptjs");

exports.addIva = async (req, res) => {

  const listatIva = await Iva.find()
  if (listatIva) {
    console.log(listatIva)
    res.status(201).json(listatIva) 
  } else {
    res.status(500).send({error:"Error interno al leer iva"})
  }

  //Agregar Iva

};

exports.getIva = async (req, res) => {
  
  const listatIva = await Iva.find()



  if (listatIva) {
    console.log(listatIva)
    res.status(201).json({listatIva}) 
  } else {
    res.status(500).send({error:"Error interno al leer iva"})
  }
};

exports.getIvaById = async (req, res) => {
    //Modificar Iva


};

exports.updateIvaById = async (req, res) => {

  //Actualizar Iva Especifico


};

exports.deleteIvaById = async (req, res) => {
  

  //Eliminar Iva



};
